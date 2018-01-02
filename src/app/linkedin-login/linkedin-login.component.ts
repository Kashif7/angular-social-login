import { Component, OnInit, NgZone } from '@angular/core';

declare const IN: any;

@Component({
  selector: 'app-linkedin-login',
  templateUrl: './linkedin-login.component.html',
  styleUrls: ['./linkedin-login.component.css']
})
export class LinkedinLoginComponent implements OnInit {

  constructor(private ngZone: NgZone) {
    window['onLinkedInLoad'] = () => ngZone.run(() => this.onLinkedInLoad());
    // window['displayProfiles'] = (profiles) => ngZone.run(() => this.displayProfiles(profiles));
    // window['displayProfilesErrors'] = (error) => ngZone.run(() => this.displayProfilesErrors(error));

  }

  ngOnInit() {
    const linkedIn = document.createElement('script');
    linkedIn.type = 'text/javascript';
    linkedIn.src = 'http://platform.linkedin.com/in.js';
    linkedIn.innerHTML = '\n' +
      'api_key: 81n4k6z8ejnxwi\n' +
      'authorize: true\n' +
      'onLoad: onLinkedInLoad\n';
    document.head.appendChild(linkedIn);
  }

  // public onLinkedInLoad() {
  //   console.log("dnjnvdjd");
  //   IN.Event.on(IN, "auth", this.onLinkedInProfile);
  // }

  onLinkedInLoad() {
    IN.Event.on(IN, 'auth', this.getProfileData);
}

// Handle the successful return from the API call
onSuccess(data) {
    console.log(data);
}

// Handle an error response from the API call
onError(error) {
    console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
getProfileData() {
    IN.API.Raw('/people/~').result((data) => {
      console.log(data);
    }).error((error) => {
      console.log(error);
    });
}

  authLogin() {
    IN.User.authorize(this.getProfileData);
  }

}
