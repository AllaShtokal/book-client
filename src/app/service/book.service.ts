import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
    providedIn: 'root'
  })
  export class BookService {
  
    constructor(private httpClient: HttpClient) { }
  
    getBooks(): Observable<Book[]> {
      return this.httpClient.get<Book[]>('http://localhost:8080/api/book');
    }
  
    addBook(book: Book): Observable<Book> {
      return this.httpClient.post<Book>('http://localhost:8080/api/book', book);
    }
  
    deleteBook(book: Book): Observable<Book> {
      return this.httpClient.delete<Book>('http://localhost:8080/api/book/' + book.id);
    }
  
  }