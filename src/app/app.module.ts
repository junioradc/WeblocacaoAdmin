import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertModule } from 'ng2-bootstrap';
import {routing } from './app.routing';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BaseRequestOptions } from '@angular/http';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService } from './services/index';


import { HomeComponent } from './home/home.component';
import { HeadbarComponent } from './shared/headbar/headbar.component';
import { SubMenuComponent } from './shared/sub-menu/sub-menu.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     SidebarComponent, 
     HomeComponent, HeadbarComponent, SubMenuComponent, LoginPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule, CustomFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ToastModule.forRoot(),
    routing
  ],
  providers: [
      AuthGuard,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        //fakeBackendProvider,
        //MockBackend,
        BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
