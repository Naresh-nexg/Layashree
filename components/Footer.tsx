import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-sm font-black uppercase tracking-tighter">
          LAYASHREE J N <span className="text-[#3b82f6] mx-2">/</span> FOUNDER’S OFFICE | STARTUP EXECUTION
        </div>
        <div className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold">
          © 2026 SUPPORTING FOUNDERS WITH 0→1 EXECUTION AND OWNERSHIP.
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
          <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Operating at scale</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;