"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DevModeContextType {
  isDevMode: boolean;
  toggleDevMode: (password: string) => boolean;
  exitDevMode: () => void;
}

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

export function DevModeProvider({ children }: { children: ReactNode }) {
  const [isDevMode, setIsDevMode] = useState(false);
  const DEV_PASSWORD = 'MissVoid123';

  const toggleDevMode = (password: string): boolean => {
    if (password === DEV_PASSWORD) {
      setIsDevMode(true);
      return true;
    }
    return false;
  };

  const exitDevMode = () => {
    setIsDevMode(false);
  };

  return (
    <DevModeContext.Provider value={{ isDevMode, toggleDevMode, exitDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  const context = useContext(DevModeContext);
  if (context === undefined) {
    throw new Error('useDevMode must be used within a DevModeProvider');
  }
  return context;
} 