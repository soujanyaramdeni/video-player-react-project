import "../src/App.css";
import "./App.css";
import React from 'react';
import { VideoPlayer } from "./videoplayer/videoplayer";
const App = () => {
  const videoList = [
    { title: 'video 1', url:require("../src/videoplayer/bird.mp4")},
    { title: 'video 2', url:require("../src/videoplayer/butterfly.mp4")},
    { title: 'video 3', url:require("../src/videoplayer/nature.mp4")},
    {title:"video 4", url:require("../src/videoplayer/musicplay.mp4")},
    { title: 'video 5', url:require("../src/videoplayer/boat.mp4")},
    { title: 'video 6', url:require("../src/videoplayer/duck.mp4")},
    { title: 'video 7', url:require("../src/videoplayer/garden.mp4")},
    {title:"video 8", url:require("../src/videoplayer/forest.mp4")},
  ];
  return (
    <div>
      <h1 class="h1">React Video Player</h1>
      <VideoPlayer videoList={videoList}></VideoPlayer>
      {/* <VideoPlayer videoList={videoList} /> */}
    </div>
  );
};
export default App;