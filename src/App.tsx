import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { Menu, ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectArchive from './components/ProjectArchive';
import { PROJECTS, Project } from './data';

const MobileMenuOverlay = ({ 
  isOpen, 
  onClose, 
  onNavigate,
  activeView
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onNavigate: (view: 'home' | 'archive' | 'detail' | 'info') => void;
  activeView: 'home' | 'archive' | 'detail' | 'info';
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-md flex flex-col px-[20px] py-6"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="text-[18px] font-medium">Juhyun Lee</span>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col gap-6 items-start">
            <button 
              onClick={() => { onNavigate('home'); onClose(); }}
              className={`text-[20px] font-medium text-black ${activeView === 'home' ? 'underline underline-offset-[6px]' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => { onNavigate('archive'); onClose(); }}
              className={`text-[20px] font-medium text-black ${(activeView === 'archive' || activeView === 'detail') ? 'underline underline-offset-[6px]' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => { onNavigate('info'); onClose(); }}
              className={`text-[20px] font-medium text-black ${activeView === 'info' ? 'underline underline-offset-[6px]' : ''}`}
            >
              Info
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MobileHeader = ({ onOpenMenu, onHome }: { onOpenMenu: () => void, onHome: () => void }) => (
  <div className="lg:hidden fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md px-[20px] py-4 flex justify-between items-center border-b border-black/5 h-[60px]">
    <button onClick={onHome} className="text-[18px] font-medium">Juhyun Lee</button>
    <button onClick={onOpenMenu}>
      <Menu className="w-6 h-6" />
    </button>
  </div>
);

// --- Components ---

const ProjectItem = ({ 
  project, 
  onActivate,
  onClick,
  isMobile 
}: { 
  project: Project; 
  onActivate: (id: string) => void;
  onClick: (id: string) => void;
  isMobile: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", amount: 0 });

  useEffect(() => {
    if (isInView) {
      onActivate(project.id);
    }
  }, [isInView, project.id, onActivate]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const blurAmount = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], ["8px", "4px", "0px", "4px", "8px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 1, 1, 1, 0.8]);

  return (
    <div className="relative flex flex-col items-center w-full">
      <motion.div
        ref={ref}
        onClick={() => onClick(project.id)}
        className={`w-full relative z-10 ${project.aspectRatio} bg-gray-100 overflow-hidden cursor-pointer group`}
      >
        <motion.img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ 
                filter: useTransform(blurAmount, v => `blur(${v})`),
                opacity: opacity
            }}
        />
      </motion.div>
      <div onClick={() => onClick(project.id)} className="lg:hidden w-full mt-3 mb-8 flex flex-col gap-1 cursor-pointer">
        <div className="flex justify-between items-baseline border-b border-black/10 pb-2 mb-2">
            <span className="text-[16px] font-medium">{project.title}</span>
            <span className="text-[16px] text-gray-500">{project.year}</span>
        </div>
        <div className="flex justify-between text-[14px] text-gray-600">
            <span>{project.category}</span>
            <span>{project.contribution}</span>
        </div>
        <div className="text-[12px] text-gray-400 mt-1 font-mono">{project.duration}</div>
      </div>
    </div>
  );
};

const NavLink = ({ 
    label, 
    active, 
    onClick,
    className = "" 
}: { 
    label: string; 
    active: boolean; 
    onClick?: () => void;
    className?: string;
}) => (
    <button 
        onClick={onClick}
        className={`
            text-[22px] font-medium transition-colors duration-200 text-right
            text-black hover:text-gray-400
            ${active ? "underline underline-offset-[6px]" : ""}
            ${className}
        `}
    >
        {label}
    </button>
);

// --- Lightbox Component ---
const Lightbox = ({
    images,
    initialIndex,
    onClose
}: {
    images: string[];
    initialIndex: number;
    onClose: () => void;
}) => {
    const [index, setIndex] = useState(initialIndex);

    const handleNext = useCallback(() => {
        setIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, handleNext, handlePrev]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
            <button 
                onClick={onClose}
                className="absolute top-8 right-8 z-50 text-[20px] font-medium hover:opacity-50 transition-opacity"
            >
                CLOSE
            </button>
            <div className="w-full h-full p-12 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="max-w-full max-h-full object-contain"
                        alt={`Gallery image ${index + 1}`}
                    />
                </AnimatePresence>
            </div>
            <button 
                onClick={handlePrev}
                className="absolute left-8 top-1/2 -translate-y-1/2 p-4 hover:opacity-50 transition-opacity"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
                onClick={handleNext}
                className="absolute right-8 top-1/2 -translate-y-1/2 p-4 hover:opacity-50 transition-opacity"
            >
                <ChevronRight className="w-8 h-8" />
            </button>
        </motion.div>
    );
};

// --- Info View ---
const InfoView = ({ onNavigate, onOpenMenu }: { onNavigate: (view: 'home' | 'archive' | 'detail' | 'info') => void, onOpenMenu: () => void }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="w-full min-h-screen pt-[100px] lg:pt-[120px] px-[20px] lg:px-[30px] pb-12"
        >
             {/* Mobile Header */}
             <MobileHeader onOpenMenu={onOpenMenu} onHome={() => onNavigate('home')} />

             {/* Fixed Header Content (Desktop) */}
             <div className="hidden lg:flex fixed top-8 left-[30px] right-[30px] z-[60] justify-between items-start pointer-events-none">
                {/* Left: Juhyun Lee */}
                <button onClick={() => onNavigate('home')} className="text-[22px] font-medium tracking-tight pointer-events-auto hover:text-gray-400 transition-colors text-black">
                    Juhyun Lee
                </button>

                 <div className="w-[600px] pointer-events-auto"></div>

                {/* Right: Menu */}
                <div className="flex flex-col gap-1 text-[22px] font-medium items-end pointer-events-auto">
                    <NavLink label="Home" active={false} onClick={() => onNavigate('home')} />
                    <NavLink label="Projects" active={false} onClick={() => onNavigate('archive')} />
                    <NavLink label="Info" active={true} />
                </div>
            </div>

            <div className="grid grid-cols-12 gap-x-[15px] mt-12">
                 <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex flex-col gap-12 text-[20px] lg:text-[22px] font-light leading-normal">
                    <p>
                        Juhyun Lee is a Designer and Researcher based in Seoul.
                    </p>
                    <p>
                        Currently pursuing a doctoral degree in Visual Design at Seoul National University, focusing on the intersection of narrative design and user psychology.
                    </p>
                    <div className="flex flex-col gap-2 text-[16px] text-gray-500 font-mono mt-12">
                        <span>Contact</span>
                        <a href="mailto:hello@juhyunlee.com" className="text-black hover:underline">leeju.hello@gmail.com</a>
                        <span>+82 10 7360 0982</span>
                        <div className="mt-4">
                            <a 
                                href="https://docs.google.com/document/d/14kcrvUjrir9HgAwZWSWBickTP8XGog6-5x4JNz6lUDM/edit?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 text-[14px] font-medium border border-black hover:bg-black hover:text-white transition-colors"
                            >
                                View CV
                            </a>
                        </div>
                    </div>
                 </div>
            </div>
        </motion.div>
    );
};

const ProjectDetailView = ({ project, onBack, onNavigate, onOpenMenu }: { project: Project; onBack: () => void, onNavigate: (view: 'home' | 'archive' | 'detail' | 'info') => void, onOpenMenu: () => void }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 사진이 적어도 있는 만큼만 렌더링하도록 설정
  const displayImages = project.images || [];

  // 비디오 파일 여부 판별 함수
  const isVideoFile = (url: string) => {
    return url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.mov');
  };

  return (
    <>
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="w-full min-h-screen pt-[120px] pb-20"
        >
            {/* Fixed Navigation (Desktop) */}
            <div className="hidden lg:flex fixed top-8 right-[30px] z-[60] flex-col gap-1 text-[22px] font-medium items-end">
                <NavLink label="Home" active={false} onClick={() => onNavigate('home')} />
                <NavLink label="Projects" active={true} onClick={() => onNavigate('archive')} />
                <NavLink label="Info" active={false} onClick={() => onNavigate('info')} />
            </div>

            <div className="hidden lg:grid grid-cols-12 gap-x-[15px] px-[30px] w-full items-start">
                {/* 1. Main Media (Col 1-5) */}
                <div className="col-span-5 relative">
                    <div 
                        className="w-full aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setLightboxIndex(0)}
                    >
                        {isVideoFile(displayImages[0]) ? (
                            <video src={displayImages[0]} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                        ) : (
                            <img src={displayImages[0]} className="w-full h-full object-cover" alt="Main Media" />
                        )}
                    </div>
                </div>

                {/* 2. Text Content (Col 6-9) */}
                <div className="col-span-4 flex flex-col pt-0 pl-[25px]">
                     <div className="flex flex-col gap-6 mb-12">
                        <div className="flex items-start gap-6">
                            <h1 className="text-[26px] font-bold leading-tight tracking-tight whitespace-pre-line">{project.title}</h1>
                            <button onClick={onBack} className="hover:opacity-50 transition-opacity mt-1">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-[14px] text-gray-400 font-mono tracking-wide">{project.duration}</p>
                     </div>
                     
                     <div className="mb-12">
                        <p className="text-[18px] leading-[1.7] font-light text-justify whitespace-pre-line font-sans">
                            {project.description || ""}
                        </p>
                     </div>

                     <div className="flex flex-col gap-3 text-[15px] mt-4">
                        <div className="w-full border-t border-black mb-4"></div>
                        <div className="grid grid-cols-[80px_1fr]">
                            <span className="text-gray-500 font-medium">Year</span>
                            <span>{project.year}</span>
                        </div>
                        <div className="grid grid-cols-[80px_1fr]">
                            <span className="text-gray-500 font-medium">Role</span>
                            <span>{project.contribution}</span>
                        </div>
                        <div className="grid grid-cols-[80px_1fr]">
                            <span className="text-gray-500 font-medium">Collab</span>
                            <span className="whitespace-pre-line leading-[1.6]">{project.collab || "Independent Project"}</span>
                        </div>
                        
                        {/* Multi-Link Buttons */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.links && project.links.map((link, idx) => (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-[13px] font-medium border border-black hover:bg-black hover:text-white transition-colors">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Supplemental Images (Col 10-12) */}
                <div className="col-span-3 flex flex-col pl-[25px] relative min-h-[600px]">
                    <div className="h-[120px]"></div>
                    {displayImages[1] && (
                        <div className="w-[60%] aspect-square bg-gray-100 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity self-start" onClick={() => setLightboxIndex(1)}>
                            {isVideoFile(displayImages[1]) ? <video src={displayImages[1]} autoPlay muted loop playsInline className="w-full h-full object-cover" /> : <img src={displayImages[1]} className="w-full h-full object-cover" />}
                        </div>
                    )}
                    {displayImages[2] && (
                        <div className="w-[60%] aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity self-end mt-20" onClick={() => setLightboxIndex(2)}>
                            {isVideoFile(displayImages[2]) ? <video src={displayImages[2]} autoPlay muted loop playsInline className="w-full h-full object-cover" /> : <img src={displayImages[2]} className="w-full h-full object-cover" />}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Grid: Dynamic Image Count */}
            <div className="hidden lg:grid grid-cols-3 gap-10 mt-10 px-[30px]">
                {displayImages.slice(3).map((src, idx) => (
                    <div key={idx + 3} className="w-full aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setLightboxIndex(idx + 3)}>
                         {isVideoFile(src) ? (
                            <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                        ) : (
                            <img src={src} className="w-full h-full object-cover" alt={`Gallery ${idx + 4}`} />
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile View 보강 */}
            <div className="lg:hidden px-[20px] flex flex-col gap-6 pt-[80px]">
                <MobileHeader onOpenMenu={onOpenMenu} onHome={() => onNavigate('home')} />
                <h1 className="text-[24px] font-bold">{project.title}</h1>
                <p className="text-[16px] leading-relaxed whitespace-pre-line">{project.description}</p>
                <div className="flex flex-col gap-6 mt-4">
                    {displayImages.map((src, idx) => (
                        <div key={idx} className="w-full bg-gray-100 aspect-[3/4]" onClick={() => setLightboxIndex(idx)}>
                            {isVideoFile(src) ? (
                                <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                            ) : (
                                <img src={src} className="w-full h-full object-cover" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
        <AnimatePresence>
            {lightboxIndex !== null && (
                <Lightbox images={displayImages} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
            )}
        </AnimatePresence>
    </>
  );
};








export default function App() {
  const [view, setView] = useState<'home' | 'archive' | 'detail' | 'info'>('home');
  const [lastView, setLastView] = useState<'home' | 'archive'>('home');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sorting logic: Descending order by year (Latest first)
  const sortedProjects = [...PROJECTS].sort((a, b) => Number(b.year) - Number(a.year));
  
  const activeProject = sortedProjects.find(p => p.id === activeId) || sortedProjects[0];
  const selectedProject = sortedProjects.find(p => p.id === selectedId) || sortedProjects[0];

  const goHome = () => {
    setView('home');
    window.scrollTo(0,0);
  };

  const goToProject = (id: string) => {
    // Determine the source view to set lastView correctly
    const currentViewSource = view === 'archive' ? 'archive' : 'home';
    setLastView(currentViewSource);
    setSelectedId(id);
    setView('detail');
  };

  const goToArchive = () => {
    setView('archive');
    window.scrollTo(0,0);
  };

  const goToInfo = () => {
    setView('info');
    window.scrollTo(0,0);
  }

  const navigate = (target: 'home' | 'archive' | 'detail' | 'info') => {
      if (target === 'home') goHome();
      if (target === 'archive') goToArchive();
      if (target === 'info') goToInfo();
      // Detail is usually handled by goToProject
  };

  const handleBack = () => {
      if (lastView === 'archive') {
          goToArchive();
      } else {
          goHome();
      }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative">
      <MobileMenuOverlay 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onNavigate={navigate} 
        activeView={view}
      />
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div 
            key="home"
            exit={{ opacity: 0 }}
            className="w-full min-h-screen"
          >
            {/* Desktop Home */}
            <div className="hidden lg:grid grid-cols-12 gap-x-[15px] px-[30px] w-full min-h-screen relative">
               
              
              {/* Col 1: Left Sticky */}
<div className="col-span-1 h-screen sticky top-0 flex flex-col justify-end py-8 z-20">
    <div className="flex flex-col gap-1 text-[16px] leading-snug">
        <span className="text-gray-400">({activeProject.year})</span>
        <motion.div 
            key={activeProject.id + "title"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-medium cursor-pointer hover:underline decoration-1 underline-offset-4"
            onClick={() => goToProject(activeProject.id)}
        >
            {activeProject.title}
        </motion.div>
        <span className="font-mono text-[14px] mt-2 text-gray-500">{activeProject.duration}</span>
    </div>
</div>

                {/* Col 2-3: Header Text - Fixed Overlay */}
                <div className="fixed top-8 left-[30px] right-[30px] z-[60] pointer-events-none">
                  <div className="grid grid-cols-12 gap-x-[15px]">
                    
                    {/* Col 1: 이름 (기존 위치 유지) */}
                    <div className="col-span-1 pointer-events-auto">
                      <button onClick={goHome} className="text-[22px] font-medium tracking-tight hover:text-gray-400 transition-colors text-black">
                        Juhyun Lee
                      </button>
                    </div>
                
                    {/* Col 2-11: 자기소개 (가로 폭 확장) */}
                    <div className="col-span-10">
                      <p className="text-[20px] leading-tight font-light max-w-[1000px] pl-[40px]">
                        Designer, Researcher, Instructor Based in Seoul, Republic of Korea. Currently a doctoral student in Visual Design at Seoul National University. My research investigates how visual and narrative design impact user trust and emotional engagement in technology-mediated environments, bridging the fields of design and psychology.
                      </p>
                    </div>
                
                    {/* Col 12: 내비게이션 (기존 위치 유지) */}
                    <div className="col-span-1 text-right pointer-events-auto">
                      <div className="flex flex-col gap-1 text-[22px] font-medium items-end">
                        <NavLink label="Home" active={view === 'home'} onClick={goHome} />
                        <NavLink label="Projects" active={view === 'detail'} onClick={goToArchive} />
                        <NavLink label="Info" active={false} onClick={goToInfo} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Col 4-9: Main Content */}
                <div className="col-span-6 col-start-4 pt-[20vh] pb-[20vh] flex flex-col gap-[90px] z-0">
                    {sortedProjects.map((project) => (
                        <ProjectItem 
                            key={project.id} 
                            project={project} 
                            onActivate={setActiveId}
                            onClick={goToProject}
                            isMobile={false}
                        />
                    ))}
                </div>

                {/* Col 12: Right Sticky */}
               {/* Col 12: Right Sticky */}
<div className="col-span-1 col-start-12 h-screen sticky top-0 flex flex-col justify-end py-8 items-end text-right z-20">
    <div className="flex flex-col gap-1 text-[16px] leading-snug">
        <motion.div 
            key={activeProject.id + "meta"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-end"
        >
            <span className="text-gray-500">Category ({activeProject.category})</span>
            <span className="text-gray-500">Contribution ({activeProject.contribution})</span>
            <span className="text-gray-500">Year ({activeProject.year})</span>
        </motion.div>
    </div>
</div>
            </div>

            {/* Mobile Home */}
            <div className="lg:hidden w-full px-[20px] pb-12 pt-[100px]">
                <MobileHeader onOpenMenu={() => setIsMobileMenuOpen(true)} onHome={goHome} />
                
                <div className="flex flex-col gap-[40px]">
                {sortedProjects.map((project) => (
                    <ProjectItem 
                        key={project.id} 
                        project={project} 
                        onActivate={setActiveId}
                        onClick={goToProject}
                        isMobile={true}
                    />
                ))}
                </div>
            </div>
          </motion.div>
        ) : view === 'archive' ? (
            <>
              <MobileHeader onOpenMenu={() => setIsMobileMenuOpen(true)} onHome={goHome} />
              <ProjectArchive 
                  projects={sortedProjects} 
                  onProjectClick={goToProject} 
                  onNavigate={navigate} 
              />
            </>
        ) : view === 'info' ? (
            <InfoView onNavigate={navigate} onOpenMenu={() => setIsMobileMenuOpen(true)} />
        ) : (
          <div key="detail" className="w-full">
               <div className="hidden lg:block fixed top-8 left-[30px] z-[60]">
                    <button onClick={goHome} className="text-[22px] font-medium tracking-tight hover:text-gray-400 transition-colors text-black">
                        Juhyun Lee
                    </button>
               </div>
               <ProjectDetailView project={selectedProject} onBack={handleBack} onNavigate={navigate} onOpenMenu={() => setIsMobileMenuOpen(true)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
