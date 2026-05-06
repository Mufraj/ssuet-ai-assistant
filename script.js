async function sendMessage() {

  const input = document.getElementById("user-input");
  const message = input.value;

  if(message.trim() === "") return;

  addMessage(message, "user");

  input.value = "";

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  });

  const data = await response.json();

  addMessage(data.reply, "bot");
}

function addMessage(text, sender) {

  const chatBox = document.getElementById("chat-box");

  const messageDiv = document.createElement("div");

  messageDiv.classList.add("message");
  messageDiv.classList.add(sender);

  messageDiv.innerText = text;

  chatBox.appendChild(messageDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}