import React, {Component} from 'react';

//Functional component
/*
const SearchBar =() => {
	return <input />
}
*/

//Class Component
// Each class state has his own STATE - they re-render

class SearchBar extends Component{
    //only inside the constructor you manually change the state
    constructor(props) {
        super(props);

        this.state = { term:'' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value )} />
            </div>
        );
    }

    onInputChange (term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}


export default SearchBar;