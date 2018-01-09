import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamlRedirectComponent } from './saml-redirect.component';

describe('SamlRedirectComponent', () => {
  let component: SamlRedirectComponent;
  let fixture: ComponentFixture<SamlRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamlRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamlRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
