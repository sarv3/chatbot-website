// chatbot.js
const form = document.getElementById('chat-form');
const chatbox = document.getElementById('chatbox');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('user-input');
    const message = input.value;

    // Display user message
    const userMessage = document.createElement('p');
    userMessage.textContent = `You: ${message}`;
    chatbox.appendChild(userMessage);

    // Fetch bot response
    const response = await fetch('http://127.0.0.1:5000/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });
    const data = await response.json();

    // Display bot response
    const botMessage = document.createElement('p');
    botMessage.textContent = `Bot: ${data.response}`;
    chatbox.appendChild(botMessage);

    // Clear input
    input.value = '';
});
