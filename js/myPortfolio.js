const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-links");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}))