import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  shippingMethods: any = [
    {id: 1, name: "Airplane"},
    {id: 2, name: "Boat"},
    {id: 3, name: "Rail"}
  ];
  constructor() { }

  log(firstName: any, contact: any) {
    console.log(firstName, contact);
  }

  submit(f: any) {
    console.log(f);
  }

}
