import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data';

type ProjectArchiveProps = {
  projects: Project[];
  onProjectClick: (id: string) => void;
  onNavigate: (view: 'home' | 'archive' | 'detail' | 'info') => void;
};

const FILTERS = [
  "Everything",
  "Research",
  "User Experience",
  "Exhibition",
  "Visual Identity",
  "Motion & Media"
];

const getArchiveCategory = (project: Project): string => {
  if (project.archiveCategory) return project.archiveCategory;
  const map: Record<string, string> = {
    'Photography': 'Motion & Media',
    'Product Design': 'Visual Identity',
    'Interior': 'User Experience',
    'Curation': 'Exhibition',
    'Architecture': 'Research',
    'Experimental': 'Motion & Media',
  };
  return map[project.category] || 'Everything';
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
            text-[22px] font-medium transition-colors duration-200 text-right text-black hover:text-gray-400
            ${active ? "underline underline-offset-[6px]" : ""}
            ${className}
        `}
    >
        {label}
    </button>
);

const ArchiveCard = ({ project, onClick }: { project: Project; onClick: (id: string) => void }) => {
    return (
        <div 
            onClick={() => onClick(project.id)}
            className="group relative w-full flex flex-col lg:block lg:aspect-[3/5] cursor-pointer overflow-hidden lg:bg-white lg:border-none border-b border-gray-100 lg:border-none pb-8 lg:pb-0"
        >
            {/* Mobile: Image Visible */}
            <div className="lg:hidden w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Content: Visible on Mobile, Hover behavior on Desktop */}
            <div className="relative z-10 flex flex-col items-start gap-1 transition-opacity duration-300 lg:group-hover:opacity-0 h-full">
                <span className="text-[16px] leading-none text-black">({project.year})</span>
                <span className="text-[16px] font-bold leading-tight text-black">{project.title}</span>
                <span className="text-[16px] font-mono leading-none mt-1 text-black">{project.duration}</span>
            </div>

            {/* Desktop: Image Overlay on Hover */}
            <div className="absolute inset-0 z-20 hidden lg:flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full max-h-full object-contain object-top" 
                />
            </div>
        </div>
    );
};

export default function ProjectArchive({ projects, onProjectClick, onNavigate }: ProjectArchiveProps) {
    const [filter, setFilter] = useState("Everything");

    const filteredProjects = filter === "Everything" 
        ? projects 
        : projects.filter(p => getArchiveCategory(p) === filter);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="w-full min-h-screen pt-[100px] lg:pt-[120px] px-[30px] bg-white text-black"
        >
            {/* Fixed Header Content - Desktop Only (Mobile has its own header in App.tsx) */}
            <div className="hidden lg:flex fixed top-8 left-[30px] right-[30px] z-[60] justify-between items-start pointer-events-none">
                <button 
                    onClick={() => onNavigate('home')} 
                    className="text-[22px] font-medium tracking-tight pointer-events-auto hover:text-gray-400 transition-colors text-black"
                >
                    Juhyun Lee
                </button>

                <div className="flex flex-col gap-1 text-[22px] font-medium items-end pointer-events-auto">
                    <NavLink label="Home" active={false} onClick={() => onNavigate('home')} />
                    <NavLink label="Projects" active={true} onClick={() => {}} />
                    <NavLink label="Info" active={false} onClick={() => onNavigate('info')} />
                </div>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 mt-8 lg:mt-0 relative">
                <div className="lg:w-[250px] lg:fixed lg:top-[200px] lg:left-[30px] flex flex-col gap-2 z-30">
                    <div className="flex overflow-x-auto lg:flex-col gap-4 lg:gap-2 pb-4 lg:pb-0 scrollbar-hide">
                        {FILTERS.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-left text-[16px] whitespace-nowrap transition-colors hover:text-black ${filter === cat ? "text-black font-medium" : "text-gray-400"}`}
                            >
                                {filter === cat && <span className="mr-2 hidden lg:inline">•</span>}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 lg:ml-[280px] pb-20">
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-x-[15px] lg:gap-y-[40px]"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map(project => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArchiveCard project={project} onClick={onProjectClick} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
