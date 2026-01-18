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
    content: "you are knowledgeable about airplanes",
  },
  {
    role: "user",
    content: "tell me about airplanes",
  },
];
const response = await openai.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: message,
});
console.log("AI Response:", response.choices[0].message.content);
