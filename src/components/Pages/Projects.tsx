import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project as ProjectType } from "../../types";
import { PROJECTS } from "../../data";
import { 
  ArrowUpRight, Clock, Tag, ExternalLink, X, ChevronLeft, ChevronRight, CheckCircle2 
} from "lucide-react";
import { SafeImage } from "../UI/SafeImage";

interface ProjectsProps {
  onNavigate: (tab: string) => void;
  isDark: boolean;
}

type CategoryFilter = "All" | "Business" | "Educational" | "E-Commerce" | "Portfolio" | "Landing Pages" | "Web Apps";

export function Projects({ onNavigate, isDark }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  
  // Before / After slider state
  const [activeCompareId, setActiveCompareId] = useState<string>("pooja-studio-morena");
  const [compareSplitIndex, setCompareSplitIndex] = useState<number>(50);
  const [isSliderDragging, setIsSliderDragging] = useState<boolean>(false);

  const categories: CategoryFilter[] = [
    "All", "Business", "Educational", "E-Commerce", "Portfolio", "Landing Pages", "Web Apps"
  ];

  const filteredProjects = PROJECTS.filter((proj: ProjectType) => {
    if (activeCategory === "All") return true;
    return proj.category === activeCategory;
  });

  const activeCompareProject = PROJECTS.find(p => p.id === activeCompareId) || PROJECTS[0];

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setCompareSplitIndex(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSliderDragging) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, container);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, container);
  };

  return (
    <div id="projects-page-container" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <span>PORTFOLIO &amp; CASE STUDIES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Featured Client Work
          </h1>
          <p className="text-slate-600 dark:text-slate-300 font-light text-sm md:text-base leading-relaxed">
            Click any project to inspect the architecture, business results, delivery timeline, and technical specifications.
          </p>
        </div>

        {/* 1. BEFORE & AFTER SHOWCASE SLIDER SECTION */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Before &amp; After Transformation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                Drag the slider to compare original unoptimized setups vs. the high-performance WOWX redesigned models.
              </p>
            </div>

            {/* Project Switcher Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveCompareId(p.id);
                    setCompareSplitIndex(50);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-tight cursor-pointer transition-colors duration-200 ${
                    activeCompareId === p.id
                      ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                  }`}
                >
                  {p.title.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Slider Container */}
            <div 
              className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl cursor-ew-resize select-none bg-slate-950"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => setIsSliderDragging(true)}
              onTouchStart={() => setIsSliderDragging(true)}
              onMouseUp={() => setIsSliderDragging(false)}
              onTouchEnd={() => setIsSliderDragging(false)}
              onMouseLeave={() => setIsSliderDragging(false)}
            >
              {/* BEFORE IMAGE (Full-width base layer) */}
              <div className="absolute inset-0 w-full h-full">
                <SafeImage 
                  src={activeCompareProject.beforeImage} 
                  alt={`${activeCompareProject.title} Before`} 
                  category="BEFORE (LEGACY)"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute left-6 top-6 bg-rose-600 text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md shadow-md z-20">
                  BEFORE (Legacy / Slow)
                </div>
              </div>

              {/* AFTER IMAGE (Clipped dynamic layer) */}
              <div 
                className="absolute inset-y-0 right-0 overflow-hidden z-10"
                style={{ left: `${compareSplitIndex}%` }}
              >
                <div 
                  className="absolute inset-y-0 right-0 w-full h-full"
                  style={{ width: "100%", minWidth: "100%" }}
                >
                  <SafeImage 
                    src={activeCompareProject.afterImage || activeCompareProject.image} 
                    alt={`${activeCompareProject.title} After`} 
                    category="AFTER (WOWX CORE)"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute right-6 top-6 bg-cyan-500 text-slate-950 font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md shadow-md z-20">
                  AFTER (WOWX Redesigned)
                </div>
              </div>

              {/* Slider Separator Handle */}
              <div 
                className="absolute inset-y-0 w-0.5 bg-white shadow-2xl pointer-events-none z-30"
                style={{ left: `${compareSplitIndex}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-cyan-500 border-2 border-white flex items-center justify-between px-1.5 text-slate-950 shadow-xl">
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </div>
              </div>
            </div>

            <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400">
              CLICK &amp; DRAG TO COMPARE
            </p>
          </div>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`category-btn-${cat.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap cursor-pointer transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md font-semibold"
                  : "border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj: ProjectType) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image container */}
                <div className="h-52 w-full overflow-hidden relative bg-slate-900">
                  <SafeImage 
                    src={proj.image} 
                    alt={proj.title} 
                    category={proj.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white text-xs font-mono font-medium flex items-center gap-1">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="absolute left-4 top-4 bg-slate-900/90 text-white font-mono text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-md shadow z-10">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Tag footer */}
              <div className="px-6 pb-6 border-t border-slate-100 dark:border-slate-800/80 pt-4 flex flex-wrap gap-2 justify-between items-center">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {proj.tags.slice(0, 2).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  {proj.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2. PROJECT DETAIL MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 md:p-8 space-y-6 text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      Delivery: {selectedProject.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="h-56 rounded-2xl overflow-hidden relative">
                  <SafeImage 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    category={selectedProject.category}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
                    PROJECT BACKGROUND &amp; EXECUTION:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {selectedProject.clientDescription || selectedProject.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    TECH ARCHITECTURE:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-4">
                  <button
                    onClick={() => {
                      localStorage.setItem("preselected_service", selectedProject.category + " Development");
                      setSelectedProject(null);
                      onNavigate("contact");
                    }}
                    className="flex-1 py-3 rounded-xl text-center text-xs font-mono font-semibold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white cursor-pointer hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
                  >
                    Request Similar Build
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-3 rounded-xl text-xs font-mono font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
