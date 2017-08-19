import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DPO_5Ss';
const App = () => {
	return (
		<div>
			<h2>Hi!</h2>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));