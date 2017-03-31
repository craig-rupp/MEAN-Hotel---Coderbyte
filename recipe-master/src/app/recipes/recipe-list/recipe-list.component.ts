import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>(); 
  recipe = new Recipe('Gonzaga', 'Final Four Baby', 'http://hollandbarstool.com/media/catalog/category/Gonzaga.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe : Recipe) {
  	this.recipeSelected.emit(recipe);
  }

}
