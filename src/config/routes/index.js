import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "screens/Home";
import Login from "screens/auth/Login";
import PageNotFound from "components/shared/PageNotFound";
import ProjectPage from "screens/ProjectPage";
import Cast from "components/Cast";
import Dashboard from "components/Dashboard";
import Script from "components/Script";
import Crew from "components/Crew";
import Equipments from "components/Equipments";
import Approvals from "components/Approvals";
import Projects from "components/Projects";

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/project" component={ProjectPage} />
      <Route path="/" component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

const WelcomeRoutes = () => {
  return (
    <Switch>
      <Route path="/welcome" component={Projects} />
      <Route path="/approvals" component={Approvals} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

const ProjectRoutes = () => {
  return (
    <Switch>
      <Route path="/project/overview/:pid" component={Dashboard} />
      <Route path="/project/script" component={Script} />
      <Route path="/project/crew" component={Crew} />
      <Route path="/project/equipments" component={Equipments} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export { MainRoutes, ProjectRoutes, WelcomeRoutes };
