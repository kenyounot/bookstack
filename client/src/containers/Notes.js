import React, { Component } from 'react';
import '../styles/Notes.css';
import NoteForm from '../components/NoteForm';

export class Notes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post_id: props.bookId,
			content: ''
		};
	}

	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	handleSubmit = evt => {
		evt.preventDefault();
	};

	render() {
		console.log(this.state.post_id);

		return (
			<div className='notes-container'>
				<NoteForm handleChange={this.handleChange} content={this.state.content} />
				<ul>
					<li>Note1</li>
					<li>Note 2</li>
				</ul>
			</div>
		);
	}
}

export default Notes;
