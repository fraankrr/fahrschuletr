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

const form = document.getElementById("form")
form.addEventListener("submit", function (event) {
    event.preventDefault()
    //TODO SHOW  spinner
    //TODO collect form entries
    //TODO validate form entries
    const loading = document.getElementById("loading")
    loading.classList.toggle("d-none")
    const forminputs = event.target.querySelectorAll("[type='text']")
    const user = {
        firstname: forminputs[0].value,
        lastname: forminputs[1].value,
    }
    if (user.firstname.length < 2) {
        alert("firstname too short")
    }
    if (user.lastname.length < 2) {
        alert("lastname too short")
    }
    if (user.lastname.indexOf("XXX") !== -1) {
        alert("Usernme not allowed to use XXXX")
    }
})
