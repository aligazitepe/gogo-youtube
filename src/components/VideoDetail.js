import React from 'react';
const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className='iframe-container'>
                <iframe src={videoSrc} allowFullScreen className="responsive-iframe" title='Video player'/>
            </div>
            <div className='video-details'>
                <h4 className=''>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;