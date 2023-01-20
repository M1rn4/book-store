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
      bookAuthor: '',
    };
  }

  handleSubmit = (e) => {
    const { bookTitle, bookAuthor, book } = this.state;
    e.preventDefault();
    if (bookTitle.trim() && bookAuthor.trim()) {
      this.setState({
        book: [...book, { title: bookTitle, author: bookAuthor }],
        bookAuthor: '',
        bookTitle: '',
      });
    }
  };

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };

    render() {
      const {
        genre, title, author, bookTitle, bookAuthor, book,
      } = this.state;
      return (
        <div className="container">
          <div className="inner">
            {book.map((book, index) => (
              <Book key={index.id} genre={book.genre} title={book.title} author={book.author} />
            ))}
            <Book genre={genre} title={title} author={author} />
            <InputBook
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              bookTitle={bookTitle}
              bookAuthor={bookAuthor}
            />
            <ListBox items={book} />
          </div>
        </div>
      );
    }
}

export default Books;
