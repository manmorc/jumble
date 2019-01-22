import { BehaviorSubject } from 'rxjs';
import request from './request';

export default class usersHelper {
  usersObserv = new BehaviorSubject(null);

  static getCurrentUserObserv(){
    return this.usersObserv;
  };

 static logIn(){
    // return request.GET('login')
    return request.GET('test')
      .then( result => {
        this.usersObserv.next(result);
      })
      .catch( error => {
        console.error(error);
      })
  }
};

