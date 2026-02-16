import React from 'react';

const Navbar = ({ initials, firstName, lastName }) => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-pmi-blue flex items-center justify-center text-white font-black text-xl shadow-lg shadow-pmi-blue/20">
                        {initials || 'RT'}
                    </div>
                    <span className="font-black text-pmi-navy tracking-tight text-lg">
                        {firstName?.toUpperCase()} {lastName?.toUpperCase()}
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-10 text-sm font-bold text-muted-foreground">
                    <a href="#skills" className="hover:text-pmi-blue transition-colors">SKILLS</a>
                    <a href="#experience" className="hover:text-pmi-blue transition-colors">EXPERIENCES</a>
                    <a href="#services" className="hover:text-pmi-blue transition-colors">SERVICES</a>
                    <a href="#contact" className="hover:text-pmi-blue transition-colors">CONTACT</a>
                    <button className="px-6 py-3 rounded-full bg-pmi-navy text-white text-xs font-black shadow-xl shadow-pmi-navy/20 hover:scale-105 transition-transform">
                        HIRE ME
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
