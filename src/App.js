import React from 'react';
import profilePicture from './img/myAvatar.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi! Madhawa here</h1>
        <img src={profilePicture} alt="profilePicture"  width="200" height="200" />
    </div>
  );
}

export default App;
