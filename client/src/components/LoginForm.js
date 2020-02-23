import React from 'react';

const LoginForm = props => {
	return (
		<div className='form'>
			<div>
				<h1>Welcome back,</h1>
			</div>
			<div className='login-input'>
				<label>
					Email:
					<input type='email' name='email' value={props.email} />
				</label>
				<br />
				<label>
					Password:
					<input type='password' name='password' value={props.password} />
				</label>
			</div>
		</div>
	);
};

export default LoginForm;
