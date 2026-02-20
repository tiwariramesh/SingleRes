import React, { useState, useEffect } from 'react';
import { Moon, Sun, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { socialLinks } from '@/data/mockData';
import { NavItem } from './navbar/NavItem';
import { MobileMenu } from './navbar/MobileMenu';

const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experiences', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = ({ initials, firstName, lastName }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    // Get LinkedIn URL
    const linkedinUrl = socialLinks.find(l => l.platform.toLowerCase() === 'linkedin')?.url || '#';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 flex justify-center`}>
            <nav className={`
        relative flex items-center justify-between
        py-1.5 px-4 md:px-6
        glass-card dark:glass-card-dark
        rounded-full transition-all duration-300
        w-full max-w-6xl
        ${isScrolled ? 'md:py-1.5 transform scale-[0.98]' : 'md:py-2.5'}
      `}>
                {/* Logo & Name */}
                <Link to="/" className="flex items-center gap-2.5 cursor-pointer" onClick={(e) => scrollToSection(e, '#')}>
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-pmi-blue flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg shadow-pmi-blue/30 overflow-hidden">
                        {initials || 'RT'}
                    </div>
                    <span className="font-black text-pmi-navy dark:text-white tracking-[0.05em] text-[13px] md:text-sm whitespace-nowrap">
                        {firstName?.toUpperCase() || 'RAMESH'} <span className="text-pmi-blue">{lastName?.toUpperCase() || 'TIWARI.'}</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.label}
                            label={item.label}
                            href={item.href}
                            onClick={scrollToSection}
                        />
                    ))}
                </div>

                {/* Action Buttons (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Moon className="w-5 h-5 text-pmi-navy/60 dark:text-slate-300" />
                        ) : (
                            <Sun className="w-5 h-5 text-pmi-navy/60 dark:text-slate-300" />
                        )}
                    </button>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            className="rounded-full px-6 py-6 bg-pmi-blue hover:bg-pmi-navy dark:hover:bg-blue-600 text-white text-[13px] font-black tracking-wider transition-all duration-300 shadow-lg shadow-pmi-blue/25 hover:shadow-pmi-navy/25"
                        >
                            LET'S CONNECT
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    navItems={navItems}
                    toggleTheme={toggleTheme}
                    theme={theme}
                    linkedinUrl={linkedinUrl}
                    scrollToSection={scrollToSection}
                />
            </nav>
        </div>
    );
};

export default Navbar;
