import ThemeContext from "../../../contexts/theme.context";
import { useContext } from "react";

const ThemeSelector = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className="content-box"
      style={theme}
    >
      <h3>Some stuff</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat
        explicabo rerum consequuntur non ut est. Id eius sit consequatur dolorum
        qui veniam atque obcaecati ratione, corrupti tenetur quia dolores.
      </p>
    </div>
  );
};

export default ThemeSelector;
