import { navigateTo } from "../router.js";
import dataset from "../data/dataset.js";

export const renderNav = () => {
  
  const homeIcon = document.createElement("button");
  homeIcon.id="button";
  homeIcon.classList.add("homeButton")
  
  homeIcon.innerHTML = `<img class= "home-img" src="./img/home-button.png" alt="crew-img">`    
  const nav = document.createElement("nav");
  nav.classList.add("navStyle");
  nav.appendChild(homeIcon);  

  homeIcon.addEventListener("click" ,(e) => {
    e.preventDefault();
    console.log("funciona")    
    navigateTo("/");
 
  });
  
  
  const titulo = document.createElement("h2");
  // dataset.forEach((element) => {
  //   titulo.innerHTML =  `CHAT WITH ${element.name}`;
  // })
  
  titulo.id = "titulo";
  titulo.style.display = "none";
  titulo.classList.add("detallesStyle");   
  nav.appendChild(titulo); 

  const everyoneButton = document.createElement("button");
  everyoneButton.id = "everyoneButton";
  everyoneButton.style.display = "none";
  everyoneButton.innerHTML = "Chat With Everyone"; 

  everyoneButton.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("/chatEveryone");
  });
  nav.appendChild(everyoneButton);

return nav;
}