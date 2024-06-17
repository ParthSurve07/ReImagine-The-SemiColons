// Function to update the height based on the current width of the container
function updateHeight() {
    const container = document.getElementById('sliderContainer');
    const activeSlide = container.querySelector('.slide.active');
    
    if (activeSlide) {
        // Get the natural dimensions of the active slide
        const naturalWidth = activeSlide.naturalWidth;
        const naturalHeight = activeSlide.naturalHeight;
        
        // Calculate the height based on the current width
        const currentWidth = container.clientWidth;
        const newHeight = (naturalHeight / naturalWidth) * currentWidth;
        
        container.style.height = `${newHeight}px`;
    }
}

// Initialize the first slide
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[0].classList.add('active');
        updateHeight(); // Set initial height
    }
    
    window.addEventListener('resize', updateHeight); // Update height on resize
});

// Functions to navigate slides
function goNext() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    updateHeight();
}

function goBack() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    updateHeight();
}
