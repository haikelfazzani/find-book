import { pluck, distinctUntilChanged, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookSearchService {    

  bookTitleSource = new BehaviorSubject<string>('java');
  bookTitle$ = this.bookTitleSource.asObservable();

  userSelectSource = new BehaviorSubject<string>('google');
  userSelect$ = this.userSelectSource.asObservable();

  regx = new RegExp('^[a-zA-Z0-9-.+# ]*$');
  path : string = '';

  constructor(private http : HttpClient) { } 
  
  // get user input and emited
  updateBookTitle(bookTitle : string) {
    this.bookTitleSource.next(bookTitle);
  }

  // get user select and emited
  updateUserSelect(userSelect : string) {
    this.userSelectSource.next(userSelect);
  }

  getBook(bookTitle : string) {
    this.path = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`;
    return this.http.get(this.path).pipe(distinctUntilChanged() ,pluck('items') , retry(2));
  }

  postTitle(book) {
    return this.http.post('https://books-server-10.herokuapp.com/itbooks' , {book : book})
    .pipe(distinctUntilChanged() , retry(5));
  }

  validateInput(input : string) : boolean {
    if(input.length < 0) return false;
    return this.regx.test(input);
  }

}
 