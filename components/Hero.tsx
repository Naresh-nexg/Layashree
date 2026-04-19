import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] lg:min-h-screen w-full flex flex-col justify-center bg-black pt-24 pb-12 lg:py-0 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Text Content - Positioned first in DOM for stable LEFT alignment on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left space-y-5 md:space-y-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-black uppercase tracking-tighter text-white leading-[1.05]">
              Layashree J N <br className="hidden sm:block" />
              <span className="text-white/30 block mt-3 md:mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl tracking-normal normal-case font-medium max-w-2xl mx-auto lg:mx-0">
                — Founder’s Office Associate @ Nexinbe Agency | Startup Execution & Agentic Software Development
              </span>
            </h1>

            <div className="max-w-md mx-auto lg:mx-0 space-y-6 md:space-y-8">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4">
                <p className="text-[8px] md:text-[11px] font-mono text-[#3b82f6] font-black tracking-[0.2em] uppercase bg-[#3b82f6]/5 px-2.5 py-1 rounded-md">
                  Founder's Office @Nexinbe
                </p>
                <p className="text-[8px] md:text-[11px] font-mono text-white/40 font-black tracking-[0.2em] uppercase bg-white/5 px-2.5 py-1 rounded-md">
                  AI-Native Builder
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/60 font-mono text-[10px] md:text-xs tracking-widest uppercase hover:text-[#3b82f6] transition-colors"
                >
                  Contact: <span className="text-[#3b82f6] font-black">{CONTACT_INFO.email}</span>
                </a>
                <a 
                  href={CONTACT_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 font-mono text-[10px] md:text-xs tracking-widest uppercase hover:text-[#3b82f6] transition-colors"
                >
                  LinkedIn: <span className="text-white font-bold group-hover:text-[#3b82f6]">{CONTACT_INFO.linkedIn.replace('https://www.linkedin.com/in/', '')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Image Portrait - Positioned second in DOM for stable RIGHT alignment on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[200px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
              
              {/* Decorative Corner Accents */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#3b82f6]/60 rounded-tl-3xl z-20 pointer-events-none transition-all duration-700 group-hover:border-[#3b82f6] group-hover:-top-2 group-hover:-left-2"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#3b82f6]/60 rounded-br-3xl z-20 pointer-events-none transition-all duration-700 group-hover:border-[#3b82f6] group-hover:-bottom-2 group-hover:-right-2"></div>
              
              {/* Floating Geometric Elements */}
              <div className="absolute -top-8 right-12 w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
              <div className="absolute top-24 -left-8 w-1 h-12 bg-gradient-to-b from-[#3b82f6]/0 via-[#3b82f6] to-[#3b82f6]/0 rounded-full"></div>

              <div className="relative w-full aspect-[4/5] z-10">
                {/* Main Image Container with Glass Effect */}
                <div className={`relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-[#3b82f6]/20 shadow-[0_0_80px_rgba(59,130,246,0.25)] transition-all duration-700 group-hover:shadow-[0_0_100px_rgba(59,130,246,0.4)] group-hover:border-[#3b82f6]/40 ${!imgLoaded ? 'animate-pulse' : ''}`}>
                  
                  {/* Subtle Technical Grid Overlay */}
                  <div className="absolute inset-0 bg-grid opacity-[0.03] z-10 pointer-events-none"></div>
                  
                  <img 
                    src="https://lh3.googleusercontent.com/d/1RshNhWUlzPumIejNiy9CZ0rgS3u-TOhI" 
                    alt="Layashree J N" 
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover object-top brightness-105 contrast-110 transition-all duration-1000 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10 opacity-40"></div>
                  
                  {/* Scanning Line Animation */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent z-20 animate-[scan_4s_linear_infinite] pointer-events-none"></div>
                </div>

                {/* Floating Info Card */}
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-black/90 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-2xl z-30 transition-all duration-500 group-hover:border-[#3b82f6]/40 group-hover:-bottom-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">Role</span>
                      <span className="text-xs text-white font-black uppercase tracking-wider">Founder's Office</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2.5">
          <span className="text-[8px] font-bold text-white/10 uppercase tracking-[0.5em]">Scroll</span>
          <div className="w-[1px] h-6 md:h-8 bg-gradient-to-b from-white/10 to-transparent animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;