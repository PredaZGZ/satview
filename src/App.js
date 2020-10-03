import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Fragment>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/map" activeClassName="selected">
                Map
              </NavLink>
            </li>
          </ul>
        </nav>{" "}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
