import React, { Component } from 'react';

// const SearchBar = () => {
//  return <input />;
// };
// above is a functional component

class SearchBar extends Component {
    render () {
        return (
            <input onChange={this.onInputChange} />
        );
    }

    onInputChange(event) {
    	console.log(event.target.value);
    }
}
// above is a class-based component


export default SearchBar;
