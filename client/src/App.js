import React, { Component } from 'react';
import NavBar from './components/navBar/NavBar';
import './styles/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks } from './actions/fetchBooks';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Search from './containers/Search';
import Collection from './containers/Collection';
import BookShow from './containers/BookShow';

class App extends Component {
	componentDidMount() {
		if (localStorage.getItem('token')) {
			// this.props.fetchProfile();
			this.props.fetchBooks();
		}
	}

	render() {
		return (
			<div className='app'>
				<NavBar />
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<ProtectedRoute exact path='/search' component={Search} />
					<ProtectedRoute exact path='/collection' component={Collection} />
					<ProtectedRoute exact path='/books/:bookId' component={BookShow} />
				</Switch>
			</div>
		);
	}
}

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
		fetchBooks: () => dispatch(fetchBooks())
	};
};

export default connect(null, mapDispatchToProps)(App);
