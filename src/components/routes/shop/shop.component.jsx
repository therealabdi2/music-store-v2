import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categoriesPreview/categoriesPreview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <div className="shop">
      <Routes>
        <Route
          index
          element={<CategoriesPreview />}
        />
        <Route
          path=":category"
          element={<Category />}
        />
      </Routes>
    </div>
  );
};

export default Shop;
