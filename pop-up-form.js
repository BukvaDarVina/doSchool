document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-form");
    const btn = document.querySelector(".btn-active-popup");
    const closeBtn = document.getElementById("popup-form-close");

    btn.addEventListener("click", function() {
        popup.style.display = "flex"; 
        popup.setAttribute("aria-hidden", "false"); 
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none"; 
        popup.setAttribute("aria-hidden", "true"); 
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none"; 
            popup.setAttribute("aria-hidden", "true"); 
        }
    });
});
