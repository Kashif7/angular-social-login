import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';


declare const FB: any;

@Component({
    selector: 'app-facebook-login',
    templateUrl: './facebook-login.component.html',
    styleUrls: ['./facebook-login.component.css']
})

export class FacebookLoginComponent implements OnInit {

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
            FB.api('/me', function(response) {
              console.log('Successful login for: ' + response.name);
            //   document.getElementById('status').innerHTML =
            //     'Thanks for logging in, ' + response.name + '!';
            });
        }else if (resp.status === 'not_authorized') {
            
        }else {
            
        }
    }

    ngOnInit() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }
}