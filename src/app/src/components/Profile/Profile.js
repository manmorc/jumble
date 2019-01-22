import React, { Component } from 'react';
import usersHelper from "../../helpers/users.helper";

export default class Profile extends Component {
  logIn(){
    usersHelper.logIn().then(result => {
    })
  }

  render() {
    return (
      <div>
        <span>Profile Page </span>
        <span onClick={this.logIn}>Log In</span>
      </div>
    );
  }
}

