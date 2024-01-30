import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YesPage from './yes';
import { moveButton } from './utils';

const App = () => {
  const moveButton = () => {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  };
  return (
    <Router>
      <Routes>
        <Route path="/ask-her-out" element={<Home />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="body-container">
      <div>
        <h1 className="header_text">Do you wanna go out with me?</h1>
        <h1 className="header_text">Are you free tomorrow?</h1>
      </div>
      <div className="gif_container">
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Cute animated illustration" />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" onClick={() => window.location.href = "/yes"}>Yes</button>
        <button className="btn" id="noButton" onMouseOver={moveButton} onClick={moveButton}>No</button>
      </div>
    </div>
  );
};

export default App;
