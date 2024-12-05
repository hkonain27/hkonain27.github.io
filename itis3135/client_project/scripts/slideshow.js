// JavaScript for slideshow functionality
let currentIndex = 0;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active-slide", i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("dot-active", i === index);  // Changed to use .dot-active
    });
}

function plusSlides(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index - 1;
    showSlide(currentIndex);
}

// Attach event listeners to navigation buttons and dots
document.getElementById("prev-btn").addEventListener("click", () => plusSlides(-1));
document.getElementById("next-btn").addEventListener("click", () => plusSlides(1));

dots.forEach((dot) => {  // Added parentheses around the arrow function argument
    dot.addEventListener("click", (e) => {
        const slideIndex = parseInt(e.target.getAttribute("data-slide")) - 1;
        currentSlide(slideIndex);
    });
});

// Auto-play functionality
setInterval(() => plusSlides(1), 5000); // Auto-slide every 5 seconds