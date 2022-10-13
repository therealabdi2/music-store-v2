import { useContext } from "react";

import { useTheme } from "../../../contexts/theme.context";
import { HeaderStyled } from "../../header/header.component";

import CategoryPreview from "../../categoryPreview/categoryPreview.component";

import { CategoriesContext } from "../../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const theme = useTheme();

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          />
        );
      })}
      <HeaderStyled theme={theme}>
        <div className="bg-overlay"></div>
      </HeaderStyled>
    </>
  );
};

export default CategoriesPreview;
