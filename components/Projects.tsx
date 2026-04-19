import React from 'react';
import { PROJECTS } from '../constants';

const CaseStudyIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className="flex-shrink-0 w-[75vw] sm:w-[380px] md:w-[420px] snap-start group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-[#3b82f6]/40 hover:shadow-2xl hover:-translate-y-1 h-[460px] sm:h-[520px] reveal">
      <div className="aspect-[16/10] overflow-hidden relative group/img">
        {/* Refined Image Container */}
        <div className="absolute inset-0 z-10 border-b border-white/10 group-hover:border-[#3b82f6]/30 transition-colors duration-500"></div>
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
        />
        
        {/* Technical Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.02] z-20 pointer-events-none"></div>
        
        {/* Category Badge - Refined */}
        <div className="absolute top-6 right-6 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-white/80 z-30 group-hover:border-[#3b82f6]/50 transition-all">
          {project.category.split(' · ')[0]}
        </div>

        {/* Subtle Scanline on Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3b82f6]/5 to-transparent h-[10%] w-full z-30 opacity-0 group-hover:opacity-100 animate-[scan_3s_linear_infinite] pointer-events-none"></div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow text-center sm:text-left">
        <span className="text-[#3b82f6] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mb-3 sm:mb-4">{project.category}</span>
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-2 sm:mb-3 leading-none text-white transition-colors group-hover:text-[#3b82f6]">
          {project.title}
        </h3>
        <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 font-medium">
          {project.description}
        </p>
        
        <div className="mt-auto pt-4 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            {project.metrics.slice(0, 1).map((m: string, i: number) => (
              <span key={i} className="text-[7px] sm:text-[8px] font-bold text-[#3b82f6] uppercase tracking-widest">{m}</span>
            ))}
          </div>
          {project.mvpLink && (
            <a 
              href={project.mvpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#3b82f6] text-white rounded-full text-[9px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 flex items-center group/btn shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              VIEW PROJECT
              <CaseStudyIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="mb-12 reveal text-center sm:text-left">
    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white" dangerouslySetInnerHTML={{ __html: title }}></h2>
    <div className="h-[2px] w-12 bg-[#3b82f6] mt-6 mx-auto sm:mx-0"></div>
  </div>
);

const HorizontalScrollContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative group/scroll -mx-6 md:-mx-12 px-6 md:px-12">
    <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth">
      {children}
      <div className="flex-shrink-0 w-2 md:w-20"></div>
    </div>
  </div>
);

const Projects: React.FC<{ featuredOnly?: boolean }> = ({ featuredOnly = false }) => {
  const agencyProjects = PROJECTS.filter(p => p.type === 'agency');
  const otherProjects = PROJECTS.filter(p => p.type !== 'agency');

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={featuredOnly ? "FEATURED<br/>WORKS" : "SELECTED<br/>WORKS"} />
        
        <div className="space-y-24">
          <div>
            <h4 className="text-white/20 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center sm:text-left">AGENCY BUILDS // 0→1</h4>
            <HorizontalScrollContainer>
              {agencyProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </HorizontalScrollContainer>
          </div>

          {!featuredOnly && (
            <div>
              <h4 className="text-white/20 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center sm:text-left">SPECIAL PROJECTS // OPS & TOOLS</h4>
              <HorizontalScrollContainer>
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </HorizontalScrollContainer>
            </div>
          )}
        </div>

        {featuredOnly && (
          <div className="mt-16 reveal flex justify-center sm:justify-start">
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;