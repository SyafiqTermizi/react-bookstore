import React from 'react';

export function TablePagination(props) {
  return (
    <div className="row mt-3 mb-5">
      <div className="col-4">
        <a className={ "btn btn-primary " + (props.prev ? "":"disabled") }
           href="#"
           onClick={ () => props.onClick(props.prev) }
        >
          Prev
        </a>
      </div>
      <div className="col-4 text-center">
        Showing { props.currentPage } out of { props.pageCount } page
      </div>
      <div className="col-4 text-right">
        <a className={ "btn btn-primary " + (props.next ? "":"disabled") }
            href="#" onClick={ () => props.onClick(props.next) }
        >
          Next
        </a>
      </div>
    </div>
  )
}
