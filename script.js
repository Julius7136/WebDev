const ctaButtons = document.querySelectorAll(".btn");
const sections = document.querySelectorAll(".section");

ctaButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(0.96)" },
                { transform: "scale(1)" }
            ],
            { duration: 250, easing: "ease-out" }
        );
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));
