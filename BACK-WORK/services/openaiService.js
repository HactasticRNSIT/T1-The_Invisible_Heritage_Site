import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);

export const generateHeritageStory = async (siteData) => {
  try {
    const { name, location, period, type } = siteData;

    const prompt = `
      Generate a short engaging heritage story about this historical site.

      Name: ${name}
      Location: ${location}
      Historical Period: ${period}
      Type: ${type}

      Keep it informative, emotional, and easy to understand.
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    return {
      success: true,
      story: text,
    };
  } catch (error) {
    console.error("AI Error:", error);

    return {
      success: false,
      message: "AI generation failed",
      error: error.message,
    };
  }
};