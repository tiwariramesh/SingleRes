import React from 'react';

export const HeroImage = ({ imageUrl, badges }) => {
    return (
        <div className="lg:col-span-12 xl:col-span-5 relative flex justify-center lg:justify-end xl:pr-16 py-10 lg:py-0">
            <div className="relative flex justify-center items-center w-full h-[500px]">
                {/* Static Shadow/Background Ovals */}
                {/* Top Right Shadow Oval */}
                <div className="absolute top-0 right-10 w-[260px] h-[380px] md:w-[320px] md:h-[460px] rounded-[10rem] bg-pmi-blue/20 dark:bg-pmi-blue/10 translate-x-8 -translate-y-8 blur-3xl -z-10"></div>

                {/* Bottom Left Shadow Oval */}
                <div className="absolute bottom-10 left-10 w-[260px] h-[380px] md:w-[320px] md:h-[460px] rounded-[10rem] bg-pmi-orange/20 dark:bg-purple-500/10 -translate-x-8 translate-y-8 blur-3xl -z-10"></div>

                {/* Main Oval Image Container */}
                <div className="relative w-[260px] h-[380px] md:w-[320px] md:h-[460px] rounded-[10rem] p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-10 transition-transform duration-500">
                    <div className="w-full h-full rounded-[9.5rem] overflow-hidden bg-slate-50 relative border border-white/50 shadow-inner">
                        <img
                            src={imageUrl}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                        {/* Glass Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-pmi-navy/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                    </div>
                </div>

                {/* Floating Badges */}
                {badges && badges.map((badge, idx) => (
                    <div
                        key={idx}
                        className={`absolute bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 md:p-4 rounded-2xl z-20 shadow-lg ${idx === 0 ? 'top-[15%] -right-6 md:-right-12 max-w-[160px] md:max-w-[200px]' : 'bottom-[10%] -left-6 md:-left-12'}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 bg-white dark:bg-white/95 p-1 shadow-sm overflow-hidden">
                                {idx === 0 ? (
                                    <img src="https://wiki.agileana.com/images/6/68/PMP_project_management_professional_certification_badge.png" alt="Project Management Professional" className="w-full h-full object-contain" />
                                ) : (
                                    <img src="https://www.stc.qld.edu.au/teaching-and-learning/career-pathways/PublishingImages/Nationally_Recognised_Training-logo-4FFA374E99-seeklogo_com.png" alt="Trainer" className="w-full h-full object-contain" />
                                )}
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-0.5">{badge.sub}</p>
                                <p className="text-sm font-bold text-pmi-navy dark:text-white leading-tight">{badge.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
