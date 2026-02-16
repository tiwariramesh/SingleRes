import React from 'react';

const CareerJourney = () => {
    const experiences = [
        {
            role: "Project Manager",
            company: "Multi-Skilled Team (Tech/Finance/Health)",
            period: "Present",
            description: "Leading multi-disciplinary teams in high-stakes environments. Focused on Agile transformation and delivery excellence across various sectors.",
            color: "bg-pmi-blue"
        },
        {
            role: "Associate Team Lead",
            company: "Global Tech Solutions",
            period: "2020 - 2022",
            description: "Mentored and led a team of developers. Improved deployment cycles by 30% through Agile process optimization.",
            color: "bg-pmi-green"
        },
        {
            role: "Software Developer",
            company: "Innovate Apps",
            period: "2018 - 2020",
            description: "Full-stack development with a focus on React and Node.js. Transitioned into leadership by facilitating Scrum ceremonies.",
            color: "bg-pmi-purple"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <h2 className="text-5xl font-black text-pmi-navy tracking-tight">
                        Career <span className="text-pmi-blue">Journey.</span>
                    </h2>
                </div>

                <div className="relative space-y-12">
                    {/* Timeline Vertical Line */}
                    <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden lg:block" />

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-0 lg:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-pmi-blue -translate-x-1/2 z-10 hidden lg:block" />

                            {/* Content Card */}
                            <div className="w-full lg:w-[45%] bg-white rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className={`px-3 py-1 rounded-full ${exp.color} text-white text-[10px] font-bold uppercase tracking-widest`}>
                                            {exp.period}
                                        </span>
                                        <h3 className="text-2xl font-black text-pmi-navy mt-2">{exp.role}</h3>
                                    </div>
                                </div>
                                <p className="text-pmi-blue font-bold mb-4">{exp.company}</p>
                                <p className="text-muted-foreground font-medium leading-relaxed italic">
                                    "{exp.description}"
                                </p>
                            </div>

                            {/* Spacer for large screens */}
                            <div className="hidden lg:block lg:w-[45%]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerJourney;
