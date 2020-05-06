import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  
  FacilitiesList as facilitiesView,
  QuestionList as questionsView,
  DoctorsList as doctorsView,
  UsersList as userView,
  HealthTipsList as healthtipsView,
  HealthTipsTypeList as healthtipstypeView,
  NotFound as NotFoundView
} from './views';
import history  from './history'

const Routes = () => {
  
  return (
    <BrowserRouter history={history}>
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={userView}
        exact
        layout={MainLayout}
        path="/user"
      />
      <RouteWithLayout
        component={facilitiesView}
        exact
        layout={MainLayout}
        path="/facilities"
      />
      <RouteWithLayout
        component={questionsView}
        exact
        layout={MainLayout}
        path="/questions"
      />
      <RouteWithLayout
        component={doctorsView}
        exact
        layout={MainLayout}
        path="/doctors"
      />
      <RouteWithLayout
        component={healthtipsView}
        exact
        layout={MainLayout}
        path="/healthtips"
      />
      <RouteWithLayout
        component={healthtipstypeView}
        exact
        layout={MainLayout}
        path="/healthtipstype"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
