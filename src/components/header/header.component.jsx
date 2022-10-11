import React from "react";
import styled from "styled-components";
import colorThemes from "../../colorThemes";
import { useTheme, useThemeUpadate } from "../../contexts/theme.context";

const Header = () => {
  const theme = useTheme();
  const setTheme = useThemeUpadate();
  return (
    <HeaderStyled theme={theme}>
      <nav className="navigation">
        <div className="theme">
          <h1>Select Theme</h1>
        </div>
        <ul className="nav-items">
          <li>
            {colorThemes.map((theme, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setTheme(i)}
                  style={{ backgroundColor: theme.background }}
                ></button>
              );
            })}
          </li>
        </ul>
      </nav>

      <div className="bg-overlay"></div>
    </HeaderStyled>
  );
};

export const HeaderStyled = styled.header`
  height: 100%;
  width: 100%;
  padding: 2rem 140px;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.secondary};
  .theme {
    h1 {
      font-size: 2rem;
      font-weight: 800;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items {
      display: flex;
      align-items: center;
      li {
        margin: 0 2rem;
        a {
          color: #718096;
        }
        button {
          outline: none;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          background: none;
          &:not(:last-child) {
            margin-right: 0.8rem;
          }
        }
      }
    }
  }

  .bg-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: red;
    z-index: -1;
    clip-path: polygon(0 0, 50% 0, 85% 100%, 0 100%);
    background: ${(props) => props.theme.background};
  }
`;

export default Header;
