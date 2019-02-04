import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  private recipes: Object = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	this.getRecipes();
  }

   public getRecipes(){
    this.apiService.getRecipes().subscribe(recipes => {

      this.recipes = recipes;
      console.log(recipes);
    });
  }

}
