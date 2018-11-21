import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResult : Array<any> = []; 
  numOfPages : number;

  constructor(public service : BookSearchService) { 
    this.service.bookTitleSource.subscribe(data => {
      if(data.length > 0) {
        this.service.getBook(data).subscribe((data:any) => {
          this.searchResult = data;
        });
      }
    });
  }

  ngOnInit() 
  {
    
  }

}
