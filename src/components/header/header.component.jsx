import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

//import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="options">
      <Link className="option" to="/search">
        SEARCH
      </Link>
      <Link className="option" to="/dashboard">
        PROFILE
      </Link>
      <Link className="option" to="/myteams">
        TEAMS
      </Link>
      <Link className="option" to="/signin" onClick={logout}>
        LOGOUT
      </Link>
    </div>
  );

  const guestLinks = (
    <div className="options">
      <Link className="option" to="/search">
        SEARCH
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  );

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <span>Home</span>
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
