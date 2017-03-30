import { Component } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.age">
    <input type="text" [(ngModel)]="person.age">
  `,
  styles: []
})
export class TwoWayBindingComponent  {

  person = {
    name : 'Craig',
    age : 27 
  };

}
