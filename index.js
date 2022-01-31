const brand = document.getElementById("nav-brand")
brand.addEventListener("click", function () {
    const nav = document.getElementById("nav")
    nav.classList.toggle("d-none")
})

const button = document.getElementById("popup-stricter")
button.addEventListener("click", function () {
    const modal = document.getElementById("modal")
    modal.classList.toggle("d-none")
})

