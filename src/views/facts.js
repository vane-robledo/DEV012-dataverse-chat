export const renderStats = () => {
    const root = document.querySelector("#root");
    const ul = document.createElement("ul");
    //Render Origin Card
    const liOrigin = document.createElement("li");
    liOrigin.classList.add("cards");
    liOrigin.innerHTML = `
      <h3>Origin Fact</h3>
    <img src= "${"https://cdn.myanimelist.net/s/common/uploaded_files/1447350221-41774e2d831c741252034f3e287dc61d.jpeg"}" alt="origin-img">
    `;
    const pOrigin = document.createElement("p");
    pOrigin.id = "idOrigin";
    liOrigin.appendChild(pOrigin);
    ul.appendChild(liOrigin);
  
    //Render Crew Card
    const liCrew = document.createElement("li");
    liCrew.classList.add("cards");
    liCrew.innerHTML = `
      <h3>Crew Fact</h3>
    <img src= "${"https://i.pinimg.com/originals/ff/e8/e8/ffe8e84d96f9417fec86d2b84470a0b6.jpg"}" alt="crew-img">
    `;
    const pCrew = document.createElement("p");
    pCrew.id = "idCrew";
    liCrew.appendChild(pCrew);
    ul.appendChild(liCrew);
  
    //Render Bounty Card
    const liBounty = document.createElement("li");
    liBounty.classList.add("cards");
    liBounty.innerHTML = `
      <h3>Bounty Fact</h3>
    <img src= "${"https://birdsofherme.files.wordpress.com/2021/08/sanji-bounty.jpg"}" alt="bounty-img">
    `;
    rootRender.innerHTML = "";
    charactersTitle.innerHTML = "Facts"
    rootRender.appendChild(renderStats());
    const origen = document.querySelector("#idOrigin");
    origen.textContent = "Did you know that " + computeStats(data, "seaOfOrigin", "East Blue") + "% of the characters come from East Blue.";
    const crew = document.querySelector("#idCrew");
    crew.textContent = "Did you know that " + computeStats(data, "crewOrigin", "Straw Hat Pirates") + "% of the characters are from Luffy's crew (Straw Hat Pirates)."
    const bounty = document.querySelector("#idBounty");
    bounty.textContent = "Did you know that " + computeStatsBounty(data, "bounty", 315000000) + "% of the characters have a bounty over 315,000,000."
    const pBounty = document.createElement("p");
    pBounty.id = "idBounty";
    liBounty.appendChild(pBounty);
    ul.appendChild(liBounty);
    root.appendChild(ul);
    return ul;
    
}


  