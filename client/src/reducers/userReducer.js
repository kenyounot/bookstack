const initialState = {
	currentUser: {},
	loggedIn: false
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				currentUser: action.payload,
				loggedIn: true
			};

		case 'LOGOUT_USER':
			localStorage.removeItem('token');
			return {
				...state,
				currentUser: {},
				loggedIn: false
			};
		default:
			return state;
	}
};

export default userReducer;
