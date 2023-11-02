// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';*/

import {
    computeStats,
    computeStatsBounty
} from "./lib/dataFunctions.js";
import { renderStats, renderHome } from "./views/home.js";
import data from "./data/dataset.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { error } from "./views/error.js";

const routes= {"/": renderHome, "/error": error}

const rootRender = document.querySelector("#root");
setRoutes(routes);
setRootElement(rootRender);

rootRender.appendChild(renderHome());




const factsButton = document.getElementById("facts");
const charactersTitle = document.querySelector("h2");


document.addEventListener("DOMContentLoaded", (event)=>{
console.log("sitio cargado");
console.log(event.target.location.pathname);
onURLChange(event.target.location.pathname);
})




factsButton.addEventListener("click", (e) => {
    e.preventDefault();
    rootRender.innerHTML = "";
    charactersTitle.innerHTML = "Facts"
    rootRender.appendChild(renderStats());
    const origen = document.querySelector("#idOrigin");
    origen.textContent = "Did you know that " + computeStats(data, "seaOfOrigin", "East Blue") + "% of the characters come from East Blue.";
    const crew = document.querySelector("#idCrew");
    crew.textContent = "Did you know that " + computeStats(data, "crewOrigin", "Straw Hat Pirates") + "% of the characters are from Luffy's crew (Straw Hat Pirates)."
    const bounty = document.querySelector("#idBounty");
    bounty.textContent = "Did you know that " + computeStatsBounty(data, "bounty", 315000000) + "% of the characters have a bounty over 315,000,000."
});



/*
Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/