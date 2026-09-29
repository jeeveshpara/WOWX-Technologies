import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lead } from "../../types";
import { 
  Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle 
} from "lucide-react";

interface ContactProps {
  onNavigate: (tab: string) => void;
  isDark: boolean;
}

export function Contact({ onNavigate, isDark }: ContactProps) {
  // Main form fields
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [serviceRequired, setServiceRequired] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // UI States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastWpLink, setLastWpLink] = useState<string>("");

  useEffect(() => {
    const preselectedPlan = localStorage.getItem("preselected_pricing");
    const preselectedService = localStorage.getItem("preselected_service");
    
    if (preselectedService) {
      setServiceRequired(preselectedService);
      setMessage(`Hi WOWX! I'm interested in requesting a proposal for the "${preselectedService}" package.`);
      localStorage.removeItem("preselected_service");
    } else if (preselectedPlan) {
      setServiceRequired(preselectedPlan);
      setMessage(`Hi WOWX! I'm interested in getting started with the "${preselectedPlan}" plan.`);
      localStorage.removeItem("preselected_pricing");
      localStorage.removeItem("preselected_price");
    }
  }, []);

  const servicesList = [
    "Business Website Development",
    "Portfolio Website Development",
    "E-Commerce Website Development",
    "Landing Page Development",
    "Custom Web Applications",
    "UI/UX Design",
    "Website Maintenance",
    "SEO Optimization",
    "Digital Presence Setup"
  ];

  const handleValidation = () => {
    const activeErrors: { [key: string]: string } = {};
    if (!name.trim()) activeErrors.name = "Full name is required";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) activeErrors.email = "Please enter a valid email address";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) activeErrors.phone = "Provide a valid 10-digit phone number";
    if (!businessName.trim()) activeErrors.businessName = "Business or brand name is required";
    if (!serviceRequired) activeErrors.serviceRequired = "Please select a service or plan";
    if (!message.trim()) activeErrors.message = "Please include your project requirements";

    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setLoading(true);

    setTimeout(() => {
      const uniqueId = `lead-${Date.now()}`;
      const newLead: Lead = {
        id: uniqueId,
        name,
        email,
        phone,
        businessName,
        serviceRequired,
        message,
        date: new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }),
        status: "new"
      };

      const existingLeadsJSON = localStorage.getItem("wowx_captured_leads");
      const existingLeads: Lead[] = existingLeadsJSON ? JSON.parse(existingLeadsJSON) : [];
      
      const updatedLeads = [newLead, ...existingLeads];
      localStorage.setItem("wowx_captured_leads", JSON.stringify(updatedLeads));

      const wpText = `Hello WOWX Technologies! 🚀\n\nI just filled out your consultation form:\n• Name: ${name}\n• Business: ${businessName}\n• Email: ${email}\n• Phone: ${phone}\n• Required Service: ${serviceRequired}\n\n• Message: ${message}`;
      const encodedText = encodeURIComponent(wpText);
      const wpUrl = `https://wa.me/919479627447?text=${encodedText}`;

      setLastWpLink(wpUrl);
      setLoading(false);
      setIsSuccess(true);

      // Open WhatsApp chat directly
      try {
        window.open(wpUrl, "_blank");
      } catch (err) {
        // Fallback handled via in-page button
      }

      // Reset fields
      setName("");
      setEmail("");
      setPhone("");
      setBusinessName("");
      setServiceRequired("");
      setMessage("");
    }, 800);
  };

  return (
    <div id="contact-page-container" className="py-20 relative overflow-hidden text-left">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <span>GET FREE CONSULTATION</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Exceptional
          </h1>
          <p className="text-slate-600 dark:text-slate-300 font-light text-sm md:text-base leading-relaxed">
            Fill out the consultation form below. Submitting automatically connects you directly to our WhatsApp hotline for prompt discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md space-y-6 shadow-sm">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">DIRECT PHONE LINE</p>
                    <a href="tel:9479627447" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors">
                      +91 9479627447
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">WHATSAPP CHAT</p>
                    <a 
                      href="https://wa.me/919479627447?text=Hello%20WOWX%20Technologies!" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#25D366] transition-colors"
                    >
                      +91 9479627447 (Active 24/7)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">EMAIL ADDRESS</p>
                    <a href="mailto:jeeveshpara@gmail.com" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-500 transition-colors">
                      jeeveshpara@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">HEADQUARTERS</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white leading-snug">
                      Uttam Pura, Morena, Madhya Pradesh - 476001, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
                  RAPID RESPONSE GUARANTEE:
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  All inquiries receive a personalized response and free consultation within 2 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Request Free Consultation &amp; Quote
              </h3>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center space-y-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30"
                  >
                    <div className="w-14 h-14 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                      Inquiry Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you! Your project details have been logged. A WhatsApp chat with founder Jeevesh Paras has opened.
                    </p>
                    {lastWpLink && (
                      <div className="pt-2">
                        <a 
                          href={lastWpLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-mono text-xs font-bold uppercase shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-opacity"
                        >
                          <MessageSquare className="w-4 h-4 fill-current" />
                          <span>Open WhatsApp Chat Directly</span>
                        </a>
                      </div>
                    )}
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 block mx-auto text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          Your Full Name *
                        </label>
                        <input 
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Sharma"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                            errors.name ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                          }`}
                        />
                        {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          WhatsApp / Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit number"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                            errors.phone ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-rose-500">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                            errors.email ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                          }`}
                        />
                        {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                      </div>

                      {/* Business Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          Business / Organization *
                        </label>
                        <input 
                          type="text" 
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="Clinic, Academy, Shop name"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                            errors.businessName ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                          }`}
                        />
                        {errors.businessName && <p className="text-[11px] text-rose-500">{errors.businessName}</p>}
                      </div>
                    </div>

                    {/* Service Package Selector */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                        Interested Service / Plan *
                      </label>
                      <select
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors cursor-pointer ${
                          errors.serviceRequired ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        <option value="">Select a service package...</option>
                        <optgroup label="Core Plans">
                          <option value="Starter Spark Plan (₹1,499)">Starter Spark (₹1,499)</option>
                          <option value="Business Expansion Plan (₹2,999)">Business Expansion (₹2,999)</option>
                          <option value="Enterprise Supreme Plan (₹5,999)">Enterprise Supreme (₹5,999)</option>
                          <option value="Full Custom Web Application (₹9,999)">Custom Web App (₹9,999)</option>
                        </optgroup>
                        <optgroup label="Specialized Services">
                          {servicesList.map((srv) => (
                            <option key={srv} value={srv}>{srv}</option>
                          ))}
                        </optgroup>
                      </select>
                      {errors.serviceRequired && <p className="text-[11px] text-rose-500">{errors.serviceRequired}</p>}
                    </div>

                    {/* Project Message */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                        Project Details &amp; Objectives *
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us what you want to achieve, any competitor sites you like, or specific timeline constraints..."
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors resize-none ${
                          errors.message ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                        }`}
                      />
                      {errors.message && <p className="text-[11px] text-rose-500">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Processing &amp; Connecting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit &amp; Open WhatsApp Chat</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
