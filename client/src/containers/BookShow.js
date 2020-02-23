import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BookShow extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to your book page</h1>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const bookId = parseInt(ownProps.match.params.bookId, 10);

	return {
		book: state.bookReducer.books.find(book => book.id === bookId)
	};
};

export default connect(mapStateToProps)(BookShow);
