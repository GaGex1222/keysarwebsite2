"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Bell, Settings, BatteryCharging, 
  HelpCircle, Clock, Award, Headphones, 
  ChevronLeft, Radio, Zap, Layout, 
  Crosshair, Cpu, Lock, Activity
} from 'lucide-react';

export default function AlarmTechnicianPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-[#020408] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30" dir="rtl">
      
      {/* --- CYBERNETIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-cyan-500/5" />
        {/* Scanning Line Effect */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-[scan_6s_linear_infinite]" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-48 pb-24 px-6 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-3 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-xl"
        >
          <Activity size={14} className="text-blue-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-300">Security_Node_Active // 24/7_Support</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[120px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-12"
          style={{ x: mousePos.x * -25, y: mousePos.y * -15 }}
        >
          טכנאי אזעקות <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #06b6d4' }}>לבית חכם.</span>
        </motion.h1>

        <p className="max-w-3xl text-slate-400 text-xl md:text-3xl italic font-light leading-relaxed border-r-4 border-cyan-500 pr-8">
          מחפש ביטחון מקסימלי? קיסר מערכות מציעה את הדור הבא של מערכות המיגון. 
          טכנולוגיית קצה, התקנה כירורגית ושקט נפשי מוחלט.
        </p>
      </header>

      {/* --- MAIN INTERFACE --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-60">
        
        {/* Section 1: Why Choose Us (Feature Grid) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="col-span-full mb-8">
            <h2 className="text-4xl font-[1000] italic uppercase flex items-center gap-4">
              <ChevronLeft className="text-cyan-500" /> למה לבחור בקיסר?
            </h2>
          </div>

          {[
            { title: "מומחיות טכנולוגית", desc: "ניסיון עשיר במערכות קווית, אלחוטיות והיברידיות.", icon: <Cpu /> },
            { title: "ציוד מתקדם", desc: "שימוש ברכיבים מהשורה הראשונה המותאמים אישית.", icon: <Settings /> },
            { title: "זמינות 24/7", desc: "מוקד אנושי זמין לכל קריאה או תקלה בזמן אמת.", icon: <Headphones /> },
            { title: "אחריות מקיפה", desc: "כיסוי מלא על כל המוצרים והתקנת המערכות.", icon: <Award /> },
            { title: "ייעוץ מבוסס AI", desc: "תכנון אסטרטגי של מיקומי חיישנים לכיסוי מקסימלי.", icon: <Crosshair /> },
            { title: "אבטחה אישית", desc: "התאמה מדויקת לצרכי המשפחה ואופי המבנה.", icon: <ShieldCheck /> }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-all group">
              <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-black italic mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
            </div>
          ))}
        </motion.section>

        {/* Section 2: Installation Process (Visual Map) */}
        <section className="relative">
          <div className="absolute -right-20 top-0 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase leading-none">
                פרוטוקול <br /> <span className="text-cyan-500">התקנה</span>
              </h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "אבחון ומיפוי", desc: "הערכת צרכים מקיפה ותכנון אופטימלי של נקודות תורפה." },
                  { step: "02", title: "התקנה כירורגית", desc: "מיקום חיישנים, סירנות ופאנל ניהול בדיוק מקסימלי." },
                  { step: "03", title: "אינטגרציה מלאה", desc: "חיבור לאפליקציה, למצלמות הבית ולמוקדי חירום." },
                  { step: "04", title: "הדרכה והפעלה", desc: "ליווי מלא עד לשליטה מוחלטת בממשק המערכת." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <span className="text-blue-500 font-mono text-xl font-bold">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-black italic group-hover:text-cyan-500 transition-colors">{item.title}</h4>
                      <p className="text-slate-400 font-light italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square bg-white/[0.02] border border-white/5 rounded-[4rem] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-[80%] h-[80%] border-2 border-dashed border-blue-500/20 rounded-full flex items-center justify-center"
               >
                 <Bell size={80} className="text-cyan-500 animate-bounce" />
               </motion.div>
               <div className="absolute bottom-10 text-center">
                 <div className="text-[10px] font-mono text-blue-400 tracking-[0.5em] mb-2 uppercase">System_Layout_Scan</div>
                 <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div animate={{ x: [-100, 100] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-full h-full bg-blue-500" />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Section 3: Maintenance (The Service Hub) */}
        <section className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none">
            <Settings size={300} className="text-blue-500" />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl font-[1000] italic">תחזוקה מונעת - <span className="text-cyan-500">שירות V.I.P</span></h2>
            <p className="text-slate-400 text-xl font-light italic leading-relaxed">
              מערכת אזעקה היא מצילת חיים, ולכן היא חייבת להיות בשיא הכושר. השירות שלנו כולל בדיקות תקופתיות, החלפת סוללות יזומה ועדכוני קושחה (Firmware) כדי להקדים כל ניסיון פריצה.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-white/10 rounded-3xl bg-black/40">
                <BatteryCharging className="text-cyan-500 mx-auto mb-4" />
                <h5 className="font-bold">ניהול אנרגיה</h5>
                <p className="text-xs text-slate-500 uppercase mt-2">Power_Grid_Check</p>
              </div>
              <div className="p-6 border border-blue-500/30 rounded-3xl bg-blue-500/5 backdrop-blur-sm">
                <Zap className="text-cyan-500 mx-auto mb-4" />
                <h5 className="font-bold">תיקון תקלות בזק</h5>
                <p className="text-xs text-slate-500 uppercase mt-2">Rapid_Response</p>
              </div>
              <div className="p-6 border border-white/10 rounded-3xl bg-black/40">
                <Lock className="text-cyan-500 mx-auto mb-4" />
                <h5 className="font-bold">עדכוני אבטחה</h5>
                <p className="text-xs text-slate-500 uppercase mt-2">Firmware_Update</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Final Action */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center py-20"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[3rem] mb-12 shadow-[0_0_60px_rgba(37,99,235,0.1)]">
            <div className="bg-[#020408] rounded-[2.9rem] px-16 py-20 md:px-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]" />
              <h2 className="relative z-10 text-4xl md:text-8xl font-[1000] italic leading-tight mb-8">
                אל תחכה <br /> <span className="text-cyan-500">לפריצה הבאה.</span>
              </h2>
              <p className="relative z-10 text-slate-400 text-xl mb-12 max-w-xl mx-auto italic">
                הצטרף למשפחת קיסר ותתחיל לישון בשקט. המקצוענים שלנו מחכים לשיחה שלך.
              </p>
              <button className="relative z-10 bg-cyan-500 text-black px-16 py-6 rounded-2xl font-[1000] text-2xl italic uppercase hover:bg-white transition-all shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50">
                הזמן טכנאי עכשיו
              </button>
            </div>
          </div>
        </motion.section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#010204] border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <ShieldCheck size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black italic uppercase leading-none tracking-tight">Keisar Security</span>
              <span className="text-[8px] text-cyan-500 font-bold tracking-[0.5em] uppercase">Tactical_Home_Defense</span>
            </div>
          </div>
          <div className="flex gap-10 text-slate-500 text-sm font-bold italic">
            <a href="#" className="hover:text-cyan-500 transition-colors">SECURITY_PLAN_2026</a>
            <span className="text-white/10">|</span>
            <span>055-970-5013</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}