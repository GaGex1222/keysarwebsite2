"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, Activity, Wifi, ShieldAlert, Cpu, 
  Search, HardDrive, Share2, Radio, Lock, 
  Smartphone, Monitor, CheckCircle, Zap,
  AlertTriangle, ArrowLeftRight, Terminal
} from 'lucide-react';

export default function CommunicationTechnicianPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) - 0.5, 
        y: (e.clientY / window.innerHeight) - 0.5 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30" dir="rtl">
      
      {/* --- DIAGNOSTIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Moving Pulse Line */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 flex items-center gap-2 px-4 py-1 rounded-full border border-red-500/30 bg-red-500/5 backdrop-blur-md"
        >
          <AlertTriangle size={14} className="text-red-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">System_Failure_Detected / Technician_Required</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-[90px] font-[1000] italic leading-[0.9] tracking-tighter uppercase mb-8"
          style={{ x: mousePos.x * -15, y: mousePos.y * -10 }}
        >
          טכנאי <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #06b6d4' }}>מערכות תקשורת.</span>
        </motion.h1>

        <p className="max-w-2xl text-slate-400 text-xl md:text-2xl italic font-light leading-relaxed">
          אינטרנט איטי? ניתוקים ברשת? אנחנו הגשר בין התקלה הדיגיטלית לפתרון הפיזי. 
          אבחון, תיקון ואופטימיזציה בזמן אמת.
        </p>
      </header>

      {/* --- MAIN CORE --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-32 pb-40">
        
        {/* Section: Diagnostics (The "Problem" Section) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "NETWORK_LAG", title: "אינטרנט איטי", icon: <Activity className="text-red-500" /> },
            { label: "CONNECTION_LOST", title: "ניתוקי רשת", icon: <Wifi className="text-red-500" /> },
            { label: "SECURITY_RISK", title: "איומי סייבר", icon: <ShieldAlert className="text-red-500" /> }
          ].map((item, i) => (
            <div key={i} className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all hover:border-red-500/30">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500/20 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <div className="mb-4 font-mono text-[10px] text-slate-600">{item.label}</div>
              <div className="flex items-center gap-4">
                {item.icon}
                <h3 className="text-2xl font-black italic">{item.title}</h3>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Section: Services - The Bridge (Glass Design) */}
        <section className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase leading-none">
                הגשר בין <br /> <span className="text-cyan-500">פיזי לדיגיטלי.</span>
              </h2>
              <div className="space-y-4">
                {[
                  "אבחון ופתרון תקלות חומרה ותוכנה",
                  "התקנת נתבים (Routers) ונקודות גישה",
                  "ניהול רשתות מקומיות LAN ורשתות WAN",
                  "אבטחת מידע והגנה מפני איומי סייבר"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-cyan-500/5 transition-all cursor-default">
                    <CheckCircle size={20} className="text-cyan-500 shrink-0" />
                    <span className="text-lg italic font-bold text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element: Tech HUD */}
            <div className="relative aspect-square flex items-center justify-center">
               <div className="absolute inset-0 border border-cyan-500/5 rounded-full" />
               <div className="relative w-64 h-64 border border-cyan-500/20 rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center gap-4 shadow-[0_0_100px_rgba(6,182,212,0.1)]">
                  <Terminal size={48} className="text-cyan-500 animate-pulse" />
                  <div className="font-mono text-[10px] text-cyan-400">SYSTEM_REPAIR_INIT...</div>
                  <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: [-128, 128] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full bg-cyan-500"
                    />
                  </div>
               </div>
               {/* Floating Data Icons */}
               <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-10 text-cyan-500/40"><Cpu size={40} /></motion.div>
               <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 left-10 text-cyan-500/40"><Radio size={40} /></motion.div>
            </div>
          </div>
        </section>

        {/* Section: Professionalism (Clean Outlined Style) */}
        <section className="relative py-24 border-y border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "אבטחה", desc: "הגנה על הנתונים שלכם", icon: <Lock /> },
              { title: "תמיכה", desc: "מענה מהיר לכל שאלה", icon: <Smartphone /> },
              { title: "תכנון", desc: "בניית תשתית מותאמת", icon: <Zap /> },
              { title: "מצלמות", desc: "4K אבטחה היקפית", icon: <Monitor /> }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="mx-auto w-16 h-16 flex items-center justify-center border border-white/10 rounded-full text-slate-500 group-hover:text-cyan-500 group-hover:border-cyan-500/50 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black italic">{item.title}</h4>
                <p className="text-slate-500 text-sm italic font-bold">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA: Final Action */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="relative p-12 md:p-24 rounded-[4rem] border border-cyan-500/20 bg-cyan-500/[0.02] text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
          <h2 className="relative z-10 text-4xl md:text-8xl font-[1000] italic leading-none mb-8">
            אל תחכו <br /> <span className="text-cyan-500 italic uppercase">לקריסת המערכת.</span>
          </h2>
          <p className="relative z-10 text-slate-400 text-xl md:text-2xl italic mb-12 max-w-2xl mx-auto font-light">
            אנחנו בקיסר מבינים לעומק רשתות, אבטחת מידע ופתרון תקלות מורכבות. המקצוענים שלנו בדרך אליכם.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            <button className="bg-cyan-500 text-black px-12 py-5 rounded-2xl font-[1000] text-2xl italic hover:bg-white transition-all shadow-xl shadow-cyan-500/20">
              הזמן טכנאי עכשיו
            </button>
          </div>
        </motion.section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050608] border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-500">
              <Activity size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black italic uppercase leading-none">Keisar Pro</span>
              <span className="text-[8px] text-cyan-500 font-bold tracking-[0.4em]">TECH_RESPONSE_UNIT</span>
            </div>
          </div>
          <div className="flex gap-10 text-slate-500 text-sm font-bold italic">
            <a href="tel:0559705013" className="hover:text-cyan-500 transition-colors">055-970-5013</a>
            <span>OFFICE@KEISAR.CO.IL</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(100px); }
        }
      `}</style>
    </div>
  );
}