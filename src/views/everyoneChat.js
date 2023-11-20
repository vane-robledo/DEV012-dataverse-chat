import { renderHeader } from "../components/header.js";
import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderChat } from "../components/chat.js";
import dataset from "../data/dataset.js";

//const personajes = dataset.map(element => element.name);

export const renderEveryone = () => {
    const header = renderHeader();
    const nav = renderNav();
    const footer = renderFooter();
    const section = document.createElement("section");
    const section2= document.createElement("section");
    const chat = renderChat();
    chat.classList.add("chatStyle");
    section2.classList.add("chat");
    section2.innerHTML+=`
    <div>
    <img class ="img-chat" src="https://i.pinimg.com/originals/86/5b/bc/865bbcb037b84d01f1be694a570e6ad0.jpg">
    <h4 class = "infoChatName" itemprop="name">ALL CHARACTERS</h3>
    </div>`

    const everyoneButton= nav.querySelector("#everyoneButton");
    everyoneButton.style.display= "none";
    const divFiltro= nav.querySelector(".div-filtros");
    divFiltro.style.display="none";
    const titulo = document.createElement("h2");
    titulo.innerHTML =  `CHAT WITH EVERYONE`;
    titulo.classList.add("detallesStyle"); 
    // const tittle = document.createElement("h2");
    // const personajes = `${dataset.id}`;
    // console.log(personajes)
    // tittle.innerHTML = `Chat with ${dataset.name}`;
    // tittle.style.display = "none";  
    nav.appendChild(titulo); 
    //nav.appendChild(tittle);
    section.appendChild(header);
    section.appendChild(nav);
    section2.appendChild(chat)
    section.appendChild(section2);
    section.appendChild(footer);

    return section;
}