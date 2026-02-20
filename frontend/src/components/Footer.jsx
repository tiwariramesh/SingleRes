import React from 'react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ firstName, lastName, socialLinks = [], services = [] }) => {

    // Helper for icons
    const Icon = ({ name, size = 20, className }) => {
        const LucideIcon = Icons[name];
        return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
    };

    // Extract specific links if needed for the top section layout
    const emailLink = socialLinks.find(l => l.platform === 'Email');
    const linkedInLink = socialLinks.find(l => l.platform === 'LinkedIn');

    return (
        <footer id="contact" className="bg-slate-100 dark:bg-black pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-4xl font-black text-pmi-navy dark:text-slate-100">Ready to <span className="text-pmi-blue dark:text-blue-400">Scale Together?</span></h2>
                        <p className="text-muted-foreground dark:text-slate-400 font-medium max-w-md">Let's discuss how we can drive your project success and team growth through proven agile methodologies.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {emailLink && (
                                <a href={emailLink.url} className="px-5 py-2.5 rounded-lg bg-pmi-navy dark:bg-blue-600 text-white font-bold text-sm hover:bg-black dark:hover:bg-blue-700 transition-colors flex items-center justify-center gap-2.5">
                                    <Icon name={emailLink.icon || "Mail"} size={18} />
                                    <span>{emailLink.url.replace('mailto:', '')}</span>
                                </a>
                            )}
                            {linkedInLink && (
                                <a href={linkedInLink.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-border dark:border-slate-700 text-pmi-navy dark:text-white font-bold text-sm hover:border-pmi-blue dark:hover:border-blue-400 hover:text-pmi-blue dark:hover:text-blue-400 transition-all flex items-center justify-center gap-2.5">
                                    <Icon name={linkedInLink.icon || "Linkedin"} size={18} />
                                    <span>{linkedInLink.label || "LinkedIn Profile"}</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-black text-pmi-navy dark:text-white uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-2 text-muted-foreground dark:text-slate-400 font-medium text-sm">
                            {services.length > 0 ? services.slice(0, 5).map((service, i) => (
                                <li key={i}><a href="#services" className="hover:text-pmi-blue dark:hover:text-blue-400">{service.title}</a></li>
                            )) : (
                                <li>Loading...</li>
                            )}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-black text-pmi-navy dark:text-white uppercase tracking-widest text-xs">Contact</h4>
                        <div className="text-muted-foreground dark:text-slate-400 font-medium text-sm space-y-2">
                            {socialLinks.filter(l => l.showInContact).map((link, i) => (
                                <p key={i} className="flex gap-2 items-center">
                                    <span className="font-bold">{link.platform}</span> / <a href={link.url} className="hover:text-pmi-blue dark:hover:text-blue-400 truncate max-w-[150px] inline-block align-bottom">{link.url.replace('https://', '').replace('mailto:', '')}</a>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-border dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground dark:text-slate-500 text-sm font-bold tracking-tight">
                        © {new Date().getFullYear()} {firstName} {lastName}. Professional Resume.
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-pmi-navy/60 dark:text-slate-500">
                        <Link to="/privacy-policy" className="hover:text-pmi-blue dark:hover:text-blue-400">Privacy Policy</Link>
                        <a href="#" className="hover:text-pmi-blue dark:hover:text-blue-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
