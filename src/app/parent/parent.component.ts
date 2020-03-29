import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // @ViewChild(ChildComponent) child;
  parentmessage = "Parent To child"
  message:string;
  constructor() { }
  receiveMessage($event) {
    this.message = $event
  }
  ngAfterViewInit() {
    
  }
  ngOnInit() {
    // this.message = this.child.message
  }

}