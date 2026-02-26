import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import privacyContent from '../assets/privacy_policy.md?raw';

const PrivacyPolicy = ({ profile, socialLinks, services }) => {
    return (
        <div className="relative min-h-screen font-sans text-foreground selection:bg-brand selection:text-white overflow-hidden">
            <Navbar
                firstName={profile?.firstName}
                lastName={profile?.lastName}
                socialLinks={socialLinks}
            />

            <main className="relative z-10 pt-32 pb-24">
                <div className="container-shell max-w-4xl">
                    <div className="surface-card p-8 md:p-12 text-muted-foreground leading-relaxed text-sm md:text-base selection:bg-brand/20">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="section-heading mb-4 !text-4xl text-foreground" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-xl font-bold text-foreground mt-12 mb-4" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-lg font-bold text-foreground mt-8 mb-3" {...props} />,
                                p: ({ node, ...props }) => {
                                    // Make "Last Updated:" stand out
                                    if (props.children && typeof props.children[0] === 'string' && props.children[0].includes('Last Updated:')) {
                                        return <p className="text-sm font-semibold text-brand mb-12" {...props} />;
                                    }
                                    return <p className="mb-4" {...props} />;
                                },
                                ul: ({ node, ...props }) => <ul className="list-disc pl-6 mt-4 mb-4 space-y-2" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mt-4 mb-4 space-y-2" {...props} />,
                                li: ({ node, ...props }) => <li {...props} />,
                                a: ({ node, ...props }) => <a className="text-brand font-semibold hover:underline" {...props} />,
                                strong: ({ node, ...props }) => <strong className="text-brand font-bold" {...props} />,
                                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-brand pl-4 italic text-muted-foreground/80 my-4" {...props} />
                            }}
                        >
                            {privacyContent}
                        </ReactMarkdown>
                    </div>
                </div>
            </main>

            <div className="relative z-10">
                <Footer
                    firstName={profile?.firstName}
                    lastName={profile?.lastName}
                    socialLinks={socialLinks}
                    services={services}
                />
            </div>

            <ScrollToTop />
        </div>
    );
};

export default PrivacyPolicy;
