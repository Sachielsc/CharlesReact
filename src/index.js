import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Youtube from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import DevReport from './components/dev_report';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends Component {
	constructor (props) {
		super (props);
		this.state = { videos: [], selectedVideo: null };
		this.setStateVideo = function (videos) {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			// this.setState({videos}); 等同于 this.setState(videos: videos);
		}
		Youtube({key: API_KEY, term: 'alien'}, this.setStateVideo.bind(this));
	}

	render () {
		return (
			<div className="card-box green-frame shadow-expand">
				<div>
					<SearchBar />
					<VideoDetail video={this.state.selectedVideo}/>
					<VideoList
						videos={this.state.videos}
						onVideoSelect={(selectThis) => this.setState({selectedVideo: selectThis})}
					/>
				</div>
				<DevReport />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
