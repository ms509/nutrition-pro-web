import { Injectable } from '@angular/core';

import { ingredient } from './ingredient';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
      providedIn: 'root'
})
export class IngredientService {
       searchOption=[]
       ingredientUrl : string = "http://localhost:8080/ingredient/get/";
      constructor(private http: HttpClient) { }
      getIngredients(s): Observable<Ingredient[]>{
            return this.http.get<Ingredient[]>(this.ingredientUrl+s);
      }

      filteredListOptions() {
        let filteredIngredientsList = [];
            for (let options of this.searchOption) {
              filteredIngredientsList.push(options);   
            }
        console.log(filteredIngredientsList);
        return filteredIngredientsList;
  }
}
