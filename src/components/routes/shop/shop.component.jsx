import { useContext } from "react";
import { useTheme } from "../../../contexts/theme.context";

import { ProductsContext } from "../../../contexts/products.context";
import ProductCard from "../../productCard/productCard.component";
import { HeaderStyled } from "../../header/header.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const theme = useTheme();

  return (
    <HeaderStyled theme={theme}>
      <div className="bg-overlay"></div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </HeaderStyled>
  );
};

export default Shop;
