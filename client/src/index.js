import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './App';
import { configureStore } from './store';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
