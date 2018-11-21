import { pluck, distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookSearchService {    

  bookTitleSource = new BehaviorSubject<string>('java');
  bookTitle$ = this.bookTitleSource.asObservable();
  regx = new RegExp('^[a-zA-Z0-9 ]*$');

  constructor(private http : HttpClient) { } 
  
  updateBookTitle(bookTitle : string) {
    this.bookTitleSource.next(bookTitle);
  }

  getBook(bookTitle : string) {
    let path = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`;
    return this.http.get(path).pipe(distinctUntilChanged() ,pluck('items'));
  }

  validateInput(input : string) : boolean {
    if(input.length < 0) return false;
    return this.regx.test(input);
  }

}
 