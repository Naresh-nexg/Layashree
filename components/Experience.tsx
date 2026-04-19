import React from 'react';
import { EXPERIENCES, CONTACT_INFO } from '../constants';

const Experience: React.FC = () => {
  const handleResumeClick = () => {
    window.open(CONTACT_INFO.resume, '_blank');
  };

  return (
    <section id="experience" className="py-16 md:py-24 px-6 md:px-12 bg-[#050505] border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          <div className="lg:col-span-4 reveal text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 md:mb-8 text-white">EXP.<br className="hidden md:block" />SNAPSHOT</h2>
            <div className="bg-[#3b82f6] p-6 md:p-8 rounded-[1.5rem] text-white shadow-2xl transition-all hover:scale-[1.01] duration-500 cursor-default group/card mx-auto max-w-sm lg:max-w-none">
               <p className="font-bold text-base md:text-lg mb-4 md:mb-6 italic leading-tight">"Execution reveals strategy faster than theory."</p>
               <button 
                onClick={handleResumeClick}
                className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest border-b-2 border-white pb-0.5 hover:opacity-70 transition-all transform active:scale-95 flex items-center gap-1.5 group/btn mx-auto lg:mx-0"
               >
                 Download Full Resume
               </button>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-10 md:space-y-14">
            {EXPERIENCES.map((exp, idx) => (
              <div 
                key={exp.id} 
                className={`relative pl-6 md:pl-10 border-l border-white/10 group reveal transition-all duration-700 hover:border-[#3b82f6]/30`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#3b82f6] group-hover:shadow-[0_0_10px_#3b82f6] transition-all duration-500 group-hover:scale-125" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2 text-center sm:text-left">
                  <div className="transform transition-transform group-hover:translate-x-1 duration-500">
                    <h3 className="text-base xs:text-lg md:text-2xl font-black uppercase tracking-tighter text-white leading-tight group-hover:text-[#3b82f6] transition-colors">{exp.role}</h3>
                    <p className="text-[#3b82f6] font-bold uppercase tracking-wider text-[9px] md:text-sm mt-0.5 group-hover:text-white transition-colors">{exp.company}</p>
                  </div>
                  <div className="text-white/40 font-bold uppercase tracking-widest text-[8px] md:text-[9px] bg-white/5 px-2.5 py-1 md:px-3 md:py-1 rounded-full self-center transition-all group-hover:bg-[#3b82f6]/20 group-hover:text-white/80 border border-transparent group-hover:border-[#3b82f6]/20 whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-white/50 mb-4 md:mb-6 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl font-medium transition-colors group-hover:text-white/90 text-center sm:text-left">
                  {exp.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-center sm:text-left">
                  {exp.achievements.map((item, achIdx) => (
                    <div key={achIdx} className="flex flex-col sm:flex-row items-center sm:items-start space-y-1 sm:space-y-0 sm:space-x-2.5 text-white/40 group/ach transition-all hover:text-white/90">
                      <span className="text-[#3b82f6] sm:mt-1.5 text-[6px] hidden sm:block">●</span>
                      <span className="text-[11px] md:text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;