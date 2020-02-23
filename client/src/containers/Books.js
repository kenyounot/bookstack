import React, { Component } from 'react';
import Book from '../components/Book';

export class Books extends Component {
	renderBooks = books => {
		return books.map((book, idx) => {
			return <Book key={idx} book={book.volumeInfo} />;
		});
	};

	render() {
		return <div className='books-container'>{this.renderBooks(this.props.books)}</div>;
	}
}

export default Books;
