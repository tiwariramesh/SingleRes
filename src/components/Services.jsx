import React from 'react';
import * as Icons from 'lucide-react';

// Helper for icons
const Icon = ({ name, size = 24, className }) => {
    const LucideIcon = Icons[name];
    return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Services = ({ services = [] }) => {

    // Sort services by order
    const sortedServices = [...services].sort((a, b) => (a.order || 0) - (b.order || 0));

    return (
        <section id="services" className="py-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-5xl font-black text-pmi-navy dark:text-white tracking-tight">
                        Driving Excellence with <br /><span className="text-pmi-blue dark:text-blue-400">Professional Services.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-6 max-w-2xl">
                        Empowering organizations through strategic agile implementation and leadership development.
                    </p>
                </div>

                {sortedServices.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[2.5rem] hover:shadow-xl hover:shadow-pmi-blue/10 dark:hover:shadow-pmi-blue/20 hover:transform hover:-translate-y-2 transition-all duration-500 group cursor-default"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} dark:bg-white/10 dark:text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-black/5`}>
                                    <Icon name={service.icon} size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-pmi-navy dark:text-slate-100 tracking-tight">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-base mt-4 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">Loading services...</p>
                )}
            </div>
        </section>
    );
};

export default Services;
