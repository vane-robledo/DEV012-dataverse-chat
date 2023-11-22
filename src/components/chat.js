import { openIAapi, openIAapiIndividual } from "../lib/chatApi.js";
import { characters } from "../lib/chatApi.js";


export const renderChat = (element) => {
  const container = document.createElement("div");
  container.id = "chatContainer";
  const chatSection = document.createElement("section");
  chatSection.id = "chatSection";
  const divTextarea= document.createElement("div");
  divTextarea.classList.add("divTextarea")
  let inputChat = document.createElement("textarea");
  inputChat.id = "inputChat";
  inputChat.placeholder = "Chat with your favourite character";
  let sendButton = document.createElement("button");
  sendButton.id = "sendButton";
  sendButton.innerHTML = `<i class="bi bi-send"></i>`;

  sendButton.addEventListener("click", (e) => {
    
    let userText = container.querySelector("#inputChat").value;
    let showUserText = document.createElement("p");
    
    
    showUserText.innerHTML = userText;
    showUserText.style.color = "blue"
    chatSection.appendChild(showUserText);
     
    let clearTextarea = container.querySelector("#inputChat");    
    clearTextarea.value = "";
    const route = window.location.pathname;    
    if(route === "/panel"){
    openIAapi(characters, userText)
      .then((response) => response.json())

      .then((data) => { 
        let apiAnswer = document.createElement("p");
        apiAnswer.innerHTML = data.choices[0].message.content;
        chatSection.appendChild(apiAnswer);
      })

      .catch((error) => {
        console.error("Error en la solicitud:", error);
        let apiError = document.createElement("p");
        apiError.innerHTML = "Error!";
        apiError.style.color = "red";
        apiError.style.fontSize = "25px";
        container.appendChild(apiError);
      }) 
    } else{
      openIAapiIndividual(element.name, userText)
      .then((response) => response.json())
      .then((data) => {
        let apiAnswer = document.createElement("p");
        apiAnswer.innerHTML = data.choices[0].message.content;
        chatSection.appendChild(apiAnswer);
      })

      .catch((error) => {
        console.error("Error en la solicitud:", error);        
        let apiError = document.createElement("p");
        apiError.innerHTML = "Error!";
        apiError.style.color = "red";
        apiError.style.fontSize = "25px";
        container.appendChild(apiError);
      }) 
    }
  });
  container.appendChild(chatSection);
  divTextarea.appendChild(inputChat);
  divTextarea.appendChild(sendButton);
  container.appendChild(divTextarea); 

  return container;
};
