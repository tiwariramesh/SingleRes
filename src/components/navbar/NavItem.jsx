import React from 'react';

export const NavItem = ({ label, href, onClick }) => {
    return (
        <a
            href={href}
            onClick={(e) => onClick(e, href)}
            className="text-xs font-bold text-pmi-navy dark:text-white hover:text-pmi-blue dark:hover:text-blue-400 transition-all duration-200 tracking-normal relative group"
        >
            {label}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-brand interactive group-hover:w-full"></span>
        </a>
    );
};
