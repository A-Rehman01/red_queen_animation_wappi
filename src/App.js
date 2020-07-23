import React from 'react';
import './App.css';

//import Componet
import Queen from './Components/Queen';
import ForeGrounditem1 from './Components/ForeGrounditem1';
import ForeGrounditem2 from './Components/ForeGrounditem2';
import Backgrounditem1 from './Components/Backgrounditem1';
import Backgrounditem2 from './Components/Backgrounditem2';

const App = () => {
  const playFast = (getAnimation) => {
    document.addEventListener('click', () => {
      const animation = getAnimation();
      animation && animation.updatePlaybackRate(animation.playbackRate * 1.1);
    });
  };
  return (
    <div className="container">
      <Queen move={playFast} />
      <ForeGrounditem1 move={playFast} />
      <ForeGrounditem2 move={playFast} />
      <Backgrounditem1 move={playFast} />
      <Backgrounditem2 move={playFast} />
    </div>


  );
}

export default App;
