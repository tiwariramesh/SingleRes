import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Footer } from '../components/Footer';

// Lazy load heavy components below the fold
const ResumeSection = lazy(() => import('../components/ResumeSection'));
const Competencies = lazy(() => import('../components/Competencies'));
const CareerJourney = lazy(() => import('../components/CareerJourney'));
const Credentials = lazy(() => import('../components/Credentials'));
const Services = lazy(() => import('../components/Services'));

// Simple loading fallback
const SectionLoader = () => (
    <div className="py-20 flex justify-center items-center">
        <div className="w-8 h-8 rounded-full border-4 border-pmi-blue border-t-transparent animate-spin"></div>
    </div>
);

const Home = ({ profile, initials, experiences, services, socialLinks, skills, educations, certifications }) => {
    return (
        <div className="relative min-h-screen bg-white dark:bg-slate-950 font-sans text-pmi-navy dark:text-white selection:bg-pmi-blue selection:text-white transition-colors duration-300 overflow-hidden">
            <Navbar
                initials={initials}
                firstName={profile?.firstName}
                lastName={profile?.lastName}
                socialLinks={socialLinks}
            />

            <main className="relative z-10">
                {/* Hero is critical, load immediately */}
                <Hero profile={profile} />

                {/* Lazy load the rest */}
                <Suspense fallback={<SectionLoader />}>
                    <ResumeSection />
                </Suspense>

                <Suspense fallback={<SectionLoader />}>
                    <Competencies skills={skills} />
                </Suspense>

                <Suspense fallback={<SectionLoader />}>
                    <CareerJourney experiences={experiences} timelineSteps={profile?.timelineSteps} />
                </Suspense>

                <Suspense fallback={<SectionLoader />}>
                    <Credentials educations={educations} certifications={certifications} />
                </Suspense>

                <Suspense fallback={<SectionLoader />}>
                    <Services services={services} />
                </Suspense>
            </main>

            <div className="relative z-10">
                <Footer
                    firstName={profile?.firstName}
                    lastName={profile?.lastName}
                    socialLinks={socialLinks}
                    services={services}
                />
            </div>
        </div>
    );
};

export default Home;
