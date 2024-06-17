

let ham = document.getElementById("appear");

const goToHam = () => {
    ham.style.display = `block`;
    ham.style.left = 0;
}

const backToHome = () => {
    ham.style.display = `hidden`;
    ham.style.left = `100%`;
}