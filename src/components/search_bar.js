import React, { Component } from 'react';

// const SearchBar = () => {
//  return <input />;
// };
// above is a functional component

class SearchBar extends Component {
  constructor (props) {
    super (props);
    this.state = { searchTerm: '' };
  }

  render () {
    return (
      <div className="search-bar">
        <h3>Dear Colonist, type in the key word of the videos you would like to search for:</h3>
        <input onChange={this.onInputChange.bind(this)} />
        <p className="d-none">{this.state.searchTerm}</p>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
    this.props.onSearchTermChange(this.state.searchTerm);
  }
}
// above is a class-based component


export default SearchBar;
