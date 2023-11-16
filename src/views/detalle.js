import { renderHeader } from "../components/header.js";
import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderChat } from "./chat.js";
import { filterData } from "../lib/dataFunctions.js";
//import { navigateTo } from "../router.js";



export const renderH = (informacion) => {
  const chat= renderChat(informacion);
  const header = renderHeader()
  const nav = renderNav();
  const footer = renderFooter();
  const section= document.createElement("section");
  const section2= document.createElement("section");
  section2.classList.add("chat");
  section2.innerHTML+=`
  <div class = "infoAndImg">
  <img class ="img-chat" src="${informacion.imageUrl}">
  <h4 class = "infoChatName" itemprop="name">${informacion.name}</h3>
  <h4 class = "infoChat"> "${informacion.description}"</h4>
  <h4 class = "infoChat">Status: ${informacion.facts.status}</h4>
  <h4 class = "infoChat">Origin: ${informacion.facts.seaOfOrigin}</h4>
  <h4 class = "infoChat">Crew: ${informacion.facts.crewOrigin}</h4>
  <h4 class = "infoChat">Bounty: ${informacion.facts.bounty}</h4>
  </div>` 
  
  const divFiltro= nav.querySelector(".div-filtros");
  divFiltro.style.display="none";
  const everyoneButton= nav.querySelector("#everyoneButton");
  everyoneButton.style.display= "none";
  const titulo = nav.querySelector("#titulo");
  titulo.style.display = "block";
  titulo.innerHTML =  `CHAT WITH ${informacion.name}`;
  
  
  section.appendChild(header);
  section.appendChild(nav); 
  section2.appendChild(chat);
  section.appendChild(section2);  
  section.appendChild(footer);

  return section;
};