import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in

  // Load user from storage on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (e) {
        console.log('Error loading user:', e);
      }
    };
    loadUser();
  }, []);

  // Save user to storage when login happens
  const login = async (role) => {
    const newUser = { role }; // role = "salesman" | "employee"
    setUser(newUser);
    await AsyncStorage.setItem('user', JSON.stringify(newUser));
  };

  // Clear user on logout
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
