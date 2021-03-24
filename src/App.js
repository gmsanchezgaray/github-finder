import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import User from "./components/users/User";
import About from "./views/About";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
