// Smooth reveal animation when sections enter the screen

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Highlight the active navigation link

const navLinks = document.querySelectorAll("nav a");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    },
    {
        threshold: 0.45
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});
