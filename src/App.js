import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
