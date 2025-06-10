const loginForm = document.getElementById('login-form');
const loginCard = document.getElementById('login');
const dashboard = document.getElementById('dashboard');
const statusPanel = document.getElementById('status-panel');

const canvas = document.getElementById('petri-dish');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const addBtn = document.getElementById('add-bacteria');

let running = false;
let animationId = null;
const bacteria = [];


const messages = [
    'Checking credentials...',
    'Connecting to repository...',
    'Repository sync complete.',
    'Preparing pull request...',
    'Pull request created successfully.',
    'Waiting for CI results...',
    'Build passed! Ready to merge.'
];
let msgIndex = 0;


function addMessage(text, important = false) {
    const div = document.createElement('div');
    div.className = 'status-item';
    if (important) div.classList.add('important');
    div.textContent = `${new Date().toLocaleTimeString()} - ${text}`;
    statusPanel.appendChild(div);

    if (!important) {
        setTimeout(() => {
            div.classList.add('fade-out');
            setTimeout(() => statusPanel.removeChild(div), 1000);
        }, 300000); // 5 minutes
    }

}

function cycleMessages() {
    addMessage(messages[msgIndex]);
    msgIndex = (msgIndex + 1) % messages.length;
}

function createBacterium() {
    const b = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
    };
    bacteria.push(b);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#2c7';
    for (const b of bacteria) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
        ctx.fill();
    }
}

function update() {
    for (const b of bacteria) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0 || b.x > canvas.width) b.vx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.vy *= -1;
    }
    draw();
    if (running) {
        animationId = requestAnimationFrame(update);
    }
}

function start() {
    if (!running) {
        running = true;
        addMessage('Simulation started', true);
        update();
    }
}

function pause() {
    running = false;
    if (animationId) cancelAnimationFrame(animationId);
    addMessage('Simulation paused');
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
addBtn.addEventListener('click', () => {
    createBacterium();
    addMessage('New bacterium added');
});

