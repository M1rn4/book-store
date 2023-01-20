import React from 'react';
import InputBook from './InputBook';
import ListBox from './ListBox';
import Book from './Book';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      bookTitle: '',
    };
  }

  handleSubmit = (e) => {
    const { bookTitle, book } = this.state;
    e.preventDefault();
    if (bookTitle.trim()) {
      this.setState({
        book: [...book, bookTitle],
        bookTitle: '',
      });
    }
  };

    handleChange = (e) => {
      this.setState({
        bookTitle: e.target.value,
      });
    };

    render() {
      const {
        genre, title, author, bookTitle, book,
      } = this.state;
      return (
        <div className="container">
          <div className="inner">
            <Book genre={genre} title={title} author={author} />
            <InputBook
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              bookTitle={bookTitle}
            />
            <ListBox items={book} />
          </div>
        </div>
      );
    }
}

export default Books;
