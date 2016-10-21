import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import Youtube from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const ApiKey = ''; //Add youtube api key



class App extends Component{
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null,
         };

    }

    videoSearch(term) 
    {
     Youtube({key: ApiKey, term: term}, (videos) =>
        {
            
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
                });
        });
    }


    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return(
            <div>
            <SearchBar onVideoSearchChange = {videoSearch}/>
            <VideoDetail  video={this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = { this.state.videos } />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));