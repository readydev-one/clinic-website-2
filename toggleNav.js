const nav = document.querySelector(".nav-section");
const toggleNav = document.querySelector(".hamburger");
// JavaScript to toggle navigation on hamburger click

    
    // nav.classList.toggle('show'); // Toggle between showing and hiding the nav
    toggleNav.addEventListener('click', () => {
        const visibility = nav.getAttribute("data-visible")

        if (visibility === "false"){
            nav.setAttribute("data-visible", true);  
        } else if (visibility === "true") {
            nav.setAttribute("data-visible", false);
        }
});