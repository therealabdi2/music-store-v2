import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// the actual value you want to access
// apart from the state the context also requires the initial value as well
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // This provider will allow any of its children to access the value inside the useState hook
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe();
  // }, []);
  // we can call the setter and get the value anywhere inside of the component tree that is nested inside of the UserProvider
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
