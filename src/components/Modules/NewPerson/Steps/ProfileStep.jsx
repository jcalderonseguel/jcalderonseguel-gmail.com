import React from "react";
import PropTypes from "prop-types";

/*const AccountStep = props => {
  return <div></div>;
};

AccountStep.propTypes = {};

export default AccountStep;*/

class ProfileStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Profile Information</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>First name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control required"
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label>Last name *</label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    className="form-control required"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>email *</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="form-control required email"
                  />
                </div>
                <div className="form-group">
                  <label>Address *</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileStep;
