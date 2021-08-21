import React from "react";
import { Route, Switch } from "react-router-dom";
import CompanyList from "./CompanyList";
import Home from "./Home";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import CompanyDetail from "./CompanyDetail";

function Routes() {
  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route path="/companies">
        <CompanyList />
      </Route>
      <Route path="/jobs">
        <Jobs />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
