import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Credentials = () => {
    const degrees = [
        {
            title: "MCIS",
            name: "Nepal College Of Information Technology (NCIT)",
            institution: "Pokhara University, Nepal",
            year: "2021",
            description: "Specialized in software architecture, agile systems design, and technology leadership for enterprise-scale transformation.",
            image: "https://placehold.co/100x100/2563eb/ffffff?text=NCIT" // Placeholder
        },
        {
            title: "B.Computing",
            name: "The British College, Nepal",
            institution: "Leeds Beckett University, UK",
            year: "2017",
            description: "Focused on core software engineering, algorithms, and international business systems within a global curriculum.",
            image: "https://placehold.co/100x100/1e293b/ffffff?text=LBU" // Placeholder
        }
    ];

    const certs = [
        {
            name: "SAFE® 6 CERTIFIED",
            role: "Product Owner / Product Manager",
            year: "2024",
            logo: "https://placehold.co/80x80/2f855a/ffffff?text=POPM",
            link: "https://scaledagile.com"
        },
        {
            name: "SAFE® 6 CERTIFIED",
            role: "Advanced Scrum Master",
            year: "2023",
            logo: "https://placehold.co/80x80/2b6cb0/ffffff?text=SASM",
            link: "https://scaledagile.com"
        },
        {
            name: "SAFE® 6 CERTIFIED",
            role: "Scrum Master",
            year: "2022",
            logo: "https://placehold.co/80x80/c53030/ffffff?text=SSM",
            link: "https://scaledagile.com"
        },
        {
            name: "SAFE® 6",
            role: "Certified Practitioner",
            year: "2021",
            logo: "https://placehold.co/80x80/2d3748/ffffff?text=SP",
            link: "https://scaledagile.com"
        }
    ];

    return (
        <section id="credentials" className="py-16 bg-gradient-to-b from-pmi-blue/10 to-pmi-blue/20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-5xl font-black text-pmi-navy tracking-tight leading-tight">
                        Learning & <span className="text-pmi-blue">Credentials.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium mt-4">Academic foundations and enterprise certifications.</p>
                </div>

                {/* Degrees Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {degrees.map((degree, index) => (
                        <div key={index} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex items-center gap-6">
                            {/* University Logo */}
                            <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden shrink-0">
                                <img src={degree.image} alt={degree.institution} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-2xl font-black text-pmi-navy leading-none">{degree.title}</h3>
                                    <span className="text-sm font-black text-slate-400">{degree.year}</span>
                                </div>

                                <h4 className="text-base font-bold text-pmi-navy leading-tight mb-1">{degree.name}</h4>
                                <p className="text-xs font-medium text-slate-500 italic">{degree.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Industry Certifications Header */}
                <div className="mb-10 border-t border-pmi-blue/10 pt-10">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Industry Certifications</h3>
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-lg hover:border-pmi-blue/30 hover:-translate-y-1 transition-all group relative"
                        >
                            <div className="w-12 h-12 shrink-0">
                                <img src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black text-pmi-navy group-hover:text-pmi-blue transition-colors">{cert.name}</h4>
                                <p className="text-[10px] font-bold text-slate-500 mt-0.5">{cert.role}</p>
                            </div>
                            {/* Year Tag */}
                            <div className="absolute top-4 right-4">
                                <span className="bg-slate-100 text-slate-500 text-[9px] font-bold px-1.5 py-0.5 rounded">
                                    {cert.year}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Credentials;
