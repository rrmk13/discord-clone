document.getElementById('sendMessageButton').addEventListener('click', async function() {
  const message = document.getElementById('messageInput').value;
  if (message) {
    await sendMessage(message);
    document.getElementById('messageInput').value = '';
    loadMessages();
  }
});

async function sendMessage(message) {
  await fetch('http://localhost:3000/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });
}

async function loadMessages() {
  const response = await fetch('http://localhost:3000/api/messages');
  const messages = await response.json();

  const messagesDiv = document.getElementById('messages');
  messagesDiv.innerHTML = messages.map(msg => `<div class="message">${msg}</div>`).join('');
}

loadMessages();
