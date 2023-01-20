/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ListBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    });
  };

  render() {
    return (
      <div className="listbox-container">
        <select onChange={this.handleChange} value={this.state.selected}>
          <option value="" disabled>Select a genre</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science fiction</option>
          <option value="economy">Economy</option>
        </select>
      </div>
    );
  }
}

export default ListBox;