---
layout: default
title: "Corporate Policy Generator"
permalink: /about/policy-generator/
---

<style>
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

.policy-container {
  max-width: 800px;
  margin: 2rem auto;
}

.policy-card {
  background: rgba(30, 41, 59, 0.5);
  padding: 2rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
}

.policy-button {
  display: block;
  width: 100%;
  padding: 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.policy-button:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

.policy-output {
  background: rgba(15, 23, 42, 0.3);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  min-height: 200px;
}

.policy-title {
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.policy-section {
  margin-bottom: 1.5rem;
}

.policy-section h3 {
  color: #60a5fa;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.quantum-warning {
  background: rgba(239, 68, 68, 0.1);
  border-left: 4px solid #ef4444;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 0.5rem 0.5rem 0;
}

@media (max-width: 768px) {
  .policy-card {
    padding: 1rem;
  }
}
</style>

<div class="background-container">
    <div class="background-overlay"></div>
</div>

<section class="about-header">
    <h1>Corporate Policy Generator</h1>
    <p class="about-intro">Generate quantum-compliant corporate policies that adhere to all possible realities simultaneously. Warning: All policies are binding across infinite dimensions.</p>
</section>

<div class="policy-container">
    <div class="policy-card">
        <button class="policy-button" onclick="generatePolicy()">Generate New Policy</button>
        <div id="policy-output" class="policy-output">
            <div class="quantum-warning">
                Please initialize the quantum policy matrix by clicking the button above. All generated policies are simultaneously official and unofficial until observed by management.
            </div>
        </div>
    </div>
</div>

<script>
const subjects = [
    "Time Travel During Work Hours",
    "Quantum Coffee Break Protocol",
    "Interdimensional Meeting Etiquette",
    "Alternative Timeline Expense Reports",
    "Parallel Universe Dress Code",
    "Multiversal Email Signature Requirements",
    "Schrödinger's PTO Policy",
    "Non-Euclidean Workspace Guidelines",
    "Quantum Entangled Device Usage",
    "Temporal Paradox Prevention"
];

const rules = [
    "must be approved by your supervisor in at least three parallel universes",
    "requires filing Form QX-42 across all possible timelines",
    "is strictly prohibited unless you exist in a quantum superposition",
    "must maintain causality compliance at all times",
    "should avoid creating temporal paradoxes during meetings",
    "needs to be documented in the interdimensional employee handbook",
    "must not violate the laws of physics (suggestions optional)",
    "requires quantum encryption and temporal backup",
    "should be coordinated with your alternate selves",
    "must maintain timeline consistency within 3 sigma"
];

const consequences = [
    "may result in temporal displacement of your coffee break privileges",
    "could cause a reality fork requiring extensive paperwork",
    "risks quantum decoherence of your employee benefits",
    "may trigger an audit by the Department of Temporal Affairs",
    "could lead to mandatory quantum sensitivity training",
    "might collapse your wave function of employment",
    "risks creation of an evil alternate universe twin",
    "may cause unstable probability fluctuations in the break room",
    "could result in merged timelines with accounting",
    "might require recalibration of your quantum employee ID"
];

const exceptions = [
    "during scheduled maintenance of the space-time continuum",
    "when Mercury is in retrograde across multiple dimensions",
    "if approved by a quantum-certified manager",
    "during interdimensional fire drills",
    "when the office exists in a superposition of locations",
    "if you've filed the appropriate paradox prevention paperwork",
    "during designated reality maintenance windows",
    "when parallel universe syncing is in progress",
    "if you have a note from your quantum physician",
    "during corporate-approved timeline branches"
];

function generatePolicy() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const rule = rules[Math.floor(Math.random() * rules.length)];
    const consequence = consequences[Math.floor(Math.random() * consequences.length)];
    const exception = exceptions[Math.floor(Math.random() * exceptions.length)];

    const policy = `
        <div class="policy-title">Policy Regarding: ${subject}</div>

        <div class="policy-section">
            <h3>Official Policy Statement:</h3>
            <p>All employees should be aware that ${subject.toLowerCase()} ${rule}.</p>
        </div>

        <div class="policy-section">
            <h3>Consequences of Non-Compliance:</h3>
            <p>Violation of this policy ${consequence}.</p>
        </div>

        <div class="policy-section">
            <h3>Exceptions:</h3>
            <p>This policy may be waived ${exception}.</p>
        </div>

        <div class="quantum-warning">
            Notice: This policy exists in a quantum superposition of enforcement until observed by HR.
        </div>
    `;

    document.getElementById('policy-output').innerHTML = policy;
}
</script>

<section class="about-card" style="margin-top: 2rem;">
    <h2>Policy Compliance Notice</h2>
    <p style="margin-top: 1rem;">All generated policies comply with the Interdimensional Labor Standards Act of 2157 (retroactively applied) and have been approved by the Department of Temporal Affairs. Any temporal paradoxes created by these policies are the responsibility of the employee's past and/or future selves.</p>
</section>

<div id="quantum-field" class="quantum-field"></div>
