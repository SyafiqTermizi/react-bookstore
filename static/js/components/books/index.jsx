import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import { BookList } from './book.jsx';
import { BookForm } from './bookForm.jsx';

function BookRouter(props) {
  return (
    <HashRouter>
      <br/>
      <div className="row">
        <div className="col-12 form-inline">
          <Link to="/" className="btn">Book List</Link>
          <Link to="/add" className="btn">Create Book</Link>
        </div>
      </div>
      <Route path="/" exact component={ BookList } />
      <Route path="/add/" component={ BookForm } />
    </HashRouter>
  )
}

ReactDOM.render(<BookRouter />, document.getElementById('root'));
