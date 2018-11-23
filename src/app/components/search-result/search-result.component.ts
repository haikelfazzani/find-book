import { distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchGoogle    : Array<any> = [];
  searchItBooks   : Array<any> = [];
  numOfPages      : number;

  userInput       : string = '';
  userSelect      : string = 'google';

  constructor(public service: BookSearchService) {
    this.service.userSelect$.pipe(distinctUntilChanged()).subscribe(userSelect => {
      this.userSelect = userSelect;
      this.service.bookTitle$.subscribe(userInput => {

        this.userInput = userInput;
        if (userSelect === 'google') {
          this.service.getBook(userInput).subscribe((books: any) => {
            this.searchGoogle = books;
          });

        } else {
          this.service.postTitle(userInput).subscribe((books: any) => {
            this.searchItBooks = books.books;
          });
        }

      });
    });

  }

  ngOnInit() {

  }

}
