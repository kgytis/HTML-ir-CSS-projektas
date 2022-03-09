let linkai = document.querySelector(".navigationDiv");
const burger = document.querySelector(".bi-justify");

burger.addEventListener("click", e =>{
    if(linkai.style.display === "flex") {
        linkai.style.display = "none"
    } else {linkai.style.display = "flex"}
})