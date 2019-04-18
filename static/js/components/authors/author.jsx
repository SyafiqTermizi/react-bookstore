import React from 'react';

import { AUTHOR_LIST_CREATE, AUTHOR_FILTER_NAME, api as backend } from '../../api';

import { TablePagination } from '../tablePagination.jsx';
import { FilterInput } from '../filterInput.jsx';
import { AuthorData } from './authorData.jsx';

export class AuthorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      next: null,
      prev: null,
      limit: null,
      currentPage: null
    };
  }

  fetchData(url) {
    const api = url ? url : AUTHOR_LIST_CREATE;
    backend.get(api)
      .then(response => {
        const limit = this.state.limit ? this.state.limit : response.data.next.match(/limit=([^&]*)/)[1];
        const pageCount = Math.ceil(response.data.count / limit);
        const currentPage = response.data.next ?
                          response.data.next.match(/offset=([^&]*)/)[1] / response.data.next.match(/limit=([^&]*)/)[1]:
                          'last page';

        this.setState({
          authors: response.data.results,
          next: response.data.next,
          prev: response.data.previous,
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
           filterParam={ AUTHOR_FILTER_NAME }
           fetchFunc={ (url) => this.fetchData(url) }
           searchBy="name"
          />
          <AuthorData authors={ this.state.authors }/>
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
