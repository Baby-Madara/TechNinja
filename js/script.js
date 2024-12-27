
// animation, menu button, etc.
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const backToTopButton = document.getElementById('back-to-top');
    const menuToggleButton = document.getElementById('menu-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('nav a');
    const nav = document.querySelector('nav');
    const navLinksContainer = document.querySelector('.nav-links');
    const h1Elements = document.querySelectorAll('h1');
    const openedMenu = document.getElementById('nav-links');
    const footer = document.querySelector('footer');
    const contact_heading = document.querySelector('#contact-heading');

    let current_theme = 'dark';
    // Hide menu button on larger screens
    const updateMenuButtonVisibility = () => {
        if (window.innerWidth > 768) {
            menuToggleButton.style.display = 'none';
            navLinksContainer.classList.remove('open');
        } else {
            menuToggleButton.style.display = 'flex';
        }
    };
    updateMenuButtonVisibility();
    window.addEventListener('resize', updateMenuButtonVisibility);

    // Theme toggle functionality
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        current_theme = body.classList.contains('dark-theme') ? 'dark' : 'light';

        openedMenu.classList.toggle('dark-theme');
        h1Elements.forEach(element => {  element.classList.toggle('dark-theme');});
        footer.classList.toggle('dark-theme');
        nav.classList.toggle('dark-theme');
        contact_heading.classList.toggle('dark-theme');

    });

    // Back to top functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show back to top button on scroll
    const backToTopButtonVisibility = function() {
        if (window.scrollY > 30) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    };
    backToTopButtonVisibility();
    window.addEventListener('scroll', backToTopButtonVisibility);

    // Glowing shadow effect for titles based on cursor location
    const titles = document.querySelectorAll('.title');
    titles.forEach(title => {
        document.querySelector('body').addEventListener('mousemove', (e) => {
            const x = e.clientX - title.getBoundingClientRect().left;
            const y = e.clientY - title.getBoundingClientRect().top;
            if (current_theme === 'dark') {
                title.style.textShadow = `${x / 40}px ${y / 40}px 30px rgba(0, 255, 255, 0.8)`;
            }
            else{
                title.style.textShadow = `0px 0px 1px rgba(0, 0, 0, 0)`;
            }
        });
    });

    // Offset for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = nav.offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - offset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
            navLinksContainer.classList.toggle('open'); // Close the menu after clicking a link
            // navLinksContainer.classList.remove('open'); // Close the menu after clicking a link
        });
    });

    // Toggle menu for mobile devices
    menuToggleButton.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
    });
});


////////////////////////////////////////// 


// skills scrolling

const cardContainer = document.querySelector('.card-container');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const cardWidth = 320; // card width + gap

// Scroll handling
cardContainer.addEventListener('scroll', () => {
    const maxScroll = cardContainer.scrollWidth - cardContainer.clientWidth;
    if (cardContainer.scrollLeft <= 10) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'block';
    } else if (cardContainer.scrollLeft + 10 >= maxScroll ) {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'block';
    }
    // console.log(`maxScroll: ${maxScroll}`);
    // console.log(`scrollLeft: ${cardContainer.scrollLeft}`);
    // console.log(``);

});

// Arrow button scrolling
rightArrow.addEventListener('click', () => {
    cardContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    cardContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Set initial scroll position to the middle for seamless experience
cardContainer.scrollLeft = cardContainer.scrollWidth / 4;
