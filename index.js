const brand = document.getElementById("nav-brand")
brand.addEventListener("click", function () {
    const nav = document.getElementById("nav")
    nav.classList.toggle("d-none")
})