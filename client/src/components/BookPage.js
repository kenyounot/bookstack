import React from 'react';
import '../styles/BookPage.css';
const BookPage = props => {
	return (
		<div className='book-page'>
			<div className='book-page-image'>
				<img src={props.book.img_url} alt={props.book.title + 's Book Cover'} />
				<button onClick={() => props.handleDelete(props.book.id)}>Delete Book</button>
			</div>
			<div
				onBlur={e => props.handleBlur(e, props.book.id)}
				onDoubleClick={props.handleEditClick}
			>
				<h3 id='title'>{props.book.title}</h3>
				<p className='non-editable'>By,</p> <p id='author'>{props.book.author}</p>
				<p id='summary'>{props.book.summary}</p>
				<h4 className='genre non-editable'>Genre</h4>
				<p id='genre'>{props.book.genre}</p>
				<hr />
			</div>
		</div>
	);
};

export default BookPage;
