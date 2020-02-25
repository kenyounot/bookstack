export const updateNote = (noteId, note) => {
	const token = localStorage.getItem('token');
	const intId = parseInt(noteId, 10);

	return dispatch => {
		return fetch(`/api/v1/notes/${intId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ note })
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				dispatch(editNote(data.note));
			});
	};
};

const editNote = noteInfo => ({
	type: 'UPDATE_NOTE',
	payload: noteInfo
});
