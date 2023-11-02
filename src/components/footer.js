export const renderFooter = () => {
  const footer = document.createElement("footer");
  const p = document.createElement("p")
  p.textContent= " Autoras: Vanessa Robledo- Yanina Chiolo- Yamileth Caldera";
  footer.appendChild(p)
  return footer;
}