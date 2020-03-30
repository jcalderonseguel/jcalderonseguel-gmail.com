import React, { Component } from "react";
import { connect } from "react-redux";
import { paths } from "../../../config/routes";
import MenuItem from "./menuItem";

import imagePath from "../../../assets/img/profile_small.jpg";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul
            className="nav metismenu"
            id="side-menu"
            ref="menu"
            style={{ zIndex: 2000 }}
          >
            <li className="nav-header">
              <div className="dropdown profile-element">
                <img alt="icon" className="rounded-circle" src={imagePath} />
                {
                  // eslint-disable-next-line
                  <a
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                    href="#"
                  >
                    <span className="block m-t-xs font-bold">
                      David Williams
                    </span>
                    <span className="text-muted text-xs block">
                      Art Director <b className="caret"></b>
                    </span>
                  </a>
                }
                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                  <li>
                    <a className="dropdown-item" href="profile.html">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contacts.html">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="mailbox.html">
                      Mailbox
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="login.html">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo-element">FC+</div>
            </li>
            {/* menu */}

            <MenuItem path={paths.root} icon="home" label="Home" />
            <MenuItem
              path={paths.person}
              icon="person"
              label="Create a Person"
            />
            <MenuItem path={paths.apiCountries} icon="files-o" label="Sample" />
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatch: action => {
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
