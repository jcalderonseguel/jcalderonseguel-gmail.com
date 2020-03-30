import React from "react";
import PropTypes from "prop-types";
import MenuAction from "../MenuActions/MenuAction";

class AccountStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Account Information</h2>
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group">
                  <label>Username*</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control required"
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control required valid"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password*</label>
                  <input
                    id="confirm"
                    name="confirm"
                    type="password"
                    className="form-control required "
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-center">
                  <div style={{ margin: 20 }}>
                    <i className="fa fa-sign-in" style={{ fontSize: 180 }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12"></div>
      </div>
    );
  }
}

export default AccountStep;
