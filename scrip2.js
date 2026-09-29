let ol = document.querySelector("ol");
let ul = document.createElement("ul");
ul.innerHTML = ol.innerHTML;
ol.replaceWith(ul);
ul.classList.add("listado");



let h2 = document.querySelector("h2");
h2.classList.add("destacado");

let items = document.querySelectorAll("li");
let almuerzo = items[3];
// almuerzo.remove();


let nuevo = document.createElement("li");
nuevo.textContent = "Recoger a los niños";
items[2].after(nuevo);

let lista = document.querySelectorAll("li");

lista[0].classList.add("cumplido");
lista[3].classList.add("cumplido");
lista[4].classList.add("cumplido");
lista[1].classList.add("fallido");