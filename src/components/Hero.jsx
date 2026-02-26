import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ profile }) => {
    if (!profile) return null;

    const { title, subtitle, bio, profilePhoto } = profile;

    const getPhotoUrl = (photo) => {
        if (!photo) return null;
        return typeof photo === 'string' ? photo : (photo.url || null);
    };

    const imageUrl = getPhotoUrl(profilePhoto) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="section-shell overflow-hidden pb-6 pt-32 md:pt-28 lg:pt-36">
            <div className="container-shell grid items-center gap-8 lg:grid-cols-12 mt-12 md:mt-0">
                <div className="order-1 lg:order-1 lg:col-span-7 flex flex-col">
                    <div className="text-center md:text-left">
                        <p className="mb-3 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                            Available for collaboration
                        </p>

                        <h1 className="section-heading">
                            <span className="hero-title-gradient">{title || 'Project Leadership with Purpose'}</span>
                        </h1>

                        <p className="mt-4 text-base md:text-lg font-semibold text-foreground/80 mx-auto md:mx-0 max-w-sm md:max-w-none">
                            {subtitle}
                        </p>

                        <div
                            className="section-subheading mt-5 max-w-2xl text-base mx-auto md:mx-0"
                            dangerouslySetInnerHTML={{ __html: bio }}
                        />
                    </div>
                </div>

                <div className="order-2 lg:order-2 lg:col-span-5">
                    <div className="relative mx-auto w-[260px] h-[260px] md:w-[320px] md:h-[320px] mt-12 mb-4 lg:mt-16 lg:mb-0">
                        <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/20 via-brand/5 to-accent/20 blur-3xl opacity-50" />

                        {/* Stacked Background Cards */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0f52ba] to-[#0a3a8a] rotate-[9deg] shadow-lg border border-white/10 origin-bottom-right transition-transform duration-500 hover:rotate-[12deg] opacity-90"></div>
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#003366] to-[#00264d] rotate-[6deg] shadow-lg border border-white/10 origin-bottom-right transition-transform duration-500 hover:rotate-[9deg] opacity-85"></div>
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#002347] to-[#001730] rotate-[3deg] shadow-lg border border-white/10 origin-bottom-right transition-transform duration-500 hover:rotate-[6deg]"></div>

                        {/* Main Top Card */}
                        <div className="surface-card absolute inset-0 rounded-3xl p-2 shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
                            <img
                                src={imageUrl}
                                alt="Profile"
                                className="h-full w-full rounded-[1.25rem] object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="order-3 lg:order-3 lg:col-span-5">
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-0">
                        <Button size="lg" className="rounded-xl px-6" onClick={() => scrollToSection('experience')}>
                            View journey
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-xl px-6 hover:border-[#6A317F] hover:bg-[#6A317F] hover:text-white"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact me
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
