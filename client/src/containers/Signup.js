import React, { Component } from 'react';
import '../styles/LoginAndSignup.css';
import SignupForm from '../components/SignupForm';
import { userCreate } from '../actions/userCreate';
import { connect } from 'react-redux';

export class Signup extends Component {
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

		this.props.userCreate(this.state).then(() => this.props.history.push('/collection'));

		this.setState({
			name: '',
			email: '',
			password: '',
			password_confirmation: ''
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

const mapDispatchToProps = dispatch => ({
	userCreate: userInfo => dispatch(userCreate(userInfo))
});

export default connect(null, mapDispatchToProps)(Signup);
