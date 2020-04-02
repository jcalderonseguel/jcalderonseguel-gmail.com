import React from "react";
import FormHelperText from '@material-ui/core/FormHelperText';

class PersonInfoStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      firstNameErrorMessage,
      lastNameErrorMessage,
      emailErrorMessage,
      handleChange,
      firstName,
      lastName,
      email,
      phone,
      phoneErrorMessage
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Person Information</h2>
            <div className="row"></div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>First Name*</label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  className="form-control required"
                  aria-required="true"
                  value={firstName}
                  onChange={handleChange ? handleChange('firstName') : null}
                />
                <FormHelperText id="component-error-text" error>{firstNameErrorMessage}</FormHelperText>
              </div>
              <div className="form-group">
                <label>Last Name*</label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="form-control required valid"
                  aria-required="true"
                  value={lastName}
                  aria-invalid="false"
                  onChange={handleChange ? handleChange('lastName') : null}
                />
                <FormHelperText id="component-error-text" error>{lastNameErrorMessage}</FormHelperText>
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="form-control required valid"
                  aria-required="true"
                  value={email}
                  aria-invalid="false"
                  onChange={handleChange ? handleChange('email') : null}
                />
                <FormHelperText id="component-error-text" error>{emailErrorMessage}</FormHelperText>
              </div>
              <div className="form-group">
                <label>Phone*</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="form-control required valid"
                  aria-required="true"
                  value={phone}
                  aria-invalid="false"
                  onChange={handleChange ? handleChange('phone') : null}
                />
                <FormHelperText id="component-error-text" error>{phoneErrorMessage}</FormHelperText>
              </div>
            </div>
          </div>
        </div>
        <div className="row"> </div>

      </div>
      
    );
  }
}

export default PersonInfoStep;
