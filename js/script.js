// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Add active class to navigation on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

console.log("San Francisco Balalaika Ensemble website loaded successfully!");

// Slideshow Configuration
const SLIDESHOW_CONFIG = {
    images: [
        "hero-bg.jpg",
        "Concert 11-2010 group shot.jpg",
        "Concert 11-2010-3 group shot.jpg",
        "Concert 11-2010-Anna.jpg",
        "Balalaika trio-Grisha-Clark-Josh.jpg",
        "Balalaika_935d.jpg",
        "Balalaika_944c.jpg",
        "Balalaika_970d.jpg",
        "Clark-balalaika 2.jpg",
        "SFBE- Clark and Anna at SF Opera-6-28-09 cropped.jpg",
    ],
    interval: 5000, // Auto-advance every 5 seconds
    folder: "images/slideshow/",
};

// Initialize Slideshow
const initSlideshow = () => {
    const container = document.getElementById("slideshow");
    if (!container) return;

    const track = document.createElement("div");
    track.className = "slideshow-track";

    // Create slides with blurred backgrounds
    SLIDESHOW_CONFIG.images.forEach((filename) => {
        const src = SLIDESHOW_CONFIG.folder + filename;
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.innerHTML = `
            <div class="slide-bg" style="background-image: url('${src}')"></div>
            <img src="${src}" alt="Slideshow image">
        `;
        track.appendChild(slide);
    });

    container.appendChild(track);

    // Auto-advance
    let currentIndex = 0;
    const slides = track.querySelectorAll(".slide");
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        container.scrollTo({
            left: currentIndex * container.clientWidth,
            behavior: "smooth",
        });
    }, SLIDESHOW_CONFIG.interval);
};

initSlideshow();
