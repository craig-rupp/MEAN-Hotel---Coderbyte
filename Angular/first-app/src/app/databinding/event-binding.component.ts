import { Component, EventEmitter, Output} from '@angular/core';

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
    @Output() clicked = new EventEmitter<string>();
    onClick(){
      this.clicked.emit('It Works!');
    }

}
