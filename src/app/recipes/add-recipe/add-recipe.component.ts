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
    this.ingredientService.getIngredients().subscribe(ingredients => {
      this.ingredientService.ingredientsData = ingredients
    });
  }

 onSelectedOption(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.ingredientService.searchOption.length > 0)
      this.ingredient = this.ingredientService.filteredListOptions();
    else {
      this.ingredient = this.ingredientService.ingredientsData;
    }

  }

}