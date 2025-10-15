import React from 'react';
import blackHoleVideo from '../assets/images/black-hole.mp4';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="fullscreen-video">
        <source src={blackHoleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;