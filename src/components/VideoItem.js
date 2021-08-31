import React from "react";
import styles from "./VideoItem.module.css"
const VideoItem = ({ video, handleVideoSelect }) => {
  console.log(video)
  return (
    <div onClick={() => handleVideoSelect(video)} className={styles.videoItem}>
      <a href="#" className={styles.thumbnail} data-duration="12:24">
        <img
          className={styles.thumbnailImage}
          src={video.snippet.thumbnails.medium.url}
        />
      </a>
      <div class={styles.videoBottomSection}>
        <div className={styles.videoDetails}>
          <a href="#" class={styles.videoTitle}>
          {video.snippet.title}          </a>
          <a href="#" class={styles.videoChannelName}>
          {video.snippet.channelTitle}
          </a>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
