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
      "Summarize  exactly 2 sentences. Keep the total length under 500 words. Always end with a full stop. And keep it simple so that a 10 year old can understand.",
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
