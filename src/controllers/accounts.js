import { createDocument, liveListen } from "../firebase/firebaseTools";

export const createNewAccount = ({
  firstname,
  lastname,
  middlename,
  email,
  uid,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const payload = {
        firstname,
        middlename,
        lastname,
        email,
        createdAt: new Date(),
      };
      const res = await createDocument("Account", uid, payload);
      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const initiateLiveAccount = (uid, cb) => {
  liveListen("Account", uid, cb);
};
