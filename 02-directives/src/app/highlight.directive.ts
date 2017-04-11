import { Directive, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
	@HostListener('mouseenter') mouseover(){
		this.backgroundColor = this.highlightColor;
	};
	@HostListener('mouseleave') mouseleave(){
		this.backgroundColor = this.defaultColor;
	};
	@HostBinding('style.backgroundColor') get setColor(){
		return this.backgroundColor;
	};
	@HostListener('click', ['$event'])
		onClick(event){
			alert("Event target " + event.target);
		}
	@Input() defaultColor = 'blue';
	@Input('highlight') highlightColor = 'green';
	private backgroundColor : string;
  	//constructor(private elementRef: ElementRef, private renderer : Renderer) {
  		//this.elementRef.nativeElement.style.backgroundColor = 'papayawhip';
  		//this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'grey');

   //}
   ngOnInit(){
   	this.backgroundColor = this.defaultColor;
   }
}
