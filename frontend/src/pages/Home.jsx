import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ResumeSection from '../components/ResumeSection';
import Competencies from '../components/Competencies';
import CareerJourney from '../components/CareerJourney';
import Credentials from '../components/Credentials';
import Services from '../components/Services';
import { Footer } from '../components/Footer';

const Home = ({ profile, initials }) => {
    return (
        <div className="min-h-screen bg-white font-sans text-pmi-navy selection:bg-pmi-blue selection:text-white">
            <Navbar
                initials={initials}
                firstName={profile?.firstName}
                lastName={profile?.lastName}
            />

            <main>
                <Hero
                    title={profile?.title}
                    bio={profile?.bio}
                    profileImage={profile?.profilePhoto?.url ? `${import.meta.env.VITE_STRAPI_URL}${profile.profilePhoto.url}` : null}
                />

                <ResumeSection />

                <Competencies />

                <CareerJourney />

                <Credentials />

                <Services />
            </main>

            <Footer
                firstName={profile?.firstName}
                lastName={profile?.lastName}
            />
        </div>
    );
};

export default Home;
