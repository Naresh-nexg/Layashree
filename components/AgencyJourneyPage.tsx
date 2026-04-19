import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const ArrowUpRightIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AgencyJourneyPage: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:${CONTACT_INFO.email}`;
  };

  return (
    <div className="bg-black pt-20 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-16 border-b border-white/5 reveal">
        <Link to="/" className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#3b82f6] transition-all font-black uppercase tracking-widest text-[9px] mb-10 hover:-translate-x-1">
          <span className="text-sm">←</span> HOME
        </Link>
        <span className="text-[#3b82f6] font-bold uppercase tracking-[0.3em] text-[10px] mb-5 block animate-pulse">// THE AGENCY PATH</span>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-10">
          THE<br/><span className="text-[#3b82f6]">AGENCY</span>
        </h1>
        <div className="lg:col-span-8 reveal delay-200">
          <h2 className="text-xl md:text-3xl font-bold text-white leading-tight mb-6">
            From Curiosity to Structured Agency Operations
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6 max-w-4xl">
            I started my journey building early — not with capital or certainty, but with curiosity about <strong>how people make decisions and how products influence behavior</strong>. Across multiple 0→1 efforts, I learned that building is not about ideas alone — they are about <strong>problem clarity, prioritization, execution discipline, and knowing when to scale or pivot</strong>.
          </p>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
            // This page documents the agency projects I worked on and the product lessons they shaped.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-36">
        {/* Nexinbe */}
        <div id="nexinbe-exp" className="grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
          <div className="lg:col-span-5">
            <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-[10px] mb-3 block">01 / CASE STUDY</span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">Nexinbe Agency — Agency Portfolio</h3>
            
            <div className="space-y-4 mb-10">
              <div className="flex flex-col gap-1">
                <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-40">Role</p>
                <p className="text-white font-bold text-sm">Founder’s Office Associate</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-40">Type</p>
                <p className="text-white font-bold text-sm">Startup Execution & SaaS Delivery</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-40">Focus</p>
                <p className="text-white font-bold text-sm text-[#3b82f6]">AI-Native & SaaS Ecosystems</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-xl">
                <h4 className="text-white font-black uppercase text-[9px] tracking-[0.3em] mb-4 opacity-60">Context</h4>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                  Supporting startup execution and structured SaaS delivery systems. Working closely with the founding team across research, documentation, roadmap tracking, and cross-functional coordination.
                </p>
              </div>
              
              <div className="bg-[#3b82f6] p-8 rounded-[2rem] text-white shadow-2xl">
                <h4 className="text-white/60 font-black uppercase text-[9px] tracking-[0.3em] mb-4">Founder’s Office Learning</h4>
                <p className="font-bold italic text-base leading-snug">
                  "My role bridges planning and execution — contributing to scalable workflows and agentic software development processes across web and AI-powered application builds."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12 reveal delay-300">
            <div className="space-y-10">
              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-[2.5rem]">
                <h4 className="text-[#3b82f6] font-black uppercase text-[10px] tracking-[0.3em] mb-6">My Role (Founder’s Office Scope)</h4>
                <p className="text-white/60 text-sm md:text-base mb-6 leading-relaxed">
                  I work as the founder’s execution partner, owning <strong>product clarity, team coordination, and delivery</strong>.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Worked directly with founders",
                    "Assisted in roadmap tracking",
                    "Contributed to research & validation",
                    "Supported PRD drafting",
                    "Coordinated cross-functional teams",
                    "Contributed to agentic SW workflows"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-white font-bold text-xs md:text-sm">
                      <span className="text-[#3b82f6]">/</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2rem] border border-white/10 bg-white/5">
                  <h4 className="text-[#3b82f6] font-black uppercase text-[9px] tracking-[0.3em] mb-5">Key Actions</h4>
                  <ul className="space-y-4 text-white/80 text-xs md:text-sm font-bold leading-tight">
                    <li>• Roadmap tracking for SaaS</li>
                    <li>• Structured documentation</li>
                    <li>• Feature breakdown preparation</li>
                    <li>• Sprint tracking & monitoring</li>
                    <li>• Milestone monitoring</li>
                  </ul>
                </div>
                
                <div className="p-8 rounded-[2rem] border border-white/10 bg-white/5">
                  <h4 className="text-[#3b82f6] font-black uppercase text-[9px] tracking-[0.3em] mb-5">Outcome</h4>
                  <ul className="space-y-4 text-white/80 text-xs md:text-sm font-bold leading-tight">
                    <li>• Scalable application builds</li>
                    <li>• Structured product execution</li>
                    <li>• Cross-functional coordination</li>
                    <li>• Hands-on startup exposure</li>
                    <li>• AI-native ecosystem contribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Paused */}
      <section className="bg-[#050505] py-20 md:py-32 px-6 md:px-12 border-y border-white/5 reveal">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Execution over Theory</h2>
          <p className="text-lg md:text-xl text-white/60 font-medium max-w-4xl italic border-l-2 border-[#3b82f6] pl-6 ml-0">
            "I chose to pause my own startups to gain more experience supporting established founders. Scaling 0→1 requires not just a good idea, but the tactical ability to manage ambiguity at scale."
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#050505] border-t border-white/5 reveal">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-[10px] mb-4 block">// CONTACT</span>
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-2xl md:text-4xl font-black text-white hover:text-[#3b82f6] transition-colors block"
          >
            {CONTACT_INFO.email}
          </a>
          <a 
            href={CONTACT_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 font-mono text-[10px] md:text-xs tracking-widest uppercase hover:text-[#3b82f6] transition-colors inline-block"
          >
            LinkedIn: <span className="text-white font-bold">{CONTACT_INFO.linkedIn.replace('https://www.linkedin.com/in/', '')}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AgencyJourneyPage;