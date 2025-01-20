---
layout: default
title: "Interdimensional Job Board - The Multiverse Employee Handbook"
permalink: /employee-jobs/
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
.about-header {
  text-align: center;
  padding: 4rem 0 2rem;
}

.about-intro {
  max-width: 800px;
  margin: 1.5rem auto;
  color: #94a3b8;
  font-size: 1.2rem;
  line-height: 1.8;
}

.jobs-container {
  max-width: 800px;
  margin: 2rem auto;
}

.job-card {
  background: rgba(30, 41, 59, 0.5);
  padding: 2rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.job-card:hover {
  transform: translateY(-4px);
}

.job-title {
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.job-department {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.job-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.job-badge {
  background: rgba(96, 165, 250, 0.2);
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #60a5fa;
}

.job-description {
  margin: 1rem 0;
}

.job-requirements {
  margin: 1rem 0;
}

.quantum-list {
  list-style: none;
  padding: 0 0 0 1rem;
  margin: 1rem 0;
}

.quantum-list li {
  padding-left: 2.5rem;
  position: relative;
  margin-bottom: 0.75rem;
}

.quantum-list li::before {
  content: '→';
  position: absolute;
  left: 1rem;
  color: #60a5fa;
}

.apply-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.apply-button:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

.quantum-warning {
  background: rgba(239, 68, 68, 0.1);
  border-left: 4px solid #ef4444;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 0.5rem 0.5rem 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .job-card {
    padding: 1rem;
  }

  .job-badges {
    flex-direction: column;
  }
}
</style>

<div class="background-container">
    <div class="background-overlay"></div>
</div>

<div class="tab-list">
    <button class="tab-button" onclick="window.location.href='/employee-portal'">Employee Portal</button>
    <button class="tab-button" onclick="window.location.href='/employee-kepler-simulator'">Kepler Simulator</button>
    <button class="tab-button" onclick="window.location.href='/employee-corporate-policy-generator'">Policy Generator</button>
    <button class="tab-button" onclick="window.location.href='/employee-reality-status'">Reality Check Status</button>
    <button class="tab-button active" onclick="window.location.href='/employee-jobs'">Interdimensional Job Board</button>
</div>

<section class="about-header">
    <h1>Interdimensional Job Board</h1>
    <p class="about-intro">Current openings across the multiverse. All positions offer competitive salary, benefits, and quantum-entangled healthcare coverage (some restrictions apply in parallel universes where physics works differently).</p>
</section>

<div class="jobs-container">


    <div class="job-card">
        <div class="job-title">Quantum Coffee Machine Repair Specialist</div>
        <div class="job-department">Caffeination Continuity Division</div>
        <div class="job-badges">
            <span class="job-badge">Full-Time</span>
            <span class="job-badge">On-Call Across All Realities</span>
            <span class="job-badge">Caffeine Resistance Required</span>
        </div>
        <div class="job-description">
            <p>Maintain the delicate quantum balance of our office coffee machines, ensuring proper brewing across all possible taste profiles simultaneously. Must be able to handle both regular and antimatter coffee emergencies without causing universe-ending annihilation events.</p>
        </div>
        <div class="job-requirements">
            <h3>Requirements:</h3>
            <ul class="quantum-list">
                <li>Advanced certification in Quantum Brewing Dynamics</li>
                <li>Minimum 3 years experience with antimatter coffee containment</li>
                <li>Ability to taste coffee in multiple quantum states simultaneously</li>
                <li>Strong understanding of caffeine-timeline coherence principles</li>
                <li>Experience preventing temporal paradoxes caused by pre-coffee decisions</li>
                <li>Certification in Break Room Singularity Prevention</li>
            </ul>
        </div>
        <a href="mailto:&#112;&#111;&#100;&#99;&#97;&#115;&#116;&#64;&#109;&#117;&#108;&#116;&#105;&#118;&#101;&#114;&#115;&#101;&#101;&#109;&#112;&#108;&#111;&#121;&#101;&#101;&#104;&#97;&#110;&#100;&#98;&#111;&#111;&#107;&#46;&#99;&#111;&#109;" class="apply-button">Brew Your Future</a>
    </div>

    <div class="job-card">
        <div class="job-title">Quantum Uncertainty Principal</div>
        <div class="job-department">Department of Temporal Education</div>
        <div class="job-badges">
            <span class="job-badge">Full-Time</span>
            <span class="job-badge">Hybrid (Space-Time)</span>
            <span class="job-badge">Multiple Realities</span>
        </div>
        <div class="job-description">
            <p>Seeking a dynamic educator to lead our interdimensional academy. Must be comfortable existing in multiple states simultaneously and able to teach quantum physics to students who may or may not exist.</p>
        </div>
        <div class="job-requirements">
            <h3>Requirements:</h3>
            <ul class="quantum-list">
                <li>PhD in Quantum Education or equivalent experience across parallel timelines</li>
                <li>Ability to maintain coherence during parent-teacher conferences</li>
                <li>Strong understanding of probability wave classroom management</li>
                <li>Experience with non-Euclidean geometry lesson planning</li>
            </ul>
        </div>
        <a href="mailto:&#112;&#111;&#100;&#99;&#97;&#115;&#116;&#64;&#109;&#117;&#108;&#116;&#105;&#118;&#101;&#114;&#115;&#101;&#101;&#109;&#112;&#108;&#111;&#121;&#101;&#101;&#104;&#97;&#110;&#100;&#98;&#111;&#111;&#107;&#46;&#99;&#111;&#109;" class="apply-button">Apply Across All Realities</a>
    </div>

    <div class="job-card">
        <div class="job-title">Interdimensional IT Support Specialist</div>
        <div class="job-department">Quantum Help Desk</div>
        <div class="job-badges">
            <span class="job-badge">Full-Time</span>
            <span class="job-badge">Remote (Any Dimension)</span>
            <span class="job-badge">Entry Level to Infinity</span>
        </div>
        <div class="job-description">
            <p>Join our IT support team in helping employees resolve technical issues across multiple dimensions. Must be comfortable with the fact that every computer simultaneously works and doesn't work until observed.</p>
        </div>
        <div class="job-requirements">
            <h3>Requirements:</h3>
            <ul class="quantum-list">
                <li>CompTIA A+ certification or equivalent in at least three realities</li>
                <li>Experience with quantum debugging and paradox resolution</li>
                <li>Ability to maintain patience when users haven't tried turning it off and on again</li>
                <li>Strong understanding of Schrödinger's Backup Protocols</li>
            </ul>
        </div>
        <a href="mailto:&#112;&#111;&#100;&#99;&#97;&#115;&#116;&#64;&#109;&#117;&#108;&#116;&#105;&#118;&#101;&#114;&#115;&#101;&#101;&#109;&#112;&#108;&#111;&#121;&#101;&#101;&#104;&#97;&#110;&#100;&#98;&#111;&#111;&#107;&#46;&#99;&#111;&#109;" class="apply-button">Apply In This Timeline</a>
    </div>

    <div class="job-card">
        <div class="job-title">Temporal Accounting Manager</div>
        <div class="job-department">Department of Quantum Finance</div>
        <div class="job-badges">
            <span class="job-badge">Full-Time</span>
            <span class="job-badge">Time-Flexible</span>
            <span class="job-badge">Multi-Dimensional Travel Required</span>
        </div>
        <div class="job-description">
            <p>Lead a team of accountants working across multiple timelines to ensure financial compliance in all possible realities. Must be comfortable with numbers that exist in superposition and balance sheets that change based on who's observing them.</p>
        </div>
        <div class="job-requirements">
            <h3>Requirements:</h3>
            <ul class="quantum-list">
                <li>CPA license in this universe and at least two alternates</li>
                <li>Experience with quantum probability bookkeeping</li>
                <li>Ability to reconcile paradoxical transactions</li>
                <li>Strong multidimensional Excel skills</li>
            </ul>
        </div>
        <a href="mailto:&#112;&#111;&#100;&#99;&#97;&#115;&#116;&#64;&#109;&#117;&#108;&#116;&#105;&#118;&#101;&#114;&#115;&#101;&#101;&#109;&#112;&#108;&#111;&#121;&#101;&#101;&#104;&#97;&#110;&#100;&#98;&#111;&#111;&#107;&#46;&#99;&#111;&#109;" class="apply-button">Apply Yesterday</a>
    </div>

    <div class="job-card">
        <div class="job-title">Probability Field Maintenance Technician</div>
        <div class="job-department">Reality Assurance Division</div>
        <div class="job-badges">
            <span class="job-badge">Full-Time</span>
            <span class="job-badge">All Shifts (Temporal)</span>
            <span class="job-badge">Hazard Pay Available</span>
        </div>
        <div class="job-description">
            <p>Keep our probability fields properly calibrated and reality waves coherent. Ensure smooth operation of quantum uncertainty generators and maintain stability of parallel universe interfaces.</p>
        </div>
        <div class="job-requirements">
            <h3>Requirements:</h3>
            <ul class="quantum-list">
                <li>Degree in Reality Engineering or equivalent quantum experience</li>
                <li>Certification in Probability Field Manipulation</li>
                <li>Ability to exist in multiple states without getting dizzy</li>
                <li>Experience with paradox prevention preferred</li>
            </ul>
        </div>
        <a href="mailto:&#112;&#111;&#100;&#99;&#97;&#115;&#116;&#64;&#109;&#117;&#108;&#116;&#105;&#118;&#101;&#114;&#115;&#101;&#101;&#109;&#112;&#108;&#111;&#121;&#101;&#101;&#104;&#97;&#110;&#100;&#98;&#111;&#111;&#107;&#46;&#99;&#111;&#109;" class="apply-button">Apply Across Quantum States</a>
    </div>
</div>

<section class="policy-card" style="margin-top: 2rem;">
    <div class="quantum-warning">
        Note: All positions require the ability to maintain consciousness across multiple realities. The company is an equal opportunity employer across all known and theoretical dimensions. Time travelers are encouraged to apply retroactively.
    </div>
</section>

<div id="quantum-field" class="quantum-field"></div>
