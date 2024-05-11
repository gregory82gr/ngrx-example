import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './books.actions';
import { Book } from '../book-list/books.model';

import { loadBooksSuccess } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];


export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);

export const bookReducer = createReducer(
  initialState,
  /* previous `on` handlers */
  on(loadBooksSuccess, (state, {books}) => books)
);
