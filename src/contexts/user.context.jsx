// import { createContext, useEffect, useReducer } from "react";

// import { createAction } from "../utils/firebase/reducer/reducer.utill";

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";

// // the actual value you want to access
// // apart from the state the context also requires the initial value as well
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   // based on the type we want to return some object
//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };

//     default:
//       throw new Error(`Invalid action type ${type} in userReducer`);
//   }
//   // anything we want to set in the current user will be stored in the payload
// };

// const Initial_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   // const [state, dispatch] = userReducer(userReducer, Initial_STATE);
//   // const { currentUser } = state;
//   // or do it like this
//   const [{ currentUser }, dispatch] = useReducer(userReducer, Initial_STATE);

//   const setCurrentUser = (user) =>
//     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe();
//   }, []);

//   // we can call the setter and get the value anywhere inside of the component tree that is nested inside of the UserProvider
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
