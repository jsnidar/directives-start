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
    //to set the component to this value when it loads
    this.backgroundColor = this.defaultColor
  }

    // HostBinding allows you to bind to a property of the dom element
    //if you set the value to defaultColor it won't apply it on load. 
    //you have to add it to ngOnInit to load the component with that value
  @HostBinding ("style.backgroundColor") backgroundColor : string

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
