import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorHightlight]'
})
export class ColorHightlightDirective {
  constructor(private el:ElementRef) { }

  @HostListener('mouseover') mouseOver(){
    this.highlight('blue');
  }

  @HostListener('mouseleave') mouseLeave(){
    this.highlight(null);
  }

  private highlight(color:any){
    this.el.nativeElement.style.color = color;
  }
}