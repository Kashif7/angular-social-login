import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saml-redirect',
  templateUrl: './saml-redirect.component.html',
  styleUrls: ['./saml-redirect.component.css']
})
export class SamlRedirectComponent implements OnInit {
  param: string;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      if (params['SAMLResponse']) {
        this.param = decodeURIComponent(params['SAMLResponse']);
      }
    });
  }

}
