import React from 'react';

const SearchForm = props => {
	return (
		<div>
			<div>
				<h2>Search for a book below</h2>
			</div>

			<div>
				<form onSubmit={props.handleSubmit}>
					<input
						onChange={props.handleChange}
						type='text'
						name='searchTerm'
						value={props.searchTerm}
						placeholder='search for a book'
					/>
					<button type='submit'>
						<i class='fa fa-search'></i>
					</button>
				</form>
			</div>
		</div>
	);
};

export default SearchForm;
