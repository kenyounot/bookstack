import React from 'react';

const LoginForm = props => {
	return (
		<div class='form'>
			<label>
				Email:
				<input type='email' name='email' value={props.email} />
			</label>
			<label>
				Password:
				<input type='password' name='password' value={props.password} />
			</label>
		</div>
	);
};

export default LoginForm;
