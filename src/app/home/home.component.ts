import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = []

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
      });
  }


  onDelete(book: Book) {
    this.bookService.deleteBook(book).subscribe(
      () => {
        this.books.splice(this.books.indexOf(book),1);
      }
    )
  }


}
