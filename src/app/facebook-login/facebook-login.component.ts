import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";


declare const FB:any;

@Component({
    selector: 'app-facebook-login',
    templateUrl: './facebook-login.component.html',
    styleUrls: ['./facebook-login.component.css']
})

export class FacebookLoginComponent implements OnInit {

  isLogin: boolean = false;
  logInUserData: any;

    constructor() {
        FB.init({
            appId      : '150714258874851',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
        FB.login(response => {
            this.statusChangeCallback(response);
        });

        // //FB.getLoginStatus(response => {
        //     this.statusChangeCallback(response);
        // });
    }

    statusChangeCallback(resp) {
      if (resp.status === 'connected') {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
          console.log('Successful login for: ' + response.name);
          this.setLogin(true, response);
          //   document.getElementById('status').innerHTML =
          //     'Thanks for logging in, ' + response.name + '!';
        });
      } else if (resp.status === 'not_authorized') {
        this.setLogin(false, "");
      } else {
        this.setLogin(false, "");
      }
    };

  private setLogin(login: boolean, data: any) {
    this.isLogin = login;
    this.logInUserData = data;
    console.log("isLogin", this.isLogin);
    console.log("logInUserData", this.logInUserData);
  }

    ngOnInit() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }

  faceBookShare() {
    FB.ui({
      method: 'share',
      display: 'popup',
      href: 'https://developers.facebook.com/docs/',
    }, function(response){});
  }

}
