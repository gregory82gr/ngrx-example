import { Action, createAction, createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

// export const BooksActions = createActionGroup({
//   source: 'Books',
//   events: {
//     'Add Book': props<{ bookId: string }>(),
//     'Remove Book': props<{ bookId: string }>(),
//   },
// });

// export const BooksApiActions = createActionGroup({
//   source: 'Books API',
//   events: {
//     'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
//   },
// });


export const loadBooks = createAction('[Book List] Load Books');
export const loadBooksSuccess = createAction('[Book List] Load Books Success', props<{books: Book[]}>());
export const loadBooksError = createAction('[Book List] Load Books Error');

export const addBook = createAction(
  '[Book Add] Add Book',
  props<{bookId: string }>()
);
export const removeBook = createAction(
  '[Book Remove] Remove Book',
   props<{ bookId: string }>()
);

// export class AddBook implements Action {
//   readonly type = BookActionTypes.AddBook
//   constructor(public payload: { bookId: string }) {}
// }

// export class RemoveBook implements Action {
//   readonly type = BookActionTypes.RemoveBook
//   constructor(public payload: { bookId: string }) {}
// }
// export enum BookActionTypes {
//   AddBook = '[Books] Add Book',
//   RemoveBook = '[Book Remove] Remove Book',
// }

// export type BookActionsUnion = AddBook | RemoveBook
