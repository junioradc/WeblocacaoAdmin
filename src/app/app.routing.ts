import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/index';

const APP_ROUTES: Routes =[

    {path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

