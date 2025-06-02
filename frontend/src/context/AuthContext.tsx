'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../lib/types';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';



interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error('Error parsing user data', error);
          logout();
        }
      }
    };
    initializeAuth();
  }, []);

const login = async (email: string, password: string) => {
  const response = await fetch(`http://localhost:5001/api/auth/login`, { // This will now correctly proxy
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  
  if (!response.ok) {
    throw new Error('Login failed');
  }
  
  const data = await response.json();
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data));
  setUser(data);
  router.push('/dashboard');
};

const signup = async (email: string, password: string) => {
  const response = await fetch('http://localhost:5001/api/auth/signup', { // This will now correctly proxy
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  
  if (!response.ok) {
    throw new Error('Signup failed');
  }
  
  const data = await response.json();
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data));
  setUser(data);
  router.push('/dashboard');
};

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    deleteCookie('token');
    setUser(null);
    router.push('/login');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};