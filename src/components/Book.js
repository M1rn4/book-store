/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      genre: props.genre,
      // eslint-disable-next-line react/prop-types
      title: props.title,
      // eslint-disable-next-line react/prop-types
      author: props.author,
      // eslint-disable-next-line react/no-unused-state
      comments: [],
      progress: 0,
      currentChapter: 1,
    };
  }

  handleComment = () => {
    // code to handle adding comments
  }

  handleRemove = () => {
    // code to remove the book
  }

  handleEdit = () => {
    // code to edit the book
  }

  handleLoad = () => {
    // code to load the progress of the book
  }

  render() {
    return (
      <div className="book-container">
        <div>
          <div>
            <p>
              Genre:
              {this.state.genre}
            </p>
            <p>
              Title:
              {this.state.title}
            </p>
            <p>
              Author:
              {this.state.author}
            </p>
          </div>
          <ul>
            <li><a href="#" onClick={this.handleComment}>Comment</a></li>
            <li><a href="#" onClick={this.handleRemove}>Remove</a></li>
            <li>
              <a href="#" onClick={this.handleEdit}>Edit</a>
            </li>
          </ul>
        </div>
        <div className="donut-chart-container">
          <p>
            {this.state.progress}
            %
          </p>
        </div>
        <div>
          <p>
            Current chapter:
            {this.state.currentChapter}
          </p>
          <button onClick={this.handleLoad}>Load Progress</button>
        </div>
      </div>
    );
  }
}

export default Book;
