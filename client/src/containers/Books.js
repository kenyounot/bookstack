import React, { Component } from 'react';
import Book from '../components/Book';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createBook } from '../actions/createBook';

export class Books extends Component {
	// if user clicks button to create a book from the list of books searched
	// dispatch the book info to the create book action, and then redirect to
	// their book collection.
	handleClick = bookInfo => {
		this.props.createBook(bookInfo).then(this.props.history.push('/collection'));
	};

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

const mapDispatchToProps = dispatch => {
	return {
		createBook: bookInfo => dispatch(createBook(bookInfo))
	};
};

export default withRouter(connect(null, mapDispatchToProps)(Books));
