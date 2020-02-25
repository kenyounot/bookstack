import React, { Component } from 'react';
import '../styles/Notes.css';
import { createNote } from '../actions/createNote';
import { getNotes } from '../actions/getNotes';
import { deleteNote } from '../actions/deleteNote';
import { updateNote } from '../actions/updateNote';
import { connect } from 'react-redux';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';

export class Notes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			book_id: props.bookId,
			content: ''
		};
	}

	handleBlur = (evt, id) => {
		evt.target.removeAttribute('contentEditable');

		let noteId = id;
		let noteInfo = {
			[evt.target.id]: evt.target.textContent
		};

		this.props.updateNote(noteId, noteInfo);
	};

	handleEditClick = evt => {
		if (evt.target.tagName !== 'DIV' && !evt.target.classList.contains('non-editable')) {
			evt.target.contentEditable = true;
			evt.target.focus();
		}
	};

	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	handleNoteDelete = noteId => {
		this.props.deleteNote(noteId);
	};

	handleSubmit = evt => {
		evt.preventDefault();

		this.props.createNote(this.state);

		this.setState({
			...this.state,
			content: ''
		});
	};

	renderNotes = () => {
		return this.props.notes.map((note, idx) => {
			return (
				<Note
					handleBlur={this.handleBlur}
					handleEditClick={this.handleEditClick}
					handleDelete={this.handleNoteDelete}
					key={idx}
					note={note}
				/>
			);
		});
	};

	componentDidMount() {
		this.props.getNotes(this.props.bookId);
	}

	render() {
		this.renderNotes();
		return (
			<div className='notes-container'>
				<NoteForm
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					content={this.state.content}
				/>
				<div className='ul-container'>
					<ul>{this.renderNotes()}</ul>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createNote: noteInfo => dispatch(createNote(noteInfo)),
		getNotes: bookId => dispatch(getNotes(bookId)),
		deleteNote: noteId => dispatch(deleteNote(noteId)),
		updateNote: (noteId, noteInfo) => dispatch(updateNote(noteId, noteInfo))
	};
};

const mapStateToProps = state => {
	return {
		notes: state.noteReducer.notes
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
