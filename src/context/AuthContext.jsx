import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userCredential, setUserCredential] = useState(null);
  const [accountData, setAccountData] = useState(null);

  const signup = () => {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };

  const login = () => {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };

  const signout = () => {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };
  return (
    <AuthContext.Provider
      value={{ signup, login, signout, accountData, userCredential }}
    >
      {children}
    </AuthContext.Provider>
  );
};
