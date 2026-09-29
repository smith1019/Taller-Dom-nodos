    let div = document.querySelector("div");
    let titulo = document.createElement("h1");
        titulo.textContent = "my presentation";
        div.before(titulo);


    let parrafo = document.querySelector("div p")
    let nuevoP = document.createElement("p");
        nuevoP.textContent = "My best friend is mickey";
        parrafo.after(nuevoP);

    
    let h1 = document.querySelector("h1");
    h1.style.color = "blue";

    let ps = document.querySelectorAll("p");
    ps[1].style.backgroundColor = "orange";
    ps[1].style.fontWeight = "bold";
   