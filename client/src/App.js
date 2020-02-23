import React from 'react';
import NavBar from './components/navBar/NavBar';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';

function App() {
	return (
		<div className='app'>
			<NavBar />
			<Switch>
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/home' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
