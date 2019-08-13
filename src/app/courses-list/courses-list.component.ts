import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: any[] = [
    {name: 'Course 1', id: 1},
    {name: 'Course 2', id: 2},
    {name: 'Course 3', id: 3}
  ];
  constructor() { }

  ngOnInit() {
  }

}
