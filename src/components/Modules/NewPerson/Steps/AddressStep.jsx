import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

class AddressStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { handleChange, street, streetError, cities } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Address</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label> Street name *</label>
                  <input
                    id="street"
                    name="street"
                    type="text"
                    className="form-control required"
                    onChange={handleChange ? handleChange("street") : null}
                    value={street}
                  />
                  <FormHelperText id="component-error-text" error>
                    <strong>{streetError}</strong>
                  </FormHelperText>
                </div>

                <div class="dropdown">
                  <Form.Control
                    onChange={handleChange ? handleChange("city") : null}
                    as="select"
                  >
                    {/* {cities.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option> */}
                    ))}
                  </Form.Control>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressStep;
