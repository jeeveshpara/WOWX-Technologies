import { motion } from "motion/react";
import { 
  ArrowRight, Shield, Zap, Search, Globe, Code, 
  CheckCircle2, Star, Cpu, MessageSquare, Briefcase, ShoppingCart
} from "lucide-react";
import { SERVICES } from "../../data";

interface HomeProps {
  onNavigate: (tab: string) => void;
  isDark: boolean;
}

export function Home({ onNavigate, isDark }: HomeProps) {
  // Select top 3 services to showcase on Home
  const featuredServices = SERVICES.slice(0, 3);

  // Concrete stats with explicit context
  const stats = [
    { value: "48+", label: "Completed Projects", desc: "For startups, clinics, & retail shops" },
    { value: "99.4%", label: "Client Satisfaction", desc: "Based on verified client reviews" },
    { value: "3.5x", label: "Average Inquiry Increase", desc: "Observed within first 90 days" },
    { value: "11+", label: "Regional Industries", desc: "Agri, medical, education, coaching & SME" }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Blueprint",
      desc: "We analyze your regional competitors in Morena & Madhya Pradesh, evaluate target buyer intent, and define the complete digital scope."
    },
    {
      num: "02",
      title: "Interactive Wireframes",
      desc: "We craft custom layout prototypes. You review layout aesthetics, navigation hierarchy, and user pathways before code execution begins."
    },
    {
      num: "03",
      title: "High-Performance Code",
      desc: "We write clean, modular React components using modern Tailwind CSS. Fast, responsive across all devices, and free from bloated plugins."
    },
    {
      num: "04",
      title: "Local Search Optimization",
      desc: "We configure Schema tags, Google Business Profile listings, and calibrate regional search crawlers for maximum local discoverability."
    },
    {
      num: "05",
      title: "Production Deployment",
      desc: "Your application is deployed to fast global edge servers. We verify security, performance metrics, and hand over complete operational guides."
    }
  ];

  const testimonials = [
    {
      quote: "WOWX transformed our traditional wedding portfolio. Morena clients now browse high-resolution catalog grids and book shoot packages directly over WhatsApp. Our inquiries jumped substantially.",
      author: "Praveen Sharma",
      role: "Lead Creative, Pooja Studio Morena",
      rating: 5
    },
    {
      quote: "Before partnering with WOWX, our coaching academy relied strictly on pamphlets. Their structured web system and Google Business setup placed us at the top of local search results.",
      author: "Dr. R. K. Singh",
      role: "Founder, Chambal Preparatory Academy",
      rating: 5
    },
    {
      quote: "The direct RFQ engine WOWX built for our agricultural mustard exporting house is state-of-the-art. Real-time queries from domestic and global buyers flow straight to our sales inbox.",
      author: "Vipin K. Bansal",
      role: "Managing Director, Chambal Agro Corp",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "Pooja Studio", sector: "Creative Arts" },
    { name: "Chambal Agrotech", sector: "Export & Agri" },
    { name: "Singh Academy", sector: "Education" },
    { name: "Gurus Coaching", sector: "Institutes" },
    { name: "Morena Milk Union", sector: "Dairy SME" },
    { name: "Chambal Honey", sector: "D2C Brand" }
  ];

  const interactiveTechs = [
    { name: "React 19", level: "Frontend Core", info: "High-performance virtual DOM rendering with zero lag" },
    { name: "Next.js", level: "Architecture", info: "Static optimization and lightning-fast page transitions" },
    { name: "TypeScript", level: "Type Safety", info: "Eliminates runtime exceptions and guarantees code reliability" },
    { name: "Tailwind CSS", level: "Design System", info: "Clean utility-based styling with instant paint times" },
    { name: "Firebase", level: "Data & Storage", info: "Fast, encrypted real-time data persistence and authentication" },
    { name: "Framer Motion", level: "Interactions", info: "Subtle micro-animations and smooth scroll transitions" },
    { name: "Schema.org", level: "Search Engine Optimization", info: "Structured JSON-LD markup for top Google search rankings" }
  ];

  return (
    <div id="home-page-container" className="relative w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative min-h-[85vh] flex items-center pt-16 pb-16 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25">
              <Cpu className="w-3.5 h-3.5 text-cyan-500" />
              <span>DIGITAL PRESENCE &amp; WEB SOLUTIONS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Transforming Ideas Into <br className="hidden sm:inline" />
              <span className="text-gradient">
                Powerful Digital
              </span> Experiences
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed">
              Professional websites, enterprise web applications, and custom digital frameworks engineered to establish brand authority and drive customer acquisitions in Morena, Madhya Pradesh, and across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                id="hero-cta-consultation"
                onClick={() => onNavigate("contact")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium tracking-tight bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-[0.98] transition-all duration-300"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-cta-projects"
                onClick={() => onNavigate("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium tracking-tight bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer transition-colors duration-300 shadow-sm"
              >
                <span>View Projects</span>
              </button>
            </div>
          </div>

          {/* Hero Interactive Visualization Panel */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="w-full max-w-[420px] rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl shadow-2xl"
            >
              {/* Corner decor lines */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-3xl" />

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300">WOWX LIVE NODE</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">LATENCY: 14ms</span>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200 font-mono">React 19 Core Engine</span>
                      <span className="text-[10px] text-emerald-500 font-mono font-semibold">99.9% Optimal</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full w-[96%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200 font-mono">Google Local SEO Schema</span>
                      <span className="text-[10px] text-cyan-500 font-mono font-semibold">Injected</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full w-[100%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200 font-mono">SSL &amp; Static Edge Delivery</span>
                      <span className="text-[10px] text-purple-400 font-mono font-semibold">Secured</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full w-[92%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Signature card */}
              <div className="mt-5 bg-slate-100 dark:bg-slate-950/80 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">FOUNDER &amp; ARCHITECT</p>
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">Jeevesh Paras</p>
                </div>
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Star className="w-4 h-4 fill-cyan-500" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <section id="trusted-by" className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-8">
            PROUDLY POWERING LOCAL BUSINESSES &amp; ENTERPRISES IN MADHYA PRADESH
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="text-center group cursor-default">
                <p className="font-display font-semibold text-base text-slate-800 dark:text-slate-300 tracking-tight group-hover:text-cyan-500 transition-colors duration-200">
                  {logo.name}
                </p>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-wider">
                  {logo.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES OVERVIEW */}
      <section id="featured-services" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
              SERVICES OVERVIEW
            </h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
              High-Precision Digital Offerings
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed">
              Bespoke digital solutions structured with clean code, premium visual design, and localized search optimization to outperform outdated websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((srv) => (
              <div 
                key={srv.id}
                className="group relative rounded-3xl p-7 flex flex-col justify-between border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                    {srv.icon === "Globe" && <Globe className="w-6 h-6" />}
                    {srv.icon === "Briefcase" && <Briefcase className="w-6 h-6" />}
                    {srv.icon === "ShoppingCart" && <ShoppingCart className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    TIMELINE: {srv.timeline}
                  </span>
                  <button 
                    onClick={() => onNavigate("services")}
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 font-medium tracking-tight cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 border-b-2 border-cyan-500 hover:border-slate-900 dark:hover:border-white pb-1 tracking-tight cursor-pointer transition-colors duration-200"
            >
              <span>Explore All Our Specialized Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. STAT COUNTER BANNER */}
      <section id="stats-banner" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((st, idx) => (
              <div key={idx} className="text-center space-y-2 border-r last:border-r-0 border-slate-800">
                <p className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient">
                  {st.value}
                </p>
                <p className="text-sm font-semibold text-slate-100">{st.label}</p>
                <p className="text-xs text-slate-400 font-light">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE WOWX (BENTO GRID) */}
      <section id="why-choose-wowx" className="py-24 relative bg-slate-100/40 dark:bg-slate-900/20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
              WHY CHOOSE US
            </h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Why We Are Madhya Pradesh's Top Tech Partner
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed">
              We do not build cookie-cutter templates. Our solutions are built component by component, prioritizing absolute loading speed, security, and high conversion design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Bento Card 1: Fast & Clean */}
            <div className="md:col-span-8 group rounded-3xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-500/10 text-amber-500">
                  <Zap className="w-5 h-5 fill-amber-500" />
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                  Sub-1 Second Speeds &amp; Clean Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  Studies show that 40% of users leave websites taking more than 3 seconds to load. WOWX strips away bloated WordPress plugins. By writing modern React and Tailwind CSS, your pages load instantly even on basic cellular connections across Morena and rural Chambal.
                </p>
              </div>
            </div>

            {/* Bento Card 2: Security */}
            <div className="md:col-span-4 group rounded-3xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 text-cyan-500">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                  Zero Malware Threat
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  Our modern compilation stack generates secure static assets and encrypted endpoints, eliminating SQL injection threats and vulnerability exploits common in generic templates.
                </p>
              </div>
            </div>

            {/* Bento Card 3: Deep Local SEO */}
            <div className="md:col-span-4 group rounded-3xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-400">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                  Local SEO Advantage
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  We integrate localized Schema markup and Google Business Profiles, helping your enterprise show up prominently when local customers search for your services in Morena and Gwalior.
                </p>
              </div>
            </div>

            {/* Bento Card 4: WhatsApp Integration */}
            <div className="md:col-span-8 group rounded-3xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#25D366]/10 text-[#25D366]">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                  Direct WhatsApp Lead Funnels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  In India, WhatsApp is the primary communication channel. When a customer inquires or orders on your website, a pre-formatted message is automatically generated for one-click WhatsApp chat, slashing lead response time and boosting conversion rates.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WORK TIMELINE PROCESS */}
      <section id="work-process" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
            <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
              OUR PROCESS
            </h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
              5 Steps To Digital Excellence
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed">
              A structured roadmap ensuring transparent communication, high craftsmanship, and on-time launches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="space-y-3.5 group relative">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-cyan-500/40 group-hover:text-cyan-500 transition-colors duration-300">
                    {step.num}
                  </span>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
                </div>

                <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. INTERACTIVE TECHNOLOGY STACK */}
      <section id="tech-stack" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
              TECH STACK
            </h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Modern Full-Stack Engineering
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed">
              We leverage modern industry-proven frameworks to deliver rock-solid, production-grade applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveTechs.map((tech, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md hover:shadow-lg hover:shadow-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-semibold text-slate-900 dark:text-white text-base">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 uppercase font-medium">
                    PROD
                  </span>
                </div>
                <p className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mb-1">{tech.level}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {tech.info}
                </p>
              </div>
            ))}
            
            {/* Custom prompt card */}
            <div className="p-6 rounded-2xl border-2 border-dashed border-cyan-500/30 bg-cyan-500/5 flex flex-col justify-between">
              <div>
                <p className="font-display font-semibold text-slate-900 dark:text-white text-base mb-1.5">
                  Custom Architecture?
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  Need a custom CRM integration, payment gateways, Google Maps platform, or inventory synchronization?
                </p>
              </div>
              <button 
                onClick={() => onNavigate("contact")}
                className="mt-4 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 font-mono tracking-wider inline-flex items-center gap-1.5 cursor-pointer text-left"
              >
                <span>REQUEST CONFIG &rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 8. TESTIMONIAL REVIEWS */}
      <section id="testimonials-reviews" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
            <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Trusted By Local Founders &amp; Innovators
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed">
              Real feedback from entrepreneurs in Madhya Pradesh succeeding with WOWX custom deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md relative flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <p className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                    {test.author}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                    {test.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CALL TO ACTION HERO */}
      <section id="action-cta-hero" className="py-24 bg-gradient-to-b from-transparent to-cyan-500/5 dark:to-cyan-950/20 text-center border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <p className="text-xs font-mono tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
            READY TO GROW YOUR ONLINE PRESENCE?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
            Establish Your Digital Authority Today
          </h2>
          <p className="text-slate-600 dark:text-slate-300 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get a 100% free consultation, customized visual prototype strategy, and transparent pricing starting at ₹1,499. Let's build your brand.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/20 cursor-pointer active:scale-[0.98] transition-all duration-300"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
