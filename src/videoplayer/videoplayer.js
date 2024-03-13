
import React, { useState, useRef, useEffect } from 'react';
import "../App.css"
export const VideoPlayer = ({ videoList }) => {
  console.log(videoList)
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [selectedVideo, setSelectedVideo]=useState(videoList[0]);

  
  useEffect(() => {
    videoRef.current.load();
  }, [selectedVideo]);
  const handleVideoChange = (video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };
  return (
    <div>
      <div id="hlo">
        <video ref={videoRef}
          controls
          width="750" height="500"
          onEnded={() => setIsPlaying(false)}>
          <source src={selectedVideo.url} type="video/mp4" />
        </video>
      </div>

      <div className='div'>
        <h3 class="h3">Video List</h3>
        <div className='video-container'>
        <div className='video-list'>
          {videoList.slice(0,4).map((video) => (
            <div class="li"
            //  key={index}
             className={`video-list-item`}
              onClick={() => handleVideoChange(video)}>
              {video.title}
              {/* {console.log(video.title)} */}
            </div>
          ))}
        </div>
        <div className='video-list'>
          {videoList.slice(4,8).map((video) => (
            <div class="li"
            //  key={index}
             className={`video-list-item`}
              onClick={() => handleVideoChange(video)}>
              {video.title}
              {console.log(video.title)}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};
