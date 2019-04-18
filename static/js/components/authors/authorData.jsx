import React from 'react';

export function AuthorData(props) {
  const elem = props.authors.map(author => (
      <div className="card" key={ author.pk }>
        <div className="card-header-white" id="headingOne">
          <div className="row">
            <div className="col-8">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={ '#author' + author.pk }
              >
                { author.name }
              </button>
            </div>
            <div className="col-4">
              { author.age }
            </div>
          </div>
        </div>

        <div
          id={ 'author' + author.pk }
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              {
                author.books.map(book => (
                  <li key={ book.pk }>{ book.title }</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
  ));

  return (
    <div className="accordion mt-0 mb-0" id="accordionExample">
      <div className="card">
        <div className="card-header-white" id="headingOne">
          <div className="row">
            <div className="col-8">
              <b>Name</b>
            </div>
            <div className="col-4">
              <b>Age</b>
            </div>
          </div>
        </div>
      </div>
      { elem }
    </div>
  )
}
