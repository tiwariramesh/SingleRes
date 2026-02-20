import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { HeroStats } from './hero/HeroStats';
import { HeroImage } from './hero/HeroImage';

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

    // Simplified image URL logic for standalone mock data
    const getPhotoUrl = (photo) => {
        if (!photo) return null;
        return typeof photo === 'string' ? photo : (photo.url || null);
    };

    const imageUrl = getPhotoUrl(profilePhoto) || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

    return (
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <HeroContent title={title} subtitle={subtitle} bio={bio} />
                        <HeroStats stats={heroStats} />
                    </div>

                    {/* Right Content (Image & Badges) */}
                    <HeroImage imageUrl={imageUrl} badges={heroBadges} />

                </div>
            </div>
        </section>
    );
};

export default Hero;
