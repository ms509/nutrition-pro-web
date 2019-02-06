import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../ingredient.service';
import { Ingredient } from '../../ingredient';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  	ingredient: Ingredient[]
  	constructor(
		private ingredientService: IngredientService
  	) { }

ngOnInit() {
  }

 onSelectedOption(e) {
    this.getFilteredIngredientList();
  }

  getFilteredIngredientList() {
    if (this.ingredientService.searchOption.length > 0)
      this.ingredient = this.ingredientService.filteredListOptions();

  }

}