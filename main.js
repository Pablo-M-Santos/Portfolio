// icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections and footer
let sections = document.querySelectorAll('section');
let footer = document.querySelector('footer');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Check if in footer and update navbar
    let footerTop = footer.offsetTop;
    let windowHeight = window.innerHeight;

    if (window.scrollY + windowHeight >= footerTop) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href="#contato"]').classList.add('active');
        });
    }

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove navbar click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

console.log('Sistema no ar...');


const home = document.querySelector('.home');

const myObserver = new IntersectionObserver( (entries) => {
    console.log(entries);
})

myObserver.observe(home)