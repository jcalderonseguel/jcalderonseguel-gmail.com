import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MenuAction extends Component {
  render() {
    return (
      <div>
        <div className="menu-actions">
          <ul role="menuActions" arial-label="Pagination">
            <li className="disabled" aria-disabled="true">
              <Link to="#previous">Previous</Link>
            </li>
            <li aria-hidden="false" aria-disabled="true">
              <Link to="#next">Next</Link>
            </li>
            <li aria-hidden="false">
              <Link to="#finish">Finish</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

MenuAction.propTypes = {};

export default MenuAction;
