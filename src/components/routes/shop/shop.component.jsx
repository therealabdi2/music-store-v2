import { useContext, Fragment } from "react";

import { useTheme } from "../../../contexts/theme.context";
import { HeaderStyled } from "../../header/header.component";

import ProductCard from "../../productCard/productCard.component";

import { CategoriesContext } from "../../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const theme = useTheme();

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </Fragment>
      ))}
      <HeaderStyled theme={theme}>
        <div className="bg-overlay"></div>
      </HeaderStyled>
    </Fragment>
  );
};

export default Shop;
