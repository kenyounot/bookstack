import React from 'react';

const NoteForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input
					onChange={props.handleChange}
					type='textarea'
					name='content'
					placeholder='enter note'
					value={props.content}
				/>
				<button className='create-note-btn' type='submit'>
					<i class='fa fa-plus' aria-hidden='true'></i>
				</button>
			</form>
		</div>
	);
};

export default NoteForm;
