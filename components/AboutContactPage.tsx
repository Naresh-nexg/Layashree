import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const ArrowUpRightIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AboutContactPage: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleResumeClick = () => {
    window.open(CONTACT_INFO.resume, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT_INFO.email}`;
  };

  return (
    <div className="bg-black pt-16 md:pt-20 min-h-screen">
      {/* Bio Header Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-16 md:pb-24 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-start">
          
          {/* Text Side */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-8 md:space-y-10 text-center lg:text-left">
            <div>
              <Link to="/" className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#3b82f6] transition-colors font-black uppercase tracking-widest text-[9px] mb-8 md:mb-10 group">
                <span className="text-base group-hover:-translate-x-1 transition-transform">←</span> HOME
              </Link>
              <span className="text-[#3b82f6] font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-4 md:mb-5 block animate-pulse">// THE EXECUTION PARTNER</span>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] md:leading-[0.85] mb-8 md:mb-10">
                FOUNDER'S<br/><span className="text-[#3b82f6]">OFFICE</span>
              </h1>
            </div>
            
            <div className="space-y-6 md:space-y-8 text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                Helping founders move from unclear concepts to working outcomes.
              </p>
              <div className="h-[1px] w-12 md:w-16 bg-[#3b82f6]/40 mx-auto lg:mx-0"></div>
              <p>
                I’m <strong>Layashree</strong>, a Founder’s Office Associate at Nexinbe Agency. I bridge the gap between high-level planning and ground-level execution using a mix of structured documentation and AI-native builder workflows.
              </p>
              <p>
                I specialize in <strong>operational execution</strong>. Whether it's turning research into structured roadmap tracking, supporting PRD drafting, or coordinating cross-functional teams, I operate with precision and ownership.
              </p>
            </div>

            <div className="bg-[#3b82f6] p-6 md:p-10 rounded-[1.8rem] md:rounded-[2.5rem] text-black shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-700 mx-auto max-w-sm lg:max-w-none">
               <p className="text-lg md:text-2xl font-black leading-tight italic">
                 "Reducing ambiguity. Increasing execution speed."
               </p>
               <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-4 md:mt-6 opacity-40">— OPERATING PRINCIPLE</p>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group perspective-1000 w-full max-w-[450px] lg:max-w-none mx-auto">
              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 md:w-24 h-16 md:h-24 border-t-2 border-l-2 border-[#3b82f6]/20 rounded-tl-[1.8rem] md:rounded-tl-[3rem] z-20 group-hover:border-[#3b82f6] transition-colors duration-700"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 md:w-24 h-16 md:h-24 border-b-2 border-r-2 border-[#3b82f6]/20 rounded-br-[1.8rem] md:rounded-br-[3rem] z-20 group-hover:border-[#3b82f6] transition-colors duration-700"></div>
              
              <div className="relative aspect-[4/5] w-full rounded-[1.8rem] md:rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl transition-all duration-1000 group-hover:border-white/20">
                <img 
                  src="https://lh3.googleusercontent.com/d/1RshNhWUlzPumIejNiy9CZ0rgS3u-TOhI" 
                  alt="Layashree J N - Founder's Office" 
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover grayscale brightness-110 contrast-125 transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Meta Badge */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 p-5 md:p-8 glass-morphism rounded-[1.2rem] md:rounded-[2rem] border border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#3b82f6] mb-1.5 md:mb-2">Core Competency</p>
                      <h4 className="text-white font-black uppercase text-lg md:text-2xl tracking-tighter">0→1 Execution Hub</h4>
                    </div>
                    <div className="text-right hidden sm:block">
                       <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/20 mb-1.5 md:mb-2">Build Status</p>
                       <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Active / 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center lg:text-left">
            {[
              { title: "Strategic Framing", desc: "Taking high-level vision and breaking it into prioritized execution cycles." },
              { title: "Team Orchestration", desc: "Managing cross-functional delivery without formal authority, ensuring follow-through." },
              { title: "Productization", desc: "Building fast MVPs and internal tools that provide immediate operational leverage." }
            ].map((focus, i) => (
              <div key={i} className="space-y-4 md:space-y-6 reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                <span className="text-[#3b82f6] font-black text-xl">0{i+1}</span>
                <h3 className="text-white font-black uppercase text-xl md:text-2xl tracking-tighter">{focus.title}</h3>
                <p className="text-white/40 text-xs sm:text-sm md:text-base leading-relaxed">{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 md:py-32 lg:py-48 px-6 md:px-12 bg-black flex items-center justify-center relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-[10px] mb-6 block animate-bounce">// START A CONVERSATION</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-12 md:mb-16 text-white">
            LET'S<br/><span className="text-[#3b82f6]">EXECUTE</span>
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href={CONTACT_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/10 text-white rounded-full text-sm font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95"
            >
              DOWNLOAD RESUME
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-white/60 font-mono text-xs md:text-sm tracking-widest uppercase hover:text-[#3b82f6] transition-colors"
            >
              Email: <span className="text-[#3b82f6] font-black">{CONTACT_INFO.email}</span>
            </a>
            <a 
              href={CONTACT_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 font-mono text-[10px] md:text-xs tracking-widest uppercase hover:text-[#3b82f6] transition-colors"
            >
              LinkedIn: <span className="text-white font-bold">{CONTACT_INFO.linkedIn.replace('https://www.linkedin.com/in/', '')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContactPage;