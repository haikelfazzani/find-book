import { pluck, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {    

  constructor(private http : HttpClient) { }


  getRepos(name : string) {
    let path = `https://api.github.com/search/repositories?q=${name}&sort=stars&order=desc`;
    return this.http.get(path).pipe(delay(1000), pluck('items'));
  }

  getDate(date : string) { // "pushed_at": "2018-11-04T19:20:24Z",
    return date.substr(0 , 10);
  }

}
