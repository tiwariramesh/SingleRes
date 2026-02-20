import React from 'react';

export const HeroStats = ({ stats }) => {
    if (!stats || stats.length === 0) return null;

    return (
        <div className="flex items-center gap-10 pt-8 border-t border-slate-100 dark:border-slate-800 justify-center lg:justify-start">
            {stats.map((stat, idx) => (
                <div key={idx}>
                    <p className="text-2xl font-black text-pmi-navy dark:text-white">{stat.value}</p>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};
