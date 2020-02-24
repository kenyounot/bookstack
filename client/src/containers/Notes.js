import React, { Component } from 'react';
import '../styles/Notes.css';
import NoteForm from '../components/NoteForm';

export class Notes extends Component {
	render() {
		return (
			<div className='notes-container'>
				<NoteForm />
				<ul>
					<li>Note1</li>
					<li>Note 2</li>
				</ul>
			</div>
		);
	}
}

export default Notes;
