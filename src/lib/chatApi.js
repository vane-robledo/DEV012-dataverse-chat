//import dataset from "../data/dataset.js";


//export const apiKey = 
const endpoint = "https://api.openai.com/v1/chat/completions";


export function openIAapi(name, textoUsuario) {
    const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Eres ${name} un personaje de one piece por lo tanto responde a todas las preguntas que puedas sobre tu  vida `,
          
          },
          { role: "user", content: textoUsuario }
        ],
      };

    const result = fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });
    return result;
  }
