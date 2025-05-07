"use client";

import { useState } from 'react';
import { useDevMode } from '../context/DevModeContext';

export default function DevModeToggle() {
  const { isDevMode, toggleDevMode, exitDevMode } = useDevMode();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setPassword('');
    setError('');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = toggleDevMode(password);
    if (success) {
      setIsModalOpen(false);
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };
  
  return (
    <div className="relative">
      <button 
        onClick={isDevMode ? exitDevMode : handleToggleModal}
        className="flex items-center justify-center p-2 rounded-full"
        aria-label={isDevMode ? "Exit Dev Mode" : "Enter Dev Mode"}
        title={isDevMode ? "Exit Dev Mode" : "Dev Mode"}
      >
        {/* Padlock Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`w-5 h-5 ${isDevMode ? "text-red-500" : "text-gray-400"}`}
        >
          {isDevMode ? (
            <>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              <line x1="12" y1="16" x2="12" y2="16.01"></line>
            </>
          ) : (
            <>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </>
          )}
        </svg>
        
        {isDevMode && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        )}
      </button>
      
      {/* Password Modal */}
      {isModalOpen && !isDevMode && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={handleToggleModal}></div>
          <div className="bg-white p-6 rounded-lg shadow-xl z-10 w-full max-w-sm">
            <h3 className="text-xl font-bold mb-4">Enter Dev Mode</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter password"
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleToggleModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Enter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 