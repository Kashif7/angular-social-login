import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCallbackComponent } from './routing-callback.component';

describe('RoutingCallbackComponent', () => {
  let component: RoutingCallbackComponent;
  let fixture: ComponentFixture<RoutingCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
