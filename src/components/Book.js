import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    const {
      genre, title, author, progress, currentChapter,
    } = this.props;
    return (
      <div className="book-container">
        <div>
          <div>
            <p>
              Genre:
              {genre}
            </p>
            <p>
              Title:
              {title}
            </p>
            <p>
              Author:
              {author}
            </p>
          </div>
          <ul>
            <li><Link to="/#">Comment</Link></li>
            <li><Link to="/#">Remove</Link></li>
            <li><Link to="/#">Edit</Link></li>
          </ul>
        </div>
        <div className="donut-chart-container">
          <p>
            progress:
            {progress}
            %
          </p>
        </div>
        <div>
          <p>
            Current chapter:
            {currentChapter}
          </p>
          <button onClick={this.handleLoad} type="button">Load Progress</button>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
};

export default Book;
