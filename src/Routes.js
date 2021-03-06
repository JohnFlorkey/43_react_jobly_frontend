import React from "react";
import { Route, Switch } from "react-router-dom";
import CompanyList from "./CompanyList";
import Home from "./Home";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import CompanyDetail from "./CompanyDetail";
import Logout from "./Logout";

function Routes({ props }) {
  return (
    <Switch>
      <Route path="/profile">
        <ProfileForm />
      </Route>
      <Route path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route path="/companies">
        <CompanyList />
      </Route>
      <Route path="/jobs">
        <JobList />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignupForm />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
