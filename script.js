

// Loading animation of navbar
const loading_animation = () => {
    gsap.from("#navbar", {
        y: -150,
        duraion: 4,
        delay: 0.4
    })
    
    gsap.from("footer", {
        y: 150,
        duraion: 5,
        delay: 0.8
    })

    gsap.from("#pills", {
        x: '100vw',
        duration: 1.2,
        delay: 0.5
    })

    gsap.from("#alternate_category", {
        opacity: 0,
        duraion: 0.8,
        delay: 0.5
    })

    gsap.from("#products", {
        y: 150,
        opacity: 0,
        delay: 0.8
    })
}
loading_animation();

// For hover animation
const hover_animation = () => {
    const login = document.querySelector("#login");
    const cart = document.querySelector("#cart");
    const search = document.querySelector("#search_small");
    const login1 = document.querySelector("#login1");
    const otp_button = document.querySelector("#otp_button");
    const google = document.querySelector("#google");
    const apple = document.querySelector("#apple");

    login.addEventListener('mouseenter', () => {
        gsap.to(login, {
            color: 'black',
            backgroundColor: 'white'
        })
    });

    login.addEventListener('mouseleave', () => {
        gsap.to(login, {
            color: 'white',
            backgroundColor: 'black'
        })
    });

    cart.addEventListener('mouseenter', () => {
        gsap.to(cart, {
            color: 'black',
            backgroundColor: 'white'
        })
    });

    cart.addEventListener('mouseleave', () => {
        gsap.to(cart, {
            color: 'white',
            backgroundColor: 'black'
        })
    });

    search.addEventListener('mouseenter', () => {
        gsap.to(search, {
            color: 'black',
            backgroundColor: 'white'
        })
    });

    search.addEventListener('mouseleave', () => {
        gsap.to(search, {
            color: 'white',
            backgroundColor: 'black'
        })
    });

    login1.addEventListener('mouseenter', () => {
        gsap.to(login1, {
            color: 'black',
            backgroundColor: 'white'
        })
    });

    login1.addEventListener('mouseleave', () => {
        gsap.to(login1, {
            color: 'white',
            backgroundColor: 'black'
        })
    });

    otp_button.addEventListener('mouseenter', () => {
        gsap.to(otp_button, {
            color: 'black',
            backgroundColor: 'white'
        })
    });

    otp_button.addEventListener('mouseleave', () => {
        gsap.to(otp_button, {
            color: 'white',
            backgroundColor: 'black'
        })
    });

    google.addEventListener('mouseenter', () => {
        gsap.to(google, {
            color: 'black',
            backgroundColor: 'white'
        })
    });

    google.addEventListener('mouseleave', () => {
        gsap.to(google, {
            color: 'white',
            backgroundColor: 'black'
        })
    });

    apple.addEventListener('mouseenter', () => {
        gsap.to(apple, {
            color: 'black',
            backgroundColor: 'white'
        })
    });

    apple.addEventListener('mouseleave', () => {
        gsap.to(apple, {
            color: 'white',
            backgroundColor: 'black'
        })
    });
}
hover_animation();

// Transition for category boxes
const category_animation = () => {
    const women = document.querySelector("#women");
    const wText = document.querySelector("#wText");
    const men = document.querySelector("#men");
    const mText = document.querySelector("#mText");
    const kids = document.querySelector("#kids");
    const kText = document.querySelector("#kText");
    const beauty = document.querySelector("#beauty");
    const bText = document.querySelector("#bText");

    women.addEventListener('mouseenter', () => {
        gsap.to(women, {
            y: -5,
            duration: 0.2
        })
        gsap.to(wText, {
            opacity: 1,
            duration: 0.1,
            scaleY: '250%',
            scaleX: '250%',
        })
    })

    women.addEventListener('mouseleave', () => {
        gsap.to(women, {
            y: 0
        })
        gsap.to(wText, {
            opacity: 0,
            duration: 0.15,
            scaleY: '100%',
            scaleX: '100%',
        })
    })

    men.addEventListener('mouseenter', () => {
        gsap.to(men, {
            y: -5,
            duration: 0.2
        })
        gsap.to(mText, {
            opacity: 1,
            duration: 0.1,
            scaleY: '250%',
            scaleX: '250%',
        })
    })

    men.addEventListener('mouseleave', () => {
        gsap.to(men, {
            y: 0
        })
        gsap.to(mText, {
            opacity: 0,
            duration: 0.15,
            scaleY: '100%',
            scaleX: '100%',
        })
    })

    kids.addEventListener('mouseenter', () => {
        gsap.to(kids, {
            y: -5,
            duration: 0.2
        })
        gsap.to(kText, {
            opacity: 1,
            duration: 0.1,
            scaleY: '250%',
            scaleX: '250%',
        })
    })

    kids.addEventListener('mouseleave', () => {
        gsap.to(kids, {
            y: 0
        })
        gsap.to(kText, {
            opacity: 0,
            duration: 0.15,
            scaleY: '100%',
            scaleX: '100%',
        })
    })

    beauty.addEventListener('mouseenter', () => {
        gsap.to(beauty, {
            y: -5,
            duration: 0.2
        })
        gsap.to(bText, {
            opacity: 1,
            duration: 0.1,
            scaleY: '250%',
            scaleX: '250%',
        })
    })

    beauty.addEventListener('mouseleave', () => {
        gsap.to(beauty, {
            y: 0
        })
        gsap.to(bText, {
            opacity: 0,
            duration: 0.15,
            scaleY: '100%',
            scaleX: '100%',
        })
    })

    gsap.from('#category_boxes div', {
        y: 10,
        opacity: 0,
        delay: 0.8,
        duration: 0.45,
        stagger: 0.25
    })
}
category_animation();

// Login
const login = () => {
    const login_overlay = document.querySelector("#login_overlay")

    gsap.to(login_overlay, {
        opacity: 1,
    })

    login_overlay.classList.add("flex") 
    login_overlay.classList.remove("hidden") 

}

const close_login = () => {
    gsap.to(login_overlay, {
        opacity: 0,
    })

    login_overlay.classList.add("hidden") 
    login_overlay.classList.remove("flex") 
}

const login2 = () => {
    const login_overlay2 = document.querySelector("#login_overlay2")

    gsap.to(login_overlay2, {
        opacity: 1,
    })

    login_overlay2.classList.add("flex") 
    login_overlay2.classList.remove("hidden") 

}

const close_login2 = () => {
    gsap.to(login_overlay2, {
        opacity: 0,
    })

    login_overlay2.classList.add("hidden") 
    login_overlay2.classList.remove("flex") 
}

// Is number
const isNumber = (evt) => {
    let ch = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
}

const checkLength = (event) => {
    const input = event.target;
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}

const add_product = () => {
    let prod = [
        {img: "https://static.zara.net/assets/public/3525/1e4c/4077474abd23/5d67481b219e/04174317505-a2/04174317505-a2.jpg?ts=1707478089863&w=449", des: "FITTED CROPPED T-SHIRT", price: "₹ 999.00"},
        {img: "https://static.zara.net/assets/public/15db/753c/fcb24cc1b8e5/411da9eff244/06224888020-a1/06224888020-a1.jpg?ts=1710419181896&w=449", des: "TIE-DYE PRINTED T-SHIRT", price: "₹ 2,590.00"},
        {img: "https://static.zara.net/assets/public/6a1c/8e52/ddc546758801/d799a4bed501/03431301620-a1/03431301620-a1.jpg?ts=1708507160553&w=607", des: "SHORT SLEEVE T-SHIRT", price: "₹ 1,190.00"}, 
        {img: "https://static.zara.net/assets/public/429a/e48e/abd04d8e9c57/1299aeaf75e6/01014306712-a1/01014306712-a1.jpg?ts=1707243316055&w=449", des: "SEAMLESS RIBBED FADED CROP TOP", price: "₹ 1,590.00"}, 
        {img: "https://static.zara.net/assets/public/86e4/b105/4e2e43de9fa6/c77d1108f7a8/00693401811-a1/00693401811-a1.jpg?ts=1704813105251&w=449", des: "VISCOSE BLEND KNIT T-SHIRT", price: "₹ 2,990.00"},
        {img: "https://static.zara.net/assets/public/031f/3b09/dcec4535b7b1/681f10e1120c/15017210001-e1/15017210001-e1.jpg?ts=1704356771154&w=364", des: "RUNNING TRAINERS", price: "₹ 3,590.00"},
        {img: "https://static.zara.net/assets/public/2dd7/2d25/b92e4ccdb2bc/0ec7fa0bb9ff/4000.jpg?ts=1694504062539&w=607", des: "FELT TEXTURE COAT", price: "₹ 3,290.00"},
        {img: "https://static.zara.net/assets/public/8a52/e777/aa66418d972b/93a67c3e884f/05862430505-a1/05862430505-a1.jpg?ts=1706273502761&w=449", des: "SOFT CARGO TROUSERS", price: "₹ 4,990.00"},
        {img: "https://static.zara.net/assets/public/f461/66a8/9b224011b43a/5a3820bbe47d/13002221500-e1/13002221500-e1.jpg?ts=1699953725734&w=449", des: "TEXTURED RIGID SUITCASE", price: "₹ 8,590.00"}
    ];
     
    let content = "";
     
    prod.forEach(function (product, index) {
        content += `<div class="product_card mx-auto">
                        <img src="${product.img}" alt="">
                        <div id="product_info" class="relative p-1 text-wrap w-[100%]">
                            <div class="w-[90%]">
                                <p>${product.des}</p>
                                <p>${product.price}</p>
                            </div>
                            <div id="add_to_cart" class="absolute top-[27%] right-[5%] cursor-pointer">
                                <i class="fa-solid fa-plus add"></i>
                            </div> 
                        </div>
                    </div>`
    });
     
    document.querySelector("#products").innerHTML = content;
}


add_product();