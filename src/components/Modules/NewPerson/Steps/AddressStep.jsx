import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import Dropdown from "react-bootstrap/Dropdown";

class AddressStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      handleChange,
      street,
      streetError,
      city,
      cityError,
      btnCity
    } = this.props;
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
                    value={street || null}
                  />
                  <FormHelperText id="component-error-text" error>
                    {streetError}
                  </FormHelperText>
                </div>

                <div class="dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      City
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#/action-1"
                        value={1}
                        onChange={handleChange ? handleChange("city") : null}
                      >
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2" value={2}>
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
