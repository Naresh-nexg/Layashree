import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "Founder's Office | Product & Execution",
    "0→1 Project Execution Specialist",
    "Strategic Operations Hub",
    "YUKTHI 2025 National Selection",
    "Best Startup Idea — MEDP Festival",
    "Problem Framing & Decision Support",
    "Lean MVP & Special Projects",
    "High-Ownership Generalist"
  ];

  return (
    <div className="bg-[#3b82f6] py-4 md:py-6 overflow-hidden border-y-2 border-black flex">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, index) => (
              <span key={index} className="text-white font-black uppercase text-[10px] md:text-xs tracking-[0.2em] px-8 flex items-center">
                {item}
                <span className="ml-8 text-white opacity-30 text-xl font-mono">•</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;