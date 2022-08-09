import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Output,
  } from '@angular/core';
  
  @Directive({
    selector: '[trackVisibility]',
  })


  export class TrackVisibilityDirective implements OnInit, OnDestroy {
    observer!: IntersectionObserver;
  
  
    constructor(private el: ElementRef<HTMLElement>, private ngZone: NgZone) {}
  


    
    ngOnInit(): void {
      this.ngZone.runOutsideAngular(() => {

        const appearOptions = {
          threshold: 0.25,
          rootMargin: "50px"
        };
        
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((e) => {

             if (!e.isIntersecting) {
              e.target.classList.remove("appear");
              // console.log('wala pa');
              return;
            } else {
              e.target.classList.add("appear");
              // console.log('nagpakita');
            }
          });
        }, appearOptions);


        this.observer.observe(this.el.nativeElement);

        
        
      });
    }



  
    ngOnDestroy(): void {
      this.observer.disconnect();
    }
  }