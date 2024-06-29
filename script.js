

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

const pills_animation = () => {
    gsap.from("#pills", {
        x: '100vw',
        duration: 1.2,
        delay: 0.8
    })
}
pills_animation()
