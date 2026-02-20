import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

export const MobileMenu = ({ navItems, toggleTheme, theme, linkedinUrl, scrollToSection }) => {
    return (
        <div className="lg:hidden flex items-center gap-3">
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
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Menu className="w-6 h-6 text-pmi-navy dark:text-white" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] border-l-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
                    <div className="flex flex-col gap-8 mt-12">
                        {navItems.map((item) => (
                            <SheetClose asChild key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="text-xl font-black text-pmi-navy dark:text-white hover:text-pmi-blue dark:hover:text-blue-400 transition-colors px-4 py-2 border-l-4 border-transparent hover:border-pmi-blue tracking-tight"
                                >
                                    {item.label}
                                </a>
                            </SheetClose>
                        ))}
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-4"
                        >
                            <Button
                                className="w-full rounded-xl py-8 bg-pmi-blue font-black text-lg"
                            >
                                LET'S CONNECT
                            </Button>
                        </a>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};
