import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';

@Component({
  selector: 'app-top-search',
  template: `
  <form>
    <div class="form-group">
      <input type="search" class="form-control-lg" placeholder="book title..." required
      (keyup)="getBookTitle($event)">
    </div>
  </form>
  `,
  styleUrls: ['./top-search.component.scss']
})
export class TopSearchComponent implements OnInit {
  
  constructor(private service : BookSearchService) { }

  ngOnInit() {}

  getBookTitle(event) {
    let userInput = event.target.value;
    if(userInput.length > 0 && this.service.validateInput(userInput)) {
      this.service.updateBookTitle(userInput);
    }
  }

}
