import React from 'react';
import placeholder from '../img/placeholder.jpeg';

const Book = props => {
	const renderBookImgOrPlaceHolder = () => {
		if ('imageLinks' in props.book) {
			return props.book.imageLinks.thumbnail;
		} else {
			return placeholder;
		}
	};

	const renderBooks = () => {
		return (
			<div>
				<img src={renderBookImgOrPlaceHolder()} />
				<h4>{props.book.title}</h4>
			</div>
		);
	};

	return <div className='book'>{renderBooks()}</div>;
};

export default Book;
