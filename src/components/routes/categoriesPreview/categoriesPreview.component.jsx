import { selectCategoriesMap } from "../../../store/categories/category.selector";

import { useTheme } from "../../../contexts/theme.context";
import { HeaderStyled } from "../../header/header.component";

import { useSelector } from "react-redux";

import CategoryPreview from "../../categoryPreview/categoryPreview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
