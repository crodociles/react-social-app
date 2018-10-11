import React from "react";
import { Router, Route } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import CreatePage from "../components/CreatePage";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/create" component={CreatePage} />
    </div>
  </Router>
);

export default AppRouter;
