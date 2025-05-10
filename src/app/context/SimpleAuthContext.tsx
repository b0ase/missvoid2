"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MockUser {
  email: string;
  fullName?: string;
  userId: string; // Keep a consistent structure
  subscriptionTier?: string; // Keep a consistent structure
}

interface SimpleAuthContextType {
  mockUser: MockUser | null;
  isLoading: boolean;
  mockLogin: (email: string, name?: string) => void;
  mockLogout: () => void;
}

const SimpleAuthContext = createContext<SimpleAuthContextType | undefined>(undefined);

export const SimpleAuthProvider = ({ children }: { children: ReactNode }) => {
  const [mockUser, setMockUser] = useState<MockUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for a saved user on initial load
    try {
      const savedUser = localStorage.getItem('mockMissVoidUser');
      if (savedUser) {
        setMockUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error("Error reading mock user from localStorage:", error);
      localStorage.removeItem('mockMissVoidUser'); // Clear corrupted data
    }
    setIsLoading(false);
  }, []);

  const mockLogin = (email: string, name?: string) => {
    const userToSave: MockUser = {
      email,
      fullName: name || 'Mock User',
      userId: 'mock-user-id-' + Date.now(), // Simple unique ID
      subscriptionTier: 'Mock Gold Tier' // Example tier
    };
    localStorage.setItem('mockMissVoidUser', JSON.stringify(userToSave));
    setMockUser(userToSave);
  };

  const mockLogout = () => {
    localStorage.removeItem('mockMissVoidUser');
    setMockUser(null);
  };

  return (
    <SimpleAuthContext.Provider value={{ mockUser, isLoading, mockLogin, mockLogout }}>
      {children}
    </SimpleAuthContext.Provider>
  );
};

export const useSimpleAuth = (): SimpleAuthContextType => {
  const context = useContext(SimpleAuthContext);
  if (context === undefined) {
    throw new Error('useSimpleAuth must be used within a SimpleAuthProvider');
  }
  return context;
}; 