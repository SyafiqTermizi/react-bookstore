import axios from 'axios';

export const api = axios.create({
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN'
});

export const AUTHOR_LIST_CREATE = '/api/authors/';
export const AUTHOR_FILTER_NAME = '/api/authors/?name__icontains=';

export const BOOK_LIST_CREATE = '/api/books/';
export const BOOK_FILTER_TITLE = '/api/books/?title__icontains=';
