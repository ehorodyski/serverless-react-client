import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import RegisterPage from '../register/RegisterPage';
import NewNotePage from '../notes/new-note/NewNotePage';
import NotesPage from '../notes/NotesPage';
import './Shared.css'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={NotesPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={RegisterPage} />
      <Route path="/notes/new" exact component={NewNotePage} />
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