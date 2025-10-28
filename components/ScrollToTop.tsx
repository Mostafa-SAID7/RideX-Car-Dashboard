
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '../constants';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-accent-red text-white flex items-center justify-center shadow-lg hover:bg-accent-red-hover transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTop;
