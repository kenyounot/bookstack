import React, { Component } from 'react';
import '../styles/Collection.css';
import UserBook from '../components/UserBook';
import { connect } from 'react-redux';

export class Collection extends Component {

	// taking the books array passed in, mapping over each book and then
	// calling the UserBook component to render to the page.
	renderUserBooks = books => {
		return books.map((book, idx) => {
			return <UserBook handleClick={this.handleBookClick} key={idx} book={book} />;
		});
	};


	// if user clicked on the book image, send to the 
	// book show page. 
	handleBookClick = bookId => {
		this.props.history.push(`/books/${bookId}`);
	};

	render() {
		return (
			<div className='collection'>
				<div className='hero-image'></div>
				<h1>Here is your book collection</h1>
				<div className='book-collection'>
					{this.renderUserBooks(this.props.userBooks)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userBooks: state.bookReducer.books
	};
};

export default connect(mapStateToProps)(Collection);
