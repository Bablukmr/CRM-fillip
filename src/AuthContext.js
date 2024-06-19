import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    // Set cookie to expire in 20 hours
    Cookies.set('authToken', token, { expires: 20 / 24, secure: true, sameSite: 'strict' });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('authToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
