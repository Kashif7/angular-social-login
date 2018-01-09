///<reference path="saml-test/saml-test.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { LinkedinLoginComponent } from './linkedin-login/linkedin-login.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { LinkedinOauthLoginComponent } from './linkedin-oauth-login/linkedin-oauth-login.component';
import { RoutingCallbackComponent } from './routing-callback/routing-callback.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { SamlTestComponent } from './saml-test/saml-test.component';
import { SamlRedirectComponent } from './saml-redirect/saml-redirect.component';
@NgModule({
  declarations: [
    AppComponent,
    FacebookLoginComponent,
    LinkedinLoginComponent,
    GoogleLoginComponent,
    SamlTestComponent,
    LinkedinOauthLoginComponent,
    RoutingCallbackComponent,
    HomeComponent,
    SamlRedirectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

