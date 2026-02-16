import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Credentials = () => {
    const items = [
        {
            type: "Master's Degree",
            title: "Project Management",
            institution: "Project Management Institute (PMI) / Global University",
            period: "2021",
            icon: <GraduationCap size={32} className="text-pmi-blue" />,
            color: "border-pmi-blue"
        },
        {
            type: "Executive Education",
            title: "Leadership in Tech",
            institution: "The Tech Leadership Academy",
            period: "2023",
            icon: <Award size={32} className="text-pmi-purple" />,
            color: "border-pmi-purple"
        }
    ];

    const certs = [
        { name: "PMP CERTIFIED", issuer: "PMI Global" },
        { name: "SCRUM MASTER", issuer: "Scrum.org" },
        { name: "AGILE LEADER", issuer: "Agile Alliance" },
        { name: "KANBAN PRO", issuer: "Lean Kanban" }
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-5xl font-black text-pmi-navy tracking-tight leading-tight">
                        Learning & <br /><span className="text-pmi-blue">Credentials.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {items.map((item, index) => (
                        <div key={index} className={`bg-white rounded-[2rem] p-8 border-l-8 ${item.color} shadow-lg border border-border flex gap-6 items-start hover:scale-[1.02] transition-transform`}>
                            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.type}</span>
                                    <span className="text-sm font-black text-pmi-blue">{item.period}</span>
                                </div>
                                <h3 className="text-xl font-black text-pmi-navy">{item.title}</h3>
                                <p className="text-muted-foreground font-medium mt-1">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <div key={index} className="bg-muted p-6 rounded-2xl flex items-center gap-4 group hover:bg-white hover:shadow-lg border border-transparent hover:border-border transition-all">
                            <div className="w-10 h-10 rounded-full bg-pmi-blue/10 flex items-center justify-center text-pmi-blue">
                                <Award size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-pmi-navy">{cert.name}</p>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Credentials;
