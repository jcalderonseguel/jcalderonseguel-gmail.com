import React, { Component } from "react";
import { connect } from "react-redux";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import "./view.css";

class CreateUser extends Component {
  state = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.name.length < 10) {
      isError = true;
      errors.nameError = "";
    }

    this.setState({ ...this.state, ...errors });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
      this.props.onChange({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  render() {
    return (
      <ValidatorForm ref="form">
        <div>
          <div className="middle-box text-center loginscreen   animated fadeInDown">
            <div>
              <h1 className="logo-name">IN+</h1>
            </div>
            <h3>Register to IN+</h3>
            <p>
              Perfectly designed and precisely prepared admin theme with over 50
              pages with extra new web app views.
            </p>
            <p>Create account to see it in action.</p>
            <div className="form-group">
              <input
                id="Name"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={e => this.change(e)}
                errorText={this.state.nameError}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                type="text"
                onChange={this.handleChange}
                value={this.state.email}
                onChange={e => this.change(e)}
                errorText={this.state.emailError}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={e => this.change(e)}
                errorText={this.state.passwordError}
              />
            </div>
            <div className="form-group">
              <div>
                <input type="checkbox" className="checkStyle" id="check" />
                <label for="check">Agree the terms and policy</label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary block full-width m-b"
            >
              Register
            </button>
            <div>
              <p>Already have an account?</p>
            </div>
            <button href="" className="btn btn-sm btn-white btn-block">
              Login
            </button>
            <div>
              <p>Ejercicio Equipo N5</p>
            </div>
          </div>
        </div>
      </ValidatorForm>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatch: action => {
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
