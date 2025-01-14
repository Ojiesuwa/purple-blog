import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { createNewAccount, initiateLiveAccount } from "../controllers/accounts";
import { validateSignupDetails } from "../utils/validator";
import { toast } from "react-toastify";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userCredential, setUserCredential] = useState(undefined);
  const [accountData, setAccountData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserCredential(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (userCredential) {
      initiateLiveAccount(userCredential.uid, (data) => {
        setAccountData(data);
      });
    } else {
      setAccountData(null);
    }
  }, [userCredential]);

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

  const login = ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const userData = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUserCredential(userData.user);

        resolve();
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };

  const signout = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await signOut(auth);
        toast("You have been logged out");
        resolve();
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
