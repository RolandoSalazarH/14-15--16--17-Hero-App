import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context";
import { LoginPage } from "../pages/LoginPage";
import { DashboardRoutes } from "./DashboardRoutes";

export const RouterApp = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <div>
        <Switch>
          {user.logged ? (
            <Route path="/" component={DashboardRoutes}></Route>
            ) : (
            <>
              <Route exact path="/login" component={LoginPage}></Route>
              <Redirect to="/login" />
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
};
