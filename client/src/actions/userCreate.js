export const userCreate = user => {
	return dispatch => {
		return fetch('/api/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({ user })
		})
			.then(resp => resp.json())
			.then(data => {
				if (data.jwt) {
					console.log('user created!');
					console.log(data);

					localStorage.setItem('token', data.jwt);

					dispatch(loginUser(data.user));
				} else {
					console.log('User not created!');
				}
			});
	};
};

const loginUser = userObj => ({
	type: 'LOGIN_USER',
	payload: userObj
});
