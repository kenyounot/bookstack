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

	handleOnChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	render() {
		console.log(this.state);

		return (
			<div className='login-container'>
				<div className='left-container'>
					<LoginForm userInfo={this.state} handleChange={this.handleOnChange} />
				</div>

				<div className='right-container'></div>
			</div>
		);
	}
}
