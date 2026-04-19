import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/agency", name: "Agency" },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-[210] transition-all duration-500 ${scrolled ? 'pt-3 md:pt-4' : 'pt-5 md:pt-8'} px-4 md:px-6`}>
        <nav className={`max-w-5xl mx-auto glass-morphism rounded-full py-1.5 md:py-2 px-5 md:px-10 flex items-center justify-between shadow-2xl transition-all duration-500 ${scrolled ? 'scale-[0.98]' : 'scale-100'}`}>
          
          <div className="flex items-center">
            <NavLink to="/" className="text-[9px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.4em] text-white whitespace-nowrap">LAYASHREE J N</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => 
                  `text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative group
                  ${isActive ? 'text-white' : 'text-white/40 hover:text-white'}`
                }
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3b82f6] transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center space-x-3 md:space-x-6">
            <a 
              href={CONTACT_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-[10px] font-black tracking-widest text-white/40 uppercase hover:text-[#3b82f6] transition-colors"
            >
              RESUME
            </a>
            <a 
              href={CONTACT_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-2 bg-[#3b82f6] text-white rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              HIRE ME
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center space-y-1 relative z-[220]"
              aria-label="Toggle Menu"
            >
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </nav>
      </div>

      <div className={`fixed inset-0 z-[205] bg-black/98 backdrop-blur-3xl transition-all duration-700 md:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="space-y-6 text-center">
            {navLinks.map((link, i) => (
              <div 
                key={link.path}
                className={`transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `text-3xl font-black uppercase tracking-tighter transition-all block
                    ${isActive ? 'text-[#3b82f6]' : 'text-white/20 hover:text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-center gap-6">
            <a 
              href={CONTACT_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-black tracking-widest uppercase text-white/40 hover:text-[#3b82f6] transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '350ms' }}
            >
              RESUME
            </a>
            <a 
              href={CONTACT_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-10 py-4 bg-[#3b82f6] text-white rounded-full text-sm font-black tracking-widest uppercase transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              HIRE ME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;