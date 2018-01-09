import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RoutingCallbackComponent } from '../routing-callback/routing-callback.component';
import { HomeComponent } from '../home/home.component';
import { SamlTestComponent } from '../saml-test/saml-test.component';
import { SamlRedirectComponent } from '../saml-redirect/saml-redirect.component';

const routes: Routes = [
  {
    path: 'callback',
    component: RoutingCallbackComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  {
    path: 'samlAuth',
    component: SamlTestComponent
  },
  {
    path: 'samlCallback',
    component: SamlRedirectComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
