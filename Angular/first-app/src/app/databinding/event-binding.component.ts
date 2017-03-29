import { Component} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClick()">click me</button>
  `,
  styles: []
})
export class EventBindingComponent  {

  // constructor() { }

  // ngOnInit() {
  // }
    onClick(){
      alert("it worked, my friend!");
    }

}
