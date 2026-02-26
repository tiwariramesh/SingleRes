import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ profile }) => {
    if (!profile) return null;

    const {
        title,
        subtitle,
        bio,
        heroBadges,
        profilePhoto
    } = profile;

    const getPhotoUrl = (photo) => {
        if (!photo) return null;
        return typeof photo === 'string' ? photo : (photo.url || null);
    };

    const imageUrl = getPhotoUrl(profilePhoto) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="section-shell overflow-hidden pb-12 pt-28 lg:pt-36">
            <div className="container-shell grid items-center gap-12 lg:grid-cols-12">
                <div className="order-2 lg:order-1 lg:col-span-7">
                    <p className="mb-3 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                        Available for collaboration
                    </p>

                    <h1 className="section-heading">
                        <span className="hero-title-gradient">{title || 'Project Leadership with Purpose'}</span>
                    </h1>

                    <p className="mt-4 text-lg font-semibold text-foreground/80">
                        {subtitle}
                    </p>

                    <div
                        className="section-subheading mt-5 max-w-2xl text-base"
                        dangerouslySetInnerHTML={{ __html: bio }}
                    />

                    <div className="mt-8 flex flex-wrap gap-3">
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

                <div className="order-1 lg:order-2 lg:col-span-5">
                    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-brand/5 to-accent/20 blur-2xl" />
                        <div className="surface-card interactive rotate-2 rounded-[2.15rem] p-3 shadow-lg">
                            <img
                                src={imageUrl}
                                alt="Profile"
                                className="h-[360px] w-full rounded-[1.15rem] object-cover md:h-[420px]"
                            />
                        </div>

                        <div className="surface-card absolute -left-5 top-9 rounded-xl px-3 py-2 shadow-sm">
                            <p className="text-xs font-semibold text-foreground">Delivery-focused</p>
                            <p className="text-[11px] text-muted-foreground">Complex projects, clear outcomes</p>
                        </div>

                        <div className="surface-card absolute -right-5 bottom-9 rounded-xl px-3 py-2 shadow-sm">
                            <p className="text-xs font-semibold text-foreground">People-centred</p>
                            <p className="text-[11px] text-muted-foreground">Leadership with practical rigour</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
