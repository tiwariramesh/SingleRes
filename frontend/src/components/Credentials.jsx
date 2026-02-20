import React from 'react';

const Credentials = ({ educations = [], certifications = [] }) => {
    // Sort items by order
    const degrees = [...educations].sort((a, b) => (a.order || 0) - (b.order || 0));
    const certs = [...certifications].sort((a, b) => (a.order || 0) - (b.order || 0));

    // Helper to get image URL
    const getImageUrl = (media, fallback) => {
        if (!media) return fallback;
        // Handle flat structure (mock data)
        if (media.url) {
            return media.url.startsWith('http') ? media.url : `${import.meta.env.VITE_STRAPI_URL}${media.url}`;
        }
        // Handle Strapi nested structure
        if (media.data?.attributes?.url) {
            const url = media.data.attributes.url;
            return url.startsWith('http') ? url : `${import.meta.env.VITE_STRAPI_URL}${url}`;
        }
        return fallback;
    };

    return (
        <section id="credentials" className="py-12 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-10">
                    <h2 className="text-4xl font-black text-pmi-navy dark:text-white tracking-tight leading-tight">
                        Learning & <span className="text-pmi-blue dark:text-blue-400">Credentials.</span>
                    </h2>
                    <p className="text-base text-slate-500 dark:text-slate-400 font-medium mt-2">Academic foundations and enterprise certifications.</p>
                </div>

                {/* Degrees Section */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {degrees.length > 0 ? degrees.map((degree, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] p-8 hover:shadow-md transition-all group relative overflow-hidden flex items-center gap-6">
                            {/* University Logo */}
                            <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 overflow-hidden shrink-0">
                                <img
                                    src={getImageUrl(degree.image, `https://placehold.co/100x100/2563eb/ffffff?text=${degree.title?.substring(0, 3)}`)}
                                    alt={degree.institution}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-2xl font-black text-pmi-navy dark:text-white leading-none">{degree.title}</h3>
                                    <span className="text-sm font-black text-slate-400 dark:text-slate-500">{degree.year}</span>
                                </div>

                                <h4 className="text-base font-bold text-pmi-navy dark:text-slate-300 leading-tight mb-1">{degree.name}</h4>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">{degree.institution}</p>
                            </div>
                        </div>
                    )) : (
                        <p className="text-muted-foreground">Loading education...</p>
                    )}
                </div>

                {/* Industry Certifications Header */}
                <div className="mb-8 border-t border-pmi-blue/10 dark:border-blue-500/10 pt-8">
                    <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Industry Certifications</h3>
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.length > 0 ? certs.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link || "#"}
                            target={cert.link ? "_blank" : "_self"}
                            rel={cert.link ? "noopener noreferrer" : ""}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg hover:border-pmi-blue/30 dark:hover:border-blue-400/30 hover:-translate-y-1 transition-all group relative"
                        >
                            <div className="w-12 h-12 shrink-0">
                                <img
                                    src={getImageUrl(cert.logo, `https://placehold.co/80x80/2d3748/ffffff?text=${cert.name?.substring(0, 2)}`)}
                                    alt={cert.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h4 className="text-xs font-black text-pmi-navy dark:text-white group-hover:text-pmi-blue dark:group-hover:text-blue-400 transition-colors">{cert.name}</h4>
                                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">{cert.role}</p>
                            </div>
                            {/* Year Tag */}
                            <div className="absolute top-4 right-4">
                                <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[9px] font-bold px-1.5 py-0.5 rounded">
                                    {cert.year}
                                </span>
                            </div>
                        </a>
                    )) : (
                        <p className="text-muted-foreground">Loading certifications...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Credentials;
