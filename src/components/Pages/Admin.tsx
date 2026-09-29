import React, { useState, useEffect } from "react";
import { Lead } from "../../types";
import { 
  Users, Lock, ShieldCheck, Mail, Phone, Calendar, Download, Trash2, 
  RefreshCw, MessageSquare, Check, LogOut, CheckCircle2, AlertCircle 
} from "lucide-react";

interface AdminProps {
  onNavigate: (tab: string) => void;
  isDark: boolean;
}

const DEFAULT_LEADS: Lead[] = [
  {
    id: "demo-lead-1",
    name: "Dr. Alok Verma",
    email: "alokverma.morena@gmail.com",
    phone: "9826277020",
    businessName: "Verma Dental Clinic",
    serviceRequired: "Landing Page Development",
    message: "We need a quick responsive landing page to run local Google search ads inside Uttam Pura, Morena.",
    date: "28/09/2026, 11:30 AM",
    status: "new"
  },
  {
    id: "demo-lead-2",
    name: "Aaditya Sharma",
    email: "sharmaweddingfilms@gmail.com",
    phone: "7000524410",
    businessName: "Pooja Studio Morena",
    serviceRequired: "Portfolio Website Development",
    message: "We want a React portfolio gallery grid to showcase wedding filmography, connecting directly to our WhatsApp booking line.",
    date: "27/09/2026, 03:15 PM",
    status: "contacted"
  },
  {
    id: "demo-lead-3",
    name: "Rajesh Sahu",
    email: "sahunaturalhoney@yahoo.com",
    phone: "9131652424",
    businessName: "Madhukosh Chambal Honey Co",
    serviceRequired: "E-Commerce Website Development",
    message: "Looking to setup an online cart system to export pure raw mustard honey from Morena fields to Bangalore & Mumbai.",
    date: "25/09/2026, 10:00 AM",
    status: "completed"
  }
];

export function Admin({ onNavigate, isDark }: AdminProps) {
  const [passcode, setPasscode] = useState<string>("");
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [passcodeError, setPasscodeError] = useState<string>("");

  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const storedLeads = localStorage.getItem("wowx_captured_leads");
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
    } else {
      setLeads(DEFAULT_LEADS);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "2026" || passcode === "admin") {
      setIsUnlocked(true);
      setPasscodeError("");
    } else {
      setPasscodeError("Invalid passcode. Enter '2026'");
    }
  };

  const handleSeedDemoLeads = () => {
    localStorage.setItem("wowx_captured_leads", JSON.stringify(DEFAULT_LEADS));
    setLeads(DEFAULT_LEADS);
  };

  const cycleLeadStatus = (leadId: string, currentStatus: Lead["status"]) => {
    const newStatus: Lead["status"] = 
      currentStatus === "new" ? "contacted" : 
      currentStatus === "contacted" ? "completed" : "new";

    const updatedLeads = leads.map((l) => {
      if (l.id === leadId) {
        return { ...l, status: newStatus };
      }
      return l;
    });

    localStorage.setItem("wowx_captured_leads", JSON.stringify(updatedLeads));
    setLeads(updatedLeads);
  };

  const handleDeleteLead = (leadId: string) => {
    if (!window.confirm("Are you sure you want to remove this lead?")) return;
    const remainingLeads = leads.filter(l => l.id !== leadId);
    localStorage.setItem("wowx_captured_leads", JSON.stringify(remainingLeads));
    setLeads(remainingLeads);
  };

  const handleWipeDatabase = () => {
    if (!window.confirm("Are you sure you want to clear all leads?")) return;
    localStorage.removeItem("wowx_captured_leads");
    setLeads([]);
  };

  const handleExportJSON = () => {
    if (leads.length === 0) return;
    const fileData = JSON.stringify(leads, null, 2);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `WOWX_LEADS_${new Date().toISOString().split("T")[0]}.json`;
    link.href = url;
    link.click();
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    setPasscode("");
  };

  return (
    <div id="admin-view-node" className="py-20 relative overflow-hidden text-left min-h-[85vh] flex items-center">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        
        {/* Passcode screening lock */}
        {!isUnlocked ? (
          <div className="max-w-md mx-auto p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-md shadow-2xl relative">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto mb-2">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                Developer &amp; Leads Console
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Authorized access only. Authenticate to manage inbound client requests and view inquiries.
              </p>

              <form onSubmit={handleUnlock} className="space-y-4 pt-2">
                <input 
                  type="password" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter Passcode (Hint: 2026)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-center font-mono"
                />

                {passcodeError && (
                  <p className="text-xs text-rose-500 font-mono">{passcodeError}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-md shadow-cyan-500/20 cursor-pointer active:scale-[0.98] transition-all"
                >
                  Authenticate &amp; Enter
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Unlocked Lead Dashboard */
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SESSION AUTHENTICATED</span>
                </div>
                <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
                  Client Inquiries &amp; Leads
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light">
                  {leads.length} total lead record(s) registered in local storage.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleSeedDemoLeads}
                  className="px-3 py-2 rounded-xl text-xs font-mono border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Seed Demo Data</span>
                </button>

                <button
                  onClick={handleExportJSON}
                  className="px-3 py-2 rounded-xl text-xs font-mono border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export JSON</span>
                </button>

                <button
                  onClick={handleWipeDatabase}
                  className="px-3 py-2 rounded-xl text-xs font-mono border border-rose-500/30 text-rose-500 hover:bg-rose-500/10 flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-xl text-xs font-mono bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center gap-1.5 cursor-pointer font-semibold"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Inquiries List */}
            {leads.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No captured leads in storage</p>
                <button
                  onClick={handleSeedDemoLeads}
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-mono text-xs font-semibold cursor-pointer"
                >
                  Load Demo Leads
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {leads.map((lead) => {
                  const statusColors = {
                    new: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
                    contacted: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                    completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                  };

                  const cleanPhone = lead.phone.replace(/\D/g, "");
                  const wpLeadReply = `https://wa.me/91${cleanPhone}?text=Hello%20${encodeURIComponent(lead.name)},%20this%20is%20Jeevesh%20from%20WOWX%20Technologies%20regarding%20your%20inquiry!`;

                  return (
                    <div 
                      key={lead.id}
                      className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md shadow-sm space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                              {lead.name}
                            </h3>
                            <span className="text-xs font-mono text-slate-500">
                              ({lead.businessName})
                            </span>
                          </div>
                          <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                            Requested: {lead.serviceRequired}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => cycleLeadStatus(lead.id, lead.status)}
                            className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase border cursor-pointer ${statusColors[lead.status]}`}
                            title="Click to cycle status"
                          >
                            Status: {lead.status}
                          </button>
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-light bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 leading-relaxed">
                        &ldquo;{lead.message}&rdquo;
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-mono">
                        <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-cyan-500" />
                            <span>{lead.phone}</span>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-blue-500" />
                            <span>{lead.email}</span>
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-400">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{lead.date}</span>
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <a
                            href={wpLeadReply}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-medium hover:opacity-95 transition-opacity"
                          >
                            <MessageSquare className="w-3.5 h-3.5 fill-current" />
                            <span>Reply via WhatsApp</span>
                          </a>
                          <a
                            href={`mailto:${lead.email}?subject=WOWX Technologies Proposal`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Email</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
