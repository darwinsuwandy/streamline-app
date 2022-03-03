import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="outer-padding">
          <div className="video-container">
              <iframe className="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>
        </div>  
        <div className="info-container">
          Info Container
        </div>
      </div>
    </div>
  );
}

export default App;
