import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRICING_PLANS, FAQS } from "../../data";
import { PricingPlan } from "../../types";
import { Check, ChevronDown, Star, Award, HelpCircle } from "lucide-react";

interface PricingProps {
  onNavigate: (tab: string) => void;
  isDark: boolean;
}

export function Pricing({ onNavigate, isDark }: PricingProps) {
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaqId(prev => (prev === id ? null : id));
  };

  const comparisonRows = [
    { feature: "Custom Web Pages Included", p1: "1 Scrolling Page", p2: "2 - 3 Pages", p3: "Up to 6 Pages", p4: "Bespoke Multi-Page" },
    { feature: "Server Load Speed Target", p1: "< 1.5 Seconds", p2: "< 1.2 Seconds", p3: "< 0.9 Seconds", p4: "< 0.6 Seconds" },
    { feature: "Google Business Profile Map Setup", p1: "✓ Standard Setup", p2: "✓ GBP Optimization", p3: "✓ Deep Verification Help", p4: "✓ Top Local Search Rank" },
    { feature: "Instagram & LinkedIn Profile Setup", p1: "—", p2: "—", p3: "✓ Professional Setup", p4: "✓ Cross-Posting System" },
    { feature: "Secure Lead Capture Form", p1: "✓ Included", p2: "✓ Included", p3: "✓ Encrypted CRM Hooks", p4: "✓ Real-time CSV Export Panel" },
    { feature: "Direct WhatsApp Ordering / Links", p1: "✓ Standard", p2: "✓ Custom Pre-fill Text", p3: "✓ Booking Automation", p4: "✓ Department Routing" },
    { feature: "Search Engine Optimization (SEO)", p1: "Meta Tag Setup", p2: "Basic Competitor Audit", p3: "Local Schema Maps", p4: "Advanced Schema Suite" },
    { feature: "Support & Bug Fixes SLA", p1: "1 Week Setup Support", p2: "1 Month Dedicated", p3: "2 Months Dedicated", p4: "3 Months Hands-on SLA" },
    { feature: "Admin Lead Management Portal", p1: "—", p2: "—", p3: "✓ Included", p4: "✓ Dedicated Admin Panel" }
  ];

  return (
    <div id="pricing-page-container" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <span>TRANSPARENT, AFFORDABLE PRICING</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Plans Engineered For Every Scale
          </h1>
          <p className="text-slate-600 dark:text-slate-300 font-light text-sm md:text-base leading-relaxed">
            Choose a development tier structured for your business stage. Highly competitive regional pricing with 100% transparent deliverables and zero hidden renewals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isPopular = plan.popular;
            const isBestValue = plan.bestValue;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`rounded-3xl p-7 relative flex flex-col justify-between overflow-hidden border transition-all duration-300 ${
                  isPopular 
                    ? "border-cyan-500 bg-white dark:bg-slate-900/80 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500"
                    : isBestValue
                    ? "border-purple-500 bg-white dark:bg-slate-900/80 shadow-xl shadow-purple-500/10 ring-1 ring-purple-500"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm"
                }`}
              >
                
                {/* Popularity ribbon tag */}
                {isPopular && (
                  <div className="absolute top-4 right-4 bg-cyan-500 text-slate-950 font-mono text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm uppercase">
                    <Star className="w-3 h-3 fill-slate-950" />
                    <span>Popular</span>
                  </div>
                )}

                {isBestValue && (
                  <div className="absolute top-4 right-4 bg-purple-500 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm uppercase">
                    <Award className="w-3 h-3" />
                    <span>Best Value</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name & price block */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1 pt-1">
                      <span className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
                        ₹{plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-light text-slate-500">
                        / one-time
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      {plan.description}
                    </p>
                  </div>

                  {/* Feature lists */}
                  <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[11px] font-mono tracking-wider text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
                      DELIVERABLES:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug font-light">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Link button */}
                <div className="pt-8">
                  <button
                    id={`pricing-btn-${plan.id}`}
                    onClick={() => {
                      localStorage.setItem("preselected_pricing", plan.name);
                      localStorage.setItem("preselected_price", plan.price.toString());
                      onNavigate("contact");
                    }}
                    className={`w-full py-3.5 rounded-xl text-center text-xs font-mono font-bold tracking-wider uppercase cursor-pointer transition-all duration-300 active:scale-[0.98] ${
                      isPopular
                        ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-500/20"
                        : isBestValue
                        ? "bg-purple-600 text-white hover:bg-purple-500 shadow-md shadow-purple-500/20"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Structured Comparison Table */}
        <div className="mb-24 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Detailed breakdown of deliverables across all 4 tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                <tr>
                  <th className="p-4.5 font-display font-semibold">Capability</th>
                  <th className="p-4.5 font-display font-semibold">Starter (₹1,499)</th>
                  <th className="p-4.5 font-display font-semibold">Expansion (₹2,999)</th>
                  <th className="p-4.5 font-display font-semibold">Enterprise (₹5,999)</th>
                  <th className="p-4.5 font-display font-semibold">Custom App (₹9,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4.5 font-medium text-slate-900 dark:text-white">{row.feature}</td>
                    <td className="p-4.5">{row.p1}</td>
                    <td className="p-4.5">{row.p2}</td>
                    <td className="p-4.5 font-medium text-cyan-600 dark:text-cyan-400">{row.p3}</td>
                    <td className="p-4.5 font-medium text-purple-600 dark:text-purple-400">{row.p4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Answers to common queries regarding deliverables, payments, and ownership.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = expandedFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-cyan-500 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed border-t border-slate-100 dark:border-slate-800"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
