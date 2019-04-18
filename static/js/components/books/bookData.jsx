import React from 'react';

export function BookData(props) {
  const elem = props.books.map(book => (
    <div className="card" key={ book.pk }>
      <div className="card-header-white" id="headingOne">
        <div className="row">
          <div className="col-6">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={ '#book' + book.pk }
            >
              { book.title }
            </button>
          </div>
          <div className="col-3">
            { book.genre }
          </div>
          <div className="col-3">
            { book.author }
          </div>
        </div>
      </div>

      <div
        id={ 'book' + book.pk }
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <p>{ book.synopsis }</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="accordion mt-0 mb-0" id="accordionExample">
      <div className="card">
        <div className="card-header-white" id="headingOne">
          <div className="row">
            <div className="col-6">
              <b>Title</b>
            </div>
            <div className="col-3">
              <b>Genre</b>
            </div>
            <div className="col-3">
              <b>Author</b>
            </div>
          </div>
        </div>
      </div>
      { elem }
    </div>
  )
}
