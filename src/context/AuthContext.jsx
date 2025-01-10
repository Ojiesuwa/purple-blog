import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../firebase/config";
import { createNewAccount } from "../controllers/accounts";
import { validateSignupDetails } from "../utils/validator";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userCredential, setUserCredential] = useState(null);
  const [accountData, setAccountData] = useState(null);

  const signup = ({ firstname, lastname, middlename, email, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (
          !validateSignupDetails({
            firstname,
            lastname,
            middlename,
            email,
            password,
          })
        ) {
          throw new Error("Incomplete Data");
        }
        const userData = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await createNewAccount({
          firstname,
          lastname,
          email,
          uid: userData.user.uid,
        });

        setUserCredential(userData.user);
        resolve();
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
