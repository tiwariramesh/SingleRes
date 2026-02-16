import React from 'react';

const Competencies = () => {
    const data = [
        {
            title: "Management & Leadership",
            barColor: "bg-pmi-blue",
            skills: [
                { name: "Agile Leadership", desc: "Scrum Master ceremonies, team coaching, retrospectives", color: "bg-pmi-blue" },
                { name: "SAFe Scaling", desc: "PI Planning, RAID Management, cross-team dependencies", color: "bg-pmi-blue" },
                { name: "Product Ownership", desc: "Backlog prioritization, stakeholder management", color: "bg-pmi-blue" },
                { name: "Change Management", desc: "Org transformation, lean principles, continuous improvement, Release Management", color: "bg-pmi-blue" }
            ]
        },
        {
            title: "Engineering & Tools",
            barColor: "bg-pmi-navy",
            badge: "HANDS-ON",
            skills: [
                { name: "Technical Experience", desc: "Full-stack development", color: "bg-pmi-navy" },
                { name: "Enterprise Platforms", desc: "Jira, JiraAlign, Confluence", color: "bg-pmi-navy" },
                { name: "Languages Experience", desc: ".Net, Python, SQL", color: "bg-pmi-navy" },
                { name: "Domain Experience", desc: "Fintech, Healthcare, ERP, compliance systems", color: "bg-pmi-navy" }
            ]
        },
        {
            title: "Leadership & Communication",
            barColor: "bg-pmi-magenta", // Will define this or use a similar existing color
            skills: [
                { name: "Executive Communication", desc: "Strategic presentations, stakeholder management", color: "bg-pink-500" },
                { name: "Team Development", desc: "Coaching, mentoring, conflict resolution", color: "bg-pink-500" },
                { name: "Cultural Leadership", desc: "Cross-cultural collaboration, psychological safety", color: "bg-pink-500" },
                { name: "Organizational Design", desc: "Team structure, process optimization, scaling", color: "bg-pink-500" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-16 bg-gradient-to-b from-slate-50/30 to-slate-100/50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-20">
                    <h2 className="text-5xl font-black text-pmi-navy tracking-tight mb-6">
                        Core <span className="text-pmi-blue">Competencies.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-3xl leading-relaxed">
                        A blend of strategic leadership, technical acumen, and proven methodologies to drive enterprise transformation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((column, index) => (
                        <div key={index} className="bg-white/50 rounded-[2.5rem] p-8 border border-white hover:border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-10 relative">
                                <div className={`w-1.5 h-10 rounded-full ${column.barColor}`} />
                                <h3 className="text-xl font-black text-pmi-navy leading-tight">{column.title}</h3>
                                {column.badge && (
                                    <span className="absolute right-0 top-0.5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                        {column.badge}
                                    </span>
                                )}
                            </div>

                            {/* Skills List */}
                            <ul className="space-y-8">
                                {column.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex gap-4 group">
                                        <div className={`mt-2 w-2 h-2 rounded-full shrink-0 ${skill.color}`} />
                                        <div>
                                            <h4 className="text-base font-black text-pmi-navy mb-1 group-hover:text-pmi-blue transition-colors">
                                                {skill.name}
                                            </h4>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                                {skill.desc}
                                            </p>
                                        </div>
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
