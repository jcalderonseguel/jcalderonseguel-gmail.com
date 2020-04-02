import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import person from "../../../../Styles/CreatePersons";

class MenuHeader extends Component {
  render() {
    const {
      btnAddress,
      btnProfile,
      btnSummary,
      enabledAddress,
      enabledSummary,
      personValid
    } = this.props;

    return (
      <div>
        <div className="container">
          <div className="col-lg-12">
            <div className="steps">
              <Nav class="nav nav-pills nav-fill">
                <Nav.Item>
                  <Nav.Link
                    onClick={btnProfile}
                    style={
                      !personValid
                        ? person.personStyle.btnRed
                        : person.personStyle.btnGreen
                    }
                  >
                    1.Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={btnAddress}
                    disabled={!enabledAddress}
                    style={
                      !personValid
                        ? { backgroundColor: "#6fd1bd" }
                        : { backgroundColor: "6fd1bd" }
                    }
                  >
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
