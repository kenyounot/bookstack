import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	render() {
		return (
			<div class='login-container'>
				<h1>Welcome back,</h1>
				<div class='left-container'>
					<LoginForm />
				</div>

				<div class='right-container'></div>
			</div>
		);
	}
}
