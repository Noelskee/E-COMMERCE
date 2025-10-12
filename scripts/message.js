// message.js
document.addEventListener("DOMContentLoaded", function () {
  const techbotContainer = document.getElementById("techbot-container");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const techbotInput = document.getElementById("techbot-input");
  const techbotMessages = document.getElementById("techbot-messages");
  const techbotIcon = document.getElementById("techbot-icon");

  // Toggle chatbot visibility
  techbotIcon.addEventListener("click", function () {
    techbotContainer.classList.replace("chat-hidden","chat-shown");
    techbotIcon.style.display = "none"; // Hide icon
  });

  closeBtn.addEventListener("click", function () {
    techbotContainer.classList.replace("chat-shown","chat-hidden");
    techbotIcon.style.display = "flex"; // Show icon again
  });

  sendBtn.addEventListener("click", sendMessage);
  techbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const userMessage = techbotInput.value.trim();
    if (userMessage) {
      appendMessage("user", userMessage);
      techbotInput.value = "";
      getBotResponse(userMessage);
    }
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    techbotMessages.appendChild(messageElement);
    techbotMessages.scrollTop = techbotMessages.scrollHeight;
  }

  async function getBotResponse(userMessage) {
    const apiKey = ""; // E search ang openai platform teo dara e paste ang api key kay ig execute kung mag ask ka ang modisplay kay ang sorry message
                       // Dili mo dawat ang API if wala siya na encrypt, nang ing.ani siya kay tungod sa security. Paabot nalang ta sa discussion ni sir about APIs -matt
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: userMessage }],
          max_tokens: 150,
        }),
      });

      const data = await response.json();
      const botMessage = data.choices[0].message.content;
      appendMessage("bot", botMessage);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      appendMessage("bot", "⚠️ Sorry, something went wrong. Please try again.");
    }
  }
});
