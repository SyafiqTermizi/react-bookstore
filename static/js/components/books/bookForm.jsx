import React from 'react';

export class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genre: 1,
      author: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evet) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 mt-5">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    onChange={ this.handleChange }
                    placeholder="Book Title"
                    type="text"
                    value={ this.state.title }
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    name="genre"
                    onChange={ this.handleChange }
                    value={ this.state.genre }
                  >
                    <option value="1">Fantasy</option>
                    <option value="2">Science Fiction</option>
                    <option value="3">Romance</option>
                    <option value="4">Mystery</option>
                    <option value="5">Dystopia</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
