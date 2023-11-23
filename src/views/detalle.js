import { renderHeader } from "../components/header.js";
import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderChat } from "../components/chat.js";

export const renderCharacters = (element) => {
  const chat= renderChat(element);
  const header = renderHeader()
  const nav = renderNav();
  nav.style.width = "100%";
  const footer = renderFooter();
  const section= document.createElement("section");
  const section2= document.createElement("section");
  section2.classList.add("chat");
  section2.innerHTML+=`
  <div class = "infoAndImg">
  <img class ="img-chat" src="${element.imageUrl}">
  <h4 class = "infoChatName" itemprop="name">${element.name}</h3>
   <div class="description-queries">
  <h4 class = "infoChat"> "${element.description}"</h4>
  <h4 class = "infoChat">Status: ${element.status}</h4>
  <h4 class = "infoChat">Origin: ${element.seaOfOrigin}</h4>
  <h4 class = "infoChat">Crew: ${element.crewOrigin}</h4>
  <h4 class = "infoChat">Bounty: ${element.bounty}</h4>
   </div>
  </div>` 
  
  const divFilters= nav.querySelector(".div-filtros");
  divFilters.style.display="none";
  const everyoneButton= nav.querySelector("#everyoneButton");
  everyoneButton.style.display= "none";
  const title = nav.querySelector("#titulo");
  title.style.display = "block";
  title.innerHTML =  `CHAT WITH ${element.name}`;
  
  section.appendChild(header);
  section.appendChild(nav); 
  section2.appendChild(chat);
  section.appendChild(section2);  
  section.appendChild(footer);

  return section;
};
