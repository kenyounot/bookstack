import React from 'react';
import '../styles/Book.css';
import placeholder from '../img/placeholder.jpeg';

const Book = props => {

	// these following function check if the book object contains
	// their respective book attribute, if they dont then just
	// pass in generic placeholders
	const getBookImgOrPlaceHolder = () => {
		if ('imageLinks' in props.book) {
			return props.book.imageLinks.thumbnail;
		} else {
			return placeholder;
		}
	};

	const getImgAltText = () => {
		return `book cover of ${props.book.title}`;
	};

	const getBookAuthorOrPlaceholder = () => {
		if ('authors' in props.book) {
			return props.book.authors[0];
		} else {
			return 'No Author Listed';
		}
	};

	const getBookGenreOrPlaceholder = () => {
		if ('categories' in props.book) {
			return props.book.categories[0];
		} else {
			return 'No Genre Listed';
		}
	};

	const getBookSummaryOrPlaceHolder = () => {
		if ('description' in props.book) {
			return props.book.description;
		} else {
			return 'No summary available for this title.';
		}
	};

	// function to grab the books information if it exists
	// or pass in placeholders
	const getBookInfo = () => {
		return {
			title: props.book.title,
			summary: getBookSummaryOrPlaceHolder(),
			author: getBookAuthorOrPlaceholder(),
			genre: getBookGenreOrPlaceholder(),
			img_url: getBookImgOrPlaceHolder()
		};
	};

	

	const renderBooks = () => {
		return (
			<>
				<div className='book-img'>
					<img src={getBookImgOrPlaceHolder()} alt={getImgAltText()} />
					<button onClick={() => props.handleClick(getBookInfo())} id={props.bookId}>
						Add To Collection
					</button>
				</div>

				<div className='book-info'>
					<h4>{props.book.title}</h4>
					<p>by {getBookAuthorOrPlaceholder()}</p>
					<p>{getBookSummaryOrPlaceHolder()}</p>

					<p className='genre'>Genre</p>

					<p>{getBookGenreOrPlaceholder()}</p>
				</div>
			</>
		);
	};

	return <div className='book'>{renderBooks()}</div>;
};

export default Book;
