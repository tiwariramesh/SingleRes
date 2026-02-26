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
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = ({ firstName, lastName }) => {
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
        <div className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4">
            <nav className={`
        interactive relative flex w-full max-w-6xl items-center justify-between rounded-full border border-border/80 bg-background/85 px-4 py-2 backdrop-blur-xl md:px-6
        ${isScrolled ? 'shadow-sm' : ''}
      `}>
                <Link to="/" className="flex items-center gap-2.5 cursor-pointer" onClick={(e) => scrollToSection(e, '#')}>
                    <img
                        src="/favicon.svg"
                        alt="Logo"
                        className="h-8 w-8 rounded-lg shadow-sm md:h-9 md:w-9"
                    />
                    <span className="font-black text-pmi-navy dark:text-white tracking-[0.05em] text-xs md:text-sm whitespace-nowrap">
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
