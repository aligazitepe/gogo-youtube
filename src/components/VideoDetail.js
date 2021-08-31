import React from 'react';
import styles from "./VideoDetail.module.css"
const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className={styles.iframeContainer}>
                <iframe src={videoSrc} allowFullScreen className={styles.responsiveIframe} title='Video player'/>
            </div>
            <div className={styles.videoDetails}>
                <h4 className={styles.videoTitle}>{video.snippet.title}</h4>
                <p className={styles.videoDescription}>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;