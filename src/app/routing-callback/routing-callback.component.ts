import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-callback',
  templateUrl: './routing-callback.component.html',
  styleUrls: ['./routing-callback.component.css']
})
export class RoutingCallbackComponent implements OnInit {
  code: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params['code'];
      console.log(this.code); // Print the parameter to the console. 
  });
  }

}
