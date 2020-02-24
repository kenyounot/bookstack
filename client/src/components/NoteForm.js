import React from 'react';

const NoteForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input
					onChange={props.handleChange}
					type='text'
					name='content'
					placeholder='enter note'
					value={props.content}
				/>
				<button type='submit'>Create Note</button>
			</form>
		</div>
	);
};

export default NoteForm;
