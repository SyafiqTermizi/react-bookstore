import React from 'react';

export class FilterInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  clearFilter(event) {
    event.preventDefault();
    this.setState({ searchInput: '' });
    this.props.fetchFunc(this.props.filterParam);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.searchInput) {
      this.props.fetchFunc(this.props.filterParam + this.state.searchInput);
    } else {
      this.props.fetchFunc(this.props.filterParam);
    }
  }

  render() {
    return (
      <div className="row mb-5">
        <div className="col-12">
          <form className="form" onSubmit={ this.handleSubmit }>
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={ this.handleChange }
                  placeholder={ "Search by " + this.props.searchBy }
                  value={ this.state.searchInput }
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-primary">Search</button>
                <a className="btn btn-danger ml-3" href="#" onClick={ this.clearFilter }>Clear</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
