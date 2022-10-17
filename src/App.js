import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component.jsx";
import Authentication from "./components/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";

import ThemeSelector from "./components/routes/themeSelector/theme.component.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigation />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="theme"
          element={<ThemeSelector />}
        />
        <Route
          path="shop/*"
          element={<Shop />}
        />
        <Route
          path="/auth"
          element={<Authentication />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Route>
    </Routes>
  );
};

export default App;
