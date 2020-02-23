import React from 'react';
import NavBar from './components/navBar/NavBar';
import './styles/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './containers/Login';

function App() {
	return (
		<div className='app'>
			<NavBar />
			<Switch>
				<Route exact path='/login' component={Login} />
			</Switch>
		</div>
	);
}

export default App;
