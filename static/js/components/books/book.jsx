import React from 'react';

import { BOOK_FILTER_TITLE, BOOK_LIST_CREATE, api as backend } from '../../api';

import { TablePagination } from '../tablePagination.jsx';
import { FilterInput } from '../filterInput.jsx';

import { BookData } from './bookData.jsx';

export class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      next: null,
      prev: null,
      limit: null,
      currentPage: null
    };
  }

  fetchData(url) {
    const api = url ? url : BOOK_LIST_CREATE;
    backend.get(api)
      .then(response => {
        const limit = this.state.limit ? this.state.limit : response.data.next.match(/limit=([^&]*)/)[1];
        const pageCount = Math.ceil(response.data.count / limit);
        const currentPage = response.data.next ?
                          response.data.next.match(/offset=([^&]*)/)[1] / response.data.next.match(/limit=([^&]*)/)[1]:
                          'last page';

        this.setState({
          books: response.data.results,
          next: response.data.next,
          prev: response.data.previous,
          count: response.data.count,
          pageCount,
          currentPage,
          limit
        });
      });
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 mt-5">
          <FilterInput
           filterParam={ BOOK_FILTER_TITLE }
           fetchFunc={ (url) => this.fetchData(url) }
           searchBy="title"
          />
          <BookData books={ this.state.books }/>
          <TablePagination
            next={ this.state.next }
            prev={ this.state.prev }
            pageCount={ this.state.pageCount }
            currentPage={ this.state.currentPage }
            onClick={ (url) => this.fetchData(url) }
          />
        </div>
      </div>
    )
  }
}
