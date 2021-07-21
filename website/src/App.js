import * as ROUTES from "./constants/routes";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  return (
    <Router>
      <Route path={ROUTES.HOME} exact>
        <HomePage />
      </Route>
    </Router>
  );
}

export default App;
