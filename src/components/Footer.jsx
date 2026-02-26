import React from 'react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const renderIcon = (name, size = 20, className) => {
    const LucideIcon = Icons[name];
    return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Footer = ({ firstName, lastName, socialLinks = [], services = [] }) => {
    const emailLink = socialLinks.find(l => l.platform === 'Email');
    const linkedInLink = socialLinks.find(l => l.platform === 'LinkedIn');

    return (
        <footer id="contact" className="border-t border-border pt-16 pb-8">
            <div className="container-shell">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="section-heading">
                            <span className="text-foreground dark:text-white">Ready to </span>
                            <span className="text-brand">scale together</span>?
                        </h2>
                        <p className="section-subheading max-w-md">Let’s discuss how we can drive project success and team growth through practical, proven delivery approaches.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {emailLink && (
                                <a href={emailLink.url} className="interactive flex items-center justify-center gap-2.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                                    {renderIcon(emailLink.icon || "Mail", 18)}
                                    <span>{emailLink.url.replace('mailto:', '')}</span>
                                </a>
                            )}
                            {linkedInLink && (
                                <a href={linkedInLink.url} target="_blank" rel="noopener noreferrer" className="interactive flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand">
                                    {renderIcon(linkedInLink.icon || "Linkedin", 18)}
                                    <span>{linkedInLink.label || "LinkedIn Profile"}</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {services.length > 0 ? services.slice(0, 5).map((service, i) => (
                                <li key={i}><a href="#services" className="interactive hover:text-brand">{service.title}</a></li>
                            )) : (
                                <li>Loading...</li>
                            )}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Contact</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            {socialLinks.filter(l => l.showInContact).map((link, i) => (
                                <p key={i} className="flex gap-2 items-center">
                                    <span className="font-semibold">{link.platform}</span> / <a href={link.url} className="interactive inline-block max-w-[150px] truncate align-bottom hover:text-brand">{link.url.replace('https://', '').replace('mailto:', '')}</a>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-12 md:flex-row">
                    <p className="text-sm font-semibold tracking-tight text-muted-foreground">
                        © {new Date().getFullYear()} {firstName} {lastName}. Professional Resume.
                    </p>
                    <div className="flex gap-8 text-xs font-semibold text-muted-foreground">
                        <Link to="/privacy-policy" className="interactive hover:text-brand">Privacy policy</Link>
                        <a href="#" className="interactive hover:text-brand">Terms of service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
