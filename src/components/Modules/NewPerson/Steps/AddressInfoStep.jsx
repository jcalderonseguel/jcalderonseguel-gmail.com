import React from "react";
import Navigation from "../navigation";
import FormHelperText from '@material-ui/core/FormHelperText';

class AddressInfoStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { city, streetName, streetNameErrorMessage, handleChange} = this.props;
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Address Information</h2>
          <div className="row"></div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Street Name*</label>
              <input
                id="streetname"
                name="streetname"
                type="text"
                className="form-control required"
                aria-required="true"
                value={streetName}
                onChange={handleChange ? handleChange('streetName'): null}
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
