import React from 'react';

const Note = props => {
	return (
		<>
			<li
				onDoubleClick={props.handleEditClick}
				onBlur={e => props.handleBlur(e, props.note.id)}
			>
				<p className='non-editable'>{props.note.updated_at}</p>
				<p id='content'>{props.note.content}</p>
				<button
					className='note-delete-btn'
					onClick={() => props.handleDelete(props.note.id)}
				>
					<i class='fa fa-trash'></i>
				</button>
			</li>
		</>
	);
};

export default Note;
