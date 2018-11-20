import { Component, OnInit } from '@angular/core';
import { GitSearchService } from 'src/app/services/git-search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResult : Array<any> = []; 

  constructor(public service : GitSearchService) { }

  ngOnInit() {
    //this.searchObs = this.service.getRepos('reactjs');
    this.service.getRepos('express').subscribe((data:any) => {
      this.searchResult = data;
    });
  }

}
