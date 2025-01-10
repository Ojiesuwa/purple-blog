import { createDocument } from "../firebase/firebaseTools";

export const createNewAccount = ({ firstname, lastname, email, uid }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const payload = { firstname, lastname, email, createdAt: new Date() };
      const res = await createDocument("Account", uid, payload);
      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
