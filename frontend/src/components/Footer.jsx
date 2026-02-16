import React from 'react';

const LogoCloud = () => {
    const logos = ["SPOXTER", "CISCENE", "AXER", "LOGIX", "ALTOM", "ITEX", "VULCANI"];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-black text-pmi-navy tracking-tight mb-16">
                    Trusted by Industry <span className="text-pmi-blue">Leaders.</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {logos.map((logo, index) => (
                        <div key={index} className="w-40 h-24 bg-pmi-navy rounded-2xl flex items-center justify-center text-white font-black text-lg tracking-widest opacity-90 hover:opacity-100 transition-opacity">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = ({ firstName, lastName }) => {
    return (
        <footer id="contact" className="bg-secondary/30 pt-24 pb-12 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-4xl font-black text-pmi-navy">Ready to <span className="text-pmi-blue">Scale Together?</span></h2>
                        <p className="text-muted-foreground font-medium max-w-md">Let's discuss how we can drive your project success and team growth through proven agile methodologies.</p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 rounded-xl bg-pmi-navy text-white font-bold">Start a Project</button>
                            <button className="px-8 py-4 rounded-xl bg-white border border-border text-pmi-navy font-bold">View Portfolio</button>
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
                        <a href="#" className="hover:text-pmi-blue">Privacy Policy</a>
                        <a href="#" className="hover:text-pmi-blue">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { LogoCloud, Footer };
