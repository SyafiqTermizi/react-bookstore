import React from 'react';
import { Redirect } from 'react-router-dom';

import { AUTHOR_LIST_CREATE, api } from '../../api';

export class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        age: '',
        books: []
      },
      redirect: false,
      title: '',
      genre: 1
    };

    this.handleAuthorFormChange = this.handleAuthorFormChange.bind(this);
    this.handleAuthorFormSubmit = this.handleAuthorFormSubmit.bind(this);
    this.handleBookFormChange = this.handleBookFormChange.bind(this);
    this.handleBookFormSubmit = this.handleBookFormSubmit.bind(this);
  }

  handleBookFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleBookFormSubmit(event) {
    event.preventDefault();
    if (this.state.title && this.state.genre) {
      let books = this.state.formData.books;
      const book = { title: this.state.title, genre: this.state.genre }
      books.push(book);
      const formData = { ...this.state.formData };
      formData.books = books;
      this.setState({ formData, title: '', genre: 1 });
    } else {
      return
    }
  }

  handleDeleteBook (title) {
    const books = this.state.formData.books;
    const index = books.indexOf(books.find(book => book.title === title));
    books.splice(index, 1);
    let formData = this.state.formData;
    formData.books = books
    this.setState({ formData });
};


  handleAuthorFormChange(event) {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleAuthorFormSubmit(event) {
    event.preventDefault();
    if (this.state.formData.name && this.state.formData.age) {
      api.post(AUTHOR_LIST_CREATE, this.state.formData)
        .then(response => {
          if (response.status === 201) {
            this.setState({ redirect: true })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // return if name or age is none
      return
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="row">
          <div className="col-12 mt-5">
            <form onSubmit={ this.handleAuthorFormSubmit }>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={ this.handleAuthorFormChange }
                  placeholder="Author Name"
                  value={ this.state.formData.name }
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  onChange={ this.handleAuthorFormChange }
                  placeholder="Author Age"
                  value={ this.state.formData.age }
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr/>
            <small>Add book (optional)</small>
            <div className="row">
              <div className="col-8">
                <form className="mt-2" onSubmit={ this.handleBookFormSubmit }>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="title"
                      onChange={ this.handleBookFormChange }
                      placeholder="Book title"
                      type="text"
                      value={ this.state.title }
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="genre"
                      onChange={ this.handleBookFormChange }
                      value={ this.state.genre }
                    >
                      <option value="1">Fantasy</option>
                      <option value="2">Science Fiction</option>
                      <option value="3">Romance</option>
                      <option value="4">Mystery</option>
                      <option value="5">Dystopia</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Add Book</button>
                </form>
              </div>
              <div className="col-4">
                {
                  this.state.formData.books.map(book => (
                    <div className="card mb-2" key={ book.title }>
                      <div className="card-body">
                        <p><b>Title:</b>{ book.title }</p>
                        <p><b>Genre:</b>{ book.genre }</p>
                        <button
                          className="btn btn-danger"
                          onClick={ () => this.handleDeleteBook(book.title) }>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
