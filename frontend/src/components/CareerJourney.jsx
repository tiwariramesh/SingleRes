import React from 'react';
import { motion } from 'framer-motion';

const CareerJourney = () => {
    // Data combining specific user request (2012 start) with provided sample data
    const experiences = [
        {
            role: "Project Manager II",
            company: "Perth Institute of Business and Technology",
            date: "Jun 2023 - Present",
            duration: "Current",
            description: [
                "Delivering Diploma of Project Management and facilitating Professional Year Programs.",
                "Mentoring students on Agile methodologies and PMBOK standards.",
                "Aligning curriculum with current industry requirements."
            ],
            color: "bg-pmi-blue",
            type: "work"
        },
        {
            role: "ICT Project Manager",
            company: "West Coast Tech Solutions",
            date: "Aug 2021 - May 2023",
            duration: "1 yr 10 mos",
            description: [
                "Led mid-scale cloud migration projects for local SMEs.",
                "Managed cross-functional teams of developers and QA engineers.",
                "Standardized project documentation using Confluence and Jira."
            ],
            color: "bg-pmi-green",
            type: "work"
        },
        {
            role: "Business Analyst",
            company: "Perth Digital ERP Systems",
            date: "Jan 2020 - Jul 2021",
            duration: "1 yr 7 mos",
            description: [
                "Gathered requirements for ERP implementations via stakeholder workshops.",
                "Developed detailed user stories and process flow diagrams.",
                "Bridged communication between business units and technical teams."
            ],
            color: "bg-pmi-purple",
            type: "work"
        },
        {
            role: "Software Developer (.NET)",
            company: "Multiple Organizations",
            date: "Jul 2016 - Sep 2018",
            duration: "2 yrs 3 mos",
            description: [
                "Developed custom software solutions using .NET frameworks.",
                "Built expertise in full-stack development and enterprise architecture.",
                "Collaborated with senior architects on system design."
            ],
            color: "bg-slate-500",
            type: "work"
        },
        {
            role: "Student",
            company: "University / Self-Learning",
            date: "2012 - 2016",
            duration: "4 yrs",
            description: [
                "Foundation in Computer Science and early project management exposure.",
                "Completed capstone projects focused on software lifecycle management.",
                "Active member of the university tech society."
            ],
            color: "bg-slate-300",
            type: "education"
        }
    ];

    const steps = [
        { year: '2012', label: 'Student', pos: '0%' },
        { year: '2016', label: 'Developer', pos: '28%' },
        { year: '2020', label: 'Analyst Lead', pos: '57%' },
        { year: '2023', label: 'Project Manager I', pos: '78%' },
        { year: '2026', label: 'Project Manager II', pos: '100%' }
    ];

    return (
        <section id="experience" className="py-16 bg-gradient-to-b from-slate-100/50 via-pmi-blue/5 to-pmi-blue/10 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-5xl font-black text-pmi-navy tracking-tight mb-4">
                        Career <span className="text-pmi-blue">Journey.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Progressive impact across global organizations and transformative initiatives
                    </p>
                </div>

                {/* Horizontal Timeline (Desktop) */}
                <div className="hidden lg:block relative mb-24 mt-12 px-4">
                    {/* Main Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-pmi-blue to-pmi-blue rounded-full" />

                    {/* Steps */}
                    <div className="relative w-full h-12">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="absolute top-0 transform -translate-x-1/2 flex flex-col items-center"
                                style={{ left: step.pos }}
                            >
                                {/* Dot */}
                                <div className="w-4 h-4 rounded-full bg-white border-4 border-pmi-blue -mt-1.5 mb-3 shadow-sm" />
                                {/* Labels */}
                                <div className="text-center w-32">
                                    <span className="block text-sm font-black text-pmi-navy">
                                        {step.year} {step.year === '2026' && <span className="text-muted-foreground font-bold">(PRESENT)</span>}
                                    </span>
                                    <span className="block text-xs font-bold text-slate-400 mt-1 uppercase tracking-wide">
                                        {step.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left-Aligned Timeline Layout */}
                <div className="relative mt-16 px-4 md:px-0">
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-0">

                                {/* LEFT: Metadata (Logo, Date, Duration) */}
                                <div className="w-full md:w-64 flex flex-col md:items-end md:text-right shrink-0 md:pr-8 md:py-2">
                                    {/* Logo */}
                                    <div className="hidden md:flex mb-3 items-center justify-end">
                                        <div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1">
                                            <div className={`w-full h-full rounded-full flex items-center justify-center ${exp.color} text-white`}>
                                                <span className="font-bold text-xs">{exp.company.substring(0, 2).toUpperCase()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-black text-slate-700 leading-tight mb-1">{exp.date}</h4>
                                    <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${exp.duration === 'Current' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* CENTER: Line & Connector */}
                                <div className="hidden md:block relative w-12 shrink-0">
                                    {/* Vertical Line */}
                                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
                                    {/* Connector Dot */}
                                    <div className={`absolute top-6 left-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md -translate-x-1/2 z-10 ${exp.color.replace('bg-', 'bg-')}`} />
                                </div>

                                {/* RIGHT: Card Content */}
                                <div className="flex-1 pb-8 md:pb-0">
                                    <motion.div
                                        whileHover={{ y: -4, scale: 1.01 }}
                                        className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-sm border border-slate-100 group relative overflow-hidden"
                                    >
                                        {/* Mobile Logo & Meta Header (Visible only on mobile) */}
                                        <div className="flex md:hidden items-center gap-4 mb-4 pb-4 border-b border-slate-50">
                                            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${exp.color} text-white`}>
                                                    <span className="font-bold text-xs">{exp.company.substring(0, 2).toUpperCase()}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-black text-slate-800">{exp.date}</h4>
                                                <span className="text-xs font-bold text-slate-500">{exp.duration}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h3 className="text-2xl font-black text-pmi-navy group-hover:text-pmi-blue transition-colors">{exp.role}</h3>
                                            <h5 className={`text-base font-bold ${exp.color.replace('bg-', 'text-')}`}>
                                                {exp.company}
                                            </h5>
                                        </div>

                                        <ul className="space-y-2.5">
                                            {Array.isArray(exp.description) ? exp.description.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-600 font-medium leading-relaxed">
                                                    {/* Custom colored bullet */}
                                                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${exp.color}`} />
                                                    <span className="text-sm">{point}</span>
                                                </li>
                                            )) : (
                                                <li className="text-sm text-slate-600">{exp.description}</li>
                                            )}
                                        </ul>

                                        {/* Decorative Gradient Blob */}
                                        <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 blur-2xl ${exp.color}`} />
                                    </motion.div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerJourney;
