import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Post } from '../../post';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  	post: Post[]
  	constructor(
		private dataService: DataService
  	) { }

ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.post = posts
      this.dataService.postsData = posts
    });
  }

  onSelectedFilter(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.post = this.dataService.filteredListOptions();
    else {
      this.post = this.dataService.postsData;
    }

  }

}