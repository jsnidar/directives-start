import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


//this directive acts the opposite way as ngIf,
//it is an example of creating a custom structural directive.
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  
  //set an input using the set keyword, that means the component is set when this value changes
  //this must have the same name as the selector or it won't work
  @Input() set appUnless (condition: boolean){

    //you use an if with a conditional statement to set the view to the template
    //if the condition is met
    //otherwise clear the component
    if(!condition) this.vcRef.createEmbeddedView(this.templateRef)
    else this.vcRef.clear()

  }
  //in the contructor you need a TemplateRef and a ViewContainerRef
  //TemplateRef means it will accept a template
  // VCRef means it will apply that template to that view container. 
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
