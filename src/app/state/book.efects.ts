import { GoogleBooksService } from "../book-list/books.service";
import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import {catchError, map, switchMap} from 'rxjs/operators';
import {  loadBooks, loadBooksError, loadBooksSuccess } from "./books.actions";
import { of } from "rxjs";

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      switchMap(() => this.bookService.getBooks().pipe(
        map(books => loadBooksSuccess({books})),
        catchError(() => of(loadBooksError()))
      ))
    )
  );

  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private bookService: GoogleBooksService // we will need this service for API calls
  ) {}
}
