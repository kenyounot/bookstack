import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookPage from '../components/BookPage';

export class BookShow extends Component {
	handleBlur = evt => {
		evt.target.contentEditable = false;

		console.log(evt.target.id);
	};

	handleEditClick = evt => {
		if (evt.target.tagName !== 'DIV' && !evt.target.classList.contains('non-editable')) {
			evt.target.contentEditable = true;
			evt.target.focus();
		}
	};

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

export default connect(mapStateToProps)(BookShow);
