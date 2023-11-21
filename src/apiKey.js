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


    const divFilters= nav.querySelector(".div-filtros");
    divFilters.style.display="none";
    const title = document.createElement("h2");
    title.innerHTML =  `CHAT WITH EVERYONE`;
    title.classList.add("detallesStyle"); 
    title.style.display = "none";

    const label = document.createElement("label");
    label.innerHTML = "Enter your API KEY:"
    const input = document.createElement("textarea");
    input.placeholder = "Enter your API KEY";
    input.id = "inputApiKey";
    let apiKeyButton = document.createElement("button");
    apiKeyButton.id = "apiKeyButton";
    apiKeyButton.classList.add("button");
    apiKeyButton.innerHTML = "Save";

    let apiKeyButtonClear = document.createElement("button");
    apiKeyButtonClear.id = "apiKeyButtonClear";
    apiKeyButtonClear.classList.add("button");
    apiKeyButtonClear.innerHTML = "Delete";


 apiKeyButton.addEventListener("click", ()=>{
 localStorage.setItem("apiKey", input.value);

    if(input.value===""){


    }


 })




 apiKeyButtonClear.addEventListener("click", ()=>{
 localStorage.removeItem("apiKey");
 input.value= "";
    })

    section.appendChild(header);
    section.appendChild(nav);
    nav.appendChild(tittle);
    apiContainer.appendChild(label);
    apiContainer.appendChild(input);    
    apiContainer.appendChild(apiKeyButton);
    apiContainer.appendChild(apiKeyButtonClear)
    section.appendChild(apiContainer);
   // section.appendChild(footer);

    return section;


}