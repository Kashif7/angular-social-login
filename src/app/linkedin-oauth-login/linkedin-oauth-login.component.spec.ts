import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinOauthLoginComponent } from './linkedin-oauth-login.component';

describe('LinkedinOauthLoginComponent', () => {
  let component: LinkedinOauthLoginComponent;
  let fixture: ComponentFixture<LinkedinOauthLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinOauthLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinOauthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
