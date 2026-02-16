import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

import { Link } from 'react-router-dom';

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

    return (
        <div className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 flex justify-center`}>
            <nav className={`
        relative flex items-center justify-between
        py-2 px-4 md:px-6
        glass-card
        rounded-full transition-all duration-300
        w-full max-w-6xl
        ${isScrolled ? 'md:py-2 transform scale-[0.98]' : 'md:py-3'}
      `}>
                {/* Logo & Name */}
                <Link to="/" className="flex items-center gap-2.5 cursor-pointer" onClick={(e) => scrollToSection(e, '#')}>
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-pmi-blue flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg shadow-pmi-blue/30 overflow-hidden">
                        {initials || 'RT'}
                    </div>
                    <span className="font-black text-pmi-navy tracking-[0.05em] text-[13px] md:text-sm whitespace-nowrap">
                        {firstName?.toUpperCase() || 'RAMESH'} {lastName?.toUpperCase() || 'TIWARI.'}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-[13px] font-bold text-pmi-navy/70 hover:text-pmi-blue transition-all duration-200 uppercase tracking-wider relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pmi-blue transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Action Buttons (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Sun className="w-5 h-5 text-pmi-navy/60" />
                    </button>
                    <Button
                        className="rounded-full px-6 py-6 bg-pmi-blue hover:bg-pmi-navy text-white text-[13px] font-black tracking-wider transition-all duration-300 shadow-lg shadow-pmi-blue/25 hover:shadow-pmi-navy/25"
                        onClick={(e) => scrollToSection(e, '#contact')}
                    >
                        HIRE ME
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="lg:hidden flex items-center gap-3">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Sun className="w-5 h-5 text-pmi-navy/60" />
                    </button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Menu className="w-6 h-6 text-pmi-navy" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[350px] border-l-0 bg-white/95 backdrop-blur-xl">
                            <div className="flex flex-col gap-8 mt-12">
                                {navItems.map((item) => (
                                    <SheetClose asChild key={item.label}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => scrollToSection(e, item.href)}
                                            className="text-xl font-black text-pmi-navy hover:text-pmi-blue transition-colors px-4 py-2 border-l-4 border-transparent hover:border-pmi-blue uppercase tracking-tighter"
                                        >
                                            {item.label}
                                        </a>
                                    </SheetClose>
                                ))}
                                <Button
                                    className="mt-4 rounded-xl py-8 bg-pmi-blue font-black text-lg mx-4"
                                    onClick={(e) => scrollToSection(e, '#contact')}
                                >
                                    HIRE ME
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
