import React from 'react';
import '../styles/UserBook.css';

const UserBook = props => {
	console.log(props.book.id);

	return (
		<div className='user-book'>
			<div className='user-book'>
				<img
					onClick={() => props.handleClick(props.book.id)}
					src={props.book.img_url}
					alt={props.book.title + "'s Book Cover"}
				/>
			</div>
		</div>
	);
};

export default UserBook;
