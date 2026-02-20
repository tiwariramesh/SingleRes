import React from 'react';

const Competencies = ({ skills = [] }) => {
    // Use skills from props or fallback to empty array
    const sortedSkills = [...skills].sort((a, b) => (a.order || 0) - (b.order || 0));

    return (
        <section id="skills" className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-5xl font-black text-pmi-navy dark:text-white tracking-tight mb-6">
                        Core <span className="text-pmi-blue dark:text-blue-400">Competencies.</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl leading-relaxed">
                        A blend of strategic leadership, technical acumen, and proven methodologies to drive enterprise transformation.
                    </p>
                </div>

                {sortedSkills.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedSkills.map((column, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6 relative">
                                    <div className={`w-1.5 h-10 rounded-full ${column.barColor}`} />
                                    <h3 className="text-xl font-black text-pmi-navy dark:text-white leading-tight">{column.title}</h3>
                                    {column.badge && (
                                        <span className="absolute right-0 top-0.5 text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                                            {column.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Skills List */}
                                <ul className="space-y-5">
                                    {Array.isArray(column.skills) && column.skills.map((skill, sIdx) => (
                                        <li key={sIdx} className="flex gap-4 group">
                                            <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${skill.color}`} />
                                            <div>
                                                <h4 className="text-base font-black text-pmi-navy dark:text-white mb-1 group-hover:text-pmi-blue dark:group-hover:text-blue-400 transition-colors">
                                                    {skill.name}
                                                </h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                                    {skill.desc}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">Loading competencies...</p>
                )}
            </div>
        </section>
    );
};

export default Competencies;
