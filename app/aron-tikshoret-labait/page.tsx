"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Shield, Phone, Mail, Activity, ChevronLeft, 
  Target, Scan, Zap, Box, Server, Network, 
  Settings, Layers, Database, MousePointer2,
  CheckCircle2, PlusCircle, UserCheck, Menu, X
} from 'lucide-react';

export default function CommunicationCabinetPage() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30" dir="rtl">
      
      {/* --- TECH BACKGROUND (NO SOLID BLOCKS) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-[#080a0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400">
              <Server size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-[1000] italic tracking-tighter uppercase leading-none">KEISAR PRO</span>
              <span className="text-[10px] text-cyan-500 font-bold tracking-[0.3em]">NET_INFRA_v3</span>
            </div>
          </div>
          <a href="tel:0525022222" className="hidden sm:block text-cyan-400 border border-cyan-400/30 px-6 py-2 rounded-full font-black text-xs italic hover:bg-cyan-400 hover:text-black transition-all">
            052-502-2222
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-48 pb-24 px-6 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
        >
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Domestic_Grid_Management</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[110px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-10"
          style={{ x: mousePos.x * 20, y: mousePos.y * 10 }}
        >
          ארון <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>תקשורת חכם.</span>
        </motion.h1>

        <p className="max-w-3xl text-slate-400 text-xl md:text-3xl italic font-light leading-relaxed mb-12 border-r-4 border-cyan-500 pr-8 text-right">
          הבית המודרני דורש סדר אבסולוטי. אנחנו מרכזים את כל תשתיות האינטרנט, הטלוויזיה והאבטחה בתוך יחידת ניהול אחת, נקייה ועוצמתית.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-cyan-500 text-black px-12 py-5 rounded-2xl font-[1000] text-2xl italic shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-all active:scale-95">
            ייעוץ תשתית עכשיו
          </button>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-48 pb-40">
        
        {/* Section: Logic & Order */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <div className="relative p-10 md:p-16 rounded-[3.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-sm group transition-all hover:border-cyan-500/20">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-[3.5rem]" />
            <div className="flex items-center gap-4 mb-10">
              <Box className="text-cyan-500" size={40} />
              <h2 className="text-4xl md:text-6xl font-[1000] italic leading-none">הלב של <br /> <span className="text-cyan-500">הבית.</span></h2>
            </div>
            <div className="space-y-8 text-slate-300 text-xl italic leading-relaxed">
              <p>
                ארון תקשורת לבית הוא המקום שבו כל הכבלים הופכים למערכת אחת חכמה. אינטרנט, מצלמות, אזעקה וחשמל חכם – הכל מסונכרן במקום אחד.
              </p>
              <div className="p-6 bg-white/[0.03] border-r-2 border-cyan-500 rounded-xl">
                <p className="text-white font-bold">פתרונות Keisar:</p>
                תכנון הנדסי מדויק המונע הפרעות אלקטרומגנטיות ומבטיח מהירות מקסימלית לכל נקודה בבית.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { title: "סדר פנומנלי", desc: "חיסול סבך הכבלים מאחורי המזנון והרהיטים", icon: <Layers /> },
              { title: "יציבות נתונים", desc: "חיבור קווי יציב לכל המערכות הקריטיות", icon: <Network /> },
              { title: "מוכן לעתיד", desc: "תשתית המאפשרת הוספת רכיבים בקלות", icon: <Zap /> }
            ].map((item, i) => (
              <motion.div 
                whileHover={{ x: -10 }}
                key={i} 
                className="flex items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-[1000] italic leading-none mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm italic font-bold">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section: The Keisar Quality (AESTHETIC RE-DESIGN) */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.08),transparent_70%)]" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 text-cyan-500 font-mono text-[10px] tracking-[0.3em] uppercase">
                <div className="h-[1px] w-8 bg-cyan-500/50" />
                Engineering_Excellence
              </div>
              
              <h2 className="text-5xl md:text-8xl font-[1000] italic leading-tight">
                איכות ללא <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>פשרות.</span>
              </h2>

              <p className="text-slate-400 text-xl md:text-2xl italic leading-relaxed max-w-xl">
                אנחנו מחויבים לסטנדרט הגבוה ביותר. כל ארון מיוצר מחומרים מבודדים, מבטיח פיזור חום אופטימלי ושירות לשנים קדימה.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "תכנון אישי", icon: <Settings size={18} /> },
                  { text: "התקנה נקייה", icon: <Shield size={18} /> },
                  { text: "סידור קפדני", icon: <Layers size={18} /> },
                  { text: "ליווי טכני", icon: <UserCheck size={18} /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all group">
                    <div className="text-cyan-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="font-black italic text-slate-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AESTHETIC VISUAL HUD */}
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                
                <div className="absolute inset-0 border border-cyan-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-12 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                
                <div className="relative z-10 w-56 h-56 bg-cyan-500/5 backdrop-blur-3xl border border-cyan-500/20 rounded-[3rem] flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.15)]">
                  <Database size={80} className="text-cyan-500 animate-pulse" />
                  
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500" />
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500" />
                </div>

                <motion.div 
                  animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-5 right-5 p-3 bg-black/60 border border-white/10 backdrop-blur-md rounded-xl text-[10px] font-mono text-cyan-400"
                >
                  INFRA_INTEGRITY: 100%
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-10 left-5 p-3 bg-black/60 border border-white/10 backdrop-blur-md rounded-xl text-[10px] font-mono text-slate-500"
                >
                  ACTIVE_NODES: 24/24
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: CTA */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center py-20 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent rounded-[5rem]"
        >
          <h2 className="text-5xl md:text-[100px] font-[1000] italic leading-none mb-10 uppercase">
            הכל מחובר <br /> <span className="text-cyan-500">במקום אחד.</span>
          </h2>
          <p className="text-slate-400 text-2xl italic mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            אנחנו כאן כדי להבטיח שהבית שלכם יהיה מחובר בצורה אופטימלית, אסתטית ומקצועית.
          </p>
          <button className="bg-cyan-500 text-black px-16 py-6 rounded-3xl font-[1000] text-3xl italic shadow-2xl shadow-cyan-500/40 hover:bg-white transition-all transform active:scale-95">
            דברו עם המומחים שלנו
          </button>
        </motion.section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="relative bg-[#050608] border-t border-white/5 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400">
              <Shield size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black italic tracking-tighter uppercase">Keisar Pro</span>
              <span className="text-[10px] text-slate-600 font-bold tracking-[0.4em]">SHELTER_SYSTEMS_2026</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-slate-400 font-black italic text-lg uppercase tracking-tighter">
            <a href="tel:0525022222" className="hover:text-cyan-500 transition-colors">052-502-2222</a>
            <a href="mailto:office@keisar.co.il" className="hover:text-cyan-500 transition-colors text-sm md:text-lg">office@keisar.co.il</a>
          </div>

          <div className="text-[10px] text-slate-700 font-mono text-center md:text-left">
            &copy; Keisar SOLUTIONS & KEISAR ENG. <br /> 
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </footer>

      {/* GLOBAL HUD STYLE */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}