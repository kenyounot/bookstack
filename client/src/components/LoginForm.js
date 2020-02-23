import React from 'react';

const LoginForm = props => {
	return (
		<div className='form-group'>
			<div>
				<h1>Welcome back,</h1>
			</div>

			<form onSubmit={props.handleSubmit}>
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
					<br />
					<button type='submit'>Login</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
