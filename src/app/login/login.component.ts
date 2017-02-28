import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../models/user';

import { AuthenticationService } from '../services/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private user: User = new User();
    loading = false;
    error = '';
     model: any = {};
  constructor( private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
     this.authenticationService.logout();
  }
  login() {
      console.log(this.user);

      if(this.user.username.length ===0 || this.user.password.length ===0 )
      {
          this.error = "Preencha os campos obrigatórios";
          return false;
      }
        this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            },
            error=> {
                this.loading = false;
                alert('Erro ao realizar a autenticacao.')}
            );
    }
}
