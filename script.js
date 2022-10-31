let btn = document.querySelector(".btn");

btn.addEventListener("click", function(e) {
    e.prevendDefault();
    console.log("Clicked!");

    let target = document.querySelector("#contenitore");
    console.log(target);
    target.style.backgroundColor= btn.innerText;
});