import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AccountPage from '../account/AccountPage';
import TravelListPage from '../travel/TravelListPage';
import HomePage from '../home/HomePage';

interface Props {
}

interface State {
}

export default class HomeRouter extends React.Component<Props, State> {
  render() {
    return (
      <div className="full-width has-toolbar">
        <Switch>
          <Route component={HomePage} exact path="/home" />
          <Route component={TravelListPage} exact path="/home/travel" />
          <Route component={AccountPage} exact path="/home/account" />
        </Switch>
      </div>
    );
  }
}
