import React from 'react';
import InputBook from './InputBook';
import ListBox from './ListBox';
import Book from './Book';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{
        id: 1, genre: 'fiction', title: 'lib1', author: 'auth1', progress: 62, currentChapter: 2,
      },
      {
        id: 2, genre: 'fiction', title: 'lib2', author: 'auth1', progress: 62, currentChapter: 2,
      }],
      bookTitle: '123',
      bookAuthor: '235',
    };
  }

    handleSubmit = (e) => {
      const { bookTitle, bookAuthor, books } = this.state;
      e.preventDefault();
      if (bookTitle.trim() && bookAuthor.trim()) {
        this.setState({
          books: [...books, { title: bookTitle, author: bookAuthor }],
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
          bookTitle, bookAuthor, books,
        } = this.state;
        return (
          <div className="container">
            <div className="inner">
              {books.map((book) => (
                <Book
                  key={book.id}
                  genre={book.genre}
                  title={book.title}
                  author={book.author}
                  progress={book.progress}
                  currentChapter={book.currentChapter}
                />
              ))}
              <InputBook
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                bookTitle={bookTitle}
                bookAuthor={bookAuthor}
              />
              <ListBox items={books} />
            </div>
          </div>
        );
      }
}

export default Books;
