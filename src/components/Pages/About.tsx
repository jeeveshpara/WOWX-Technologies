import { motion } from "motion/react";
import { Award, Compass, Heart, Users, CheckCircle2, Star } from "lucide-react";
import { SafeImage } from "../UI/SafeImage";

interface AboutProps {
  onNavigate: (tab: string) => void;
  isDark: boolean;
}

export function About({ onNavigate, isDark }: AboutProps) {
  
  const values = [
    {
      icon: <Award className="w-5 h-5 text-cyan-500" />,
      title: "Pristine Craftsmanship",
      desc: "No low-quality automated templates. We hand-write clean TypeScript code and optimize assets so every web experience loads instantly."
    },
    {
      icon: <Compass className="w-5 h-5 text-cyan-500" />,
      title: "Radical Transparency",
      desc: "No hidden hosting renewals, markups, or lock-in commissions. We represent pricing clearly and ensure you retain full ownership of your digital assets."
    },
    {
      icon: <Heart className="w-5 h-5 text-cyan-500" />,
      title: "Local Community Advocacy",
      desc: "Based in Morena, Madhya Pradesh, we are dedicated to helping regional SMEs, clinics, coaching institutes, and entrepreneurs acquire real customer flow."
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-500" />,
      title: "Dedicated Ongoing Support",
      desc: "A launch is just the beginning. We perform continuous performance audits, cloud index checkups, security backups, and search rank diagnostics."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "WOWX Foundation",
      desc: "Jeevesh Paras bootstraps WOWX in Morena, MP, to bring enterprise-level React & mobile development practices to local businesses at transparent, affordable pricing."
    },
    {
      year: "2025",
      title: "Digitalizing Morena Enterprises",
      desc: "WOWX successfully delivers custom websites & Google Business Profile setups for medical clinics, coaching institutes, and local D2C brands."
    },
    {
      year: "2026",
      title: "Full Digital Ecosystem",
      desc: "Implementing automated WhatsApp lead funnels, React edge servers, and interactive local schema catalogs, outperforming global SaaS models."
    }
  ];

  return (
    <div id="about-page-container" className="py-20 relative overflow-hidden text-left">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <span>MISSION &amp; STORY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Our Founding Mission
          </h1>
          <p className="text-slate-600 dark:text-slate-300 font-light text-sm md:text-base leading-relaxed">
            Founded with the sole objective of democratizing professional web engineering, allowing businesses in Madhya Pradesh to outrank larger competitors.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Why We Started WOWX
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              For years, small business owners, startup founders, and clinics in Madhya Pradesh were blocked from establishing a proper digital presence. Agencies either charged exorbitant metropolitan fees, or delivered slow, insecure, bloated templates that crashed and failed to rank on search engines.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              We started <strong className="font-semibold text-slate-900 dark:text-white">WOWX Technologies</strong> inside Morena to offer high-fidelity engineering directly to local visionaries. By pairing modern React structures, local schema cards, and direct WhatsApp checkouts, we ensure our clients receive a premium portal comparable to global SaaS startups.
            </p>
            <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                <strong className="font-semibold text-slate-900 dark:text-white">Accessible Excellence:</strong> We deliver production-grade websites starting at just ₹1,499. No predatory markups, just tangible results.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative bg-slate-900">
              <SafeImage 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="WOWX Developers Collaborating" 
                category="WOWX MORENA STUDIO"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-1 z-20">
                <p className="text-xs font-mono text-cyan-400 font-semibold">WOWX MORENA STUDIO</p>
                <p className="text-sm font-medium">Delivering High-Performance Code &amp; Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Founder section */}
        <div className="mb-24 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 bg-white dark:bg-slate-900/60 backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl bg-slate-900">
              <SafeImage 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                alt="Jeevesh Paras, WOWX Founder"
                category="FOUNDER PORTRAIT"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-cyan-500" />
              <span>FOUNDER &amp; SOFTWARE ARCHITECT</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Jeevesh Paras
            </h3>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              &ldquo;My absolute conviction is that high-end software development should not reside strictly in Bangalore or Delhi. The brilliant businessmen, doctors, coaches, and export houses inside Chambal deserve pristine frameworks that represent their hard work beautifully. At WOWX, we combine speed and design aesthetics to help you acquire customers with dignity.&rdquo;
            </p>
            
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Head of Engineering &amp; Operations</p>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">MORENA, MADHYA PRADESH, INDIA</p>
            </div>
          </div>
        </div>

        {/* Company Core Values */}
        <div className="mb-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              The values guiding every product and client engagement at WOWX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Our Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Key milestones in establishing WOWX as Madhya Pradesh's trusted tech partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md space-y-3">
                <span className="text-3xl font-mono font-bold text-cyan-600 dark:text-cyan-400">
                  {m.year}
                </span>
                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
