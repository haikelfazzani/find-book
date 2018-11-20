import { pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {    

  regx = new RegExp('^[a-zA-Z0-9 ]*$')

  constructor(private http : HttpClient) { }

  getBook(name : string) {
    let path = `https://www.googleapis.com/books/v1/volumes?q=${name}`;
    return this.http.get(path).pipe(pluck('items'));
  }

  validateInput(input : string) : boolean {
    return this.regx.test(input);
  }

}
 