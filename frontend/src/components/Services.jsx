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
        <section id="services" className="py-16 bg-gradient-to-b from-pmi-blue/20 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-5xl font-black text-pmi-navy tracking-tight">
                        Driving Excellence with <br /><span className="text-pmi-blue">Professional Services.</span>
                    </h2>
                    <p className="text-slate-500 font-medium mt-6 max-w-2xl">
                        Empowering organizations through strategic agile implementation and leadership development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:shadow-pmi-blue/5 hover:transform hover:-translate-y-2 transition-all duration-500 group cursor-default"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-black/5`}>
                                {React.cloneElement(service.icon, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-black text-pmi-navy tracking-tight">{service.title}</h3>
                            <p className="text-slate-500 text-base mt-4 leading-relaxed font-medium">
                                Comprehensive solutions tailored to your unique organizational culture and delivery goals.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
