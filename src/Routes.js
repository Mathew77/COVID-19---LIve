import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  
  FacilitiesList as facilitiesView,
  QuestionList as questionsView,
  DoctorsList as doctorsView,
  UsersList as userView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
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
        component={userView}
        exact
        layout={MainLayout}
        path="/user"
      />
      
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
