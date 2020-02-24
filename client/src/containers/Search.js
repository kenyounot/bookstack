import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import Books from './Books';

export class Search extends Component {
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
				this.setState({
					...this.state,
					books: data.items
				});
			});

		this.setState({
			...this.state,
			searchTerm: ''
		});
	};

	renderBooksIfTheyExist = () => {
		if (this.state.books.length > 0) {
			return <Books books={this.state.books} />;
		}
	};

	render() {
		return (
			<div>
				<SearchForm
					searchTerm={this.state.searchTerm}
					handleChange={this.handleOnChange}
					handleSubmit={this.handleOnSubmit}
				/>
				{this.renderBooksIfTheyExist()}
			</div>
		);
	}
}

export default Search;
