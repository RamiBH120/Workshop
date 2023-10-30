import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  sponn!:string;

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color='red'
  }

  @HostListener('mouseenter') onMouseEnter(){
    
    this.el.nativeElement.style.color='red'
    this.el.nativeElement.style.background='yellow'
    
  }

  @HostListener('mouseleave') onMouseLeave(){
    
    this.el.nativeElement.style.color='white'
    this.el.nativeElement.style.background='white'
    
  }
}
