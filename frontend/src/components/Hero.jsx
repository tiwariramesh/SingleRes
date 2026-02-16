import React from 'react';
import { ShieldCheck, Trophy, BadgeCheck, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ title, bio, profileImage }) => {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-pmi-blue/5 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4"></div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-6 lg:space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pmi-blue/5 border border-pmi-blue/10 text-pmi-blue font-bold text-[10px] md:text-xs tracking-widest uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pmi-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-pmi-blue"></span>
                            </span>
                            Available for Collaboration
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-pmi-navy leading-tight tracking-tight">
                                <span className="text-pmi-blue">Agile</span> Project Manager.
                            </h1>
                            <h2 className="text-xl md:text-2xl font-bold text-pmi-navy/70 tracking-tight leading-tight">
                                Adaptive Teams. <span className="text-pmi-blue">Reliable Delivery.</span>
                            </h2>
                        </div>

                        <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl">
                            {bio ? (
                                <span dangerouslySetInnerHTML={{
                                    __html: bio
                                        .replace(/\*\*(.*?)\*\*/g, '<b class="text-pmi-navy font-black">$1</b>')
                                        .replace(/\[blue\](.*?)\[\/blue\]/g, '<span class="text-pmi-blue font-bold">$1</span>')
                                }} />
                            ) : (
                                <>
                                    Senior Agile Project Manager transforming <b className="text-pmi-navy font-black">complex delivery challenges</b> into streamlined <span className="text-pmi-blue font-bold">high-performing teams</span>, specializing in FinTech, Media and Scrum methodologies.
                                </>
                            )}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button
                                size="lg"
                                className="h-11 px-7 rounded-xl bg-pmi-navy hover:bg-black text-white font-bold text-[13px] shadow-xl shadow-pmi-navy/20 transition-all hover:-translate-y-1 flex items-center gap-2"
                            >
                                Professional Journey <ArrowRight size={14} />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-11 px-7 rounded-xl bg-white text-pmi-navy font-bold text-[13px] border-2 border-slate-100 hover:border-pmi-blue hover:bg-pmi-blue/5 transition-all hover:-translate-y-1"
                            >
                                Contact Me
                            </Button>
                        </div>

                        {/* Compact Stats */}
                        <div className="flex items-center gap-10 pt-8 border-t border-slate-100">
                            <div>
                                <p className="text-2xl font-black text-pmi-navy">10+</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Exp.</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-pmi-navy">50+</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Projects</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-pmi-navy">99%</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Success</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content (Image & Badges) */}
                    <div className="lg:col-span-12 xl:col-span-5 relative flex justify-center lg:justify-end py-10 lg:py-0">
                        <div className="relative group">
                            {/* Decorative Circle Backgrounds */}
                            <div className="absolute inset-0 bg-pmi-blue/10 rounded-full scale-110 blur-2xl group-hover:bg-pmi-blue/20 transition-all duration-700"></div>
                            <div className="absolute -inset-4 border-2 border-dashed border-pmi-blue/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute -inset-8 border border-pmi-navy/5 rounded-full"></div>

                            {/* Circular Image Container */}
                            <div className="relative z-10 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full p-3 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] ring-1 ring-slate-100">
                                <div className="w-full h-full rounded-full overflow-hidden bg-slate-50 relative border-4 border-white shadow-inner">
                                    <img
                                        src={profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"}
                                        alt="Profile"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-pmi-navy/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* PMP Badge (Attached) */}
                            <div className="absolute top-10 -right-4 md:-right-8 z-20 bg-white p-3 md:p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-50 animate-float max-w-[160px] md:max-w-[180px]">
                                <div className="flex items-center gap-2.5 md:gap-3">
                                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-pmi-blue/10 flex items-center justify-center text-pmi-blue shrink-0">
                                        <BadgeCheck size={22} className="md:size-24" />
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Certified</p>
                                        <p className="text-[10px] md:text-[11px] font-black text-pmi-navy leading-tight uppercase">PMP® Professional</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trainer Badge (Attached) */}
                            <div className="absolute bottom-10 -left-4 md:-left-8 z-20 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-50 animate-float flex-shrink-0" style={{ animationDelay: '2s' }}>
                                <div className="flex items-center gap-2.5 md:gap-3">
                                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                                        <Trophy size={18} className="md:size-20" />
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Experienced</p>
                                        <p className="text-[10px] md:text-[11px] font-black text-pmi-navy leading-tight uppercase tracking-tight">Vocational Trainer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
