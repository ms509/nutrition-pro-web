import { Injectable } from '@angular/core';

import { ingredient } from './ingredient';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
      providedIn: 'root'
})
export class IngredientService {
       searchOption=[]
       public ingredientsData: Ingredient[] 
       ingredientUrl : string = "http://localhost:8080/ingredient/get/ss";
      constructor(private http: HttpClient) { }
      getIngredients(): Observable<Ingredient[]>{
            return this.http.get<Ingredient[]>(this.ingredientUrl);
      }

      filteredListOptions() {
    let ingredients = this.ingredientsData;
        let filteredIngredientsList = [];
        for (let ingredient of ingredients) {
            for (let options of this.searchOption) {
                if (options.name === ingredient.name) {
                  filteredIngredientsList.push(ingredient);
                }
            }
        }
        console.log(filteredIngredientsList);
        return filteredIngredientsList;
  }
}
