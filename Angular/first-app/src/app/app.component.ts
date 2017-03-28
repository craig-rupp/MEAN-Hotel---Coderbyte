import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<h1>Inline Template</h1>
	<fa-other></fa-other>
  <fa-another>
    <h1>Hello</h1>
    <p>World</p>
  </fa-another>
  <fa-another>
    <p>Arsenal</p>
  </fa-another>
  `,
  styles: [`
		h1 {
			color : red;
		}
  `]
})
export class AppComponent {
  title = 'Gonzaga!';
}
