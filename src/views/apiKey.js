import { renderHeader } from "./components/header.js";
import { renderNav } from "./components/nav.js";
//import { renderFooter } from "./components/footer.js";

export const renderApiKey  = () => {
    const header = renderHeader();
    const nav = renderNav();
    nav.style.width = "100%";
   // const footer = renderFooter();
    const tittle = document.createElement("h2");
    tittle.innerHTML =  `API KEY`;
    tittle.classList.add("detallesStyle"); 
    tittle.style.marginLeft = "39%";
    const section = document.createElement("section");
    const apiContainer = document.createElement("div");
    apiContainer.classList.add("apiContainer");


    const divFiltro= nav.querySelector(".div-filtros");
    divFiltro.style.display="none";
    const titulo = document.createElement("h2");
    titulo.innerHTML =  `CHAT WITH EVERYONE`;
    titulo.classList.add("detallesStyle"); 
    titulo.style.display = "none";

    const label = document.createElement("label");
    label.innerHTML = "Ingrese su API KEY:"
    const input = document.createElement("textarea");
    input.placeholder = "Ingrese la clave.";
    input.id = "inputApiKey";
    let apiKeyButton = document.createElement("button");
    apiKeyButton.id = "apiKeyButton";
    apiKeyButton.classList.add("button");
    apiKeyButton.innerHTML = "Guardar";



    section.appendChild(header);
    section.appendChild(nav);
    nav.appendChild(tittle);
    apiContainer.appendChild(label);
    apiContainer.appendChild(input);
    apiContainer.appendChild(apiKeyButton);
    section.appendChild(apiContainer);
   // section.appendChild(footer);

    return section;


}