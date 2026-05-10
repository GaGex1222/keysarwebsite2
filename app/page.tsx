"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import * as Icons from "lucide-react";

// קומפוננטת רקע: "מערכת הפעלה בטחונית"
const FuturisticBackground = () => (
  <div className="fixed inset-0 z-0 bg-[#e0f2fe]">
    {/* רשת הנדסית צפופה */}
    <div 
      className="absolute inset-0 opacity-[0.1]" 
      style={{ 
        backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)`, 
        backgroundSize: '30px 30px' 
      }} 
    />
    
    {/* אלמנטים של קוד ונתונים רצים בצדדים (נראה כמו HUD) */}
    <div className="absolute top-20 left-10 text-[10px] font-mono text-blue-400 opacity-40 rotate-90 pointer-events-none">
      {Array(10).fill("TRACE_IP: 192.168.1.102 // SECURE_LINK: ACTIVE").join(" ")}
    </div>
    
    {/* הילות אור כחולות שזזות לאט */}
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-cyan-300 blur-[150px] rounded-full"
    />
  </div>
);

export default function Home() {
  const fadeIn: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services = [
    { title: "מערכות מצלמות AI", icon: "Video", desc: "זיהוי פנים ואובייקטים בזמן אמת ברזולוציית 4K." },
    { title: "מערכות אזעקה", icon: "Bell", desc: "הגנה היקפית חכמה עם חיבור ישיר למוקד מבצעי." },
    { title: "אינטרקום ובקרת כניסה", icon: "Smartphone", desc: "ניהול הרשאות ביומטרי ופתיחה מרחוק מהנייד." },
    { title: "בית חכם (Smart Home)", icon: "Zap", desc: "שליטה מלאה על תשתיות החשמל והמיזוג במקום אחד." },
    { title: "תשתיות תקשורת", icon: "Wifi", desc: "פריסת סיבים אופטיים ורשתות אלחוטיות עוצמתיות." },
    { title: "גילוי אש ועשן", icon: "ShieldAlert", desc: "התקנת מערכות מצילות חיים ע\"פ תקן 1220." }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden" dir="rtl">
      <FuturisticBackground />

      {/* Navbar עתידני מואר */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-white/40 backdrop-blur-2xl border border-white/30 rounded-2xl px-8 py-5 flex justify-between items-center shadow-2xl shadow-blue-500/20">
        <div className="flex items-center gap-4">
          <motion.div 
            animate={{ rotate: [0, 180, 360] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-400"
          >
            <Icons.ShieldCheck className="text-white" size={28} />
          </motion.div>
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-black text-blue-950 italic tracking-tighter">KEISAR SYSTEMS</span>
            <span className="text-[9px] font-bold text-blue-500 tracking-[0.2em] uppercase">Security Architecture</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full text-sm font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-400/30">
          כניסת מורשים
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-32 px-6 z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="inline-block px-4 py-1.5 rounded-md bg-blue-100 text-blue-600 text-[10px] font-bold mb-8 border border-blue-200 uppercase tracking-widest">
            // Intelligence Protocol Active
          </div>
          <h1 className="text-7xl md:text-[140px] font-black text-blue-950 leading-[0.8] tracking-tighter mb-10">
            הגנה <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-400 drop-shadow-sm">ללא גבולות.</span>
          </h1>
          <p className="text-blue-900/60 text-2xl font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
            קיסר מערכות מעצבת את עתיד הביטחון בישראל. אנחנו משלבים הנדסה מדויקת עם טכנולוגיה עילית כדי להעניק לך שקט נפשי אבסולוטי.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 text-white px-16 py-6 rounded-3xl font-black text-2xl shadow-2xl shadow-blue-400/40 hover:bg-blue-700 transition-all flex items-center gap-3">
              אבחון בטחוני חינם <Icons.ChevronLeft size={30} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid - Glassmorphism */}
      <section id="services" className="relative py-32 px-6 z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => {
            const IconComp = Icons[s.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="p-12 rounded-[50px] bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl shadow-blue-500/5 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                <div className="w-20 h-20 bg-white border border-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <IconComp size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-black text-blue-950 mb-6 tracking-tight italic">{s.title}</h3>
                <p className="text-blue-900/70 text-lg font-medium leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Box - Dashboard Style */}
      <section className="relative py-40 px-6 z-10">
        <div className="max-w-6xl mx-auto rounded-[60px] bg-blue-950 p-1 md:p-3 shadow-2xl relative">
            <div className="absolute top-6 left-10 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="bg-white rounded-[55px] p-16 md:p-32 text-center">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-10 mx-auto animate-pulse">
                    <Icons.Zap size={48} />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-blue-950 mb-8 tracking-tighter">הגיע הזמן להתקדם.</h2>
                <p className="text-blue-900/50 text-2xl font-medium mb-12">השאירו פרטים לסנכרון מערכות ביוזמתכם.</p>
                <button className="bg-blue-600 text-white px-20 py-7 rounded-[35px] font-black text-2xl shadow-2xl shadow-blue-200 hover:bg-blue-950 transition-all">
                    שלח פקודת התקשרות
                </button>
            </div>
        </div>
      </section>

      <footer className="relative py-20 text-center z-10 border-t border-blue-200">
        <p className="text-blue-900/30 font-black text-xs tracking-[0.6em] uppercase">
          Keisar Elite Defense // Protocol 2026 // ShieldUp Agency
        </p>
      </footer>
    </main>
  );
}