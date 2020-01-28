import React from "react";
import { connect } from "react-redux";

import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      experience: "",
      languages: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {
      username,
      email,
      password,
      confirmPassword,
      experience,
      languages
    } = this.state;

    if (password !== confirmPassword) {
      this.props.setAlert("passwords don't match", "danger");
      return;
    } else {
      this.props.register({ username, email, password, experience, languages });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      experience,
      languages
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <FormInput
            type="text"
            name="experience"
            value={experience}
            onChange={this.handleChange}
            label="Enter your experience level: beginner, middle, senior"
            required
          />
          <FormInput
            type="text"
            name="languages"
            value={languages}
            onChange={this.handleChange}
            label="Enter programming languages you have built projects with separated by a comma."
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(null, { setAlert, register })(SignUp);
