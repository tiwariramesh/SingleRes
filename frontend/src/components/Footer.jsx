import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ firstName, lastName }) => {
    return (
        <footer id="contact" className="bg-secondary/30 pt-16 pb-8 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-4xl font-black text-pmi-navy">Ready to <span className="text-pmi-blue">Scale Together?</span></h2>
                        <p className="text-muted-foreground font-medium max-w-md">Let's discuss how we can drive your project success and team growth through proven agile methodologies.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="mailto:meet.atutgorkhali@gmail.com" className="px-8 py-4 rounded-xl bg-pmi-navy text-white font-bold hover:bg-black transition-colors flex items-center justify-center gap-3">
                                <Mail size={20} />
                                <span>meet.atutgorkhali@gmail.com</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white border border-border text-pmi-navy font-bold hover:border-pmi-blue hover:text-pmi-blue transition-all flex items-center justify-center gap-3">
                                <Linkedin size={20} />
                                <span>LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-black text-pmi-navy uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-2 text-muted-foreground font-medium text-sm">
                            <li><a href="#" className="hover:text-pmi-blue">Agile Consulting</a></li>
                            <li><a href="#" className="hover:text-pmi-blue">Team Coaching</a></li>
                            <li><a href="#" className="hover:text-pmi-blue">Release MGMT</a></li>
                            <li><a href="#" className="hover:text-pmi-blue">Scrum Master</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-black text-pmi-navy uppercase tracking-widest text-xs">Contact</h4>
                        <div className="text-muted-foreground font-medium text-sm space-y-2">
                            <p>LinkedIn / AgileProfessional</p>
                            <p>Email / hello@agilepro.com</p>
                            <p>Twitter / @AgileMaster</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-sm font-bold tracking-tight">
                        © {new Date().getFullYear()} {firstName} {lastName}. Professional Resume.
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-pmi-navy/60">
                        <Link to="/privacy-policy" className="hover:text-pmi-blue">Privacy Policy</Link>
                        <a href="#" className="hover:text-pmi-blue">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };

