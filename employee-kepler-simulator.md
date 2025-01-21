---
layout: default
title: "Employee Kepler Simulator - The Multiverse Employee Handbook"
permalink: /employee-kepler-simulator/
---

<style>
.portal-header {
  text-align: center;
  padding: 4rem 0 2rem;
}

.portal-intro {
  max-width: 800px;
  margin: 1.5rem auto;
  color: #94a3b8;
  font-size: 1.5rem;
  line-height: 1.8;
}

.tab-container {
  max-width: 1000px;
  margin: 2rem auto;
}

.tab-list {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid rgba(96, 165, 250, 0.2);
  padding-bottom: 1px;
  margin-bottom: 2rem;
  overflow-x: auto;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.tab-button:hover {
  color: #60a5fa;
}

.tab-button.active {
  color: #60a5fa;
  border-bottom-color: #60a5fa;
}

.portal-card {
  background: rgba(30, 41, 59, 0.5);
  padding: 2rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
}

.login-form {
  max-width: 400px;
  margin: 2rem auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #94a3b8;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 0.25rem;
  color: white;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #60a5fa;
  box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button:hover {
  background: #1d4ed8;
}

.quantum-status {
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  background: rgba(96, 165, 250, 0.1);
  display: none;
}

.portal-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.feature-card {
  background: rgba(30, 41, 59, 0.3);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(96, 165, 250, 0.2);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #60a5fa;
}

@media (max-width: 768px) {
  .tab-list {
    flex-wrap: wrap;
  }

  .tab-button {
    flex: 1 1 auto;
    text-align: center;
  }
}
/* ============================= */
/* game styles */
/* ============================= */

.game-window {
    height: 70vh;
    background-color: #000; /* Background color */
    opacity: 0.7; /* Transparency level (0 is fully transparent, 1 is fully opaque) */
    color: #fff;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    touch-action: none;
}

#game-container {
    position: relative;
    width: 100%; /* Full width of the parent */
    height: 100%; /* Full height of the parent */
    display: flex; /* Use flexbox for centering */
    justify-content: center; /* Horizontally center content */
    align-items: center; /* Vertically center content */
}

#gameCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    touch-action: none;
}

/* Screen Styles */
.screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
}

.hidden {
    display: none;
}

/* Text Styles */
h1 {
    font-size: 48px;
    margin-bottom: 20px;
    text-align: center;
}

/* Button Styles */
.game-button {
    padding: 15px 30px;
    font-size: 20px;
    border: none;
    border-radius: 25px;
    background: #4CAF50;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
}

.game-button:hover {
    background: #45a049;
}

/* Controls */
#controls {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    z-index: 1;
}

#fire-button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #ff4444;
    padding: 0;
}

#fire-button:active {
    background: #cc0000;
}

#rotate-left, #rotate-right {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #4444ff;
    padding: 0;
    font-size: 24px;
}

#rotate-left:active, #rotate-right:active {
    background: #0000cc;
}

/* HUD */
#hud {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Media Queries */
@media (max-width: 768px) {
    h1 {
        font-size: 36px;
    }

    .game-button {
        padding: 12px 24px;
        font-size: 18px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 28px;
    }

    #fire-button {
        width: 60px;
        height: 60px;
    }
}

.game-round-button {
    width: 50px; /* Adjust size to fit the image */
    height: 50px; /* Keep width and height equal for a round shape */
    border-radius: 50%; /* Makes the button round */
    border: none; /* Removes default border */
    background-color: #4444ff; /* Choose a background color */
    display: flex; /* Center the image */
    justify-content: center; /* Center the image horizontally */
    align-items: center; /* Center the image vertically */
    cursor: pointer; /* Changes the cursor to indicate a clickable button */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow */
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.game-round-button:hover {
    background-color: #333333; /* Darken the background on hover */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3); /* Enhance the shadow on hover */
}

.game-round-button img {
    width: 24px; /* Adjust to match the icon size */
    height: auto; /* Maintain aspect ratio */
    filter: invert(1); /* Inverts the colors of the image */
}

</style>

<div class="background-container">
    <div class="background-overlay"></div>
</div>

<div class="tab-list">
    <button class="tab-button" onclick="window.location.href='/employee-portal'">Employee Portal</button>
    <button class="tab-button active" onclick="window.location.href='/employee-kepler-simulator'">Kepler Simulator</button>
    <button class="tab-button" onclick="window.location.href='/employee-corporate-policy-generator'">Policy Generator</button>
    <button class="tab-button" onclick="window.location.href='/employee-reality-status'">Reality Check Status</button>
    <button class="tab-button" onclick="window.location.href='/employee-jobs'">Interdimensional Job Board</button>
</div>

<div class="game-window">

  <div id="game-container">
      <canvas id="gameCanvas"></canvas>

      <!-- Start Screen -->
      <div id="start-screen" class="screen">
          <h1>KEPLER SIM</h1>
          <button class="game-button" id="start-button">Initiate Orbital Protocols</button>
      </div>

      <!-- Game Over Screen -->
      <div id="game-over-screen" class="screen hidden">
          <h1>GAME OVER</h1>
          <p>Final Efficiency Rating: <span id="final-score">0</span></p>&nbsp;
          <button class="game-button" id="restart-button">Submit Retry Request</button>
      </div>

      <!-- Level Complete Screen -->
      <div id="level-complete-screen" class="screen hidden">
          <h1>SECTOR <span id="level-number">1</span> COMPLETE!</h1>
          <button class="game-button" id="next-level-button">Next Level</button>
      </div>

      <!-- HUD -->
      <div id="hud">
          <div id="score">Efficiency: 0</div>
          <div id="level">Sector: 1</div>
          <div id="asteroids-remaining">Anomalies: 0</div>
      </div>

      <!-- Game Controls -->
      <div id="controls">
          <button class="game-round-button" id="rotate-left"><img src="https://mcdn.podbean.com/mf/web/qnwh4zn896rwxdgd/button-left.png" alt="Left Arrow"></button>
          <button id="fire-button">FIRE</button>
          <button class="game-round-button" id="rotate-right"><img src="https://mcdn.podbean.com/mf/web/fpqrwrwdeuaydgtv/button-right.png" alt="Right Arrow"></button>
      </div>
  </div>

</div>

<div id="quantum-field" class="quantum-field"></div>

<script src="{{ site.js_path }}/asteroids.js?v=1.0.4"></script>
