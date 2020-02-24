import React, { Component } from 'react';
import '../styles/LoginAndSignup.css';
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

		this.props
			.userAuthenticate(this.state)
			.then(() => this.props.history.push('/collection'));

		this.setState({
			email: '',
			password: ''
		});
	};

	componentDidMount = () => {
		if (localStorage.getItem('token')) {
			this.props.history.push('/home');
		}
	};

	render() {
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
