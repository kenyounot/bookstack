const initialState = {
	notes: []
};

const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_NOTES':
			return {
				...state,
				notes: [...action.payload]
			};

		case 'UPDATE_NOTE':
			return {
				...state,
				notes: [
					...state.notes.filter(note => note.id !== action.payload.id),
					action.payload
				]
			};

		case 'CREATE_NOTE':
			return {
				...state,
				notes: state.notes.concat(action.payload)
			};

		case 'DELETE_NOTE':
			return {
				...state,
				notes: state.notes.filter(note => note.id !== action.payload)
			};

		default:
			return state;
	}
};

export default noteReducer;
