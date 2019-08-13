import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-nav',
  templateUrl: './simple-nav.component.html',
  styleUrls: ['./simple-nav.component.css']
})
export class SimpleNavComponent implements OnInit {
  viewType: string = 'map';
  constructor() { }

  ngOnInit() {
  }

}
