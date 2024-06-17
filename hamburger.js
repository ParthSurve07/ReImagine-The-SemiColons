

let ham = document.getElementById("hamMenu");

const goToHam = () => {
    ham.style.left = 0;
    ham.style.display = `flex`;
}

const backToHome = () => {
    ham.style.left = `100%`;
    ham.style.display = `hidden`;
}