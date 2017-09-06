import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeCalendarComponent } from './orange-calendar.component';

describe('OrangeCalendarComponent', () => {
  let component: OrangeCalendarComponent;
  let fixture: ComponentFixture<OrangeCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
