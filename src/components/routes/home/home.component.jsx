import Directory from "../../directory/directory.component";
import { HeaderStyled } from "../../header/header.component";
import { useTheme } from "../../../contexts/theme.context";

const Home = () => {
  const theme = useTheme();
  return (
    <HeaderStyled theme={theme}>
      <Directory />;<div className="bg-overlay"></div>
    </HeaderStyled>
  );
};

export default Home;
