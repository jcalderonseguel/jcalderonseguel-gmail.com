import React from "react";

import FormHelperText from "@material-ui/core/FormHelperText";

class ProfileStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      handleChange,
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      email,
      emailError,
      phone,
      phoneError
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Profile</h2>
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group">
                  <label>Firstname *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control required"
                    aria-required="true"
                    onChange={handleChange ? handleChange("firstName") : null}
                    value={firstName || null}
                  />
                  <FormHelperText id="component-error-text" error>
                    <strong>{firstNameError}</strong>
                  </FormHelperText>
                </div>
                <div className="form-group">
                  <label>Lastname *</label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    className="form-control required valid"
                    aria-required="true"
                    aria-invalid="false"
                    onChange={handleChange ? handleChange("lastName") : null}
                    value={lastName || null}
                  />
                  <FormHelperText id="component-error-text" error>
                    <strong>{lastNameError}</strong>
                  </FormHelperText>
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control required "
                    onChange={handleChange ? handleChange("email") : null}
                    value={email || null}
                  />
                  <FormHelperText id="component-error-text" error>
                    <strong>{emailError}</strong>
                  </FormHelperText>
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="form-control required "
                    onChange={handleChange ? handleChange("phone") : null}
                    value={phone || null}
                  />
                  <FormHelperText id="component-error-text" error>
                    <strong>{phoneError} </strong>
                  </FormHelperText>
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

export default ProfileStep;
