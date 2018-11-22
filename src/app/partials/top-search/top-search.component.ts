import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';

@Component({
  selector: 'app-top-search',
  template: `
  <form>

    <div class="col-sm-4" style="margin:0 auto;">
      <input type="search" class="form-control" placeholder="Book title..." required
      (keyup)="getBookTitle($event)">
    </div>

    <div class="col-sm-2" style="margin:5px auto 0;">
      <select class="custom-select my-1 mr-sm-2" (change)="onChange($event)">
        <option value="google">Google</option>
        <option value="itbook">itbook.store</option>
      </select>
    </div>

  </form>
  `
})
export class TopSearchComponent implements OnInit {

  userInput : string = '';
  userSelect : string = '';
  
  constructor(private service : BookSearchService) { }

  ngOnInit() {}

  // get title from user input
  getBookTitle(event) {
    this.userInput = event.target.value;
    if(this.userInput.length > 0 && this.service.validateInput(this.userInput)) {
      this.service.updateBookTitle(this.userInput);
    }
  }

  onChange(event) {
    this.userSelect = event.target.value;
    if(this.userSelect.length > 0 && this.service.validateInput(this.userSelect))
    this.service.updateUserSelect(this.userSelect);
  }

}
