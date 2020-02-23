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

	handleOnSubmit = evt => {
		evt.preventDefault();

		fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchTerm)
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});
	};

	render() {
		return (
			<div>
				<Search handleChange={this.handleOnChange} />
			</div>
		);
	}
}

export default Home;
