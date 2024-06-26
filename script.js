

// Loading animation of navbar
const navbar = document.querySelector("#navbar");
const loading_animation = () => {

}

// For login and cart button
const login_button_animation = () => {
    const login = document.querySelector("#login");
    const cart = document.querySelector("#cart");
    const search = document.querySelector("#search_small");
    const login1 = document.querySelector("#login1");

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
}
login_button_animation();

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
        gsap.to(wText, {
            opacity: 1,
            duration: 0.1,
            scaleY: '250%',
            scaleX: '250%',
        })
    })

    women.addEventListener('mouseleave', () => {
        gsap.to(wText, {
            opacity: 0,
            duration: 0.15,
            scaleY: '100%',
            scaleX: '100%',
        })
    })

    men.addEventListener('mouseenter', () => {
        gsap.to(mText, {
            opacity: 1,
            duration: 0.1,
            scaleY: '250%',
            scaleX: '250%',
        })
    })

    men.addEventListener('mouseleave', () => {
        gsap.to(mText, {
            opacity: 0,
            duration: 0.15,
            scaleY: '100%',
            scaleX: '100%',
        })
    })

    kids.addEventListener('mouseenter', () => {
        gsap.to(kText, {
            opacity: 1,
            duration: 0.1,
            scaleY: '250%',
            scaleX: '250%',
        })
    })

    kids.addEventListener('mouseleave', () => {
        gsap.to(kText, {
            opacity: 0,
            duration: 0.15,
            scaleY: '100%',
            scaleX: '100%',
        })
    })

    beauty.addEventListener('mouseenter', () => {
        gsap.to(bText, {
            opacity: 1,
            duration: 0.1,
            scaleY: '250%',
            scaleX: '250%',
        })
    })

    beauty.addEventListener('mouseleave', () => {
        gsap.to(bText, {
            opacity: 0,
            duration: 0.15,
            scaleY: '100%',
            scaleX: '100%',
        })
    })

    gsap.from('#category_boxes #women', {
        y: 10,
        opacity: 0,
        delay: 0.5,
        duration: 0.45
    })

    gsap.from('#category_boxes #men', {
        y: 10,
        opacity: 0,
        delay: 0.7,
        duration: 0.45
    })

    gsap.from('#category_boxes #kids', {
        y: 10,
        opacity: 0,
        delay: 0.9,
        duration: 0.45
    })

    gsap.from('#category_boxes #beauty', {
        y: 10,
        opacity: 0,
        delay: 1.1,
        duration: 0.45
    })
}
category_animation();