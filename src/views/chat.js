import dataset from "../data/dataset.js";
import { openIAapi } from "../lib/chatApi.js";
import { personajes } from "../lib/chatApi.js";
//import { data } from "../lib/chatApi.js";

export const renderChat = () => {
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
     
    
   
    
   

    let borrarTextarea = contenedor.querySelector("#inputChat");
    borrarTextarea.value = "";
// aqui coloque el informacion.name
    openIAapi(personajes, textoUsuario)
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
// movi de posicion el chatSection
  contenedor.appendChild(chatSection)
  contenedor.appendChild(inputChat);
  contenedor.appendChild(sendButton);
  ;

  return contenedor;
};
