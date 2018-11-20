import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { GitSearchService } from 'src/app/services/git-search.service';
import { Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnChanges , OnInit {

  @Input() nameValue;
  searchResult : Array<any> = []; 
  numOfPages : number;

  current : string = 'java';

  constructor(public service : GitSearchService) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    this.current = changes.nameValue.currentValue;   
    if((this.current !== undefined || this.current !== "") && this.service.validateInput(this.current)) {
      this.service.getBook(this.current.trim()).subscribe((data:any) => {
        if(data !== undefined && data.length > 0)
        {        
          this.searchResult = data;
        }
      } , error => console.log('this is error')
      );
    }       
  }

  ngOnInit() 
  {
    
  }

}
