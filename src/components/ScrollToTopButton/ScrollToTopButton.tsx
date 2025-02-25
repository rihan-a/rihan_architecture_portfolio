import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when the user scrolls down 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling
        });
    };

    // Add a scroll event listener to toggle button visibility
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-to-top-button">
                    ↑
                </button>
            )}
        </div>
    );
}

export default ScrollToTopButton;
