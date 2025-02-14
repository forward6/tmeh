---
layout: default
title: "Employee Portal - The Multiverse Employee Handbook"
permalink: /employee-portal/
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
</style>

<div class="background-container">
    <div class="background-overlay"></div>
</div>

<div class="tab-list">
    <button class="tab-button active" onclick="window.location.href='/employee-portal'">Employee Portal</button>
    <button class="tab-button" onclick="window.location.href='/employee-kuiper-simulator'">Kuiper Simulator</button>
    <button class="tab-button" onclick="window.location.href='/employee-corporate-policy-generator'">Policy Generator</button>
    <button class="tab-button" onclick="window.location.href='/employee-reality-status'">Reality Check Status</button>
    <button class="tab-button" onclick="window.location.href='/employee-jobs'">Interdimensional Job Board</button>    
</div>

<div class="portal-header">
    <h1>Employee Portal</h1>
    <p class="portal-intro">Access your interdimensional work profile, manage quantum benefits, and file complaints about temporal paradoxes.</p>
</div>

<div class="tab-container">

    <div class="portal-card">
        <h2>Log Into Other Dimensions</h2>
        <div class="login-form">
            <div class="form-group">
                <label>Quantum Username</label>
                <input type="text" class="form-input" placeholder="Enter your username across all realities" id="quantum-username">
            </div>
            <div class="form-group">
                <label>Schrödinger's Password</label>
                <input type="password" class="form-input" placeholder="Password simultaneously correct and incorrect" id="quantum-password">
            </div>
            <button class="login-button" onclick="quantumLogin()">Access Multiverse</button>
            <div id="quantum-status" class="quantum-status"></div>
        </div>
    </div>

    <div class="portal-features">
        <div class="feature-card">
            <h3>Quantum Calendar</h3>
            <p>Schedule meetings across parallel timelines. Warning: May cause temporal paradoxes.</p>
        </div>
        <div class="feature-card">
            <h3>Expense Reports</h3>
            <p>File expenses in any universe's currency. Current exchange rate: 1 USD = ∞ Quantum Credits</p>
        </div>
        <div class="feature-card">
            <h3>Performance Matrix</h3>
            <p>View your performance ratings across infinite realities. Somehow still averaging "Meets Expectations."</p>
        </div>
    </div>
</div>

<div id="quantum-field" class="quantum-field"></div>

<script>
function quantumLogin() {
    const username = document.getElementById('quantum-username').value;
    const password = document.getElementById('quantum-password').value;
    const status = document.getElementById('quantum-status');

    const responses = [
        "Login attempt collapsed the quantum waveform. Please try again in another universe.",
        "Access granted in Universe B-172. Unfortunately, you're in Universe C-394.",
        "Password correct and incorrect simultaneously. Schrödinger would be proud.",
        "Error: Your alternate self is already logged in and doing a much better job.",
        "Authentication successful! But your security clearance doesn't exist until next Tuesday."
    ];

    status.style.display = 'block';
    status.textContent = responses[Math.floor(Math.random() * responses.length)];

    // Create quantum uncertainty effect
    status.style.opacity = 0;
    setTimeout(() => {
        status.style.opacity = 1;
    }, 100);
}
</script>
