import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public name="RoHit";
  public message="hello rohit welocme to angular 9";
  public person = {
    "FirstName": "Rohit",
    "LastName": "Kumar"
  }

  public person1 = [
    {"ID":1, "name":"rohit", "Age":24 },
    {"ID":2, "name":"jeet", "Age":25 },
    {"ID":3, "name":"anubhav", "Age":26 },
    {"ID":4, "name":"mandeep", "Age":27 }
  ]
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('heading H1');
  }

}
