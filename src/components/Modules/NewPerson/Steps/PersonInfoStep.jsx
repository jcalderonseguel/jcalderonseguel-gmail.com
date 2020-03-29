import React from "react";
import PropTypes from "prop-types";
import Navigation from "../navigation";
import FormHelperText from '@material-ui/core/FormHelperText';

class PersonInfoStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      firstName, 
      lastName,
      firstNameErrorMessage,
      lastNameErrorMessage,
      handleChange
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
            </div>
          </div>
        </div>
        <div className="row"> </div>

      </div>
      
    );
  }
}

export default PersonInfoStep;
