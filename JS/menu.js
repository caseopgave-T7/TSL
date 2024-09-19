const burger = document.querySelector(".burger"); /*refererer til burger-ikonet*/
const nav = document.querySelector("nav"); /* refererer til nav-elementet (navigationsmenuen)*/
const menu = document.querySelector(".menu"); /*refererer til elementet med klassen menu, som indeholder navigationslinksene*/
const links = document.querySelectorAll(".menu li a"); /*refererer til alle a-elementer inde i li-elementer inden for menuen*/

burger.addEventListener("click", () => {
  /* tilføjer en klik-begivenhedslytter til burger-ikonet*/
  burger.classList.toggle("active"); /*tilføjer klassen active til burger-ikonet*/
  nav.classList.toggle("active"); /*gør det samme for navigationsmenuen*/
});
