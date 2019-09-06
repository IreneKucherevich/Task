import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from './user-model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  
  configUrl = 'assets/users.json';

  getUsers() : Observable<UserModel[]> {
    return this.http.get('assets/users.json').pipe(map(data=>{
        let usersList = data["userList"];
        return usersList.map(function(user:any) {
            return {userName: user.userName, userSurname: user.userSurname, userBirthDate: user.userBirthDate};
          });
    }));
}
}