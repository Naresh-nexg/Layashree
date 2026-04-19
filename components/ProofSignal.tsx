import React from 'react';

const SKILLS_GROUPS = [
  {
    title: 'Founder Support & Execution',
    items: [
      'Problem framing & decision support',
      'Priority setting under constraints',
      'Execution planning & follow-through',
      'Ownership in high-ambiguity environments'
    ],
    isAI: false
  },
  {
    title: 'People & Coordination',
    items: [
      'Cross-functional team management',
      'Interviewing & team onboarding',
      'Follow-ups, accountability & delivery',
      'Working without formal authority'
    ],
    isAI: false
  },
  {
    title: 'Product & Strategy',
    items: [
      'User research & insight synthesis',
      'PRDs & outcome-driven prioritization',
      'MVP definition, validation & iteration',
      'Product storytelling & alignment'
    ],
    isAI: false
  },
  {
    title: 'AI-Enabled Systems',
    items: [
      'AI MVPs, internal tools & automations',
      'LLM integrations (OpenAI, Gemini)',
      'AI agents & agentic workflows',
      'Rapid experimentation builds'
    ],
    isAI: true
  }
];

const ProofSignal: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-black border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#3b82f6]/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 md:mb-16 reveal">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            CORE <br className="hidden sm:block" />
            <span className="text-white/20">SKILLS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SKILLS_GROUPS.map((group, idx) => (
            <div 
              key={idx} 
              className={`
                reveal transition-all duration-700 group flex flex-col h-full
                ${group.isAI 
                  ? 'bg-gradient-to-br from-[#121212] to-[#050505] border-[#3b82f6]/30 border p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_50px_-5px_rgba(59,130,246,0.2)]' 
                  : 'bg-[#0a0a0a] border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:border-[#3b82f6]/30 hover:bg-[#111]'
                }
                hover:-translate-y-1 cursor-default
              `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-5 md:mb-6">
                <h3 className={`font-black uppercase text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] transition-colors ${group.isAI ? 'text-white' : 'text-[#3b82f6] group-hover:text-white'}`}>
                  {group.title}
                </h3>
                {group.isAI && <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-ping" />}
              </div>

              <ul className="space-y-2.5 md:space-y-3 flex-grow">
                {group.items.map((skill, sIdx) => (
                  <li key={sIdx} className={`text-white text-xs md:text-sm lg:text-base font-bold tracking-tight leading-tight group-hover:pl-0.5 transition-all duration-500 flex items-start gap-2.5 opacity-60 group-hover:opacity-100`}>
                    <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 transition-all duration-500 ${group.isAI ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]/40 group-hover:bg-[#3b82f6]'}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSignal;