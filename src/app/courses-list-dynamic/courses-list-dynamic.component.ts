import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'courses-list-dynamic',
  templateUrl: './courses-list-dynamic.component.html',
  styleUrls: ['./courses-list-dynamic.component.css']
})
export class CoursesListDynamicComponent implements OnInit {

  // form = new FormGroup({
  //   topics: new FormArray([]) 
  // });
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.buildControls();
   }

   buildControls() {
    this.form = this.formBuilder.group({
      topics: this.formBuilder.array([])
    });
   }

  ngOnInit() {
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement){
    console.log(213);
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  } 

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.controls.splice(index, 1);
  }
}
