import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';
import { UserService } from '../services/index';
import { AuthenticationService } from '../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  auth: AuthenticationService;
  constructor(private userService: UserService, authService: AuthenticationService) {
    this.auth = authService;
  }

  ngOnInit() {
    // get users from secure api end point
    // this.userService.getUsers()
    //     .subscribe(users => {
    //         this.users = users;
    //     });
    debugger;
    this.user = this.auth.user;

  }

}
