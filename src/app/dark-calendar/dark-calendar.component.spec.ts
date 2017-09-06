import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkCalendarComponent } from './dark-calendar.component';

describe('DarkCalendarComponent', () => {
  let component: DarkCalendarComponent;
  let fixture: ComponentFixture<DarkCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
