import React, { useState, useEffect } from 'react';
import { Moon, Sun, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { socialLinks } from '@/data/mockData';
import { NavItem } from './navbar/NavItem';
import { MobileMenu } from './navbar/MobileMenu';

const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = ({ firstName, lastName }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

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

            // If we are not on the main homepage, navigate back to it
            if (location.pathname !== '/') {
                if (href === '#') {
                    navigate('/');
                } else {
                    navigate(`/${href}`);
                }
                return;
            }

            // Standard scrolling behaviour for the homepage
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
        <div className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${isScrolled ? 'top-2' : 'top-6'}`}>
            <nav className={`
        interactive relative flex w-full items-center justify-between rounded-full border border-border/80 px-4 transition-all duration-300 backdrop-blur-3xl md:px-6
        ${isScrolled ? 'max-w-5xl py-2 bg-background/60 shadow-lg shadow-black/5 dark:shadow-black/20 text-sm' : 'max-w-6xl py-3 bg-background/40 shadow-md text-base'}
      `}>
                <Link to="/" className="flex items-center gap-2.5 cursor-pointer" onClick={(e) => scrollToSection(e, '#')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className={`rounded-lg shadow-sm transition-all duration-300 bg-pmi-blue dark:bg-slate-400 ${isScrolled ? 'h-7 w-7 md:h-8 md:w-8' : 'h-9 w-9 md:h-10 md:w-10'}`}
                    >
                        <text
                            x="50%"
                            y="52%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontFamily="inherit"
                            fontWeight="900"
                            fontSize="44"
                            className="fill-white dark:fill-pmi-navy"
                        >
                            RT
                        </text>
                    </svg>
                    <span className={`font-black tracking-[0.05em] whitespace-nowrap transition-all duration-300 text-pmi-navy dark:text-white ${isScrolled ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}>
                        {firstName?.toUpperCase() || 'RAMESH'} <span className="text-pmi-blue">{lastName?.toUpperCase() || 'TIWARI.'}</span>
                    </span>
                </Link>

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

                <div className="hidden lg:flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="interactive inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-muted"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5 text-pmi-navy/60 dark:text-slate-300" />
                        ) : (
                            <Moon className="w-5 h-5 text-pmi-navy/60 dark:text-slate-300" />
                        )}
                    </button>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="rounded-full px-4 text-sm font-semibold">
                            <Linkedin className="h-4 w-4" />
                            Let’s connect
                        </Button>
                    </a>
                </div>

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
