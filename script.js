let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Show the initial slide
showSlide(currentSlide);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Only show the current slide
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);
