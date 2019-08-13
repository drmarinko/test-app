import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListDynamicComponent } from './courses-list-dynamic.component';

describe('CoursesListDynamicComponent', () => {
  let component: CoursesListDynamicComponent;
  let fixture: ComponentFixture<CoursesListDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
