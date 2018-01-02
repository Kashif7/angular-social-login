import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RoutingCallbackComponent } from '../routing-callback/routing-callback.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: 'callback',
    component: RoutingCallbackComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path : '', redirectTo : 'home', pathMatch : 'full'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
