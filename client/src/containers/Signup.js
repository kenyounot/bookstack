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


	// on form change update the state object
	handleOnChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	// prevent redirection on submit, dispatch the the state to user create action,
	// redirect to collection component, then clear the form state
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

	// if user is logged in and trying to render the login screen redirect
	// to their book collection
	componentDidMount = () => {
		if (localStorage.getItem('token')) {
			this.props.history.push('/collection');
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
