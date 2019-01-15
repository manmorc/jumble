import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import Login from "../Login/Login";
import NoMatch from "../NoMatch/NoMatch";
import Profile from "../Profile/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Profile} />
          <Route exact path="/login" component={Login} />


          {/*<Route exact path="/" component={Home} />*/}
          {/*<Route path="/about" component={About} />*/}
          {/*<Route path="/topics" component={Topics} />*/}
          <Route component={NoMatch} />
        </div>
      </Router>
    );
  }
}

export default App;
