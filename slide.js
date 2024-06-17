

const slides = document.querySelectorAll("#slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImages();
    }
}

const goBack = () => {
    if (counter != 0) {
        counter--;
        slideImages();
    }
}

const slideImages = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}