import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    //template: '<button class="btn btn-primary" [style.backgroundColor]="color" (click)="onSave($event)">Click me</button>'
    //template: '<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>'
    //template: '{{email | uppercase}} - {{ releaseDate | date:"dd-MM-yyyy" }}'
    template: '{{longText | summary:10 }}'
})
export class CoursesComponent {
    title: string = "HI";
    courses: string[];
    color: string = "red";
    email: string =  "test";
    releaseDate: Date = new Date(2019, 7, 5);
    longText: string = "asdasd asd1231231iu23h123u123zu123hj12h3j123j123j123k1j23h1j23h1k2j3hk123jh12k3j123aasdsa";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave(event: any) {
        console.log("Clicked!", event);
    }

    onKeyUp() {
        console.log("Enter was pressed", this.email);
    }
}
