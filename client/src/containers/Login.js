import React, { Component } from 'react';
import '../styles/LoginAndSignup.css';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/fetchBooks';
import { userAuthenticate } from '../actions/userAuthenticate';

export class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	// on form change set the state to the target value, dynamically setting which input
	// was updated
	handleOnChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	// when form is submitted, prevent the default redirect, then authenticate the user
	// logging in by dispatching the user info in the state. If local storage contains a
	// token then fetch that users books and redirect to their collection. Finally, clear
	// the login form state. 
	handleOnSubmit = evt => {
		evt.preventDefault();

		this.props
			.userAuthenticate(this.state)
			.then(() => {
				if (localStorage.getItem('token')) {
					this.props.fetchBooks();
				}
			})
			.then(() => this.props.history.push('/collection'));

		this.setState({
			email: '',
			password: ''
		});
	};

	// after component mounts check to see if the user is logged in already,'
	// if they are then send to their book collection page.
	componentDidMount = () => {
		if (localStorage.getItem('token')) {
			this.props.history.push('/collection');
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
	userAuthenticate: userInfo => dispatch(userAuthenticate(userInfo)),
	fetchBooks: () => dispatch(fetchBooks())
});

export default connect(null, mapDispatchToProps)(Login);
