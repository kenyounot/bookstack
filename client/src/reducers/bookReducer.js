const initialState = {
	books: [],
	loading: false
};

const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGOUT_USER':
			return initialState;

		case 'FETCHING_BOOKS':
			return {
				...state,
				loading: true
			};

		case 'FETCH_BOOKS':
			return {
				...state,
				books: [...action.payload],
				loading: false
			};

		case 'CREATE_BOOK':
			return {
				...state,
				books: state.books.concat(action.payload)
			};

		case 'UPDATE_BOOK':
			return {
				...state,
				books: [
					...state.books.filter(book => book.id !== action.payload.id),
					action.payload
				]
			};

		case 'DELETE_BOOK':
			return {
				...state,
				books: state.books.filter(book => book.id !== action.payload)
			};

		default:
			return state;
	}
};

export default bookReducer;
