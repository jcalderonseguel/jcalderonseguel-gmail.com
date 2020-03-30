import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuAction extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { nextStep } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div style={{ float: "right", margin: 40 }}>
                {/* <button type="button" className="btn btn-outline-primary">
                  <Link onClick={backStep} to="#previous">
                    Previous
                  </Link>
                </button> */}

                <button type="button" className="btn btn-outline-primary">
                  <Link onClick={nextStep} to="#next">
                    Next
                  </Link>
                </button>

                {/* <button type="button" className="btn btn-outline-primary">
                  <Link onClick={send} to="#finish">
                    Finish
                  </Link>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuAction.propTypes = {};

export default MenuAction;
