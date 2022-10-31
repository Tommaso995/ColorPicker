let btn = document.querySelector(".btn");

btn.addEventListener("click", cambiaColore);

function cambiaColore (e) {
    e.preventDefault();
    console.log("Clicked!");

    let target = document.querySelector("#changingBg");
    console.log(target);
    target.style.backgroundColor= btn.innerText;
};
