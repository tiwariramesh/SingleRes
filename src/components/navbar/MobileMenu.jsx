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
        <div className="lg:hidden flex items-center gap-2">
            <button
                onClick={toggleTheme}
                className="interactive inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-muted"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-pmi-navy/60 dark:text-slate-300" />
                ) : (
                    <Moon className="w-5 h-5 text-pmi-navy/60 dark:text-slate-300" />
                )}
            </button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                        <Menu className="h-4 w-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] border-l border-border bg-background/95 backdrop-blur-xl">
                    <div className="mt-10 flex flex-col gap-6">
                        {navItems.map((item) => (
                            <SheetClose asChild key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="interactive rounded-xl px-3 py-2 text-lg font-semibold text-foreground hover:bg-muted hover:text-brand"
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
                                className="w-full rounded-xl bg-primary py-6 text-base font-semibold"
                            >
                                Let’s connect
                            </Button>
                        </a>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};
