const loginForm = document.getElementById('login-form');
const loginCard = document.getElementById('login');
const dashboard = document.getElementById('dashboard');
const statusMenu = document.getElementById('status-menu');

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

function addMessage(text) {
    const div = document.createElement('div');
    div.className = 'status-item';
    div.textContent = `${new Date().toLocaleTimeString()} - ${text}`;
    statusMenu.appendChild(div);

    setTimeout(() => {
        div.classList.add('fade-out');
        setTimeout(() => statusMenu.removeChild(div), 1000);
    }, 15000);
}

function cycleMessages() {
    addMessage(messages[msgIndex]);
    msgIndex = (msgIndex + 1) % messages.length;
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginCard.classList.add('hidden');
    dashboard.classList.remove('hidden');
    cycleMessages();
    setInterval(cycleMessages, 5000);
});
