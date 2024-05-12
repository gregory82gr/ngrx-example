import { GoogleBooksService } from "../book-list/books.service";
import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import {map, switchMap} from 'rxjs/operators';
import { BooksApiActions } from "./books.actions";

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksApiActions.retrievedBookList),
      switchMap(() => this.bookService.getBooks().pipe(
        map(books => BooksApiActions.retrievedBookList({books}))
      ))
    )
  );

  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private bookService: GoogleBooksService // we will need this service for API calls
  ) {}
}
