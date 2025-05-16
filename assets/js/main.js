
// Script for while scrolling active menu color dynamically change/
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".navbar-nav .nav-item");
    const sections = document.querySelectorAll("section");

    function setActiveMenuItem(id) {
        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.querySelector("a").getAttribute("href") === `#${id}`) {
                item.classList.add("active");
            }
        });
    }
    // Click event to update active menu item
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navItems.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
    // Scroll event to update active menu item based on view
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust offset
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setActiveMenuItem(section.getAttribute("id"));
            }
        });
    });
});



// Close the sidebar when a menu item is clicked
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const offcanvasNavbar = document.getElementById("offcanvasNavbar");
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasNavbar);

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            bsOffcanvas.hide(); 
        });
    });
});


// go top button was hide when hero section loading
document.addEventListener("DOMContentLoaded", function () {
    const goTopButton = document.querySelector(".goTopButton");
    const heroSection = document.getElementById("hero");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hero section is in view, hide the button
                goTopButton.style.opacity = '0';
                goTopButton.style.pointerEvents = 'none';
            } else {
                // Hero section is out of view, show the button
                goTopButton.style.opacity = '1';
                goTopButton.style.pointerEvents = 'auto';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(heroSection);
});

// NavBar Blur
window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
