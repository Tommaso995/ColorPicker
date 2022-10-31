let btn = document.querySelector(".btn");

btn.addEventListener("click", function(e) {
    e.prevendDefault();
    console.log("Clicked!");

    let sfondo = btn.style.backgroundColor;
    let target = document.querySelector("#changingBg");
    console.log(target);

    target.style.backgroundColor= sfondo;
});