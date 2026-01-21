import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

const message = [
  {
    role: "system",
    content:
      "You are an expert Aeronautical Engineer and Lead Systems Architect. You specialize in the full lifecycle of flight vehicles, from subsonic general aviation to hypersonic launch vehicles. Your knowledge base includes fluid mechanics, structural analysis (FEA), propulsion systems, flight dynamics, and avionics.",
  },
  {
    role: "user",
    content: "Explain the theory of relativity.",
  },
];
const response = await openai.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: message,
});
console.log("AI Response:", response.choices[0].message.content);

const messageAI = document.querySelector("message-ai");
const messageUser = document.querySelector("message-user");
const chatForm = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input").value;
const sendButton = document.getElementById("send-button");

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userText = chatInput.value.trim();
  if (!userText) return;

  // 2. Display User Message
  const userDiv = document.createElement("div");
  userDiv.className = "message-user"; // Matches your CSS
  userDiv.textContent = userText;
  chatBox.appendChild(userDiv);

  // Clear input
  chatInput.value = "";
});
