import React, { Component } from 'react';
import Book from '../components/Book';

export class Books extends Component {
	handleClick = bookInfo => {};

	renderBooks = books => {
		return books.map((book, idx) => {
			return (
				<Book
					handleClick={this.handleClick}
					key={idx}
					book={book.volumeInfo}
					bookId={idx}
				/>
			);
		});
	};

	render() {
		return <div className='books-container'>{this.renderBooks(this.props.books)}</div>;
	}
}

export default Books;
