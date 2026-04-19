import React from 'react';
import { CONTACT_INFO } from '../constants';

const ArrowUpRightIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Contact: React.FC = () => {
  const handleResumeClick = () => {
    window.open(CONTACT_INFO.resume, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = `mailto:${CONTACT_INFO.email}`;
  };

  return (
    <section id="contact" className="py-20 md:py-48 px-6 md:px-12 bg-black flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] md:leading-none mb-8 text-white">
              BUILD FOR<br/><span className="text-[#3b82f6]">IMPACT</span>
            </h2>
            <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
               {["Founder's Office", "Startup Execution", "Agentic Software Dev"].map(role => (
                 <div key={role} className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white/50 font-bold uppercase tracking-widest text-[8px] md:text-[9px]">
                   {role}
                 </div>
               ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-[#3b82f6] p-6 md:p-8 rounded-[2rem] text-white shadow-2xl text-center lg:text-left mx-auto max-w-sm lg:max-w-none">
               <h3 className="text-[8px] font-black uppercase tracking-[0.3em] mb-3 opacity-80">Direct Connection</h3>
               <a href={`mailto:${CONTACT_INFO.email}`} className="text-base md:text-xl lg:text-2xl font-black tracking-tight block mb-6 md:mb-8 hover:underline break-all">
                 {CONTACT_INFO.email}
               </a>
               <div className="flex flex-col gap-2">
                  <button 
                    onClick={handleResumeClick}
                    className="w-full bg-black text-white py-2.5 sm:py-3 rounded-full font-black uppercase tracking-widest text-[7px] sm:text-[8px] hover:bg-white hover:text-black transition-all"
                  >
                    Download Resume
                  </button>
                  <button 
                    onClick={handleContactClick}
                    className="w-full border-2 border-black py-2.5 sm:py-3 rounded-full font-black uppercase tracking-widest text-[7px] sm:text-[8px] hover:bg-black hover:text-white transition-all flex items-center justify-center"
                  >
                    Let's Connect
                    <ArrowUpRightIcon />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;