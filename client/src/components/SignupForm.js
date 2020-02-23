import React from 'react';

const SignupForm = props => {
	return (
		<div className='form-group'>
			<div>
				<h1>Join BookStack,</h1>
			</div>

			<form onSubmit={props.handleSubmit}>
				<div className='login-input'>
					<label>
						Name:
						<input
							onChange={props.handleChange}
							type='name'
							name='name'
							value={props.userInfo.name}
						/>
					</label>
					<br />
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
					<label>
						Password Confirmation:
						<input
							onChange={props.handleChange}
							type='password'
							name='password_confirmation'
							value={props.userInfo.password_confirmation}
						/>
					</label>
					<br />
					<button type='submit'>Signup</button>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
