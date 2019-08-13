import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {

  @Input('isSelected') isSelected: boolean;
  @Output('changed') onSelectionChanged = new EventEmitter();

  constructor() { }

  onClick() {
    this.isSelected = !this.isSelected;
    this.onSelectionChanged.emit();
  }
}
