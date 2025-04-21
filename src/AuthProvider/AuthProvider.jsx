import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // console.log(user);

  const [loading, setLoading] = useState(true);

  // create new user
  const newUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // singIn user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOut = () => {
    return signOut(auth);
  };


   // google Provider
   const googleWithLogin = () =>{
    return signInWithPopup(auth, googleProvider)
  }




  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    newUser,
    loginUser,
    logOut,
    googleWithLogin
  };



  // user logged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);
  

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
