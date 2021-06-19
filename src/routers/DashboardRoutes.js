import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Navbar } from "../components/NavBar";
import { DcPage } from "../pages/DcPage";
import { HeroPage } from "../pages/heroes/HeroPage";
import { MarvelPage } from "../pages/MarvelPage";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelPage} />
          <Route exact path="/dc" component={DcPage} />
          <Route exact path="/search" component={DcPage} />
          <Route exact path="/marvel/:heroeId" component={HeroPage} />
          <Route exact path="/hero/:heroeId" component={HeroPage} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
