import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  @Output() updateMeEvent = new EventEmitter();
  @Input() menu: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  updateMe(){
    this.updateMeEvent.emit(this.menu);
  }

}
