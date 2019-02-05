
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Ingredient } from '../../ingredient';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ingredient: Ingredient[]
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(ingredients => {
      this.ingredient = ingredients
      this.dataService.ingredientsData = ingredients
    });
  }

  onSelectedFilter(e) {
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