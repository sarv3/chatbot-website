import React, { useState } from 'react';

function Chatbot() {
    const [userMessage, setUserMessage] = useState("");
    const [botResponse, setBotResponse] = useState("");

    const handleMessage = async (event) => {
        event.preventDefault();

        // Send message to backend
        const response = await fetch('https://sarv3.github.io/chatbot-website/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();
        setBotResponse(data.response);
        setUserMessage('');
    };

    return (
        <div>
            <div id="chatbox">
                <p><strong>User:</strong> {userMessage}</p>
                <p><strong>Bot:</strong> {botResponse}</p>
            </div>
            <form onSubmit={handleMessage}>
                <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Ask me about our language services"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

const API_URL = "https://your-backend-service-url.com/chatbot"; // Replace with your backend URL

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userMessage = input.value.trim();
    if (!userMessage) return;

    const userDiv = document.createElement('p');
    userDiv.textContent = `You: ${userMessage}`;
    chatbox.appendChild(userDiv);

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    const botDiv = document.createElement('p');
    botDiv.textContent = `Bot: ${data.response}`;
    chatbox.appendChild(botDiv);

    chatbox.scrollTop = chatbox.scrollHeight;
    input.value = '';
});

