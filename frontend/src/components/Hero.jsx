import React from 'react';
import { ShieldCheck, Trophy } from 'lucide-react';

const Hero = ({ title, bio, profileImage }) => {
    return (
        <section className="relative overflow-hidden pt-20 pb-32">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-xs font-bold tracking-widest uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for Collaboration
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-black text-pmi-navy leading-[0.95] tracking-tighter">
                            Agile Project <span className="text-pmi-blue">Manager.</span>
                        </h1>

                        <h2 className="text-2xl lg:text-3xl font-bold text-pmi-navy/80 tracking-tight">
                            Adaptive Teams. Reliable Delivery.
                        </h2>

                        <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                            {bio || "Senior Agile Project Manager transforming complex delivery challenges into streamlined high-performing teams, with history of excellence in FinTech, Media and Scrum methodologies per FinTech, Ecommerce and Healthcare."}
                        </p>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <button className="px-10 py-5 rounded-2xl bg-pmi-navy hover:bg-black text-white font-bold shadow-2xl shadow-pmi-navy/30 transition-all hover:-translate-y-1 flex items-center gap-2">
                                Professional Journey
                            </button>
                            <button className="px-10 py-5 rounded-2xl bg-white text-pmi-navy font-bold border-2 border-border hover:border-pmi-blue hover:text-pmi-blue transition-all hover:-translate-y-1">
                                Contact Me
                            </button>
                        </div>

                        {/* Minimal Stats/Social Proof */}
                        <div className="flex items-center gap-12 pt-8 border-t border-border">
                            <div>
                                <p className="text-3xl font-black text-pmi-navy">10+</p>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Years Exp.</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-pmi-navy">50+</p>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Projects</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-pmi-navy">99%</p>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Success</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:ml-auto">
                        <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-[3rem] bg-secondary overflow-hidden border-8 border-white shadow-2xl group">
                            <img
                                src={profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"}
                                alt="Profile"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-pmi-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-10 -right-10 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-border animate-float">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-pmi-blue/10 flex items-center justify-center text-pmi-blue">
                                    <ShieldCheck size={28} font-bold="true" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Trusted</p>
                                    <p className="text-sm font-black text-pmi-navy">Expert Partner</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -left-10 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-border animate-float" style={{ animationDelay: '2s' }}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-pmi-green/10 flex items-center justify-center text-pmi-green">
                                    <Trophy size={28} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Certified</p>
                                    <p className="text-sm font-black text-pmi-navy">Agile Professional</p>
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
