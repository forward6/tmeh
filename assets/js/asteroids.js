// Game constants
const SHIP_SIZE = 20;
const INITIAL_ASTEROID_COUNT = 1;  // Changed from 3 to 1
const ASTEROID_INCREMENT = 1;
const BULLET_SPEED = 7;
const ASTEROID_SPEED = 2;
const BULLET_SIZE = 4;
const ASTEROID_SIZES = {
    large: 80,
    medium: 40
};
const ROTATION_SPEED = 0.1;
const SHIP_MOVEMENT_SPEED = 5;

// Game state
let gameStarted = false;
let gameOver = false;
let level = 1;
let score = 0;
let ship = {
    x: 0,
    y: 0,
    rotation: 0,
    rotationSpeed: 0.1
};
let bullets = [];
let asteroids = [];
let targetPos = null;
let isRotatingLeft = false;
let isRotatingRight = false;

// Get canvas context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Core game function definitions first
function updateHUD() {
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("level").textContent = `Level: ${level}`;
    document.getElementById("asteroids-remaining").textContent = `Asteroids: ${asteroids.length}`;
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ship.x = canvas.width / 2;
    ship.y = canvas.height - 100;
}

function handleTouch(event) {
    if (gameStarted && !gameOver) {
        event.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const x = event.type.includes('touch') ?
            event.touches[0].clientX - rect.left :
            event.clientX - rect.left;
        const y = event.type.includes('touch') ?
            event.touches[0].clientY - rect.top :
            event.clientY - rect.top;
        targetPos = { x, y };
    }
}

function fireBullet() {
    const bulletX = ship.x + Math.cos(ship.rotation) * SHIP_SIZE;
    const bulletY = ship.y + Math.sin(ship.rotation) * SHIP_SIZE;
    const bulletVelX = Math.cos(ship.rotation) * BULLET_SPEED;
    const bulletVelY = Math.sin(ship.rotation) * BULLET_SPEED;

    bullets.push({
        x: bulletX,
        y: bulletY,
        velX: bulletVelX,
        velY: bulletVelY
    });
}

function spawnLargeAsteroid() {
    const edge = Math.floor(Math.random() * 4);
    let x, y, velX, velY;

    switch(edge) {
        case 0: // Top
            x = Math.random() * canvas.width;
            y = -ASTEROID_SIZES.large;
            velX = (Math.random() - 0.5) * ASTEROID_SPEED;
            velY = Math.random() * ASTEROID_SPEED;
            break;
        case 1: // Right
            x = canvas.width + ASTEROID_SIZES.large;
            y = Math.random() * canvas.height;
            velX = -Math.random() * ASTEROID_SPEED;
            velY = (Math.random() - 0.5) * ASTEROID_SPEED;
            break;
        case 2: // Bottom
            x = Math.random() * canvas.width;
            y = canvas.height + ASTEROID_SIZES.large;
            velX = (Math.random() - 0.5) * ASTEROID_SPEED;
            velY = -Math.random() * ASTEROID_SPEED;
            break;
        case 3: // Left
            x = -ASTEROID_SIZES.large;
            y = Math.random() * canvas.height;
            velX = Math.random() * ASTEROID_SPEED;
            velY = (Math.random() - 0.5) * ASTEROID_SPEED;
            break;
    }

    asteroids.push({
        x: x,
        y: y,
        velX: velX,
        velY: velY,
        size: 'large'
    });
}

function createAsteroidFragments(asteroid) {
    const fragmentCount = 3;
    const speed = ASTEROID_SPEED * 1.5;
    const fragments = [];

    for (let i = 0; i < fragmentCount; i++) {
        const angle = (Math.PI * 2 * i) / fragmentCount;
        fragments.push({
            x: asteroid.x,
            y: asteroid.y,
            velX: Math.cos(angle) * speed + asteroid.velX * 0.5,
            velY: Math.sin(angle) * speed + asteroid.velY * 0.5,
            size: 'medium'
        });
    }

    return fragments;
}

// Game control functions
function startGame() {
    gameStarted = true;
    gameOver = false;
    level = 1;
    score = 0;
    bullets = [];
    ship.x = canvas.width / 2;
    ship.y = canvas.height / 2;  // Changed from height - 100 to height / 2
    ship.rotation = 0;
    startLevel();
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    document.getElementById('level-complete-screen').classList.add('hidden');
    gameLoop();
}

function startLevel() {
    asteroids = [];
    const asteroidCount = INITIAL_ASTEROID_COUNT + (level - 1) * ASTEROID_INCREMENT;
    for (let i = 0; i < asteroidCount; i++) {
        spawnLargeAsteroid();
    }
    updateHUD();
}

function nextLevel() {
    level++;
    startLevel();
    document.getElementById('level-complete-screen').classList.add('hidden');
    gameStarted = true;
    gameLoop();
}

function endGame() {
    gameOver = true;
    document.getElementById('final-score').textContent = score;
    document.getElementById('game-over-screen').classList.remove('hidden');
}

// Drawing functions
function drawShip() {
    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(ship.rotation);

    ctx.beginPath();
    ctx.moveTo(SHIP_SIZE, 0);
    ctx.lineTo(-SHIP_SIZE/2, -SHIP_SIZE/2);
    ctx.lineTo(-SHIP_SIZE/2, SHIP_SIZE/2);
    ctx.closePath();

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
}

function drawBullets() {
    ctx.fillStyle = 'red';
    bullets.forEach(bullet => {
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, BULLET_SIZE/2, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawAsteroids() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;

    asteroids.forEach(asteroid => {
        const size = ASTEROID_SIZES[asteroid.size];
        ctx.beginPath();
        ctx.arc(asteroid.x, asteroid.y, size/2, 0, Math.PI * 2);
        ctx.stroke();
    });
}

// Update functions
function updateShip() {
    if (isRotatingLeft) {
        ship.rotation -= ship.rotationSpeed;
    }
    if (isRotatingRight) {
        ship.rotation += ship.rotationSpeed;
    }

    if (targetPos) {
        const dx = targetPos.x - ship.x;
        const dy = targetPos.y - ship.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const targetAngle = Math.atan2(dy, dx);

        let angleDiff = targetAngle - ship.rotation;
        while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
        while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

        if (Math.abs(angleDiff) > 0.1) {
            ship.rotation += Math.sign(angleDiff) * ROTATION_SPEED;
        }

        if (distance > 5) {
            const ratio = SHIP_MOVEMENT_SPEED / distance;
            ship.x += dx * ratio;
            ship.y += dy * ratio;
        } else {
            targetPos = null;
        }
    }
}

function updateBullets() {
    bullets = bullets.filter(bullet => {
        bullet.x += bullet.velX;
        bullet.y += bullet.velY;
        return bullet.x >= 0 && bullet.x <= canvas.width &&
               bullet.y >= 0 && bullet.y <= canvas.height;
    });
}

function handleCollisions() {
    let asteroidsToAdd = [];
    let indexesToRemove = new Set();

    // Check each asteroid against bullets
    for (let i = 0; i < asteroids.length; i++) {
        if (indexesToRemove.has(i)) continue;

        const asteroid = asteroids[i];
        const asteroidSize = ASTEROID_SIZES[asteroid.size];

        // Check for bullet collisions
        for (let j = bullets.length - 1; j >= 0; j--) {
            const bullet = bullets[j];
            const dx = bullet.x - asteroid.x;
            const dy = bullet.y - asteroid.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < asteroidSize/2) {
                // Remove bullet
                bullets.splice(j, 1);

                // Handle asteroid break-up
                if (asteroid.size === 'large') {
                    // Create fragments
                    const fragments = createAsteroidFragments(asteroid);
                    asteroidsToAdd = [...asteroidsToAdd, ...fragments];
                    indexesToRemove.add(i);
                    score += 10;
                } else {
                    // Medium asteroid - just remove it
                    indexesToRemove.add(i);
                    score += 20;
                }
                updateHUD();
                break;
            }
        }

        // Check for ship collision if asteroid wasn't destroyed
        if (!indexesToRemove.has(i)) {
            const dx = ship.x - asteroid.x;
            const dy = ship.y - asteroid.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < (asteroidSize + SHIP_SIZE)/2) {
                endGame();
                return;
            }
        }
    }

    // Remove destroyed asteroids and add new fragments
    asteroids = asteroids.filter((_, index) => !indexesToRemove.has(index));
    asteroids = asteroids.concat(asteroidsToAdd);
}

function updateAsteroids() {
    let asteroidsToAdd = [];
    let indexesToRemove = new Set();

    // Update positions and handle wrapping
    for (let i = 0; i < asteroids.length; i++) {
        if (indexesToRemove.has(i)) continue;

        const asteroid = asteroids[i];
        asteroid.x += asteroid.velX;
        asteroid.y += asteroid.velY;

        const asteroidSize = ASTEROID_SIZES[asteroid.size];

        // Wrap around screen edges
        if (asteroid.x < -asteroidSize) asteroid.x = canvas.width + asteroidSize;
        if (asteroid.x > canvas.width + asteroidSize) asteroid.x = -asteroidSize;
        if (asteroid.y < -asteroidSize) asteroid.y = canvas.height + asteroidSize;
        if (asteroid.y > canvas.height + asteroidSize) asteroid.y = -asteroidSize;

        // Check for collisions with other asteroids
        for (let j = i + 1; j < asteroids.length; j++) {
            if (indexesToRemove.has(j)) continue;

            const otherAsteroid = asteroids[j];
            const dx = asteroid.x - otherAsteroid.x;
            const dy = asteroid.y - otherAsteroid.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (ASTEROID_SIZES[asteroid.size] + ASTEROID_SIZES[otherAsteroid.size]) / 2;

            if (distance < minDistance) {
                // Handle collision based on asteroid sizes
                if (asteroid.size === 'large' && otherAsteroid.size === 'large') {
                    // Create fragments for both asteroids
                    const fragments1 = createAsteroidFragments(asteroid);
                    const fragments2 = createAsteroidFragments(otherAsteroid);
                    asteroidsToAdd = [...asteroidsToAdd, ...fragments1, ...fragments2];
                    indexesToRemove.add(i);
                    indexesToRemove.add(j);
                    score += 20;
                } else if (asteroid.size === 'large' && otherAsteroid.size === 'medium') {
                    // Break up the large asteroid
                    const fragments = createAsteroidFragments(asteroid);
                    asteroidsToAdd = [...asteroidsToAdd, ...fragments];
                    indexesToRemove.add(i);
                    score += 30;
                } else if (asteroid.size === 'medium' && otherAsteroid.size === 'large') {
                    // Break up the large asteroid
                    const fragments = createAsteroidFragments(otherAsteroid);
                    asteroidsToAdd = [...asteroidsToAdd, ...fragments];
                    indexesToRemove.add(j);
                    score += 30;
                }
                // Medium-medium collisions just bounce off each other
                updateHUD();
                break;
            }
        }
    }

    // Remove destroyed asteroids and add new fragments
    asteroids = asteroids.filter((_, index) => !indexesToRemove.has(index));
    asteroids = asteroids.concat(asteroidsToAdd);

    // Handle bullet collisions
    handleCollisions();

    // Check if level is complete
    if (asteroids.length === 0) {
        gameStarted = false;
        document.getElementById('level-complete-screen').classList.remove('hidden');
    }

    updateHUD();
}

// Game Loop
function gameLoop() {
    if (!gameStarted || gameOver) return;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    updateShip();
    updateBullets();
    updateAsteroids();

    drawShip();
    drawBullets();
    drawAsteroids();

    requestAnimationFrame(gameLoop);
}

// Event Listeners
window.addEventListener('load', () => {
    resizeCanvas();
    ship.x = canvas.width / 2;
    ship.y = canvas.height - 100;
});
window.addEventListener('resize', resizeCanvas);

canvas.addEventListener('touchstart', handleTouch);
canvas.addEventListener('mousedown', handleTouch);

document.getElementById('fire-button').addEventListener('click', (e) => {
    e.preventDefault();
    if (gameStarted && !gameOver) {
        fireBullet();
    }
});

document.getElementById('rotate-left').addEventListener('mousedown', () => isRotatingLeft = true);
document.getElementById('rotate-left').addEventListener('mouseup', () => isRotatingLeft = false);
document.getElementById('rotate-left').addEventListener('touchstart', (e) => {
    e.preventDefault();
    isRotatingLeft = true;
});
document.getElementById('rotate-left').addEventListener('touchend', () => isRotatingLeft = false);

document.getElementById('rotate-right').addEventListener('mousedown', () => isRotatingRight = true);
document.getElementById('rotate-right').addEventListener('mouseup', () => isRotatingRight = false);
document.getElementById('rotate-right').addEventListener('touchstart', (e) => {
    e.preventDefault();
    isRotatingRight = true;
});
document.getElementById('rotate-right').addEventListener('touchend', () => isRotatingRight = false);

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', startGame);
document.getElementById('next-level-button').addEventListener('click', nextLevel);


// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (gameStarted && !gameOver) {
        switch(e.key) {
            case ' ': // Spacebar
                e.preventDefault(); // Prevent page scrolling
                fireBullet();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                isRotatingLeft = true;
                break;
            case 'ArrowRight':
                e.preventDefault();
                isRotatingRight = true;
                break;
        }
    }
});

document.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            isRotatingLeft = false;
            break;
        case 'ArrowRight':
            isRotatingRight = false;
            break;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("game-container"); // Use the ID of the target section
    if (target) {
        // Get the vertical position of the target element
        const rect = target.getBoundingClientRect();
        const offset = 100; // Define the offset (e.g., subtract 100 pixels)

        // Scroll to the target position minus the offset
        window.scrollTo({
            top: rect.top + window.scrollY - offset,
            behavior: 'smooth' // Optional: enables smooth scrolling
        });
    }
});
