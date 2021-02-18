document.querySelectorAll(".toggle-nav").forEach(element => element.addEventListener('click', toggleMenu));

function toggleMenu() {
    if(document.getElementById("site-nav").classList.contains("open")) {
        document.getElementById("site-nav").classList.remove("open");
    } else {
        document.getElementById("site-nav").classList.add("open");
    }
}
