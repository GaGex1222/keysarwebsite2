"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import * as Icons from "lucide-react";

interface Service {
  title: string;
  icon: keyof typeof Icons;
  desc: string;
}

// אלמנטים עיצוביים לרקע - "שכבת המטריקס הלבנה"
const TechOverlay = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
    <div className="absolute top-20 left-10 text-[10px] font-mono text-cyan-600 leading-none rotate-90">
      {Array(20).fill("01011001 11010110 ").join("\n")}
    </div>
    <div className="absolute bottom-40 right-10 text-[10px] font-mono text-cyan-600 leading-none -rotate-90">
      {Array(20).fill("SYSTEM_SECURE_BY_SHIELDUP ").join("\n")}
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-[1px] border-cyan-200 rounded-full opacity-20" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-cyan-100 rounded-full opacity-20" />
  </div>
);

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const fadeInProps: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services: Service[] = [
    { title: "מערכות מצלמות IP", icon: "Video", desc: "ניטור בזמן אמת ב-4K עם אנליטיקה חכמה וזיהוי פנים." },
    { title: "מערכות אזעקה", icon: "Bell", desc: "מיגון היקפי חכם עם שליטה מלאה מהנייד וחיבור למוקד." },
    { title: "בקרת כניסה", icon: "Lock", desc: "אינטרקום IP, זיהוי ביומטרי וניהול הרשאות כניסה מרחוק." },
    { title: "בית חכם PRO", icon: "Zap", desc: "אוטומציה מלאה למערכות חשמל, מיזוג ותאורה תחת ממשק אחד." },
    { title: "תשתיות תקשורת", icon: "Wifi", desc: "פתרונות רשת מתקדמים, WI-FI 6 ופריסת סיבים אופטיים." },
    { title: "גילוי אש ועשן", icon: "AlertTriangle", desc: "התקנה ותחזוקה לפי תקן 1220 לבטיחות מקסימלית." }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-cyan-100" dir="rtl">
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-50/40 via-transparent to-transparent" />
        <TechOverlay />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-2xl border-b border-cyan-100 px-6 md:px-20 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: 180 }} className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-200">
            <Icons.ShieldCheck className="text-white" size={24} />
          </motion.div>
          <div className="flex flex-col leading-none text-right">
            <span className="text-xl font-black text-slate-900 uppercase">Keisar</span>
            <span className="text-[9px] text-cyan-600 font-bold tracking-widest">SYSTEMS & PROTECTION</span>
          </div>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-cyan-600 transition-all">
          התחברות מערכת
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block px-4 py-1 rounded-md bg-cyan-100 text-cyan-700 text-[10px] font-black mb-6 tracking-tighter border border-cyan-200 uppercase">
            // Security Protocol v2.6 // Status: Ready
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter text-slate-900">
            הגנה שחושבת <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-blue-500">לפני כולם.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl md:text-2xl mb-12 font-medium leading-relaxed">
            קיסר מערכות מעצבת מחדש את גבולות הביטחון. טכנולוגיה עילית, התקנה נקייה ושקט נפשי שמתחיל מהפרט הקטן ביותר.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-200 flex items-center justify-center gap-2 group">
              ייעוץ טכנולוגי <Icons.ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              הפרויקטים שלנו
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const IconComp = Icons[s.icon] as React.ElementType;
              return (
                <motion.div
                  key={i}
                  {...fadeInProps}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, borderColor: "rgba(8, 145, 178, 0.3)" }}
                  className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm transition-all group"
                >
                  <div className="w-14 h-14 bg-white border border-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-8 shadow-inner group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-500">
                    <IconComp size={28} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section - "The Command Center" */}
      <section className="relative py-40 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeInProps}
            className="relative rounded-[40px] bg-slate-900 p-1 md:p-2 overflow-hidden shadow-2xl"
          >
            {/* Animated Command Lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[8px] text-cyan-400 p-4 leading-none">
              {Array(50).fill("INIT_CONNECTION... PING_SUCCESS... ENCRYPTING_DATA... ").join(" ")}
            </div>
            
            <div className="relative bg-white rounded-[36px] p-12 md:p-24 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-10 animate-bounce">
                <Icons.PhoneCall size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">מוכן לסנכרן אבטחה?</h2>
              <p className="text-slate-500 text-xl max-w-2xl mb-12 font-medium">
                המערכות שלנו מחכות לפקודה שלך. השאר פרטים ונציג טכני יבנה עבורך את פרוטוקול ההגנה המושלם.
              </p>
              
              <div className="w-full max-w-md flex flex-col gap-4">
                <div className="flex gap-2">
                  <input type="text" placeholder="שם מלא" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
                  <input type="text" placeholder="טלפון" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
                <button className="w-full bg-cyan-600 text-white font-black py-5 rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-cyan-100 tracking-widest uppercase text-sm">
                  שלח פקודת התקשרות
                </button>
              </div>
              
              <div className="mt-12 flex gap-8">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-2 h-2 bg-green-500 rounded-full" /> 24/7 Support Available
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" /> Verified Encryption
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
        © 2026 KEISAR PROTECTION // SECURED BY SHIELDUP AGENCY
      </footer>
    </main>
  );
}