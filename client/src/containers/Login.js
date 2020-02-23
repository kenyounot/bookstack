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
			<div>
				<LoginForm />
			</div>
		);
	}
}
