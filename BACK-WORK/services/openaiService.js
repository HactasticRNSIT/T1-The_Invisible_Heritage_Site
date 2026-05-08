import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateHeritageStory(siteData) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
Generate:
1. Tourist-friendly summary
2. Historical narrative
3. Local folklore
4. 3 interesting facts

Site Info:
${JSON.stringify(siteData)}

Tone:
Immersive, emotional, educational.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}