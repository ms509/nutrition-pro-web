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
		private dataService: IngredientService
  	) { }

ngOnInit() {
    this.dataService.getIngredients().subscribe(ingredients => {
      this.ingredient = ingredients
      this.dataService.ingredientsData = ingredients
    });
  }

 onSelectedOption(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.ingredient = this.dataService.filteredListOptions();
    else {
      this.ingredient = this.dataService.ingredientsData;
    }

  }

}