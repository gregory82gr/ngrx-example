import { createReducer, on } from '@ngrx/store';

import {  loadBooksSuccess } from './books.actions';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  /* previous `on` handlers */
  on(loadBooksSuccess, (state, {books}) => books)
);

