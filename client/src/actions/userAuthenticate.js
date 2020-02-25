export const userAuthenticate = user => {
	return dispatch => {
		return fetch('http://bookstackapi.herokuapp.com/api/v1/authenticate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({ user })
		})
			.then(resp => resp.json())
			.then(data => {
				if (data.jwt) {
					localStorage.setItem('token', data.jwt);
					dispatch(loginUser(data.user));
				} else {
					console.log('User did not authenticate.');
				}
			});
	};
};

const loginUser = userObj => ({
	type: 'LOGIN_USER',
	payload: userObj
});
