import React from 'react';
import profilePicture from './img/myAvatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi! Madhawa here</h1>
      <img src={profilePicture} alt="profilePicture" />
    </div>
  );
}

export default App;
