
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateAIResponse = async (prompt: string, history: { role: string, content: string }[]) => {
  const ai = getAIClient();
  
  // Transform history to contents format
  const contents = history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  // Add current prompt
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: "Вы — профессиональный ассистент AI Studio Nexus. Ваша задача — помогать пользователям, отвечать на вопросы о веб-технологиях и дизайне. Будьте вежливы, кратки и профессиональны. Общайтесь на русском языке.",
        temperature: 0.7,
      },
    });

    return response.text || "Извините, я не смог сгенерировать ответ.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Произошла ошибка при обращении к ИИ. Пожалуйста, проверьте соединение.";
  }
};
