import React, { useEffect, useContext, useState, createContext, useMemo } from 'react';
import { Auth } from 'aws-amplify';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => setUser(null));
  }, []);

  const login = async (email, password) => {
    try {
      const user = await Auth.signIn(email, password);
      setUser(user);
    } catch (e) {
      setError(e);
    }
  };

  const logout = async () => {
    const data = await Auth.signOut();
    setUser(null);
    return data;
  };

  const values = useMemo(() => ({ user, error, login, logout }), [user, error]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error('`useUser` hook must be used within a `UserProvider` component.');

  return context;
};