import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})

export class BetterHightlightDirective implements OnInit {

  @Input() defaultColor : string = 'transparent'
  @Input() hightlightColor : string = 'blue'

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(){
    
  }

    // HostBinding allows you to bind to a property of the dom element
  @HostBinding ("style.backgroundColor") backgroundColor : string = this.defaultColor

  @HostListener ('mouseenter') mouseover (eventData: Event) {

      // You can use renderer methods to interact with the DOM
    // this.renderer.setStyle(this.elRef.nativeElement, "color", "blue")

      //with HostBinding you can use this.propertyName to access that property,
      //making it so you don't need to use renderer. 
      //it looks nicer this way and uses less code
    this.backgroundColor = this.hightlightColor
  }

  @HostListener ('mouseleave') mouseleave (eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "color", "green")
    this.backgroundColor = this.defaultColor
  }
}
