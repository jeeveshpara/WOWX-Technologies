import { motion } from "motion/react";
import { 
  Globe, Briefcase, ShoppingCart, Layout, Code, 
  Paintbrush, Search, Settings, Compass, CheckCircle2, ArrowRight, Clock, ShieldCheck
} from "lucide-react";
import { SERVICES } from "../../data";
import { Service } from "../../types";

interface ServicesProps {
  onNavigate: (tab: string) => void;
  isDark: boolean;
}

export function Services({ onNavigate, isDark }: ServicesProps) {

  const getIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case "Globe": return <Globe className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      case "ShoppingCart": return <ShoppingCart className={className} />;
      case "Layout": return <Layout className={className} />;
      case "Code": return <Code className={className} />;
      case "Paintbrush": return <Paintbrush className={className} />;
      case "Search": return <Search className={className} />;
      case "Settings": return <Settings className={className} />;
      case "Compass": return <Compass className={className} />;
      default: return <Globe className={className} />;
    }
  };

  return (
    <div id="services-page-container" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <span>SERVICE PACKAGES &amp; CAPABILITIES</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Tailored Digital Solutions
          </h1>
          
          <p className="text-slate-600 dark:text-slate-300 font-light text-sm md:text-base leading-relaxed">
            From modern responsive business websites to full-stack applications and Google Local SEO setups, we build solutions engineered to deliver real business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv: Service, idx: number) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(3, idx) * 0.08 }}
              className="rounded-3xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Icon & Timeline */}
                <div className="flex items-start justify-between">
                  <div className="w-13 h-13 rounded-2xl flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    {getIcon(srv.icon, "w-6 h-6")}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-950/50">
                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{srv.timeline}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <p className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
                    WHAT'S INCLUDED:
                  </p>
                  <ul className="space-y-2">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-light leading-snug">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs font-mono font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase">
                    BUSINESS ADVANTAGE:
                  </p>
                  <ul className="space-y-2">
                    {srv.benefits.map((bene, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-purple-500 dark:text-purple-400 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-light leading-snug">
                          {bene}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Call to action */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => {
                    localStorage.setItem("preselected_service", srv.title);
                    onNavigate("contact");
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase cursor-pointer border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500 hover:text-white dark:hover:text-slate-900 transition-all duration-300 active:scale-[0.98]"
                >
                  <span>Request Custom Build</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom inquiry block */}
        <div className="mt-20 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl text-left">
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              Need a specialized web application or custom software?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              We design custom API connections, database architectures, client portals, and inventory systems tailored to your unique workflows.
            </p>
          </div>
          <button 
            onClick={() => onNavigate("contact")}
            className="px-6 py-3.5 rounded-xl font-semibold text-xs font-mono tracking-wider uppercase bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 shrink-0 cursor-pointer transition-colors duration-200 shadow-md"
          >
            <span>Consult With Us &rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
}
