import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import brandIcon from "../resources/satellite.svg";

export default class NavLayout extends Component {
  render() {
    return (
      <div className="NavLayout">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavLink
            className="navbar-brand"
            exact
            to="/"
            activeClassName="selected"
          >
            <img
              src={brandIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            SatView
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/map"
                  activeClassName="active"
                >
                  Map
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
