import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true); // Manage theme state
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
    const [showBackToTop, setShowBackToTop] = useState(false); // Back-to-top button visibility
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width


    const hasToggledTheme = useRef(false); // Guard to ensure toggleTheme runs only once

    // Toggles theme between light and dark
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
        [
            ...document.querySelectorAll("body > *"),
            ...document.querySelectorAll("nav"),
            ...document.querySelectorAll(".nav-links"),
            document.querySelector("#contact"),
        ].forEach((element) => {
            element.classList.toggle("dark-theme");
        });
    };

    // Run toggleTheme once when the document is loaded
    useEffect(() => {
        if (!hasToggledTheme.current) {
            toggleTheme();
            hasToggledTheme.current = true; // Mark as toggled
        }
    }, []); // Empty dependency array ensures this runs only once

    // Scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Updates back-to-top button visibility on scroll
    const handleScroll = () => {
        setShowBackToTop(window.scrollY > 30);
    };

    // Handle resizing or orientation change to update button states
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 768) {
            setIsMenuOpen(false); // Close menu on larger screens
        }
    };

    // Adds event listeners on mount and cleans up on unmount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleResize);
        };
    }, []);

    // Anchor link offset handling for smooth scrolling
    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        const offset = document.querySelector("nav").offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
        });
        setIsMenuOpen(false); // Close menu on click
    };

    return (
        <nav className={`navbar ${isDarkTheme ? "dark-theme" : ""}`}>
            <div className="logo">
                <a href="https://baby-madara.github.io/TechNinja/">TechNinja</a>
            </div>
            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                {["about", "projects", "skills", "contact"].map((link) => (
                    <li key={link}>
                        <a
                            href={`#${link}`}
                            onClick={(e) => handleNavLinkClick(e, link)}
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="ctrl-buttons">
                {showBackToTop && (
                    <button id="back-to-top" onClick={scrollToTop}>
                        <i className="fa fa-arrow-up"></i>
                    </button>
                )}
                <button id="theme-toggle" onClick={toggleTheme}>
                    <i className="fa fa-adjust"></i>
                </button>
                <button
                    id="menu-toggle"
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen((prevState) => !prevState)}
                    style={{
                        display: windowWidth > 768 ? "none" : "flex",
                    }}
                >
                    <i className="fa fa-bars"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
