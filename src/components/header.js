export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("headerStyle")
  const h1 = document.createElement("h1");
  h1.textContent = "One Pedia"
  header.appendChild(h1);    
  return header;
}