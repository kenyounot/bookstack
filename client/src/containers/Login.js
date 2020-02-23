import React, { Component } from 'react';
import '../styles/Login.css';
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
			<div className='login-container'>
				<div className='left-container'>
					<LoginForm />
				</div>

				<div className='right-container'></div>
			</div>
		);
	}
}
