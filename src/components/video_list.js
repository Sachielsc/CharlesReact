import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map(
    (item) => {
      return <VideoListItem key={item.etag} video={item} onVideoSelect={props.onVideoSelect} />
    }
  );

  return (
    <ul className="list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
