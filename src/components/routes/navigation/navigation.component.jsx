import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cartIcon/cartIcon.component";
import CartDropdown from "../../cartDropdown/cartDropdown.component";

import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../../assets/logo.svg";

import { signOutUser } from "../../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link
          className="logo-container"
          to="/"
        >
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link
            className="nav-link"
            to="/"
          >
            HOME
          </Link>
          <Link
            className="nav-link"
            to="/shop"
          >
            GET MUSIC
          </Link>
          <Link
            className="nav-link"
            to="/theme"
          >
            SELECT THEME
          </Link>
          {currentUser ? (
            <span
              className="nav-link"
              onClick={signOutHandler}
            >
              SIGN OUT
            </span>
          ) : (
            <Link
              className="nav-link"
              to="/auth"
            >
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
