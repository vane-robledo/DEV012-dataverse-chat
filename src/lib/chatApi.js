import dataset from "../data/dataset.js";



//export const apiKey = 
// if(process.env.APIKEY){
//     console.log('API', process.env.APIKEY);
// }
const endpoint = "https://api.openai.com/v1/chat/completions";
export const personajes = dataset.map(element => element.name );
//const mapped = data.map(element => element.facts[analyzeProperty] === value ? 1 : 0);
console.log(personajes);


export function openIAapi(personajes, textoUsuario) {
   
    const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Eres ${personajes} un personaje de one piece por lo tanto responde a todas las preguntas que puedas sobre tu  vida `,
            content: `Eres todos los ${personajes} personajes de one piece por lo tanto responde de manera grupal a todas las preguntas que puedas sobre sus vidas`,
          
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
