import { createAction, createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});

export const loadBooks = createAction('[Book List] Load Books');
export const loadBooksSuccess = createAction('[Book List] Load Books Success', props<{books: Book[]}>());
export const loadBooksError = createAction('[Book List] Load Books Error');


