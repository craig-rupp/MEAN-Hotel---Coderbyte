import { Component, OnInit } from '@angular/core';
import { PropertyBindingComponent} from './property-binding.component';
import { EventBindingComponent} from './event-binding.component';




@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  //directives: [PropertyBindingComponent]
})
export class DatabindingComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }
  onTest(){
  	return true;
  }
  stringInterpolation = "This is lit";
  numberInterpolation = 59;

}
