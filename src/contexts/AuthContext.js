import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.utils";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, uid, photoURL, email } = user;
        setUser({ displayName, uid, photoURL, email });
        setIsAuthenticated(true);
      } else {
        setUser(user);
        setIsAuthenticated(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...user, isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
