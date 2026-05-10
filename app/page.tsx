"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import * as Icons from "lucide-react";

// קומפוננטת רקע שלא נותנת לשום דבר להיות "לבן משעמם"
const DynamicTechBackground = () => (
  <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#dbeafe]">
    {/* רשת טכנולוגית */}
    <div 
      className="absolute inset-0 opacity-[0.2]" 
      style={{ 
        backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, 
        backgroundSize: '30px 30px' 
      }} 
    />
    
    {/* צורות אמורפיות זזות - נותן תחושה של "חיים" ברקע */}
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ duration: 20, repeat: Infinity }}
      className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cyan-200 blur-[120px] rounded-full"
    />
    
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        rotate: [0, -90, 0],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 25, repeat: Infinity }}
      className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-300 blur-[120px] rounded-full"
    />
  </div>
);

export default function Home() {
  const fadeIn: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const services = [
    { title: "מערכות מצלמות IP", icon: "Video", desc: "הגנה היקפית ב-4K עם אנליטיקה מתקדמת." },
    { title: "מערכות אזעקה", icon: "Bell", desc: "מיגון חכם לבית ולעסק עם חיבור למוקד." },
    { title: "אינטרקום ובקרת כניסה", icon: "Smartphone", desc: "פתיחת דלתות מהנייד וניהול הרשאות ביומטרי." },
    { title: "בית חכם", icon: "Zap", desc: "שליטה מלאה על חשמל ותאורה בממשק אחד." },
    { title: "תשתיות תקשורת", icon: "Wifi", desc: "רשתות אלחוטיות עוצמתיות ופריסת סיבים." },
    { title: "גילוי אש ועשן", icon: "ShieldAlert", desc: "התקנת מערכות מצילות חיים ע\"פ תקן 1220." }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden" dir="rtl">
      <DynamicTechBackground />

      {/* Navbar צף */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 flex justify-between items-center shadow-2xl shadow-blue-500/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <Icons.ShieldCheck className="text-white" size={24} />
          </div>
          <span className="text-xl font-black text-blue-900 italic tracking-tighter">KEISAR SYSTEMS</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all">
          ייעוץ חינם
        </button>
      </nav>

      {/* Hero */}
      <section className="relative pt-60 pb-32 px-6 z-10 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black text-blue-950 leading-[0.85] tracking-tighter mb-8">
            ביטחון חכם. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-400">בעולם דיגיטלי.</span>
          </h1>
          <p className="text-blue-900/60 text-2xl font-bold max-w-2xl mx-auto mb-12">
            אנחנו לא רק מוכרים ציוד, אנחנו מתכננים את השקט הנפשי שלך עם הטכנולוגיה המתקדמת ביותר בישראל.
          </p>
          <button className="bg-white text-blue-600 border-2 border-blue-100 px-14 py-6 rounded-3xl font-black text-2xl shadow-xl hover:bg-blue-50 transition-all">
            בוא נתחיל פרויקט
          </button>
        </motion.div>
      </section>

      {/* Services - כרטיסיות שקופות (Glassmorphism) */}
      <section className="relative py-32 px-6 z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const IconComp = Icons[s.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                className="p-10 rounded-[40px] bg-white/40 backdrop-blur-md border border-white/40 shadow-lg shadow-blue-200/20 group"
              >
                <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <IconComp size={32} />
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer עתידני */}
      <footer className="relative py-20 text-center z-10 border-t border-blue-100">
        <p className="text-blue-900/30 font-black text-xs tracking-[0.5em] uppercase">
          Keisar Protection // Systems Protocol 2026 // ShieldUp
        </p>
      </footer>
    </main>
  );
}