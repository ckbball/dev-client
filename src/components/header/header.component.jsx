import React from "react";
import { Link } from "react-router-dom";

//import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <span>Home</span>
    </Link>
    <div className="options">
      <Link className="option" to="/search">
        Search
      </Link>
      <Link className="option" to="/profile">
        Profile
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
