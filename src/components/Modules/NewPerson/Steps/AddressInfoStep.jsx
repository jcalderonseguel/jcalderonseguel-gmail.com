import React from "react";
import FormHelperText from '@material-ui/core/FormHelperText';

class AddressInfoStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { 
      streetNameErrorMessage, 
      city, 
      handleChange,
      streetName
    } = this.props;
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Address Information</h2>
          <div className="row"></div>
          <div className="col-lg-12">
            <div className="form-group">
                  <label>City*</label>
                  {/* <input
                    id="email"
                    name="email"
                    type="select"
                    className="form-control required valid"
                    aria-required="true"
                    value={city}
                    aria-invalid="false"
                    // onChange={handleChange ? handleChange('city') : null}
                  /> */}
                  {/* <FormHelperText id="component-error-text" error>{cityErrorMessage}</FormHelperText> */}
                </div>
                <div className="form-group">
                  <label>Street Name*</label>
                  <input
                    id="streetname"
                    name="streetname"
                    type="text"
                    className="form-control required valid"
                    aria-required="true"
                    value={streetName}
                    aria-invalid="false"
                    onChange={handleChange ? handleChange('streetName') : null}
                  />
                  <FormHelperText id="component-error-text" error>{streetNameErrorMessage}</FormHelperText>
                </div>
          </div>
        </div>
      </div>
      <div className="row"> </div>

    </div>
    );
  }
}

export default AddressInfoStep;
