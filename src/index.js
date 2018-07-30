//Get React access
import React, { Component } from 'react';
// Dom is uded to interact with the DOM 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//import Searchbar to index.js
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//variable to hold youtube api key
const API_KEY = 'AIzaSyCH-Rqp4vaNRGvvu7NNbzzGsr-uvVVkqJg';

// Create a new component. This component should produce HTML
/* 
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}
*/

//instead of functional component this is a class based component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 

		};
		this.videoSearch('html')
		
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]	
			 });
			// Above Equals to this.setState({  })
		});

	}
	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
	
}


//Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

