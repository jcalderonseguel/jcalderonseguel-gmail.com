import React from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
class AddressInfoStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {id: 0, name: "-"},
        {id: 1, name: "Concepción"},
        {id: 2, name: "Santiago"},
        {id: 3, name: "Valparaíso"},


      ]
        

    
    };
  }
  render() {
    const { 
      streetNameErrorMessage, 
      city, 
      handleChange,
      streetName,
      handleSelect,
      cityErrorMessage
    } = this.props;
    const {cities} = this.state;
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Address Information</h2>
          <div className="row"></div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>City*</label>
                <FormHelperText id="component-error-text" error>{cityErrorMessage}</FormHelperText>
                <Form.Control onChange={handleChange ? handleChange('city') : null} as="select">
                  {cities.map(item => 
                  <option
                    key={item.id}
                    value={item.id}
                    >
                      {item.name}
                  </option>
                  ) }
                </Form.Control>
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