"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import * as Icons from "lucide-react";

// קומפוננטת רקע "רשת נוירונים" עתידנית
const TechNetworkBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#f8fafc]">
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
      
      {/* Animated Glowing Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-200/40 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/40 blur-[100px] rounded-full" 
      />

      {/* Scanned Lines Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const fadeInProps: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const services = [
    { title: "מערכות מצלמות IP", icon: "Video", desc: "ניטור 4K חכם עם בינה מלאכותית לזיהוי פנים ותנועה חשודה.", color: "bg-cyan-500" },
    { title: "מערכות אזעקה", icon: "Bell", desc: "הגנה היקפית רב-שכבתית עם שליטה מלאה מהנייד וחיבור למוקד.", color: "bg-blue-500" },
    { title: "בקרת כניסה", icon: "Lock", desc: "אינטרקום IP, קודנים ביומטריים וניהול הרשאות כניסה מבוסס ענן.", color: "bg-indigo-500" },
    { title: "בית חכם PRO", icon: "Zap", desc: "אוטומציה מלאה לתשתיות הבית בממשק אחד אינטואיטיבי ומתקדם.", color: "bg-teal-500" },
    { title: "תשתיות תקשורת", icon: "Wifi", desc: "תכנון וביצוע רשתות WI-FI 6 ופריסת סיבים אופטיים לעסקים ופרטיים.", color: "bg-sky-500" },
    { title: "גילוי אש ועשן", icon: "AlertTriangle", desc: "מערכות תקניות (תקן 1220) להצלת חיים ומניעת נזקי רכוש כבד.", color: "bg-cyan-400" }
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen text-slate-900 font-sans selection:bg-cyan-200" dir="rtl">
      <TechNetworkBackground />

      {/* Header / Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-3xl px-8 py-4 flex justify-between items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
              <Icons.ShieldCheck className="text-cyan-600" size={28} />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-slate-900 italic">KEISAR</span>
            <span className="text-[9px] font-bold text-cyan-600 tracking-[0.25em]">SECURITY ARCHITECTS</span>
          </div>
        </div>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-xs font-black tracking-widest hover:bg-cyan-600 transition-all active:scale-95 shadow-lg shadow-slate-200 uppercase">
          מערכת שליטה
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-40 px-6 z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm text-cyan-600 text-xs font-black mb-12 tracking-widest uppercase"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
            Active Protocol: Human Protection v4.0
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[140px] font-black mb-12 leading-[0.8] tracking-tighter text-slate-900 drop-shadow-sm"
          >
            ביטחון <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600">בזמן אמת.</span>
          </h1 >

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 max-w-3xl mx-auto text-2xl md:text-3xl mb-20 font-medium leading-relaxed tracking-tight"
          >
            קיסר מערכות הופכת טכנולוגיה מורכבת להגנה פשוטה. אנחנו לא רק מתקינים מצלמות, אנחנו בונים מבצרים דיגיטליים.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="bg-cyan-600 text-white px-14 py-7 rounded-[32px] font-black text-2xl hover:bg-slate-900 transition-all shadow-2xl shadow-cyan-100 flex items-center gap-4 group">
              תכנן פרויקט <Icons.ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            </button>
            <button className="bg-white border-2 border-slate-100 px-14 py-7 rounded-[32px] font-black text-2xl hover:bg-slate-50 transition-all">
              תיק עבודות
            </button>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Services Grid */}
      <section className="relative py-40 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((s, i) => {
              const IconComp = Icons[s.icon as keyof typeof Icons] as React.ElementType;
              return (
                <motion.div
                  key={i}
                  {...fadeInProps}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -20, rotateY: 5 }}
                  className="group relative p-12 rounded-[50px] bg-white/40 backdrop-blur-md border border-white/60 shadow-xl hover:shadow-cyan-100 transition-all duration-500"
                >
                  <div className={`w-20 h-20 ${s.color} rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                    <IconComp size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-slate-900 tracking-tighter italic">{s.title}</h3>
                  <p className="text-slate-500 text-xl leading-relaxed font-medium">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Dashboard Contact Section - הכי פחות משעמם שיש */}
      <section className="relative py-40 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeInProps}
            className="bg-white rounded-[60px] p-2 md:p-4 shadow-2xl border border-white relative overflow-hidden"
          >
            {/* Background UI Decorations */}
            <div className="absolute top-10 right-10 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <div className="bg-slate-50 rounded-[50px] p-12 md:p-32 text-center relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-100px] left-[-100px] w-64 h-64 border-2 border-dashed border-cyan-200 rounded-full opacity-20 pointer-events-none" 
              />
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white border border-slate-100 rounded-[30px] flex items-center justify-center text-cyan-600 mb-12 shadow-sm mx-auto">
                  <Icons.Zap size={48} className="animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-none">
                  בוא נהפוך את הנכס <br /> <span className="text-cyan-600">למבצר.</span>
                </h2>
                
                <div className="max-w-md mx-auto space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="שם" className="bg-white border-2 border-slate-100 rounded-3xl px-8 py-5 text-lg font-bold focus:border-cyan-500 outline-none transition-all" />
                    <input type="text" placeholder="טלפון" className="bg-white border-2 border-slate-100 rounded-3xl px-8 py-5 text-lg font-bold focus:border-cyan-500 outline-none transition-all" />
                  </div>
                  <button className="w-full bg-slate-900 text-white py-8 rounded-[32px] font-black text-2xl hover:bg-cyan-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-4">
                    שלח פקודת התקשרות <Icons.Send size={24} />
                  </button>
                  <p className="text-slate-400 font-black text-[10px] tracking-widest uppercase">
                    Encryption Status: High // Response Time: &lt; 2h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 text-center relative z-10 border-t border-slate-100">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-10 opacity-30 grayscale hover:grayscale-0 transition-all">
             <Icons.Shield size={32} /> <Icons.Lock size={32} /> <Icons.Eye size={32} />
          </div>
          <p className="text-slate-400 font-black text-[11px] tracking-[0.4em] uppercase">
            Designed by ShieldUp for Keisar Security Systems // 2026
          </p>
        </div>
      </footer>
    </main>
  );
}