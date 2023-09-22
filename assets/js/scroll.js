document.addEventListener("DOMContentLoaded", function() {
    const barra = document.querySelector(".barra");
    const barraHeight = barra.clientHeight;
    let lastScrollPosition = 0;

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > lastScrollPosition) {
            barra.style.transform = `translateY(-${barraHeight}px)`;
        } else {
            barra.style.transform = "translateY(0)";
        }

        lastScrollPosition = scrollPosition;
    });
});
