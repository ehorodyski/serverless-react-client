import React, { useEffect, useContext, useState, createContext, useMemo } from 'react';
import { Auth } from 'aws-amplify';
import AmplifyConfiguration from '../../config';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Auth.configure(AmplifyConfiguration.Auth);
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

  const register = async (email, password) => {
    try {
      const user = await Auth.signUp({
        username: email,
        password: password
      });
      return user;
    } catch (e) {
      setError(e);
    }
  };

  const confirmRegistration = async (email, code) => {
    try {
      await Auth.confirmSignUp(email, code);
    } catch (e) {
      setError(e);
    }
  };

  const values = useMemo(() => ({
    user,
    error,
    confirmRegistration,
    login,
    logout,
    register
  }), [user, error]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error('`useUser` hook must be used within a `UserProvider` component.');

  return context;
};