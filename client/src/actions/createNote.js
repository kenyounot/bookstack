export const createNote = note => {
	const token = localStorage.getItem('token');

	return dispatch => {
		return fetch('/api/v1/notes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ note })
		})
			.then(res => res.json())
			.then(data => {
				dispatch(dispatchNote(data.note));
			});
	};
};

const dispatchNote = noteInfo => ({
	type: 'CREATE_NOTE',
	payload: noteInfo
});
