import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menus = ["home","Gallary","contact","about"];

  updateMe(menu:string){
    this.menus.splice(this.menus.indexOf(menu),1,menu+"-updated");
  }

}
