"use client";

import React, { useState } from 'react';
import { useSimpleAuth } from '../context/SimpleAuthContext';

const SimpleAuthForm: React.FC = () => {
  const { mockLogin, isLoading } = useSimpleAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email) {
      setError("Email is required.");
      return;
    }
    // Name is optional for this mock login
    mockLogin(email, name || undefined);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-700">
      <h3 className="text-2xl font-semibold text-white mb-6 text-center">Sign In / Register (Mock)</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email-mock" className="block text-sm font-medium text-gray-300 mb-1">
            Email address
          </label>
          <input
            id="email-mock"
            name="email-mock"
            type="email"
            autoComplete="email"
            required
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="name-mock" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name (Optional)
          </label>
          <input
            id="name-mock"
            name="name-mock"
            type="text"
            autoComplete="name"
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 text-center">{error}</p>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 disabled:opacity-50 transition"
          >
            {isLoading ? 'Processing...' : 'Sign In / Register (Mock)'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleAuthForm; 