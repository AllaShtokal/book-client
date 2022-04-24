import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from '../service/book.service';
import { Error } from '../model/error';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  errorMessages: Error[] = []

  bookForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    isbn: new FormControl('')
  });

  constructor(private bookService: BookService, private router: Router ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.bookService.addBook(this.bookForm.value)
    .subscribe({
      next: (response )=> this.router.navigate(['']),
      error:(err: HttpErrorResponse) =>  this.errorMessages = err.error
    }

    )
  }

}
