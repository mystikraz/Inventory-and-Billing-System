import { Injectable } from '@angular/core';
import { Users } from '../mock-data/UserDetails';
import { of, observable, Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getAllUsers(): Observable<User[]> {
    return of(Users);
  }
}
