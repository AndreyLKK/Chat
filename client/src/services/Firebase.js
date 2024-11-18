import {
  // getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../plugins/firebase/config";

export const authService = {
  signup: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (err) {
      console.log("Проблема регистрации", err);
    }
  },

  login: async (email, password) => {
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      return userLogin.user;
    } catch (err) {
      console.log("Проблема со входом", err);
    }
  },

  getOut: async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log("Проблема со выходом", err);
    }
  },

  getCurrentUser: () => {
    return auth.currentUser;
  },

  onAuthStateChangedListener: (callback) => {
    return onAuthStateChanged(auth, callback);
  },
};
