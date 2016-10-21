import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) =>
{
    const vidoeItems = props.videos.map((video)=> {
        return (
            <VideoListItem 
            key={video.etag} 
            video = {video} 
            onVideoSelect = {props.onVideoSelect}
            />);
    })


    return (
        <div>
        <ul className='col-md-4 list-group'>
        {vidoeItems}
        </ul>
        </div>
    ); 
}

export default VideoList; 