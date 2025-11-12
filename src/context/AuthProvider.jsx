import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Sign up
  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Update profile
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  // Sign in
  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign in
  const signInWithGoogleFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Sign out
  const signOutFunc = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Reset Password
  const sendPasswordResetEmailFunc = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc,
    signOutFunc,
    sendPasswordResetEmailFunc,
    loading,
    setLoading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      // console.log(currUser);
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
