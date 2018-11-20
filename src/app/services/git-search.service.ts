import { pluck, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {    

  constructor(private http : HttpClient) { }

  getBook(name : string) {
    let path = `https://www.googleapis.com/books/v1/volumes?q=${name}`;
    return this.http.get(path).pipe(pluck('items'));
  }

}
