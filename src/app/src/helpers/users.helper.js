import { BehaviorSubject } from 'rxjs';
import request from './request';

export default class usersHelper {
  constructor(){

  }

  static getCurrentUserObserv(){
    return this.usersObserv;
  };

  static logIn(){
    return request.GET('test')
      .then( result => {
        this.getUserObservable().next(result);
      })
      .catch( error => {
        console.error(error);
      })
  }

  static getUserObservable(){
    if(this.usersObserv){
      return this.usersObserv;
    } else {
      return this.createUserObservable();
    }
  }

  static createUserObservable(){
    return this.usersObserv = new BehaviorSubject(null);
  }
};

