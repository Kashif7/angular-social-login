import {Component, OnInit, NgZone} from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  isGoogleLogin: boolean = false;
  logInUserData: any;

  constructor(private ngZone: NgZone) {
    window['onSignIn'] = (data) => ngZone.run(() => this.onSignIn(data));
  }

  ngOnInit() {
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    this.isGoogleLogin = true;
    this.logInUserData = profile;
    console.log('id_token: ', id_token);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  signOut() {
    let self = this;
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      self.change();
    });
  }

  change() {
    console.log("change",this.isGoogleLogin);
    this.isGoogleLogin = false;
    this.logInUserData = "";
    console.log("change after",this.isGoogleLogin);
  }

}
