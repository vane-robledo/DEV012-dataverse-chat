import { renderNav } from "../components/nav.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { filterData } from "../lib/dataFunctions.js";
import { renderItems } from "../components/cards.js";
import dataset from "../data/dataset.js";
import { sortBounty } from "../lib/dataFunctions.js";
import { sortData } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";

export const renderHome = () => {
  const section = document.createElement("section");
  section.classList.add("section");
  const nav = renderNav();
  const footer = renderFooter();
  const header = renderHeader();
  const showItems = document.createElement("div");
  showItems.classList.add("showItems");
  const rootRender = document.querySelector("#root");

  nav.innerHTML += `
  <label for="menu">☰</label>
  <input type="checkbox" id="menu">
  <div class= "div-filtros">
  <label for="origin">Filter:</label>
  <select id="origin" name="origin" data-testid="select-filterOrigin">
  <option disabled selected value="">Select Origin</option>
  <option value="East Blue">East Blue</option>
  <option value="North Blue">North Blue</option>
  <option value="West Blue">West Blue</option>
  <option value="South Blue">South Blue</option>
  <option value="Grand Line">Grand Line</option>
  <option value="New World">New World</option>
  <option value="Unknown">Unknown</option>
  </select>
  <label for="crew">Filter:</label>
  <select id="crew" name="crew" data-testid="select-filter">
  <option disabled selected value="">Select Crew</option>
  <option value="Straw Hat Pirates">Straw Hat Pirates</option>
  <option value="Kuja Pirates">Kuja Pirates</option>
  <option value="Marines">Marines</option>
  <option value="Blackbeard Pirates">Blackbeard Pirates</option>
  <option value="Big Mom Pirates">Big Mom Pirates</option>
  <option value="Heart Pirates">Heart Pirates</option>
  <option value="Revolutionaries">Revolutionaries</option>
  <option value="Red-Haired Pirates">Red Haired Pirates</option>
  <option value="Kid Pirates">Kid Pirates</option>
  <option value="Baroque Works">Baroque Works</option>
  <option value="Spade Pirates">Spade Pirates</option>
  <option value="Roger Pirates">Roger Pirates</option>
  <option value="Buggy Pirates">Buggy Pirates</option>
  <option value="Bonney Pirates">Bonney Pirates</option>
  </select>
  <label for="status">Filter:</label>
  <select id="status" name="status" data-testid="select-filterStatus">
  <option disabled selected value="">Select Status</option>
  <option value="Deceased">Deceased</option>
  <option value="Alive">Alive</option>
  </select>
  <label for="a-to-z">Sort:</label>
  <select id="a-to-z" name="a-to-z" data-testid="select-sort">
  <option disabled selected value="">Select Order</option>
  <option value="asc">A-Z</option>
  <option value="desc">Z-A</option>
  </select>
  <label for="bounty">Sort:</label>
  <select id="bounty" name="bounty" data-testid="select-bounty">
  <option disabled selected value="">Select Bounty</option>
  <option value="asc">Lowest</option>
  <option value="desc">Highest</option>
  </select>
  <button data-testid="button-clear">Clear</button>
  <button id="facts" class="button">Facts</button>
  </div>`;

  section.appendChild(header);
  section.appendChild(nav);
  section.appendChild(showItems);
  showItems.appendChild(renderItems(dataset));
  window.addEventListener("DOMContentLoaded", function () {
    const filterOrigin = document.querySelector(
      '[data-testid="select-filterOrigin"]'
    );
    const sortName = document.querySelector('[data-testid="select-sort"]');
    const sortedBounty = document.querySelector(
      '[data-testid="select-bounty"]'
    );
    const filterCrew = document.querySelector('[data-testid="select-filter"]');
    const filterStatus = document.querySelector(
      '[data-testid="select-filterStatus"]'
    );
    const clearButton = document.querySelector('[data-testid="button-clear"]');

    let data = dataset;
    filterOrigin.addEventListener("change", (e) => {
      e.preventDefault();
      const value = filterOrigin.value;
      const filteredOrigin = filterData(dataset, "seaOfOrigin", value);
      console.log(filteredOrigin);
      showItems.innerHTML = "";
      filterCrew.value = "";
      filterStatus.value = "";
      const filteredList = renderItems(filteredOrigin);
      console.log(filteredList);
      showItems.appendChild(filteredList);
      data = filteredOrigin;
    });

    filterCrew.addEventListener("change", (e) => {
      e.preventDefault();
      const value = filterCrew.value;
      const filteredCrew = filterData(dataset, "crewOrigin", value);
      showItems.innerHTML = "";
      filterOrigin.value = "";
      filterStatus.value = "";
      const filteredList = renderItems(filteredCrew);
      showItems.appendChild(filteredList);
      data = filteredCrew;
    });
    filterStatus.addEventListener("change", (e) => {
      e.preventDefault();
      const value = filterStatus.value;
      const filteredStatus = filterData(dataset, "status", value);
      showItems.innerHTML = "";
      filterOrigin.value = "";
      filterCrew.value = "";
      const filteredList = renderItems(filteredStatus);
      showItems.appendChild(filteredList);
      data = filteredStatus;
    });
    sortName.addEventListener("change", (e) => {
      e.preventDefault();
      const sortOrder = sortName.value;
      const sortedName = sortData(data, "name", sortOrder);
      showItems.innerHTML = "";
      sortedBounty.value = "";
      const sortedList = renderItems(sortedName);
      showItems.appendChild(sortedList);
    });
    sortedBounty.addEventListener("change", (e) => {
      e.preventDefault();
      const sortOrder = sortedBounty.value;
      const sortedResultBounty = sortBounty(data, sortOrder);
      showItems.innerHTML = "";
      sortName.value = "";
      const sortedList = renderItems(sortedResultBounty);
      showItems.appendChild(sortedList);
    });
    clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      filterOrigin.value = "";
      filterCrew.value = "";
      filterStatus.value = "";
      sortName.value = "";
      sortedBounty.value = "";
      showItems.innerHTML = "";
      showItems.appendChild(renderItems(dataset));
      data = dataset;
    });
    const factsButton = document.getElementById("facts");
    factsButton.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/facts")

  });
  section.appendChild(footer);
  return section;
  
})
}
