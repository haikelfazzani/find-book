import { distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResult: Array<any> = [];
  numOfPages: number;
  userSelect : string = 'google';

  constructor(public service: BookSearchService) {
    this.service.userSelectSource.pipe(distinctUntilChanged()).subscribe(userSelect => {
      this.userSelect = userSelect;
      this.service.bookTitleSource.subscribe(userInput => {
        if (userInput.length > 0) {
          if (userSelect === 'google') {
            this.service.getBook(userInput).subscribe((books: any) => {
              this.searchResult = books;
            });

          } else {
            this.service.postTitle(userInput).subscribe((books:any) => {                              
                this.searchResult = books.books;              
            });
          }
        }
      });
    });

  }

  ngOnInit() {

  }

}
