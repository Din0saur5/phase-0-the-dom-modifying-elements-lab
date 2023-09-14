
const main = document.querySelector("main#main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Dan is the champion";
//took so long because i kept trying to append first