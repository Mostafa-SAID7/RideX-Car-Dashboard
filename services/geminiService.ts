
import { GoogleGenAI, Type } from "@google/genai";
import { Guide, Post, Recommendation } from "../types";

export const getAiRecommendations = async (topic: string, content: (Post | Guide)[]): Promise<Recommendation[]> => {
  const contentSummaries = content.map(item => ({
    id: item.id,
    title: item.title,
    type: 'excerpt' in item ? 'post' : 'guide',
    description: 'excerpt' in item ? item.excerpt : `A guide about ${item.category}.`
  }));

  const prompt = `
    Based on the topic "${topic}", recommend up to 3 relevant posts or guides from the following list.
    For each recommendation, provide a short, compelling reason (max 15 words) why it's a good match.
    Only use the content provided in the list. Do not make up content.
    Return the response as a JSON array.

    Content List:
    ${JSON.stringify(contentSummaries, null, 2)}
  `;

  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return [];
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: {
                type: Type.STRING,
                description: 'The ID of the recommended post or guide from the list.',
              },
              title: {
                type: Type.STRING,
                description: 'The title of the recommended post or guide.',
              },
              reason: {
                type: Type.STRING,
                description: 'A short reason for the recommendation (max 15 words).',
              },
               type: {
                type: Type.STRING,
                description: 'The type of the content, either "post" or "guide".',
              }
            },
            required: ["id", "title", "reason", "type"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const cleanJsonText = jsonText.replace(/^```json\s*|```\s*$/g, '');
    const recommendations = JSON.parse(cleanJsonText) as Recommendation[];
    return recommendations;
  } catch (error) {
    console.error("Error getting AI recommendations:", error);
    return [];
  }
};
