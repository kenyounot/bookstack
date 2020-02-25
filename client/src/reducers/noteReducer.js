const initialState = {
	notes: []
};

const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_NOTES':
			return {
				...state,
				notes: [...action.payload]
			};

		case 'UPDATE_NOTE':
			let idx = state.notes.findIndex(note => note.id === action.payload.id);
			console.log(idx);
			return {
				...state,
				notes: [
					...state.notes.map(note => {
						if (note.id === action.payload.id) {
							return {
								...action.payload
							};
						} else {
							return note;
						}
					})
				]
			};

		case 'CREATE_NOTE':
			return {
				...state,
				notes: [action.payload, ...state.notes]
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
