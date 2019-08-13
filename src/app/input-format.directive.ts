import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFromat]'
})
export class InputFormatDirective {

  @Input('appInputFromat') inputFormat: any;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    //console.log("Focus");
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    
    if (this.inputFormat == 'uppercase') this.el.nativeElement.value = value.toUpperCase();
    else if(this.inputFormat == 'lowercase') this.el.nativeElement.value = value.toLowerCase();
  }
}
