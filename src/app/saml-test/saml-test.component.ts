///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saml-test',
  templateUrl: './saml-test.component.html',
  styleUrls: ['./saml-test.component.css']
})
export class SamlTestComponent implements OnInit, AfterViewInit {

  URL = 'http://localhost/9000/v2/test/saml';
  SAMLRequest: string;
  RelayState: string;
  identityProviderUrl: string;


  constructor(private _http: Http, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      if (params['SAMLRequest']) {
        this.SAMLRequest = decodeURIComponent(params['SAMLRequest']);
      } else if (params['RelayState']) {
        this.RelayState = decodeURIComponent(params['RelayState']);
      } else if (params['identityProviderUrl']) {
        this.identityProviderUrl = decodeURIComponent(params['identityProviderUrl']);
      }
    });
  }

  ngAfterViewInit() {
    this.post();
  }

  post() {
    this._http.post(this.identityProviderUrl, {
      'SAMLRequest': this.SAMLRequest,
      'RelayState': this.RelayState
    }).subscribe((response) => {
      console.log(response);
    });
  }
}
