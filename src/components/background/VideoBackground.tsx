import ReactPlayer from 'react-player';

import './VideoBackground.css';

interface VideoBackgroundProps {
  video: string;
  isDarkMode: boolean;
}

 const VideoBackground = ({video, isDarkMode}: VideoBackgroundProps) => {
  return (
    <div className="video-container">
      <ReactPlayer
        url={video}
        playing
        loop
        muted
        width="100vw"
        height="100vh"
        className="video-player"
        style={{filter: isDarkMode ? 'invert(1)' : 'none',}}
      />
    </div>
  );
};

export default VideoBackground;