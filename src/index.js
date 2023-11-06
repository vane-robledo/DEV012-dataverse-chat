// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
/*
import Example from './views/Example.js';*/
import { computeStats, computeStatsBounty } from "./lib/dataFunctions.js";
import { renderHome } from "./views/home.js";
import data from "./data/dataset.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { error } from "./views/error.js";
import { renderStats } from "./views/facts.js";
import { renderH } from "./views/detalle.js";


const routes = { "/": renderHome, "/facts": renderStats, "/error": error, "/detalle/${element.id}": renderH};
const rootRender = document.querySelector("#root");
setRoutes(routes);
setRootElement(rootRender);

const charactersTitle = document.querySelector("h2");
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("sitio cargado");
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
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
