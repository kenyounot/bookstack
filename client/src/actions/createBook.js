export const createBook = book => {
	const token = localStorage.getItem('token');
	return dispatch => {
		return fetch('/api/v1/books', {
			method: 'POST',
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

				dispatch(addBook(data.book));
			});
	};
};

const addBook = bookInfo => ({
	type: 'CREATE_BOOK',
	payload: bookInfo
});
