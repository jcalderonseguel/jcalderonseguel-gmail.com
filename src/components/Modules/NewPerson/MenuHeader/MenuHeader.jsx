import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class MenuHeader extends Component {
  render() {
    const { btnAddress, btnProfile, btnSummary, enabledAddress } = this.props;
    console.log("enabledAddress", enabledAddress);
    return (
      <div>
        <div className="container  ">
          <div className="col-lg-12 text-left mt-4 mb-3">
            <div className="steps">
              <Nav class="nav nav-pills nav-fill  ">
                <Nav.Item>
                  <Nav.Link eventKey="1" onClick={btnProfile}>
                    1.Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="2"
                    onClick={btnAddress}
                    disabled={!enabledAddress}
                  >
                    2.Address
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3" onClick={btnSummary}>
                    3.Summary
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuHeader.propTypes = {};

export default MenuHeader;
