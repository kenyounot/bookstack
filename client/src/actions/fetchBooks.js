export const fetchBooks = () => dispatch => {
	const token = localStorage.getItem('token');

	fetch(`/api/v1/books`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
		.then(res => res.json())
		.then(data => {
			if (data.error) {
			}

			dispatch(storeBooks(data.books));
		});
};

const storeBooks = books => ({
	type: 'FETCH_BOOKS',
	payload: books
});
