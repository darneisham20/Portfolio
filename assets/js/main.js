/* ==== Menu Show and Hidden ==== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ==== MENU SHOW ==== */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ==== MENU HIDDEN ==== */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ==== REMOVE MOBILE MENU ==== */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==== PORTFOLIO SWIPER ==== */
let swiperProjects = new Swiper(".projects__container", {
    cssMode: true,
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

/* ==== TESTIMONIAL SWIPER ==== */
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* ==== SCROLLING ACTIVE LINK ==== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
    })
}

window.addEventListener('scroll', scrollActive)

/* ==== SHOW SCROLL UP BUTTON ==== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ==== EMAIL JS ==== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project')
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if field has value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // Add & Remove Color
        contactMessage.classList.remove('color-success')
        contactMessage.classList.add('color-red')

        // Show message
        contactMessage.textContent = 'Please fill out all input fields! 💬'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_qe7qhdg','template_u4qewah','#contact-form','_Ve1UHBJR6HVKbgJh')
            .then(() => {
                //Show Message and add color
                contactMessage.classList.add('color-success')
                contactMessage.textContent = 'Message sent! 💌'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 10000)
            }, (error) => {
                alert('Oops! Something has failed on our end...please try again later!', error)
            })

        // To clear input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

/* ==== DYNAMIC TEXT HEADER ==== */
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "book lover.";
    }, 0);

    setTimeout(() => {
        text.textContent = "gamer.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "cat mom.";
    }, 8000);
    setTimeout(() => {
        text.textContent = "yoga novice.";
    }, 12000);
    setTimeout(() => {
        text.textContent = "anime enthusiast.";
    }, 16000);
}

textLoad();
setInterval(textLoad, 20000);