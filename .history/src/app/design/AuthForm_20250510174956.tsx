"use client";

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthForm: React.FC = () => {
  const { login, signup, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For signup
  const [isSignup, setIsSignup] = useState(false); // To toggle between Login and Signup
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Temporary function to test Appwrite health endpoint
  const testAppwriteHealth = async () => {
    console.log("Attempting Appwrite health check...");
    setError(null); // Clear previous errors
    setSuccessMessage(null);
    try {
      const response = await fetch('https://fra.cloud.appwrite.io/v1/health/time', {
        method: 'GET',
        headers: {
          'X-Appwrite-Project': '681f635e0018cc00a5cf', // Using the hardcoded project ID for this test
        }
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Appwrite Health Check Success:', data);
        setSuccessMessage(`Appwrite Health OK: Server time ${data.remoteTime}`);
      } else {
        console.error('Appwrite Health Check Non-OK Response:', data);
        setError(`Appwrite Health Non-OK: ${JSON.stringify(data)} (Status: ${response.status})`);
      }
    } catch (err: any) {
      console.error('Appwrite Health Check Fetch Error:', err);
      setError(`Appwrite Health Fetch Error: ${err.message}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    if (isSignup && !name) {
      setError("Name is required for signup.");
      return;
    }

    try {
      if (isSignup) {
        await signup(email, password, name);
        setSuccessMessage("Signup successful! You are now logged in.");
        // Optionally, clear form fields or redirect
        // setEmail(''); setPassword(''); setName('');
      } else {
        await login(email, password);
        setSuccessMessage("Login successful!");
        // Optionally, clear form fields or redirect
        // setEmail(''); setPassword('');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      console.error("AuthForm Error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-900 rounded-lg border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        {isSignup ? 'Create Your Account' : 'Login to Your Account'}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-500 text-white rounded-md text-sm">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 p-3 bg-green-500 text-white rounded-md text-sm">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {isSignup && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required={isSignup}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 disabled:opacity-50"
          >
            {isLoading ? (isSignup ? 'Signing Up...' : 'Logging In...') : (isSignup ? 'Sign Up' : 'Login')}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => {
            setIsSignup(!isSignup);
            setError(null);
            setSuccessMessage(null);
          }}
          className="text-sm text-purple-400 hover:text-purple-300 underline"
        >
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
      </div>

      {/* Temporary Test Button */}
      <div className="mt-4 text-center">
        <button
          type="button" // Important: type="button" so it doesn't submit the form
          onClick={testAppwriteHealth}
          className="text-xs text-gray-500 hover:text-gray-300 underline p-2 bg-gray-700 rounded-md"
        >
          Test Appwrite Connectivity
        </button>
      </div>
    </div>
  );
};

export default AuthForm; 