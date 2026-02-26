import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [hasReachedBottomOnce, setHasReachedBottomOnce] = useState(false);

    // Show button logic
    const toggleVisibility = () => {
        // Calculate if we've reached near the bottom of the page
        const scrolledToBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 800;

        // Define breakpoint for mobile/tablet screens (Tailwind md is 768px, lg is 1024px)
        const isMobileScreen = window.innerWidth < 1024;

        // Update the 'reached bottom once' status if we hit the bottom
        if (scrolledToBottom && !hasReachedBottomOnce) {
            setHasReachedBottomOnce(true);
        }

        if (isMobileScreen) {
            // For mobile screens, if we've *ever* reached the bottom, keep it visible unconditionally
            // Ohterwise hide it until we do
            if (hasReachedBottomOnce || scrolledToBottom) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        } else {
            // Traditional desktop behavior: only show the button while actively scrolled to the bottom
            if (scrolledToBottom) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Run logic on scroll
        window.addEventListener("scroll", toggleVisibility);
        // Run logic on window resize just in case they rotate their device
        window.addEventListener("resize", toggleVisibility);

        // Fire once to set initial state
        toggleVisibility();

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("resize", toggleVisibility);
        };
    }, [hasReachedBottomOnce]); // Need to re-bind listener when state changes

    return (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-8 md:right-8 z-[100] transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <Button
                onClick={scrollToTop}
                size="icon"
                className="h-12 w-12 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover:scale-110 transition-transform duration-300"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-6 w-6" />
            </Button>
        </div>
    );
};

export default ScrollToTop;
