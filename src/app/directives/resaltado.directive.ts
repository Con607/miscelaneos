import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private elementRef:ElementRef ) {
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appResaltado') nuevoColor:string;

  @HostListener('mouseenter') mouseEncima() {
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave') mouseAfuera() {
    this.resaltar(null);
  }

  private resaltar( color:String = 'yellow' ) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
