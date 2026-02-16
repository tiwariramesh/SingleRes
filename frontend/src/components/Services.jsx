import React from 'react';
import { Target, Users, Zap, Briefcase, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
    const services = [
        { title: "Agile Consulting", icon: <Target />, color: "text-pmi-blue", bg: "bg-pmi-blue/10" },
        { title: "Assistant Mentoring", icon: <Users />, color: "text-pmi-cyan", bg: "bg-pmi-cyan/10" },
        { title: "Team Coaching", icon: <Zap />, color: "text-pmi-purple", bg: "bg-pmi-purple/10" },
        { title: "Scrum Master", icon: <Briefcase />, color: "text-pmi-green", bg: "bg-pmi-green/10" },
        { title: "Stakeholder MGMT", icon: <Shield />, color: "text-pmi-orange", bg: "bg-pmi-orange/10" },
        { title: "Agile Engagement", icon: <TrendingUp />, color: "text-pmi-blue", bg: "bg-pmi-blue/10" }
    ];

    return (
        <section id="services" className="py-24 bg-pmi-navy">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-5xl font-black text-white tracking-tight">
                        Driving Excellence with <br /><span className="text-pmi-orange">Professional Services.</span>
                    </h2>
                    <p className="text-slate-400 font-medium mt-6 max-w-2xl">
                        Empowering organizations through strategic agile implementation and leadership development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:border-pmi-orange/50 transition-all group">
                            <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {React.cloneElement(service.icon, { size: 28 })}
                            </div>
                            <h3 className="text-xl font-black text-white">{service.title}</h3>
                            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                Comprehensive solutions tailored to your unique organizational culture and delivery goals.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-pmi-orange text-xs font-bold uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                                Learn More <span>→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
