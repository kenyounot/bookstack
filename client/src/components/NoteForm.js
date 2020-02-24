import React from 'react';

const NoteForm = props => {
	return (
		<div>
			<input
				onChange={props.handleChange}
				type='text'
				name='content'
				placeholder='enter note'
				value={props.content}
			/>
			<button type='submit'>Create Note</button>
		</div>
	);
};

export default NoteForm;
