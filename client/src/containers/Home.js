import React, { Component } from 'react';
import Search from '../components/Search';

export class Home extends Component {
	constructor() {
		super();

		this.state = {
			books: [],
			searchTerm: ''
		};
	}

	handleOnChange = evt => {
		this.setState({
			...this.state,
			[evt.target.name]: evt.target.value
		});
	};

	render() {
		return (
			<div>
				<Search />
			</div>
		);
	}
}

export default Home;
