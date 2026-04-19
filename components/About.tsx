import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20">
          <div className="lg:col-span-5 reveal text-center lg:text-left">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
              THE<br/><span className="text-[#3b82f6]">BUILDER</span><br/>MINDSET
            </h2>
            <div className="h-[2px] w-12 md:w-20 bg-[#3b82f6] mt-6 mx-auto lg:mx-0"></div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 md:space-y-10 reveal delay-200 text-center lg:text-left">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight leading-[1.1] text-balance mx-auto lg:mx-0">
              Bridging the gap between <span className="text-white/40">planning and execution</span> through scalable workflows and agentic software.
            </p>
            
            <div className="space-y-4 md:space-y-6 text-white/50 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-medium mx-auto lg:mx-0">
              <p>
                I’m Layashree, a Founder’s Office Associate at Nexinbe Agency. I work closely with the founding team across research, documentation, roadmap tracking, and cross-functional coordination.
              </p>
              <p>
                My role focuses on contributing to scalable workflows and agentic software development processes across web and AI-powered application builds, ensuring structured product execution from concept to deployment.
              </p>
            </div>
            
            <div className="pt-6 md:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-white/5">
              {[
                { label: 'Execution', value: 'Startup Ops' },
                { label: 'Delivery', value: 'SaaS Systems' },
                { label: 'Focus', value: 'AI-Native' }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#3b82f6]">{stat.label}</p>
                  <p className="text-xl md:text-2xl font-black text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;