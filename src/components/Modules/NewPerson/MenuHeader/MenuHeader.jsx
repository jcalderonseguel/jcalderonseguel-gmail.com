import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class MenuHeader extends Component {
  render() {
    const {
      btnAddress,
      btnProfile,
      btnSummary,
      enabledAddress,
      enabledSummary
    } = this.props;

    return (
      <div>
        <div className="container">
          <div className="col-lg-12">
            <div className="steps">
              <Nav class="nav nav-pills nav-fill">
                <Nav.Item>
                  <Nav.Link onClick={btnProfile}>1.Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={btnAddress} disabled={!enabledAddress}>
                    2.Address
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={btnSummary} disabled={!enabledSummary}>
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
