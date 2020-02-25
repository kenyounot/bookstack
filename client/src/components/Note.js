import React from 'react';

const Note = props => {
	return (
		<>
			<li>
				<p>{props.note.updated_at}</p>
				<p>{props.note.content}</p>
				<button onClick={() => props.handleDelete(props.note.id)}>x</button>
			</li>
		</>
	);
};

export default Note;
