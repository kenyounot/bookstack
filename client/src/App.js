import React from 'react';
import NavBar from './components/navBar/NavBar';
import './styles/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './containers/Login';

function App() {
	return (
		<div className='app'>
			<Switch>
				<NavBar />
				<Route exact path='/login' component={Login} />
			</Switch>
		</div>
	);
}

export default App;
