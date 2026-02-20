import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ResumeSection from '../components/ResumeSection';
import Competencies from '../components/Competencies';
import CareerJourney from '../components/CareerJourney';
import Credentials from '../components/Credentials';
import Services from '../components/Services';
import { Footer } from '../components/Footer';

const Home = ({ profile, initials, experiences, services, socialLinks, skills, educations, certifications }) => {
    return (
        <div className="relative min-h-screen bg-white dark:bg-slate-950 font-sans text-pmi-navy dark:text-white selection:bg-pmi-blue selection:text-white transition-colors duration-300 overflow-hidden">
            {/* Removed colorful liquid background elements for a pure white layout */}
            <Navbar
                initials={initials}
                firstName={profile?.firstName}
                lastName={profile?.lastName}
                socialLinks={socialLinks}
            />

            <main className="relative z-10">
                <Hero
                    profile={profile}
                />

                <ResumeSection />

                <Competencies skills={skills} />

                <CareerJourney experiences={experiences} timelineSteps={profile?.timelineSteps} />

                <Credentials educations={educations} certifications={certifications} />

                <Services services={services} />
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
