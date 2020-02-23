import React, { Component } from 'react';
import NavBar from './components/navBar/NavBar';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks } from './actions/fetchBooks';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';

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
					<Route exact path='/home' component={Home} />
					<Route exact path='/collection' component={Collection} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchBooks: () => dispatch(fetchBooks())
	};
};

export default connect(null, mapDispatchToProps)(App);
