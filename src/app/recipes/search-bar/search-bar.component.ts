import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IngredientService } from '../../ingredient.service';
import { Ingredient } from '../../ingredient';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    myControl = new FormControl();
    filteredOptions: Observable<string[]>;
    allIngredients: Ingredient[];
    autoCompleteList: any[]

    @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
    @Output() onSelectedOption = new EventEmitter();

    constructor(
        private ingredientService: IngredientService
    ) { }

    ngOnInit() {

        // get all the ingredients
        this.ingredientService.getIngredients().subscribe(ingredients => {
            this.allIngredients = ingredients

        });

        // when user types something in input, the value changes will come through this
        this.myControl.valueChanges.subscribe(userInput => {
            this.autoCompleteExpenseList(userInput);
        })
    }

    private autoCompleteExpenseList(input) {
        let categoryList = this.filterCategoryList(input)
        this.autoCompleteList = categoryList;
    }

    // this is where filtering the data happens according to you typed value
    filterCategoryList(val) {
        var categoryList = []
        if (typeof val != "string") {
            return [];
        }
        if (val === '' || val === null) {
            return [];
        }
        return val ? this.allIngredients.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
            : this.allIngredients;
    }

    // after you clicked an autosuggest option, this function will show the field you want to show in input
    displayFn(ingredient: Ingredient) {
        let k = ingredient ? ingredient.name : ingredient;
        return k;
    }

    filterIngredientList(event) {
        var ingredients = event.source.value;
        if (!ingredients) {
            this.ingredientService.searchOption = []
        }
        else {

            this.ingredientService.searchOption.push(ingredients);
            this.onSelectedOption.emit(this.ingredientService.searchOption)
        }
        this.focusOnPlaceInput();
    }

    removeOption(option) {

        let index = this.ingredientService.searchOption.indexOf(option);
        if (index >= 0)
            this.ingredientService.searchOption.splice(index, 1);
        this.focusOnPlaceInput();

        this.onSelectedOption.emit(this.ingredientService.searchOption)
    }

    // focus the input field and remove any unwanted text.
    focusOnPlaceInput() {
        this.autocompleteInput.nativeElement.focus();
        this.autocompleteInput.nativeElement.value = '';
    }


}