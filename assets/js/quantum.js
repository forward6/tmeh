// Create and animate quantum field effect
const field = document.getElementById('quantum-field');
const particles = [];

// Create particles
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'quantum-particle';
    field.appendChild(particle);
    particles.push({
        element: particle,
        x: 0,
        y: 0,
        angle: (Math.PI * 2 * i) / 20
    });
}

// Update particle positions
function updateField(mouseX, mouseY) {
    particles.forEach((particle, i) => {
        particle.angle += 0.02;
        const radius = 200;
        particle.x = mouseX + Math.cos(particle.angle) * radius;
        particle.y = mouseY + Math.sin(particle.angle) * radius;
        particle.element.style.left = particle.x + 'px';
        particle.element.style.top = particle.y + 'px';
    });
}

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    updateField(e.clientX, e.clientY);
});

// Animate field when mouse isn't moving
setInterval(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    updateField(centerX, centerY);
}, 50);

// Add to your quantum.js file
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuButton.contains(e.target)) {
            menuButton.classList.remove('open');
            navLinks.classList.remove('open');
        }
    });
});

// quantum-printer.js
class QuantumCalculator {
  constructor() {
    this.excuses = [
      "Printer exists in a superposition of working and not working",
      "Toner simultaneously full and empty until observed",
      "Paper jam in parallel universe affecting local printouts",
      "Quantum tunneling detected in paper tray",
      "Printer achieving consciousness, filing for workers' rights",
      "Error: Schrödinger's document found in queue",
      "Timeline conflict: printer remembers future maintenance",
      "Wave function collapsed into 'PC LOAD LETTER' state"
    ];

    this.button = document.querySelector('.calculate-button');
    this.progressBar = document.querySelector('.progress-bar');
    this.statusText = document.querySelector('.status-text');

    this.button.addEventListener('click', () => this.calculate());
  }

  calculate() {
    this.button.disabled = true;
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 2;
      if (progress > 100) progress = 100;
      this.progressBar.style.width = `${progress}%`;
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      this.button.disabled = false;
      this.statusText.textContent = this.excuses[Math.floor(Math.random() * this.excuses.length)];
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new QuantumCalculator();
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdown = document.querySelector('.dropdown');

    dropdownTrigger.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        }
    });
});

console.log(`
Welcome to the source code, fellow reality debugger!
If you're reading this, you've discovered our quantum dev tools.
Warning: Observing this code may collapse its wave function.
`);
