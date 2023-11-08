import { navigateTo } from "../router.js";

export const error= ()=>{
const div = document.createElement("div")
const h1= document.createElement("h1");
h1.classList.add("errorText")
h1.innerHTML="Error 404, página no encontrada";
const imagen = document.createElement("img");
imagen.classList.add("error-img")
imagen.src ="./img/error.png"
setTimeout(() => {
    navigateTo("/")
  }, 2000);
div.appendChild(h1);
div.appendChild(imagen)
return div;
}