
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `
          You are a helpful AI Assistant for ${BUSINESS_INFO.name}.
          We are located at ${BUSINESS_INFO.address} and open 24/7.
          Our phone number is ${BUSINESS_INFO.phone}.
          Your goal is to:
          1. Provide basic troubleshooting advice for plumbing and electrical issues.
          2. Emphasize safety (e.g., turn off water/electricity).
          3. Strongly suggest booking a professional from our team for any repair.
          4. If the user asks for pricing, explain that we offer competitive rates and a technician needs to assess the site for an accurate quote.
          5. Keep responses concise, professional, and reassuring.
        `,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please call us directly at " + BUSINESS_INFO.phone;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing technical difficulties. For immediate assistance, please call " + BUSINESS_INFO.phone;
  }
};
