import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {

  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule


} from '@angular/material';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {AppRoutingModule} from './app-routing.module';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AddIngredientComponent } from './ingredients/add-ingredient/add-ingredient.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomePageComponent } from './recipes/home-page/home-page.component';
import { SearchBarComponent } from './recipes/search-bar/search-bar.component';
import { DataService } from './data.service';
import { IngredientService } from './ingredient.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    AddRecipeComponent,
    HeaderComponent,
    FooterComponent,
    IngredientsComponent,
    AddIngredientComponent,
    RecipesComponent,
    HomePageComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [DataService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
