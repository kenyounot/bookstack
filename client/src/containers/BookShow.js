import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookPage from '../components/BookPage';

export class BookShow extends Component {
	render() {
		return (
			<div className='book-show'>
				<BookPage book={this.props.book} />
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
