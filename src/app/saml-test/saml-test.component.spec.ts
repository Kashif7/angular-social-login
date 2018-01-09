import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamlTestComponent } from './saml-test.component';

describe('SamlTestComponent', () => {
  let component: SamlTestComponent;
  let fixture: ComponentFixture<SamlTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamlTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamlTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
