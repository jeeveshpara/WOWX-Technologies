import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sun, Moon, Menu, X, ArrowUp, Phone, MessageSquare, 
  Send, CheckCircle2, ChevronRight, Terminal, Sparkles
} from "lucide-react";

import { ParticlesBackground, GlowBlobs } from "./components/UI/VisualDecoration";
import { Home } from "./components/Pages/Home";
import { Services } from "./components/Pages/Services";
import { Projects } from "./components/Pages/Projects";
import { Pricing } from "./components/Pages/Pricing";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Admin } from "./components/Pages/Admin";

export type TabName = "home" | "services" | "projects" | "pricing" | "about" | "contact" | "admin";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);

  // Persistent Theme State (defaulting to dark for modern tech/startup aesthetic)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("wowx_theme");
    return saved ? saved === "dark" : true; 
  });

  // Handle Hash-routing fallbacks for deep links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase() as TabName;
      const validTabs: TabName[] = ["home", "services", "projects", "pricing", "about", "contact", "admin"];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Sync Class triggers for Tailwind dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("wowx_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("wowx_theme", "light");
    }
  }, [isDark]);

  // Monitor Scroll height to display back-to-top button
  useEffect(() => {
    const checkScrollHeight = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScrollHeight);
    return () => window.removeEventListener("scroll", checkScrollHeight);
  }, []);

  const navigateToTab = (tab: TabName) => {
    setActiveTab(tab);
    window.location.hash = tab;
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) return;

    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => {
      setNewsletterSuccess(false);
    }, 4500);
  };

  const navLinks: { label: string; id: TabName }[] = [
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <div className="relative min-h-screen font-sans antialiased bg-slate-50 text-slate-800 dark:bg-[#0F172A] dark:text-slate-100 transition-colors duration-300">
      
      {/* Visual Ambient Systems */}
      <ParticlesBackground isDark={isDark} />
      <GlowBlobs />

      {/* TOP NAVIGATION BAR - 3-Zone Contract */}
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/80 dark:bg-[#0F172A]/80 border-b border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <button 
            onClick={() => navigateToTab("home")} 
            className="flex items-center gap-2.5 cursor-pointer select-none text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/20">
              W
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white">
              WOWX <span className="text-cyan-500 dark:text-cyan-400 font-light">TECHNOLOGIES</span>
            </span>
          </button>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateToTab(item.id)}
                  className={`relative py-1.5 cursor-pointer transition-colors duration-200 ${
                    isActive 
                      ? "text-cyan-600 dark:text-cyan-400 font-semibold" 
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavigationUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action & controls */}
          <div className="flex items-center gap-3">
            
            {/* Developer/Admin portal */}
            <button
              onClick={() => navigateToTab("admin")}
              className={`p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors border border-slate-200 dark:border-slate-800 ${
                activeTab === "admin" ? "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/30" : "bg-transparent"
              }`}
              title="Client & Leads Console"
            >
              <Terminal className="w-4.5 h-4.5" />
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-amber-400 transition-colors bg-transparent cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => navigateToTab("contact")}
              className="hidden sm:inline-flex items-center justify-center px-4.5 py-2.5 rounded-xl text-xs font-mono font-medium tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              Consult Now
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-transparent cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-18 left-0 right-0 z-30 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-lg flex flex-col md:hidden overflow-hidden"
          >
            <div className="p-6 space-y-3 font-display font-medium text-base">
              {navLinks.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateToTab(item.id)}
                    className={`w-full text-left py-2.5 px-3.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      isActive 
                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-500 font-semibold" 
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                );
              })}

              <button
                onClick={() => navigateToTab("admin")}
                className={`w-full text-left py-2.5 px-3.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                  activeTab === "admin" 
                    ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-500 font-semibold" 
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-500" />
                  <span>Admin Leads Console</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => navigateToTab("contact")}
                  className="w-full py-3.5 rounded-xl text-center text-xs font-mono font-bold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white uppercase shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  Request Consultation Slot
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT VIEWPORT */}
      <main className="min-h-screen relative z-10 pt-18">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "home" && <Home onNavigate={navigateToTab} isDark={isDark} />}
            {activeTab === "services" && <Services onNavigate={navigateToTab} isDark={isDark} />}
            {activeTab === "projects" && <Projects onNavigate={navigateToTab} isDark={isDark} />}
            {activeTab === "pricing" && <Pricing onNavigate={navigateToTab} isDark={isDark} />}
            {activeTab === "about" && <About onNavigate={navigateToTab} isDark={isDark} />}
            {activeTab === "contact" && <Contact onNavigate={navigateToTab} isDark={isDark} />}
            {activeTab === "admin" && <Admin onNavigate={navigateToTab} isDark={isDark} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FLOATING ACTION HUBS (WhatsApp, Hotline, Scroll Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Hotlink */}
        <a 
          href="https://wa.me/919479627447?text=Hello%20WOWX%20Technologies!%20%F0%9F%9A%80"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          title="Direct WhatsApp with Founder"
        >
          <MessageSquare className="w-5.5 h-5.5 fill-current text-white" />
        </a>

        {/* Telephone Call Button */}
        <a 
          href="tel:9479627447"
          className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          title="Direct Phone Line (+91 9479627447)"
        >
          <Phone className="w-5.5 h-5.5 text-slate-950" />
        </a>

        {/* Back to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-lg hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer"
              title="Return to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* CORPORATE FOOTER */}
      <footer className="relative bg-slate-900 border-t border-slate-800 text-white z-10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 text-left relative z-10">
          
          {/* Card 1: Logo & Vision */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                W
              </div>
              <p className="font-display font-bold text-lg tracking-tight text-white">
                WOWX Technologies
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Engineering modern, responsive web experiences and customized digital architectures. Helping startups, clinics, and businesses establish real market presence starting at ₹1,499. Based in Morena, Madhya Pradesh, India.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/wowxtechnologies" },
                { name: "Instagram", url: "https://www.instagram.com/wowxtechnologies" },
                { name: "Facebook", url: "https://www.facebook.com/wowxtechnologies" },
                { name: "GitHub", url: "https://github.com/wowxtechnologies" },
                { name: "X", url: "https://x.com/WOWXTechnology" }
              ].map((soc, sIdx) => (
                <a 
                  key={sIdx}
                  href={soc.url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 py-1.5 px-3 rounded-lg border border-slate-700 transition-colors"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>

          {/* Card 2: Services Menu */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              {[
                "Business Website Development",
                "Portfolio Web Development",
                "E-Commerce Solutions",
                "Landing Pages & Funnels",
                "Custom Web Applications",
                "UI/UX Design & Prototyping",
                "SEO & Digital Presence"
              ].map((srvItem) => (
                <li key={srvItem}>
                  <button 
                    onClick={() => navigateToTab("services")}
                    className="hover:text-cyan-400 flex items-center gap-1 cursor-pointer transition-colors text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-500/60 shrink-0" />
                    <span>{srvItem}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Quick Navigation */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              {[
                { label: "Home", id: "home" },
                { label: "Services", id: "services" },
                { label: "Projects", id: "projects" },
                { label: "Pricing", id: "pricing" },
                { label: "About Us", id: "about" },
                { label: "Contact", id: "contact" }
              ].map((it) => (
                <li key={it.id}>
                  <button 
                    onClick={() => navigateToTab(it.id as TabName)}
                    className="hover:text-cyan-400 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-500/60 shrink-0" />
                    <span>{it.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Newsletter */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              NEWSLETTER
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Subscribe to receive updates, modern tech playbooks, and SEO audit insights for growing your business.
            </p>

            <AnimatePresence mode="wait">
              {!newsletterSuccess ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2 p-1 bg-slate-800 border border-slate-700 rounded-xl">
                  <input 
                    type="email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    placeholder="Enter email address"
                    className="w-full bg-transparent px-2.5 py-1.5 text-xs text-white focus:outline-none placeholder-slate-500 font-light"
                  />
                  <button 
                    type="submit"
                    className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs rounded-lg cursor-pointer transition-colors font-semibold"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs font-mono text-cyan-400"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Subscribed successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Legal Bottom Row */}
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 WOWX Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => navigateToTab("admin")} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Admin Portal
            </button>
            <span className="text-slate-700">|</span>
            <span>Morena, Madhya Pradesh, India</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
