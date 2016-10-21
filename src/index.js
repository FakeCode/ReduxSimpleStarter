import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import Youtube from 'youtube-api-search';
import VideoList from './components/video_list'

const ApiKey = ''; //Add youtube api key



class App extends Component{
    constructor(props){
        super(props);
        this.state = { videos: [] };
        Youtube({key: ApiKey, term: 'umesh maharjan'}, (videos) =>
        {
            this.setState({ videos });
        });
    }
render() {
    return(
        <div>
        <SearchBar />
        <VideoList videos = { this.state.videos } />
        </div>
    );
}
}

ReactDom.render(<App />, document.querySelector('.container'));