import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import NavLayout from "./layouts/NavLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Router>
      <NavLayout />
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
  );
}

export default App;
