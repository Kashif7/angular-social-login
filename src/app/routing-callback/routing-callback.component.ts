import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-callback',
  templateUrl: './routing-callback.component.html',
  styleUrls: ['./routing-callback.component.css']
})
export class RoutingCallbackComponent implements OnInit {
  code: string;
  constructor(private activatedRoute: ActivatedRoute, private _http: Http) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params['code'];
      console.log(this.code); // Print the parameter to the console.

      const body = new URLSearchParams();

      body.set('code', this.code);
      body.set('redirect_uri', 'http://localhost:4200/callback');
      body.set('client_id', '8158gwrh891m4q');
      body.set('client_secret', 'tYgzHK3iec7DuEp6');
      body.set('grant_type', 'authorization_code');
      const accessTokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';

      this._http.post(accessTokenUrl, body).subscribe(response => {
        console.log('fkjfie', response);
      }, error => {
        console.error('error', error);
      });
  });
  }

}
