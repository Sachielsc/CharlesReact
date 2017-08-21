import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Youtube from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import DevReport from './components/dev_report';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends Component {
	constructor (props) {
		super (props);
		this.state = { video: [] };
		this.setStateVideo = function (video) {
			this.setState({video});
			// 等同于 this.setState(video: video);
		}
		Youtube({key: API_KEY, term: 'alien'}, this.setStateVideo.bind(this));
	}

	render () {
		return (
			<div className="card-box green-frame shadow-expand">
				<div>
					<h3>Dear Colonist, type in the key word of the videos you would like to search for:</h3>
					<SearchBar />
					<VideoList videos={this.state.video}/>
				</div>
				<DevReport />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
