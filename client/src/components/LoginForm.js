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
					<input
						onChange={props.handleChange}
						type='email'
						name='email'
						value={props.userInfo.email}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						onChange={props.handleChange}
						type='password'
						name='password'
						value={props.userInfo.password}
					/>
				</label>
			</div>
		</div>
	);
};

export default LoginForm;
