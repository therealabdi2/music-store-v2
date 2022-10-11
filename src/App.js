import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component.jsx";
import Authentication from "./components/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import ThemeSelector from "./components/routes/themeSelector/theme.component.jsx";

const App = () => {
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
          path="/shop"
          element={<Shop />}
        />
        <Route
          path="/auth"
          element={<Authentication />}
        />
      </Route>
    </Routes>
  );
};

export default App;
