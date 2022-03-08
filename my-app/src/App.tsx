import React, { useState, useEffect } from 'react';
import './App.css';

interface IVideo {
  id: number;
  video_id: string;
  name: string;
  remark: string;
}

const App: React.FC = () => {
  const [id, setId] = useState<number>();
  const [video, setVideo] = useState<Array<IVideo>>([
    {id: 1, video_id: "JfVOs4VSpmA", name: "Spiderman : No Way Home", remark: ""},
    {id: 2, video_id: "pWdKf3MneyI", name: "Ant-Man", remark: ""},
    {id: 3, video_id: "dKrVegVI0Us", name: "Captain America : Civil War", remark: ""},
    {id: 4, video_id: "aWzlQ2N6qqg", name: "Doctor Strange", remark: ""},
    {id: 5, video_id: "8YjFbMbfXaQ", name: "Sang-chi", remark: ""},
    {id: 6, video_id: "6ZfuNTqbHE8", name: "Avengers : Infinity War", remark: ""},
    {id: 7, video_id: "Z1BCujX3pw8", name: "Captain Marvel", remark: ""},
    {id: 8, video_id: "TcMBFSGVi1c", name: "Avengers : End Game", remark: ""},
    {id: 9, video_id: "sj9J2ecsSpo", name: "Wanda Vision", remark: ""},
    {id: 10, video_id: "nW948Va-l10", name: "Loki", remark: ""}]);

  const filteredVideos: IVideo[] = video.filter((item) => item.id === id);
  const filteredVideosId: string = filteredVideos.map((item) => { return item.video_id} ).toString();
  const filteredVideosRemark: string = filteredVideos.map((item) => { return item.remark} ).toString();
  
  const videoSrc = `https://www.youtube.com/embed/${filteredVideos.map((item) => item.video_id)}`
  
  useEffect(() => {
    getRandomNumber();
  }, [id])

  const getRandomNumber = () => {
    let randNum: number = Math.floor(Math.random() * 10) + 1
    setId(randNum);
  }

  const onClickLike = () => {
    setVideo(
      video.map(item => item.video_id === filteredVideosId ? {...item, remark: "like" } : item)
    )
  }

  const onClickDislike = () => {
    setVideo(
      video.map(item => item.video_id === filteredVideosId ? {...item, remark: "dislike" } : item)
    )
  }

  return (
    <div className="App">
      <div className="container">
        <div className="video-container">
            <iframe className="iframe" src={videoSrc}></iframe>
        </div>
        <div className="info-container">
            {
              filteredVideosRemark.length === 0 ? 
                <div className="icon-container"> 
                  <i className="fa fa-thumbs-up" onClick={() => onClickLike()}></i>
                  <i className="fa fa-thumbs-down" onClick={() => onClickDislike()}></i>
                </div> 
                : <div className="icon-container">
                    <i className={filteredVideosRemark === "like" ? "fa fa-thumbs-up clicked" : "fa fa-thumbs-up fade"} onClick={() => onClickLike()}></i>
                    <i className={filteredVideosRemark === "dislike" ? "fa fa-thumbs-down clicked" : "fa fa-thumbs-down fade"} onClick={() => onClickDislike()}></i>
                  </div> 
            }
          <div className="id-content">
            <label>Video Id</label>
            {
              filteredVideos && filteredVideos.map((item) => {
                return (
                  <div className="video-id-container">{item.video_id}</div>
                );
              })
            }
            <button onClick={() => getRandomNumber()}>Change</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
