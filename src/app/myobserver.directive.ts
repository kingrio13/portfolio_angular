import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyobserver]'
})
export class MyobserverDirective implements OnInit{

  constructor(private elref:ElementRef) { }


  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';

  ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
  }


  @HostListener('mouseenter') mouseover(eventData:Event){
  
    this.backgroundColor= this.highlightColor;
  }


@HostListener('mouseleave') mouseleave(eventData:Event){
  
    this.backgroundColor=this.defaultColor;
  }





}
