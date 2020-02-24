import React from 'react';
import '../styles/BookPage.css';
const BookPage = props => {
	return (
		<div className='book-page'>
			<div className='book-page-image'>
				<img src={props.book.img} alt={props.book.title + ';s Book Cover'} />
			</div>
			<div onBlur={props.handleBlur} onDoubleClick={props.handleEditClick}>
				<h3 id='title'>{props.book.title}</h3>
				<p className='non-editable'>By,</p> <p id='author'>{props.book.author}</p>
				<p id='summary'>{props.book.summary}</p>
				<h4 className='genre non-editable'>Genre</h4>
				<p id='genre'>{props.book.genre}</p>
			</div>
		</div>
	);
};

export default BookPage;
