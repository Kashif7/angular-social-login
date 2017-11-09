import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinLiginComponent } from './linkedin-ligin.component';

describe('LinkedinLiginComponent', () => {
  let component: LinkedinLiginComponent;
  let fixture: ComponentFixture<LinkedinLiginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinLiginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinLiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
