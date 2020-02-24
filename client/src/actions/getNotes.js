export const getNotes = () => dispatch => {
	const token = localStorage.getItem('token');

	fetch(`/api/v1/notes`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
		.then(res => res.json())
		.then(data => {
			dispatch(storeNotes(data.notes || []));
		});
};

const storeNotes = notes => ({
	type: 'GET_NOTES',
	payload: notes
});
