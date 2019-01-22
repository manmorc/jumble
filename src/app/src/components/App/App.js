import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.scss';
import Login from "../Login/Login";
import NoMatch from "../NoMatch/NoMatch";
import Profile from "../Profile/Profile";

import usersHelper from '../../helpers/users.helper';


class App extends Component {
  constructor(props) {
    super(props);
    this.user = usersHelper;

    if(!this.user){
      this.props.history.push(`/target`)
    }

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
