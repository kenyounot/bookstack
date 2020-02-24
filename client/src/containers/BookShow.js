import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../actions/updateBook';
import BookPage from '../components/BookPage';

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

	handleBookDelete = () => {};

	render() {
		return (
			<div className='book-show'>
				<BookPage
					handleBlur={this.handleBlur}
					handleEditClick={this.handleEditClick}
					book={this.props.book}
				/>
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
		updateBook: (id, bookInfo) => dispatch(updateBook(id, bookInfo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
