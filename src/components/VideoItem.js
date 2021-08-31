import React from "react";
const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className=" video-item item">
      <a href="#" class="thumbnail" data-duration="12:24">
        <img
          class="thumbnail-image"
          src={video.snippet.thumbnails.medium.url}
        />
      </a>
      <div class="video-bottom-section">
        <a href="#">
          <img
            class="channel-icon"
            src={video.snippet.thumbnails.medium.url}
          />
        </a>
        <div class="video-details">
          <a href="#" class="video-title">
          {video.snippet.title}          </a>
          <a href="#" class="video-channel-name">
          {video.snippet.channelTitle}
          </a>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
