//import { openIAapi } from "../lib/chatApi.js";
//import { data } from "../lib/chatApi.js";

export const renderChat = (informacion) => {
  const contenedor = document.createElement("div");
  contenedor.id = "chatContainer";
  const chatSection = document.createElement("section");
  chatSection.id = "chatSection";

  let inputChat = document.createElement("textarea");
  inputChat.id = "inputChat";
  inputChat.placeholder = "Chatea con tu personaje favorito";
  let sendButton = document.createElement("button");
  sendButton.id = "sendButton";
  sendButton.innerHTML = `<i class="bi bi-send"></i>`;

  sendButton.addEventListener("click", (e) => {
    
    let textoUsuario = contenedor.querySelector("#inputChat").value;
    let mostrarPregunta = document.createElement("p");
    
    console.log(textoUsuario)
    mostrarPregunta.innerHTML = textoUsuario;
    mostrarPregunta.style.color = "blue"
    chatSection.appendChild(mostrarPregunta);
     
    
    //const apiKey = 
    const endpoint = "https://api.openai.com/v1/chat/completions";

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres ${informacion.name} un personaje de one piece por lo tanto responde a todas las preguntas que puedas sobre tu  vida `,
        
        },
        { role: "user", content: textoUsuario }
      ],
    };

    function openIAapi() {
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

   

    let borrarTextarea = contenedor.querySelector("#inputChat");
    borrarTextarea.value = "";

    openIAapi()
      .then((response) => response.json())

      .then((data) => {
        // Mostrar la respuesta en el contenedor

        let respuestaApi = document.createElement("p");

        respuestaApi.innerHTML = data.choices[0].message.content;

        chatSection.appendChild(respuestaApi);
      })

      .catch((error) => {
        console.error("Error en la solicitud:", error);

        let respuestaApiError = document.createElement("p");

        respuestaApiError.innerHTML = "Error de la solicitud";

        contenedor.appendChild(respuestaApiError);
      });
  });

  
  contenedor.appendChild(inputChat);
  contenedor.appendChild(sendButton);
  contenedor.appendChild(chatSection);

  return contenedor;
};
