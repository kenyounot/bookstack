import React from 'react';

const Search = props => {
	return (
		<div>
			<div>
				<h3>Search for a book below</h3>
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
					<button type='submit'>search</button>
				</form>
			</div>
		</div>
	);
};

export default Search;
