import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../actions/updateBook';
import { deleteBook } from '../actions/deleteBook';
import '../styles/BookShow.css';
import BookPage from '../components/BookPage';
import Notes from './Notes';

export class BookShow extends Component {
	handleBlur = (evt, id) => {
		evt.target.removeAttribute('contentEditable');

		let bookId = id;
		let bookInfo = {
			[evt.target.id]: evt.target.textContent
		};

		this.props.updateBook(bookId, bookInfo);
	};

	handleEditClick = evt => {
		if (evt.target.tagName !== 'DIV' && !evt.target.classList.contains('non-editable')) {
			evt.target.contentEditable = true;
			evt.target.focus();
		}
	};

	handleBookDelete = bookId => {
		this.props.deleteBook(bookId).then(() => this.props.history.push('/collection'));
	};

	render() {
		return (
			<div className='book-show'>
				<BookPage
					handleDelete={this.handleBookDelete}
					handleBlur={this.handleBlur}
					handleEditClick={this.handleEditClick}
					book={this.props.book}
				/>
				<div className='note-heading'>
					<h2>Notes</h2>
				</div>

				<Notes />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const bookId = parseInt(ownProps.match.params.bookId, 10);

	return {
		book: state.bookReducer.books.find(book => book.id === bookId) || []
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateBook: (id, bookInfo) => dispatch(updateBook(id, bookInfo)),
		deleteBook: bookId => dispatch(deleteBook(bookId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
