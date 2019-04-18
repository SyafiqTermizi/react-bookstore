import React from 'react';
import ReactDOM from 'react-dom';

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.getElementById('modal').appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('modal').removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <ModalContent />,
      this.el
    )
  }
}

function ModalContent(props) {
  return (
    <div className="modal fade" id="authorDetailModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="authorDetailModalTitle">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
