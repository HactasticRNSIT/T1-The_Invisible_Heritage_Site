const OpenAI = require("openai");

let client;

function getClient() {
  if (!client) {
    client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  return client;
}

async function generateHeritageStory(siteData) {
  const prompt = `
Generate:
1. A short tourist-friendly summary
2. Historical narrative
3. Local folklore
4. 3 interesting facts

Site Info:
${JSON.stringify(siteData)}

Tone:
Immersive, emotional, educational.
`;

  const response = await getClient().chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = {
  generateHeritageStory,
};
