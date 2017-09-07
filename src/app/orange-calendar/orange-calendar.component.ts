import { Component, OnInit } from '@angular/core';
import { Calendar } from "./calendar";
import { CalendarEvent } from "./calendar-event";
@Component({
  selector: 'app-orange-calendar',
  templateUrl: './orange-calendar.component.html',
  styleUrls: ['./orange-calendar.component.css']
})
export class OrangeCalendarComponent implements OnInit {
  new_event: CalendarEvent=new CalendarEvent();
  data = [
    { eventName: 'Lunch Meeting w/ Mark', calendar: 'Work', color: 'orange', date: '2017-06-09' },
    { eventName: 'Interview - Jr. Web Developer', calendar: 'Work', color: 'orange', date: '2017-06-08' },
    { eventName: 'Demo New App to the Board', calendar: 'Work', color: 'orange', date: '2017-12-09' },
    { eventName: 'Dinner w/ Marketing', calendar: 'Work', color: 'orange', date: '2017-28-08' },

    { eventName: 'Game vs Portalnd', calendar: 'Sports', color: 'blue', date: '2017-08-09' },
    { eventName: 'Game vs Houston', calendar: 'Sports', color: 'blue', date: '2017-04-09' },
    { eventName: 'Game vs Denver', calendar: 'Sports', color: 'blue', date: '2017-03-09' },
    { eventName: 'Game vs San Degio', calendar: 'Sports', color: 'blue', date: '2017-23-09' },
    { eventName: 'Practice Game Seattle', calendar: 'Sports', color: 'blue', date: '2017-06-09' },
    { eventName: 'Game vs Houston', calendar: 'Sports', color: 'blue', date: '2017-07-09' },
    

    { eventName: 'School Play', calendar: 'Kids', color: 'yellow', date: '2017-02-08' },
    { eventName: 'Parent/Teacher Conference', calendar: 'Kids', color: 'yellow', date: '2017-02-09' },
    { eventName: 'Pick up from Soccer Practice', calendar: 'Kids', color: 'yellow', date: '2017-02-08' },
    { eventName: 'Ice Cream Night', calendar: 'Kids', color: 'yellow', date: '2017-02-08' },

    { eventName: 'Free Tamale Night', calendar: 'Other', color: 'green', date: '2017-23-10' },
    { eventName: 'Bowling Team', calendar: 'Other', color: 'green', date: '2017-23-10' },
    { eventName: 'Teach Kids to Code', calendar: 'Other', color: 'green', date: '2017-02-09' },
    { eventName: 'Startup Weekend', calendar: 'Other', color: 'green', date: '2017-02-08' }
  ];



  constructor() { }

  ngOnInit() {
      let calendar = new Calendar('#calendar', this.data);
       window.Calendar = window.Calendar || {};

  }

  ngAfterViewInit(){
      var butt=document.getElementById("addEventButton");
       if(butt){
         console.log("Button exists")
         butt.addEventListener("click", function() {
           console.log("HEREEEEE")
         });
       }
  }

  //Create new event (call create event function from services)
  createEvent(){
    console.log("NEW EVENT TITLE: " + this.new_event.type)
  }
  


}
