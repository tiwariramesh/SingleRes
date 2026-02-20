import React from 'react';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ profile }) => {
    // Default fallback locally if profile is null (though App.jsx handles loading)
    if (!profile) return null;

    const {
        title,
        subtitle,
        bio,
        heroStats,
        heroBadges,
        profilePhoto
    } = profile;

    // Fixed image URL logic
    const getPhotoUrl = (photo) => {
        if (!photo) return null;
        if (photo.url) { // v5 flat
            return photo.url.startsWith('http') ? photo.url : `${import.meta.env.VITE_STRAPI_URL}${photo.url}`;
        }
        if (photo.data?.attributes?.url) { // v4 nested
            const url = photo.data.attributes.url;
            return url.startsWith('http') ? url : `${import.meta.env.VITE_STRAPI_URL}${url}`;
        }
        return null;
    };

    const imageUrl = getPhotoUrl(profilePhoto) || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

    // Helper for icons
    const Icon = ({ name, className }) => {
        const LucideIcon = Icons[name];
        // Only render if it's a valid component
        return LucideIcon ? <LucideIcon className={className} /> : null;
    };

    return (
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
            {/* Removed colorful background elements for a pure white layout */}

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pmi-blue/5 dark:bg-pmi-blue/20 border border-pmi-blue/10 dark:border-pmi-blue/30 text-pmi-blue dark:text-blue-300 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pmi-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-pmi-blue"></span>
                            </span>
                            Available for Collaboration
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-pmi-navy dark:text-white leading-tight tracking-tight">
                                {/* Gradient Title */}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pmi-blue via-pmi-blue to-cyan-500 dark:from-blue-400 dark:to-cyan-300" dangerouslySetInnerHTML={{ __html: title || "Agile Project Manager" }} />
                            </h1>
                            <h2 className="text-xl md:text-2xl font-bold text-pmi-navy/70 dark:text-slate-300 tracking-tight leading-tight">
                                {subtitle}
                            </h2>
                        </div>

                        <div className="text-base md:text-lg text-muted-foreground dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0" dangerouslySetInnerHTML={{ __html: bio }} />

                        <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="liquid-button h-12 px-8 rounded-2xl font-black text-sm tracking-wide bg-pmi-blue hover:bg-pmi-blue/90 flex items-center gap-2"
                                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Professional Journey <Icons.ArrowRight size={16} />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="liquid-outline-button h-12 px-8 rounded-2xl font-black text-sm tracking-wide"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Contact Me
                            </Button>
                        </div>

                        {/* Compact Stats */}
                        {heroStats && (
                            <div className="flex items-center gap-10 pt-8 border-t border-slate-100 dark:border-slate-800 justify-center lg:justify-start">
                                {heroStats.map((stat, idx) => (
                                    <div key={idx}>
                                        <p className="text-2xl font-black text-pmi-navy dark:text-white">{stat.value}</p>
                                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Content (Image & Badges) */}
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

                            {/* Floating Badges - Repositioned for Vertical Oval */}
                            {heroBadges && heroBadges.map((badge, idx) => (
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
