export const renderNav = () => {
    
    const homeIcon = document.createElement("a");
    homeIcon.innerHTML = `<img class= "home-button" src= "${"./img/home-button.png"}" alt="crew-img">`    
    const nav = document.createElement("nav");
    nav.appendChild(homeIcon);  
      
  return nav;
  }