import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getAllUsers()
    .subscribe(x=>this.users=x);
    console.log(this.users);
}
}
