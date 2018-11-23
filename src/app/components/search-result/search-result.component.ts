import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchGoogle: Array<any> = [];
  searchItBooks: Array<any> = [];
  numOfPages: number;

  userInput: string = '';
  userSelect: string = 'google';

  constructor(public service: BookSearchService) { }

  ngOnInit() {
    combineLatest(this.service.bookTitle$ ,this.service.userSelect$)
    .subscribe(data => {
        
        this.userSelect = data[1];
        this.userInput = data[0];

        if (this.userSelect === 'google') {
          this.service.getBook(this.userInput).subscribe((books: any) => {
            this.searchGoogle = books;
          });

        } else {
          this.service.postTitle(this.userInput).subscribe((books: any) => {
            this.searchItBooks = books.books;
          });
        }

      });

  }

}
