import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { LinkedinLoginComponent } from './linkedin-login/linkedin-login.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { LinkedinOauthLoginComponent } from './linkedin-oauth-login/linkedin-oauth-login.component';
import { RoutingCallbackComponent } from './routing-callback/routing-callback.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
@NgModule({
  declarations: [
    AppComponent,
    FacebookLoginComponent,
    LinkedinLoginComponent,
    GoogleLoginComponent,
    LinkedinOauthLoginComponent,
    RoutingCallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

