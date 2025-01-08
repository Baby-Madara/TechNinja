import React, { Fragment } from "react";

const about = `
                Welcome to my portfolio!
                I'm Ahmed Farahat, a Mechatronics Engineer focusing on Robotics, AI-driven Control Systems, and Software Engineering. 
                Experienced in Embedded Systems, ROS & ROS2, SolidWorks, MATLAB, and Web Development. 
                Driven to contribute creative solutions to advanced engineering challenges.
            `;

// Define skills and projects arrays
const skills = [
    { id: 'skill01',   title: 'Frontend',     imgSrc: './src/images/frontend.png' },
    { id: 'skill02',   title: 'Python',       imgSrc: './src/images/python.png' },
    { id: 'skill03',   title: 'C',            imgSrc: './src/images/c.png' },
    { id: 'skill04',   title: 'C++',          imgSrc: './src/images/c++.png' },
    { id: 'skill05',   title: 'Arduino',      imgSrc: './src/images/arduino.png' },
    { id: 'skill06',   title: 'ESP32',        imgSrc: './src/images/esp32.png' },
    { id: 'skill07',   title: 'MATLAB',       imgSrc: './src/images/matlab.png' },
    { id: 'skill08',   title: 'ROS & ROS2',   imgSrc: './src/images/ros.webp' },
    { id: 'skill09',   title: 'SOLIDWORKS',   imgSrc: './src/images/solidworks.png' },
    { id: 'skill10',   title: 'Fusion',       imgSrc: './src/images/fusion.png' },
];

const projects = [
    { title: 'Portfolio Website',               imgSrc: './src/images/portfolio-website.png',  link: './',                                                                 description: 'A website to represent my skills and projects'},
    { title: 'Scientific Calculator',           imgSrc: './src/images/calculator.png',         link: 'https://baby-madara.github.io/Calculator-JS/',                       description: 'Made with JavaScript'},
    { title: 'Recording Piano using Arduino',   imgSrc: './src/images/piano.png',              link: 'https://www.tinkercad.com/things/e7aTJ7GvGUO',                       description: 'A piano made by Arduino that can be used to play tones and record them. Try its simulated version on TinkerCAD!'},
    { title: 'Smart Home',                      imgSrc: './src/images/smart-home.jpg',         link: 'https://github.com/Baby-Madara/AMIT_Embedded_Systems_FinalProject',  description: 'Based on ATmega32, the Smart Home system controls the lights, fans, and AC over Bluetooth. Multiple users can control it, each with different access levels.'},
    { title: '12 DoF Quadruped Robot',          imgSrc: './src/images/quadruped-robot.jpeg',   link: '#',   alert: 'Sorry, not available right now!',                      description: 'A versatile quadruped robot, developed using MATLAB, ROS2, SOLIDWORKS, and implemented on ESP32. Provided by OTA feature to update firmware wirelessly'},
    { title: '3D Printer',                      imgSrc: './src/images/3d_printer.jpg',         link: '#',   alert: 'Sorry, not available right now!',                      description: 'A homemade 3D Printer for simple gadgets and students tasks'},
];

const contactLinks = [
    {href: 'mailto:ahmedfarahat1177.com',                           imgSrc: './src/images/gmail-bw.logo.png',   title: 'Gmail'},
    {href: 'https://wa.link/wm2plp',                                imgSrc: './src/images/wa-bw.png',           title: 'WhatsApp'},
    {href: 'https://www.linkedin.com/in/ahmed-farahat-87038320b/',  imgSrc: './src/images/linkedin-bw.png',     title: 'LinkedIn'},
    {href: 'https://github.com/Baby-Madara',                        imgSrc: './src/images/github-bw.png',       title: 'GitHub'},
];

const contact = [
    
        <span>Feel free to reach out through these platforms</span>,
        <div class="social-links">
            {contactLinks.map((link) => {
                return (
                    <a href={link.href} rel="noopener" title={link.title} class="social-icon">
                        <img class="icon" src={link.imgSrc} alt={link.title}/>
                    </a>
                );
            })}
        </div>,
        <br/>,
        <span>© 2024 Ahmed Farahat. Built with ❤️ and hosted on GitHub.</span>
    
    ];

export {about, skills, projects, contact}


