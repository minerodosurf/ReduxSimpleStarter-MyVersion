import React, { Component } from 'react';

/* this is a function
const SearchBar = () => {
	return <input />
};
*/

// => This is the same as function 

//this is a Class
//Only Class has STATE - functions do not have
class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };
	}


	render() {

		return (
				<div className="search-bar">
					<input 
					value={this.state.term}		
					onChange={event => this.onInputChange(event.target.value)} />
				</div>
			);
	}
	
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}


export default SearchBar;