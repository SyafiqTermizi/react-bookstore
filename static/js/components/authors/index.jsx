import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import { AuthorList } from './author.jsx';
import { AuthorForm } from './authorForm.jsx';


function AuthorRouter(props) {
  return (
    <HashRouter>
      <br/>
      <div className="row">
        <div className="col-12 form-inline">
          <Link to="/" className="btn">Author List</Link>
          <Link to="/add" className="btn">Create Author</Link>
        </div>
      </div>
      <Route path="/" exact component={ AuthorList } />
      <Route path="/add/" component={ AuthorForm } />
    </HashRouter>
  )
}

ReactDOM.render(<AuthorRouter />, document.getElementById('root'));
