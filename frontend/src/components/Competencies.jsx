import React from 'react';
import { Settings, Cpu, Share2 } from 'lucide-react';

const Competencies = () => {
    const data = [
        {
            title: "Management & Leadership",
            icon: <Settings className="text-pmi-blue" />,
            skills: ["Agile Leadership", "Methodology", "Process Mentorship", "Change Management"]
        },
        {
            title: "Engineering & Tech",
            icon: <Cpu className="text-pmi-orange" />,
            skills: ["Technical Guidance", "Release Patterns", "Low-code/No-code", "Cross-platform"]
        },
        {
            title: "Transferrable & Soft",
            icon: <Share2 className="text-pmi-purple" />,
            skills: ["Executive Communication", "Team Collaboration", "Global Scalability", "Organizational Design"]
        }
    ];

    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-5xl font-black text-pmi-navy tracking-tight">
                        Core <span className="text-pmi-blue">Competencies.</span>
                    </h2>
                    <p className="text-muted-foreground font-medium mt-4">Focused skill sets derived from years of hands-on project management.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <div key={index} className="bg-white rounded-[2rem] p-8 border-2 border-border hover:border-pmi-blue/30 transition-all group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-secondary transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black text-pmi-navy">{item.title}</h3>
                            </div>
                            <ul className="space-y-4">
                                {item.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-3 text-pmi-navy/80 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-pmi-blue mr-2" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competencies;
