import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  constructor(private ngZone: NgZone) {
    window['onSignIn'] = (data) => ngZone.run(() => this.onSignIn(data));
  }

  ngOnInit() {
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('Token - id_token');
    console.log(googleUser.getAuthResponse().id_token);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}
