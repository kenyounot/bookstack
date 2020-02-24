export const updateBook = (bookId, book) => {
	const token = localStorage.getItem('token');
	const intId = parseInt(bookId, 10);

	return dispatch => {
		return fetch(`/api/v1/books/${intId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ book })
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				dispatch(editBook(data.book));
			});
	};
};

const editBook = bookInfo => ({
	type: 'UPDATE_BOOK',
	payload: bookInfo
});
