// import dotenv from 'dotenv';
// dotenv.config();

// let ai;

// (async () => {
//   const { GoogleGenAI } = await import("@google/genai");

//   ai = new GoogleGenAI({
//     apiKey: process.env.GOOGLE_API_KEY,
//   });
// })();

// export default {
//   getAI: () => ai,
// };

import dotenv from 'dotenv';
dotenv.config();

let aiInstance = null;

(async () => {
  const { GoogleGenAI } = await import('@google/genai');

  aiInstance = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
  });
})();

const getAI = () => {
  if (!aiInstance) {
    throw new Error("GoogleGenAI not initialized yet");
  }
  return aiInstance;
};

export default getAI;
