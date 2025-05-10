"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { account, databases, ID, APPWRITE_DATABASE_ID, PROFILES_COLLECTION_ID } from '@/app/lib/appwrite';
import { Models } from 'appwrite';

export interface UserProfile extends Models.Document {
  userId: string;
  email: string;
  fullName?: string;
  subscriptionTier?: string;
  // Add any other profile fields you defined in Appwrite collection
}

interface AuthContextType {
  currentUser: Models.User<Models.Preferences> | null;
  userProfile: UserProfile | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  signup: (email: string, pass: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = async (userId: string, email?: string): Promise<UserProfile | null> => {
    try {
      const profile = await databases.getDocument<UserProfile>(
        APPWRITE_DATABASE_ID,
        PROFILES_COLLECTION_ID,
        userId 
      );
      return profile;
    } catch (error: any) {
      if (error.code === 404 && email && userId) { 
        try {
          console.log(`Attempting to create profile for userId: ${userId}, email: ${email}`);
          const newProfileData = {
            userId: userId,
            email: email,
            subscriptionTier: 'Free Tier'
            // fullName will be set/updated during signup if provided
          };
          const newProfile = await databases.createDocument<UserProfile>(
            APPWRITE_DATABASE_ID,
            PROFILES_COLLECTION_ID,
            userId, 
            newProfileData
          );
          console.log('New profile created:', newProfile);
          return newProfile;
        } catch (createError) {
          console.error('Failed to create user profile:', createError);
          return null;
        }
      }
      console.error('Failed to fetch user profile (or it doesn\'t exist yet for non-404 errors):', error);
      return null;
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      try {
        const session = await account.get();
        setCurrentUser(session);
        if (session && session.$id) {
          const profile = await fetchUserProfile(session.$id, session.email);
          setUserProfile(profile);
        }
      } catch (error) {
        setCurrentUser(null);
        setUserProfile(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, []);

  const login = async (email: string, pass: string) => {
    setIsLoading(true);
    try {
      await account.createEmailPasswordSession(email, pass);
      const session = await account.get();
      setCurrentUser(session);
      if (session && session.$id) {
        const profile = await fetchUserProfile(session.$id, session.email);
        setUserProfile(profile);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setCurrentUser(null);
      setUserProfile(null);
      throw error; 
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, pass: string, name?: string) => {
    setIsLoading(true);
    try {
      const newUserAccount = await account.create(ID.unique(), email, pass, name);
      await account.createEmailPasswordSession(email, pass);
      const session = await account.get();
      setCurrentUser(session);
      if (session && session.$id) {
        // Fetch/create profile. fetchUserProfile will create if not exists.
        let profile = await fetchUserProfile(session.$id, session.email);
        // If name was provided and profile exists/was just created, update fullName if not set
        if (profile && name && !profile.fullName) {
            const updatedProfile = await databases.updateDocument<UserProfile>(
                APPWRITE_DATABASE_ID, 
                PROFILES_COLLECTION_ID, 
                session.$id, 
                { fullName: name }
            );
            setUserProfile(updatedProfile);
        } else {
            setUserProfile(profile);
        }
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setCurrentUser(null);
      setUserProfile(null);
      throw error; 
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await account.deleteSession('current');
      setCurrentUser(null);
      setUserProfile(null);
    } catch (error) {
      console.error('Logout failed:', error);
      setCurrentUser(null);
      setUserProfile(null);
      throw error; 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, userProfile, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 