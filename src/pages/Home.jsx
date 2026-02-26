import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ResumeSection from '../components/ResumeSection';
import Competencies from '../components/Competencies';
import CareerJourney from '../components/CareerJourney';
import Credentials from '../components/Credentials';
import Services from '../components/Services';
import { Footer } from '../components/Footer';

const Home = ({ profile, initials, experiences, services, socialLinks, skills, educations, certifications }) => {
    return (
        <div className="relative min-h-screen bg-background font-sans text-foreground selection:bg-brand selection:text-white overflow-hidden">
            <Navbar
                initials={initials}
                firstName={profile?.firstName}
                lastName={profile?.lastName}
                socialLinks={socialLinks}
            />

            <main className="relative z-10">
                <Hero profile={profile} />
                <AboutMe />
                <ResumeSection />
                <Competencies skills={skills} />
                <CareerJourney experiences={experiences} />
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
