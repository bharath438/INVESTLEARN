import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  level: number;
  xp: number;
  streakDays: number;
  achievements: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // TODO: Verify token with backend
      setUser({
        id: '1',
        email: 'demo@investlearn.com',
        name: 'Demo User',
        level: 3,
        xp: 1250,
        streakDays: 7,
        achievements: ['first-course', 'quiz-master', 'community-contributor']
      });
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // TODO: Implement actual login
      const mockUser: User = {
        id: '1',
        email,
        name: 'Demo User',
        level: 3,
        xp: 1250,
        streakDays: 7,
        achievements: ['first-course', 'quiz-master']
      };
      setUser(mockUser);
      localStorage.setItem('token', 'mock-token');
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: any) => {
    setLoading(true);
    try {
      // TODO: Implement actual registration
      const newUser: User = {
        id: '1',
        email: userData.email,
        name: userData.name,
        level: 1,
        xp: 0,
        streakDays: 0,
        achievements: []
      };
      setUser(newUser);
      localStorage.setItem('token', 'mock-token');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};