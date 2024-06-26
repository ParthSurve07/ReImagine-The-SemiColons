

// For login and cart button
const login = document.querySelector("#login");
const cart = document.querySelector("#cart");
const search = document.querySelector("#search_small");
const login1 = document.querySelector("#login1");

login.addEventListener('mouseenter', () => {
    login.style.color = "black";
    login.style.backgroundColor = "white";
});

login.addEventListener('mouseleave', () => {
    login.style.color = "white";
    login.style.backgroundColor = "black";
});

cart.addEventListener('mouseenter', () => {
    cart.style.color = "black";
    cart.style.backgroundColor = "white";
});

cart.addEventListener('mouseleave', () => {
    cart.style.color = "white";
    cart.style.backgroundColor = "black";
});

search.addEventListener('mouseenter', () => {
    search.style.color = "black";
    search.style.backgroundColor = "white";
});

search.addEventListener('mouseleave', () => {
    search.style.color = "white";
    search.style.backgroundColor = "black";
});

login1.addEventListener('mouseenter', () => {
    login1.style.color = "black";
    login1.style.backgroundColor = "white";
});

login1.addEventListener('mouseleave', () => {
    login1.style.color = "white";
    login1.style.backgroundColor = "black";
});

// Transition for category boxes
const women = document.querySelector("#women");
const wText = document.querySelector("#wText");

women.addEventListener('mouseenter', () => {
    wText.style.opacity = 1;
    wText.style.scale = "250%";
});

women.addEventListener('mouseleave', () => {
    wText.style.opacity = 0;
    wText.style.scale = "100%";
});

const men = document.querySelector("#men");
const mText = document.querySelector("#mText");

men.addEventListener('mouseenter', () => {
    mText.style.opacity = 1;
    mText.style.scale = "250%";
});

men.addEventListener('mouseleave', () => {
    mText.style.opacity = 0;
    mText.style.scale = "100%";
});

const kids = document.querySelector("#kids");
const kText = document.querySelector("#kText");

kids.addEventListener('mouseenter', () => {
    kText.style.opacity = 1;
    kText.style.scale = "250%";
});

kids.addEventListener('mouseleave', () => {
    kText.style.opacity = 0;
    kText.style.scale = "100%";
});

const beauty = document.querySelector("#beauty");
const bText = document.querySelector("#bText");

beauty.addEventListener('mouseenter', () => {
    bText.style.opacity = 1;
    bText.style.scale = "250%";
});

beauty.addEventListener('mouseleave', () => {
    bText.style.opacity = 0;
    bText.style.scale = "100%";
});