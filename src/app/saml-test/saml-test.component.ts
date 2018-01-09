///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-saml-test',
  templateUrl: './saml-test.component.html',
  styleUrls: ['./saml-test.component.css']
})
export class SamlTestComponent implements OnInit {

  URL = 'http://localhost/9000/v2/test/saml';


  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get(this.URL).subscribe((response) => {
      console.log('this is the redirect', response);
    }, (error) => {
      console.log('Error respose', error);
    });
  }

}
