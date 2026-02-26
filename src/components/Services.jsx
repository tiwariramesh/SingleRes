import React from 'react';
import * as Icons from 'lucide-react';

// Helper for icons
const Icon = ({ name, size = 24, className }) => {
    const LucideIcon = Icons[name];
    return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Services = ({ services = [] }) => {

    const sortedServices = [...services].sort((a, b) => (a.order || 0) - (b.order || 0));

    return (
        <section id="services" className="section-shell">
            <div className="container-shell">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-4xl font-black text-pmi-navy dark:text-white tracking-tight">
                        Driving Excellence with <br /><span className="text-pmi-blue dark:text-blue-400">Professional Services.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-6 max-w-2xl text-xs mx-auto md:mx-0">
                        Empowering organizations through strategic agile implementation and leadership development.
                    </p>
                </div>

                {sortedServices.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedServices.map((service, index) => (
                            <div
                                key={index}
                                className="surface-card interactive group flex h-full cursor-default flex-col rounded-[1.5rem] p-5"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${service.bg} ${service.color}`}>
                                        <Icon name={service.icon} size={20} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground">{service.title}</h3>
                                    </div>
                                </div>

                                <p className="mt-1 flex-1 text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                                    {service.description}
                                </p>

                                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                                    <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand">
                                        {service.category || 'Service'}
                                    </span>
                                    <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                                </div>
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
