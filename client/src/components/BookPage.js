import React from 'react';
import '../styles/BookPage.css';
const BookPage = props => {
	return (
		<div className='book-page'>
			<div className='book-page-image'>
				<img src={props.book.img} alt={props.book.title + ';s Book Cover'} />
			</div>
			<div>
				<h4>{props.book.title}</h4>
				<p>by {props.book.author}</p>
				<p>{props.book.summary}</p>
				<p className='genre'>Genre</p>

				<p>{props.book.genre}</p>
			</div>
		</div>
	);
};

export default BookPage;
