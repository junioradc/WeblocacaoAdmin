import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {User} from '../models/user';

@Injectable()
export class AuthenticationService {
    public token: string;
    public user: User;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let data = new URLSearchParams();
        data.append('userName', username);
        data.append('password', password);
        let body = data.toString()
        return this.http.post('http://localhost/WeblocacaoAdmin/api/Oauth',data)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let user = response.json() && response.json().user;
                if (token) {
                    // set token property
                    this.token = token;
                    this.user = user;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: user.name, token: token }));

                    // return true to indicate successful login
                    console.log(response);
                    return true;
                } else {
                    // return false to indicate failed login
                    console.log(response);
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}