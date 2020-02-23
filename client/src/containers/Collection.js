import React, { Component } from 'react';
import UserBook from '../components/UserBook';

export class Collection extends Component {
	renderUserBooks = books => {
		return books.map((book, idx) => {
			return <UserBook key={idx} book={book} />;
		});
	};

	render() {
		return <div></div>;
	}
}

export default Collection;
