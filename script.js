let pulsanteRosso = document.getElementById("rosso");
let pulsanteBlu = document.getElementById("blu");
let pulsanteVerde = document.getElementById("verde");
let pulsanteGrigio = document.getElementById("grigio");

pulsanteRosso.addEventListener("click", cambiaColoreRosso);
pulsanteBlu.addEventListener("click", cambiaColoreBlu);
pulsanteVerde.addEventListener("click", cambiaColoreVerde);
pulsanteGrigio.addEventListener("click", cambiaColoreGrigio);

function cambiaColoreRosso (e) {
    e.preventDefault();
    console.log("Clicked!");

    let target = document.querySelector("#changingBg");
    console.log(target);
    target.style.backgroundColor= pulsanteRosso.innerText;
};

function cambiaColoreBlu (e) {
    e.preventDefault();
    console.log("Clicked!");

    let target = document.querySelector("#changingBg");
    console.log(target);
    target.style.backgroundColor= pulsanteBlu.innerText;
};

function cambiaColoreVerde (e) {
    e.preventDefault();
    console.log("Clicked!");

    let target = document.querySelector("#changingBg");
    console.log(target);
    target.style.backgroundColor= pulsanteVerde.innerText;
};

function cambiaColoreGrigio (e) {
    e.preventDefault();
    console.log("Clicked!");

    let target = document.querySelector("#changingBg");
    console.log(target);
    target.style.backgroundColor= pulsanteGrigio.innerText;
};