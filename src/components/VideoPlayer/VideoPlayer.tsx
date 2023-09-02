import * as React from "react";
import videojs from "video.js";
import video from '../../assets/IMG_3479.mp4'  
// Styles
import "video.js/dist/video-js.css";
import cl from './style.module.scss'

const initialOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  }
};

const videoJsOptions = {
    sources: [
      {
        src: video,
        type: "video/mp4",
        width: 800,
        height: 200,
        fluid: true,
        responsive: true
      }
    ]
  };

// interface IVideoPlayerProps {
//     videoJsOptions: Object;
//   }
const VideoPlayer: React.FC = React.memo(() => {
  const videoNode = React.useRef<HTMLVideoElement>();
  const player = React.useRef<any>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...videoJsOptions
    }).ready(function() {

    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [videoJsOptions]);

  return (
    <div className={cl.videoWrapper}>    
         <video ref={videoNode} className="video-js" />
         <p>CSS переменные. Снизу пример использования</p>
    </div>
  )

  
});

export default VideoPlayer;