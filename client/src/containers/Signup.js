import React, { Component } from 'react';
import '../styles/LoginAndSignup.css';

export default class Signup extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			password: '',
			password_confirmation: ''
		};
	}

	handleOnChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	handleOnSubmit = evt => {
		evt.preventDefault();

		this.props.userAuthenticate(this.state).then(() => this.props.history.push('/home'));

		this.setState({
			name: '',
			email: '',
			password: '',
			password_confirmation: ''
		});
	};
	render() {
		return (
			<div className='login-container'>
				<div className='left-container'>
					<SignupForm
						handleSubmit={this.handleOnSubmit}
						userInfo={this.state}
						handleChange={this.handleOnChange}
					/>
				</div>

				<div className='right-container'></div>
			</div>
		);
	}
}
