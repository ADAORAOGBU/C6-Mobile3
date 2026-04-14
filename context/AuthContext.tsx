import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  age: number;
  address: string;
}

// 2. Define what the Context will provide
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  saveUser: (userInfo: User) => void;
  clearUser: () => void;
}

// 3. Create the Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. The Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const saveUser = (userInfo: User) => setUser(userInfo);
  const clearUser = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, saveUser, setUser, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// 5. Easy hook to use it
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};