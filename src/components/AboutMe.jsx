import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const tabData = [
    {
        id: "journey",
        label: "My Journey",
        content: (
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
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
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p>
                    While my current focus is on empowering the next generation of project leaders, I bring the same level of precision and high-stakes competence found in top-tier tech firms to the classroom.
                </p>
                <p>
                    My approach isn't just about following a syllabus; it’s about applying Agile frameworks, strategic risk management, and business-driven outcomes to real-world scenarios, preparing students for the actual demands of the industry.
                </p>
            </div>
        ),
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "leadership",
        label: "Leadership Style",
        content: (
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
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

    // Find active image based on tab selection
    const activeImage = tabData.find(t => t.id === activeTab)?.image || tabData[0].image;

    return (
        <section id="about" className="py-16 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-black text-pmi-navy dark:text-white tracking-tight mb-4">
                        About <span className="text-pmi-blue dark:text-blue-400">Me.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Tabs */}
                    <div className="lg:col-span-8 space-y-8">
                        <Tabs defaultValue="journey" onValueChange={setActiveTab} className="w-full">
                            <TabsList className="glass-card dark:glass-card-dark p-2 rounded-[1.25rem] flex mx-auto max-w-2xl mb-8 shadow-sm h-auto">
                                {tabData.map(tab => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        className="flex-1 rounded-xl py-2.5 font-bold text-sm md:text-base tracking-wide text-slate-500 dark:text-slate-400 data-[state=active]:bg-white data-[state=active]:text-pmi-blue data-[state=active]:shadow-md dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-blue-400 transition-all duration-300 transform data-[state=active]:scale-[1.02]"
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {tabData.map(tab => (
                                <TabsContent key={tab.id} value={tab.id} className="mt-0 outline-none">
                                    {tab.content}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>

                    {/* Right Side: Dynamic Image */}
                    <div className="lg:col-span-4 relative flex justify-center items-center h-full min-h-[300px] md:min-h-[400px]">
                        <div className="absolute -z-10 bg-pmi-blue/10 dark:bg-blue-500/10 w-full h-full rounded-full blur-3xl transform translate-x-4 -translate-y-4"></div>
                        <img
                            key={activeImage}
                            src={activeImage}
                            alt="About Me Category"
                            className="rounded-[2rem] shadow-2xl object-cover h-64 md:h-80 lg:h-96 w-full border-4 border-white/80 dark:border-slate-800/80 transition-all duration-500"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
