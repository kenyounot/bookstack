import React, { Component } from 'react';
import '../styles/Login.css';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { userAuthenticate } from '../actions/userAuthenticate';

export class Login extends Component {
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

	handleOnSubmit = evt => {
		evt.preventDefault();

		console.log('submitted');

		// this.props.userAuthenticate(this.state).then(() => this.props.history.push('/home'));

		// this.setState({
		// 	email: '',
		// 	password: ''
		// });
	};

	render() {
		console.log(this.state);

		return (
			<div className='login-container'>
				<div className='left-container'>
					<LoginForm
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

const mapDispatchToProps = dispatch => ({
	userAuthenticate: userInfo => dispatch(userAuthenticate(userInfo))
});

export default connect(null, mapDispatchToProps)(Login);
