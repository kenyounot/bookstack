import React, { Component } from 'react';
import NavBar from './components/navBar/NavBar';
import './styles/App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks } from './actions/fetchBooks';
import userLogout from './actions/logoutUser';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Search from './containers/Search';
import Collection from './containers/Collection';
import BookShow from './containers/BookShow';
import FourOhFour from './components/FourOhFour';

class App extends Component {

	// if app mounted then check if user is logged in
	// if they are logged in the fetch the books associated with
	// that user
	componentDidMount() {
		if (localStorage.getItem('token')) {
			this.props.fetchBooks();
		}
	}

	// if logout button is pushed in nav,
	// dispatch logout action and redirect to /login
	handleLogout = () => {
		this.props.logoutUser();
		this.props.history.push('/login');
	};

	render() {
		return (
			<div className='app'>
				<NavBar handleLogout={this.handleLogout} />
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<ProtectedRoute exact path='/search' component={Search} />
					<ProtectedRoute exact path='/collection' component={Collection} />
					<ProtectedRoute exact path='/books/:bookId' component={BookShow} />
					<Route component={FourOhFour} />
				</Switch>
			</div>
		);
	}
}


// this function returns a standard route but first checks if the user is logged in
// before returning it, if they are not logged in it will redirect to the login screen
const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem('token') ? (
				<>
					<Component {...props} />
				</>
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

const mapDispatchToProps = dispatch => {
	return {
		fetchBooks: () => dispatch(fetchBooks()),
		logoutUser: () => dispatch(userLogout())
	};
};

export default withRouter(connect(null, mapDispatchToProps)(App));
