import React from "react";

class AddressStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { handleChange, firstName, firstNameError } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Address</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label> name *</label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    className="form-control required"
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

export default AddressStep;
