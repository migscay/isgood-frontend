import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ProjectProfileScreen from "./containers/ProjectProfileScreen";
import NotFound from "./containers/NotFound";
import Welcome from "./containers/initial-setup-pages/Welcome";
import CreateOrganisation from "./containers/initial-setup-pages/CreateOrganisation";
import CreateProject from "./containers/initial-setup-pages/CreateProject";
import Personalise from "./containers/initial-setup-pages/Personalise";
import Dashboards from './containers/Pages/Dashboards'
import Overview from './containers/Pages/Overview'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/projectprofilescreen">
        <ProjectProfileScreen/>
      </Route>
      <Route exact path="/welcome">
        <Welcome />
      </Route>
      <Route exact path="/createorg">
        <CreateOrganisation />
      </Route>
      <Route exact path="/createproject">
        <CreateProject />
      </Route>
      <Route exact path="/personalise">
        <Personalise />
      </Route>
      <Route exact path="/dashboards">
        <Dashboards />
      </Route>

      {/* The NotFound Route needs to stay in the bottom to work for 404 errors*/}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
