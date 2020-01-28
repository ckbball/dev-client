import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../../actions/auth.js";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.login({ email, password });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit"> Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(SignIn);
