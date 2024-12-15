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

console.log(`
Welcome to the source code, fellow reality debugger!
If you're reading this, you've discovered our quantum dev tools.
Warning: Observing this code may collapse its wave function.
`);
