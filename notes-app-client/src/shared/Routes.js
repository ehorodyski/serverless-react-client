import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../home/HomePage';
import LoginPage from '../login/LoginPage';
import './Shared.css'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Routes;

export const NotFound = () => {
  return (
    <div className="NotFound">
      <h3>Sorry, page not found.</h3>
    </div>
  );
};