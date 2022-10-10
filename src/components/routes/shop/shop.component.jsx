import SHOP_DATA from "../../../shop-data.json";

const Shop = () => {
  return (
    <div className="shop">
      {SHOP_DATA.map(({ id, title }) => (
        <div
          className="music-container"
          key={id}
        >
          <h1>{title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
