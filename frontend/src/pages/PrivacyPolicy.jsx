import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-pmi-navy dark:text-white selection:bg-pmi-blue selection:text-white flex flex-col transition-colors duration-300">
            <Navbar initials="PP" firstName="Privacy" lastName="Policy" />

            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-black text-pmi-navy dark:text-white mb-8">Privacy Policy</h1>
                    <p className="text-slate-500 dark:text-slate-400 mb-12">Last Updated: {new Date().toLocaleDateString('en-AU')}</p>

                    <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-pmi-navy dark:text-white mb-4">1. Introduction</h2>
                            <p>
                                We are committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, and disclose personal information in accordance with the <strong className="text-pmi-blue dark:text-blue-400">Privacy Act 1988 (Cth)</strong> and the <strong className="text-pmi-blue dark:text-blue-400">Australian Privacy Principles (APPs)</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-pmi-navy dark:text-white mb-4">2. Collection of Personal Information</h2>
                            <p>We may collect personal information that is reasonably necessary for our business functions and activities. This may include:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Name, job title, and company name.</li>
                                <li>Contact information including email address and phone number.</li>
                                <li>Professional details such as resume, portfolio, and employment history.</li>
                                <li>Information provided through contact forms or direct communication.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-pmi-navy dark:text-white mb-4">3. Use of Personal Information</h2>
                            <p>We use your personal information for purposes including:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Providing and managing our professional services.</li>
                                <li>Communicating with you about projects, inquiries, or updates.</li>
                                <li>Improving our website and user experience.</li>
                                <li>Compliance with legal obligations.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-pmi-navy dark:text-white mb-4">4. Disclosure of Personal Information</h2>
                            <p>
                                We typically do not disclose your personal information to third parties, except where required by law or to authorized service providers who assist us in our business operations (e.g., website hosting, analytics). We define clear data protection obligations with any such third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-pmi-navy dark:text-white mb-4">5. Data Security</h2>
                            <p>
                                We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorized access, modification, or disclosure. This includes secure data storage and restricted access protocols.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-pmi-navy dark:text-white mb-4">6. Access and Correction</h2>
                            <p>
                                Under the Privacy Act, you have the right to request access to the personal information we hold about you and to ask for it to be corrected if it is inaccurate. Please contact us using the details below to make such a request.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-pmi-navy dark:text-white mb-4">7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                            </p>
                            <div className="mt-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <p className="font-bold text-pmi-navy dark:text-white">Privacy Officer</p>
                                <p>Email: <a href="mailto:privacy@agileprofessional.com.au" className="text-pmi-blue dark:text-blue-400 hover:underline">privacy@agileprofessional.com.au</a></p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer firstName="Privacy" lastName="Policy" />
        </div>
    );
};

export default PrivacyPolicy;
