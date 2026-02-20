import React from 'react';

export const NavItem = ({ label, href, onClick }) => {
    return (
        <a
            href={href}
            onClick={(e) => onClick(e, href)}
            className="text-[13px] font-bold text-pmi-navy dark:text-white hover:text-pmi-blue dark:hover:text-blue-400 transition-all duration-200 tracking-normal relative group"
        >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pmi-blue dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
    );
};
