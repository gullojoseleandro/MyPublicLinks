import React from 'react';
import ReactPlayer from 'react-player';
import './VideoBackground.css';

interface VideoBackgroundProps {
  video: string;
  isDarkMode: boolean;
  onReady: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ video, isDarkMode, onReady }) => (
  <div className="video-container">
    <ReactPlayer
      url={video}
      playing
      loop
      muted
      width="100vw"
      height="100vh"
      className="video-player"
      style={{ filter: isDarkMode ? 'invert(1)' : 'none' }}
      onReady={onReady}
    />
  </div>
);

export default VideoBackground;