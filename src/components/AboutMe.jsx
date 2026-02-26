import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const tabData = [
    {
        id: "journey",
        label: "My Journey",
        content: (
            <div className="space-y-6 text-sm text-left text-slate-700 dark:text-slate-300 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p>
                    I am an IT Project Manager and Vocational Trainer who believes that the best educators are those who have mastered the craft in the field. My foundation is built on years of leading complex, cross-functional software teams through every stage of the development lifecycle.
                </p>
                <p>
                    From initial scoping to final delivery, I have guided teams to produce robust, scalable solutions. My journey has given me a profound understanding of how to align technical execution with overarching business objectives.
                </p>
            </div>
        ),
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "teaching",
        label: "Training & Education",
        content: (
            <div className="space-y-6 text-sm text-left text-slate-700 dark:text-slate-300 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p>
                    While my current focus is on empowering the next generation of project leaders, I bring the same level of precision and high-stakes competence found in top-tier tech firms to the classroom.
                </p>
                <p>
                    My approach isn't just about following a syllabus; it's about applying Agile frameworks, strategic risk management, and business-driven outcomes to real-world scenarios, preparing students for the actual demands of the industry.
                </p>
            </div>
        ),
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "leadership",
        label: "Leadership Style",
        content: (
            <div className="space-y-6 text-sm text-left text-slate-700 dark:text-slate-300 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p>
                    Whether I am managing a project roadmap or facilitating a professional workshop, my goal is to drive excellence through practical, industry-standard expertise. I believe in servant leadership and fostering an environment of continuous improvement.
                </p>
                <p>
                    I focus heavily on team dynamics, ensuring everyone has the context and resources they need to succeed while maintaining clear alignment with our strategic milestones and quality expectations.
                </p>
            </div>
        ),
        image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000&auto=format&fit=crop"
    }
];

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState("journey");
    const activeTabData = tabData.find(t => t.id === activeTab) || tabData[0];

    return (
        <section id="about" className="pt-8 pb-16 overflow-hidden transition-colors duration-300">
            <div className="container-shell">
                <Tabs defaultValue="journey" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className="mb-10 text-center flex flex-col items-center">
                        <h2 className="text-4xl font-black text-pmi-navy dark:text-white tracking-tight mb-8">
                            About <span className="text-pmi-blue dark:text-blue-400">Me.</span>
                        </h2>

                        <div className="w-full max-w-3xl mx-auto">
                            <TabsList className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl w-full flex justify-between h-auto">
                                {tabData.map(tab => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        className="text-[11px] md:text-sm font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-pmi-blue data-[state=active]:shadow-sm flex-1 py-2.5 md:py-3 rounded-lg mx-0.5 transition-all duration-300"
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-10 gap-8 lg:gap-12 items-start">
                        {/* Left Side: Image (30%) */}
                        <div className="lg:col-span-3 relative flex justify-center lg:justify-start items-start">
                            <div className="absolute -z-10 bg-pmi-blue/10 dark:bg-blue-500/10 w-full h-[80%] rounded-full blur-3xl transform translate-x-1"></div>
                            <img
                                key={activeTab}
                                src={activeTabData.image}
                                alt="About Me"
                                className="rounded-2xl shadow-xl object-cover w-48 h-48 md:w-64 md:h-64 lg:w-full lg:h-auto aspect-square border-2 border-white/80 dark:border-slate-800/80 transition-all duration-500 animate-in fade-in duration-500"
                            />
                        </div>

                        {/* Right Side: Tabbed Content (70%) */}
                        <div className="lg:col-span-7">
                            {tabData.map(tab => (
                                <TabsContent key={tab.id} value={tab.id} className="mt-0">
                                    {tab.content}
                                </TabsContent>
                            ))}
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default AboutMe;
