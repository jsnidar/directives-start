import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(){
    
  }

  @HostListener ('mouseenter') mouseover (eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "color", "blue")
  }

  @HostListener ('mouseleave') mouseleave (eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "color", "green")
  }
}
