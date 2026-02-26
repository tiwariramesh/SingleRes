import React from 'react';

const Credentials = ({ educations = [], certifications = [] }) => {
    const degrees = [...educations].sort((a, b) => (a.order || 0) - (b.order || 0));
    const certs = [...certifications].sort((a, b) => (a.order || 0) - (b.order || 0));

    const getImageUrl = (media, fallback) => {
        if (!media) return fallback;
        if (typeof media === 'string') return media;
        return media.url || fallback;
    };

    return (
        <section id="credentials" className="py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="container-shell">
                <div className="mb-10">
                    <h2 className="text-4xl font-black text-pmi-navy dark:text-white tracking-tight leading-tight">
                        Learning & <span className="text-pmi-blue dark:text-blue-400">Credentials.</span>
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-2">Academic foundations and enterprise certifications.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {degrees.length > 0 ? degrees.map((degree, index) => (
                        <div key={index} className="surface-card interactive flex h-full flex-col gap-3 overflow-hidden rounded-[2rem] p-6 hover:-translate-y-1">

                            <div className="flex flex-row items-center gap-4 w-full">
                                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-[1rem] border border-border bg-muted md:h-16 md:w-16">
                                    <img
                                        src={getImageUrl(degree.image, `https://placehold.co/400x400/2d3748/ffffff?text=${degree.title?.substring(0, 3)}`)}
                                        alt={degree.institution}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h3 className="mb-1 text-base font-bold leading-tight text-foreground md:text-lg lg:text-[1.1rem]">{degree.title}</h3>
                                    <h4 className="text-xs font-semibold leading-tight text-muted-foreground md:text-sm">{degree.institution}</h4>
                                </div>
                            </div>

                            <div className="flex flex-row flex-wrap items-center gap-2 w-full">
                                <span className="inline-flex items-center rounded-lg bg-brand/10 px-2.5 py-1.5 text-[10px] font-semibold text-brand md:text-xs">
                                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    {degree.location || "Online"}
                                </span>
                                <span className="inline-flex items-center rounded-lg bg-muted px-2.5 py-1.5 text-[10px] font-semibold text-muted-foreground md:text-xs">
                                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    Class of {degree.year}
                                </span>
                            </div>
                        </div>
                    )) : (
                        <p className="text-muted-foreground">Loading education...</p>
                    )}
                </div>

                <div className="mb-6 border-t border-slate-200 dark:border-slate-700 pt-8">
                    <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Industry certifications</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {certs.length > 0 ? certs.map((cert, index) => (
                        <div
                            key={index}
                            className="surface-card interactive flex flex-col gap-3 rounded-xl p-4"
                        >
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted p-1">
                                    <img
                                        src={getImageUrl(cert.logo, `https://placehold.co/80x80/2d3748/ffffff?text=${cert.name?.substring(0, 2)}`)}
                                        alt={cert.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h4 className="truncate text-[11px] font-bold uppercase tracking-tight text-foreground">{cert.name}</h4>
                                    <p className="mt-0.5 truncate text-[10px] text-muted-foreground">{cert.description}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-50 dark:border-slate-800/50">
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400">
                                    {cert.issuer}
                                </span>
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                    Issued on {cert.year}
                                </span>
                            </div>
                        </div>
                    )) : (
                        <p className="text-muted-foreground">Loading certifications...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Credentials;
