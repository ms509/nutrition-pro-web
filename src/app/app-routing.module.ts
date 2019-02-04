import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomePageComponent } from './recipes/home-page/home-page.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'recipes/add',
    component: AddRecipeComponent
  },
  {
    path: 'recipes/home',
    component: AddRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }