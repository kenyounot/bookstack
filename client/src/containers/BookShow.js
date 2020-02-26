import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../actions/updateBook';
import { deleteBook } from '../actions/deleteBook';
import '../styles/BookShow.css';
import BookPage from '../components/BookPage';
import Notes from './Notes';

export class BookShow extends Component {
	// when focus is changed within the div, grab the element that was focus and
	// also grab the bookid passed in from the component that was focused
	handleBlur = (evt, id) => {
		evt.target.removeAttribute('contentEditable');

		// set values that we want to be passed in to be updated
		let bookId = id;
		let bookInfo = {
			[evt.target.id]: evt.target.textContent
		};

		this.props.updateBook(bookId, bookInfo);
	};
	//on double click of the element set the contentEditable attribute to true
	handleEditClick = evt => {
		// check if the target isnt a div and the element doesn't contain the class 'non editable'
		// so we can set only some elements on the screen to be editable
		if (evt.target.tagName !== 'DIV' && !evt.target.classList.contains('non-editable')) {
			evt.target.contentEditable = true;
			evt.target.focus();
		}
	};

	// function to delete the book by passing in the bookId from the element is was called from
	handleBookDelete = bookId => {
		this.props.deleteBook(bookId).then(() => this.props.history.push('/collection'));
	};

	render() {
		return (
			<div className='book-show'>
				<div className='hero-image'></div>
				<BookPage
					handleDelete={this.handleBookDelete}
					handleBlur={this.handleBlur}
					handleEditClick={this.handleEditClick}
					book={this.props.book}
				/>
				<div className='note-heading'>
					<h2>Notes</h2>
				</div>

				<Notes bookId={this.props.bookId} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	// grab the bookId from the url and convert it to an integer
	const bookId = parseInt(ownProps.match.params.bookId, 10);

	return {
		// find the book from the store, if it doesnt return the book in time or it doesnt exist set
		// to array so the function can iterate
		book: state.bookReducer.books.find(book => book.id === bookId) || [],
		bookId: bookId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateBook: (id, bookInfo) => dispatch(updateBook(id, bookInfo)),
		deleteBook: bookId => dispatch(deleteBook(bookId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
