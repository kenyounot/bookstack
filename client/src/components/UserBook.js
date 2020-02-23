import React from 'react';
import '../styles/UserBook.css';

const UserBook = props => {
	console.log(props.book);

	return (
		<div className='user-book'>
			<div className='user-book'>
				<img src={props.book.img} alt={props.book.title + "'s Book Cover"} />
			</div>
		</div>
	);
};

export default UserBook;
