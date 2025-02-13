document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transition = "opacity 1.5s ease-in-out";
        setTimeout(() => sec.style.opacity = "1", 500);
    });
});
