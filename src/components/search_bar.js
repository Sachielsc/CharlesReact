import React, { Component } from 'react';

// const SearchBar = () => {
//  return <input />;
// };
// above is a functional component

class SearchBar extends Component {
  constructor (props) {
    super (props);
    this.state = { term: '' };
  }

  render () {
    return (
      <div>
        <input onChange={this.onInputChange.bind(this)} />
        <p>{this.state.term}</p>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
}
// above is a class-based component


export default SearchBar;
