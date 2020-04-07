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
      personValid,
      activeStep,
      addressValid,
      summaryValid
    } = this.props;
    console.log("addressValid", addressValid);
    return (
      <div>
        <div className="container">
          <div className="col-lg-12">
            <div className="steps">
              <Nav className="nav nav-pills nav-fill">
                <Nav.Item>
                  <Nav.Link
                    onClick={btnProfile}
                    style={
                      !personValid
                        ? person.personStyle.btnRed
                        : activeStep !== 1
                        ? person.personStyle.btnGreenLight
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
                      activeStep === 2 && enabledAddress && addressValid
                        ? person.personStyle.btnGreen
                        : !addressValid
                        ? person.personStyle.btnRed
                        : activeStep !== 2 && enabledAddress
                        ? person.personStyle.btnGreenLight
                        : person.personStyle.btnDefault
                    }
                  >
                    2.Address
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={btnSummary}
                    disabled={!enabledSummary}
                    style={
                      activeStep === 3 && enabledSummary && summaryValid
                        ? person.personStyle.btnGreen
                        : !summaryValid
                        ? person.personStyle.btnRed
                        : activeStep !== 3 && enabledSummary
                        ? person.personStyle.btnGreenLight
                        : person.personStyle.btnDefault
                    }
                  >
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
