export const deleteNote = noteId => {
	const token = localStorage.getItem('token');
	return dispatch => {
		return fetch(`/api/v1/notes/${noteId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		})
			.then(res => res.json())
			.then(data => {
				dispatch(dispatchDelete(data.note.id));
			});
	};
};

const dispatchDelete = noteId => ({
	type: 'DELETE_NOTE',
	payload: noteId
});
