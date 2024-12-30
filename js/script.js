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

    // Define skills and projects arrays
    const skills = [
        { id: 'skill01',   title: 'Frontend',     imgSrc: 'images/frontend.png' },
        { id: 'skill02',   title: 'Python',       imgSrc: 'images/python.png' },
        { id: 'skill03',   title: 'C',            imgSrc: 'images/c.png' },
        { id: 'skill04',   title: 'C++',          imgSrc: 'images/c++.png' },
        { id: 'skill05',   title: 'Arduino',      imgSrc: 'images/arduino.png' },
        { id: 'skill06',   title: 'ESP32',        imgSrc: 'images/esp32.png' },
        { id: 'skill07',   title: 'MATLAB',       imgSrc: 'images/matlab.png' },
        { id: 'skill08',   title: 'ROS & ROS2',   imgSrc: 'images/ros.webp' },
        { id: 'skill09',   title: 'SOLIDWORKS',   imgSrc: 'images/solidworks.png' },
        { id: 'skill10',   title: 'Fusion',       imgSrc: 'images/fusion.png' },
    ];

    const projects = [
        { title: 'Portfolio Website',               imgSrc: 'images/portfolio-website.png',  link: './',                                                                 description: 'A website to represent my skills and projects'},
        { title: 'Scientific Calculator',           imgSrc: 'images/calculator.png',         link: 'https://baby-madara.github.io/Calculator-JS/',                       description: 'Made with JavaScript'},
        { title: 'Recording Piano using Arduino',   imgSrc: 'images/piano.png',              link: 'https://www.tinkercad.com/things/e7aTJ7GvGUO',                       description: 'A piano made by Arduino that can be used to play tones and record them. Try its simulated version on TinkerCAD!'},
        { title: 'Smart Home',                      imgSrc: 'images/smart-home.jpg',         link: 'https://github.com/Baby-Madara/AMIT_Embedded_Systems_FinalProject',  description: 'Based on ATmega32, the Smart Home system controls the lights, fans, and AC over Bluetooth. Multiple users can control it, each with different access levels.'},
        { title: '12 DoF Quadruped Robot',          imgSrc: 'images/quadruped-robot.jpeg',   link: '#',   alert: 'Sorry, not available right now!',                      description: 'A versatile quadruped robot, developed using MATLAB, ROS2, SOLIDWORKS, and implemented on ESP32. Provided by OTA feature to update firmware wirelessly'},
        { title: '3D Printer',                      imgSrc: 'images/3d_printer.jpg',         link: '#',   alert: 'Sorry, not available right now!',                      description: 'A homemade 3D Printer for simple gadgets and students tasks'},
    ];

    // Function to generate skills HTML
    const generateSkillsHTML = () => {
        const skillCardsContainer = document.querySelector('.card-container');
        skillCardsContainer.innerHTML = skills.map(skill => `
            <div class="skill-card" id="${skill.id}">
                <img src="${skill.imgSrc}" alt="${skill.title}">
                <h3>${skill.title}</h3>
            </div>
        `).join('');
    };

    // Function to generate projects HTML
    const generateProjectsHTML = () => {
        const projectCardsContainer = document.querySelector('.project-cards');
        projectCardsContainer.innerHTML = projects.map(project => `
            <div class="card">
                <h2>${project.title}</h2>
                <img src="${project.imgSrc}" alt="${project.title}">
                <p>${project.description}</p>
                <a href="${project.link}" ${project.alert ? `onclick="window.alert('${project.alert}')"` : `target="_blank"`} rel="noopener"><span>View Project</span></a>
            </div>
        `).join('');
    };

    // Call the functions to generate HTML
    generateSkillsHTML();
    generateProjectsHTML();

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
        });
    });

    // Toggle menu for mobile devices
    menuToggleButton.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
    });
    
    // Set initial scroll position to the middle for seamless experience
    cardContainer.scrollBy({left: cardContainer.scrollWidth / 2, behavior: 'auto'});
});

// skills scrolling
const cardContainer = document.querySelector('.card-container');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const cardWidth = 320; // card width + gap

// Scroll handling
cardContainer.addEventListener('scroll', () => {
    const maxScroll = cardContainer.scrollWidth - cardContainer.clientWidth;
    const scrollExtremes = 10; // 10px offset for smooth experience
    if (Math.floor(cardContainer.scrollLeft) <= scrollExtremes) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'block';
    } else if (Math.floor(cardContainer.scrollLeft) >= maxScroll - scrollExtremes) {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'block';
    }
});

// Arrow buttons scrolling
rightArrow.addEventListener('click', () => {
    cardContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    cardContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

