export const deleteVehicle = bookId => {
	const token = localStorage.getItem('token');
	return dispatch => {
		return fetch(`/api/v1/books/${bookId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		})
			.then(res => res.json())
			.then(data => {
				dispatch(dispatchDelete(data.id));
			});
	};
};

const dispatchDelete = bookId => ({
	type: 'DELETE_BOOK',
	payload: bookId
});
