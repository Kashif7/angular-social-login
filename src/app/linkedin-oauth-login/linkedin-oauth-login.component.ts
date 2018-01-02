import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-oauth-login',
  templateUrl: './linkedin-oauth-login.component.html',
  styleUrls: ['./linkedin-oauth-login.component.css']
})
export class LinkedinOauthLoginComponent implements OnInit {
  authBaseUrl = 'https://www.linkedin.com/oauth/v2/authorization';
  d = new Date();
  n = this.d.getTime();
  authUrl: string;
  responseTypeValue = 'code';
  clientIdValue = '8158gwrh891m4q';
  redirectUriValue = encodeURIComponent('http://localhost:4200/callback');
  stateValue = this.n.toString();
  scopeValue = 'r_basicprofile';

  responseType = `response_type=${this.responseTypeValue}`;
  clientId = `client_id=${this.clientIdValue}`;
  redirectUri = `redirect_uri=${this.redirectUriValue}`;
  state = `state=${this.stateValue}`;
  scope = `scope=${this.scopeValue}`;

  queryString = `${this.responseType}&${this.clientId}&${this.redirectUri}&${this.state}&${this.scope}`;

  constructor() { }

  ngOnInit() {
    this.authUrl = `${this.authBaseUrl}?${this.queryString}`;
    console.log('query string', this.queryString);
    console.log('full url ', this.authUrl);
  }

  authLogin() {
    window.location.href = this.authUrl;
  }

}
