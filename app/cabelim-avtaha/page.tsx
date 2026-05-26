"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Wind, 
  Droplets, 
  BarChart3, 
  Cpu, 
  Cable, 
  Server, 
  ArrowLeftRight, 
  ShieldCheck, 
  ChevronLeft,
  Settings2,
  HardDriveDownload
} from 'lucide-react';

export default function SecurityCablesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans selection:bg-sky-200/30 overflow-hidden" dir="rtl">
      
      {/* --- GRID BACKGROUND --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 px-6 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-500/20 text-sky-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
        >
          <Activity size={14} className="animate-pulse" />
          <span>The Backbone of Surveillance</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[120px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-8"
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        >
          עמוד השדרה <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #06b6d4' }}>של האבטחה.</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-slate-600 text-xl md:text-2xl font-light italic leading-relaxed">
          הכבל הוא קו החיים של המערכת. פתרונות התשתית של קיסר מבטיחים חיבור יציב, מאובטח ונטול הפרעות בין המצלמה למרכז הבקרה.
        </p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* --- SECTION: THE BACKBONE --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-sky-600 font-bold italic uppercase text-sm">
              <Cable size={20} />
              <span>עמידות ללא פשרות</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-tight">
              יציבות <br /><span className="text-sky-600">בתנאי קיצון.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl italic leading-relaxed">
              הכבלים שלנו מתוכננים לשרוד הכל: גשם זלעפות, קרינת UV ישירה ותנודות טמפרטורה קיצוניות. כי במערכת אבטחה, אובדן אות הוא לא אופציה.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Droplets size={16} />, t: "חסינות למים" },
                { icon: <Wind size={16} />, t: "עמידות ברוחות" },
                { icon: <Zap size={16} />, t: "סינון רעשים" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-sky-50 border border-sky-200 text-sm font-bold italic">
                  {badge.icon} {badge.t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-sky-100 blur-[120px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative border border-sky-200 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent p-12 overflow-hidden">
               <motion.div 
                 animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-20 -right-20 opacity-5"
               >
                 <Settings2 size={400} />
               </motion.div>
               <div className="relative z-10 space-y-6">
                 <div className="flex gap-4">
                   <div className="w-12 h-1 bg-cyan-500 rounded-full" />
                   <div className="w-4 h-1 bg-white/20 rounded-full" />
                 </div>
                 <h4 className="text-3xl font-black italic uppercase tracking-tighter">ULTRA_STABLE<br />CONDUCTOR</h4>
                 <div className="grid grid-cols-2 gap-4 pt-10 font-mono text-[10px] text-sky-600/50 uppercase">
                    <div>Status: Active</div>
                    <div>Bandwidth: 10Gbps</div>
                    <div>Shielding: Dual-Layer</div>
                    <div>Signal: 100%</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: THE REVOLUTION (PoE) --- */}
        <section className="p-12 md:p-24 border border-sky-100 rounded-[4rem] bg-white/[0.01] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(6,182,212,0.05),transparent_50%)]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex gap-4 items-end h-64">
                {[40, 70, 45, 90, 60, 80].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }} whileInView={{ height: `${h}%` }}
                    className="w-full bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-xl" 
                  />
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black italic leading-tight uppercase">הכל על כבל בודד.</h2>
              <p className="text-slate-600 text-lg italic leading-relaxed">
                עידן החדשנות מפשט הכל. טכנולוגיית ה-PoE מאפשרת להעביר מתח ונתונים על כבל אחד, מבלי צורך במקורות חשמל נפרדים ליד כל מצלמה. פחות כבלים, פחות עלויות, יותר ביטחון.
              </p>
              <div className="flex items-center gap-4 text-sky-600 font-black italic uppercase text-sm">
                <ShieldCheck /> <span>חיסכון של עד 40% בעלויות התשתית</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: FAQ GRID (Questions & Answers) --- */}
        <section className="space-y-20">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-7xl font-black italic uppercase">מומחיות <span className="text-sky-600">במספרים.</span></h2>
             <p className="text-slate-500 font-bold italic uppercase tracking-widest">Q&A Technology Overview</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                q: "אנלוגי מול IP?", 
                a: "מצלמות אנלוגיות פועלות על כבל קואקסיאלי פשוט, בעוד מצלמות IP משתמשות ברשת דיגיטלית (Ethernet) לרזולוציות 4K וניהול חכם.",
                icon: <ArrowLeftRight />
              },
              { 
                q: "איך מרחיבים טווח?", 
                a: "באמצעות מגברי אותות אקטיביים או מעבר לסיבים אופטיים המאפשרים העברת מידע למרחקים עצומים ללא פגיעה באיכות.",
                icon: <BarChart3 />
              },
              { 
                q: "מה לבחור?", 
                a: "הגורמים הקריטיים: סוג המערכת, אורך הכבל הדרוש ועמידות לתנאי סביבה. אנחנו כאן כדי להתאים לכם את התשתית המדויקת.",
                icon: <Cpu />
              }
            ].map((faq, i) => (
              <div key={i} className="group p-10 border border-sky-100 rounded-[3rem] bg-white/[0.01] hover:bg-white/[0.03] transition-all flex flex-col gap-6">
                <div className="text-sky-600 group-hover:scale-110 transition-transform">{faq.icon}</div>
                <h4 className="text-xl font-black italic uppercase text-slate-900">{faq.q}</h4>
                <p className="text-slate-500 text-sm italic leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION: CALL TO ACTION --- */}
        <section className="relative py-20 px-10 border border-sky-100 rounded-[4rem] bg-gradient-to-br from-white/[0.02] to-transparent text-center overflow-hidden">
          <div className="absolute bottom-0 right-0 p-20 opacity-5 rotate-12">
            <Server size={300} />
          </div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-8xl font-[1000] italic leading-tight uppercase">
              תשתית חזקה. <br /> <span className="text-sky-600 italic">ביטחון שקט.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button className="group relative px-12 py-6 bg-white text-black font-[1000] italic text-2xl rounded-2xl transition-all hover:scale-105">
                  <span className="flex items-center gap-4">
                    דברו עם מומחה תשתית
                    <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
                  </span>
               </button>
               <button className="flex items-center gap-3 px-8 py-4 border border-sky-200 rounded-2xl font-bold italic hover:bg-sky-50 transition-colors">
                 <HardDriveDownload size={20} className="text-sky-600" />
                 מפרט טכני לכבלים (PDF)
               </button>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-sky-100 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Server className="text-sky-600" />
            <span className="text-2xl font-black italic uppercase tracking-tighter">Keisar INFRASTRUCTURE</span>
          </div>
          <p className="text-slate-600 font-bold italic text-[10px] uppercase tracking-widest max-w-xs leading-relaxed">
            Leading the field of high-end surveillance cabling and digital signal stability.
          </p>
        </div>
      </footer>

    </div>
  );
}