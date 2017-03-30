import { Component } from '@angular/core';

import {LifecycleComponent} from './lifecycle.component'

@Component({
  selector: 'app-root',
  template: `
	<h1>Inline Template</h1>
  <fa-databinding></fa-databinding> 
  `
})
export class AppComponent {
  title = 'Gonzaga Bulldogs!';
}
