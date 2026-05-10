"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Video, Bell, Smartphone, ChevronLeft, Lock, ShieldAlert } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services = [
    { 
      title: "מערכות מצלמות IP", 
      icon: <Video className="w-10 h-10" />, 
      desc: "צפייה מרחוק באיכות 4K עם טכנולוגיית זיהוי פנים וראיית לילה מתקדמת." 
    },
    { 
      title: "מערכות אזעקה חכמות", 
      icon: <ShieldAlert className="w-10 h-10" />, 
      desc: "הגנה היקפית לבית ולעסק עם חיבור ישיר למוקד ומניעת פריצות בזמן אמת." 
    },
    { 
      title: "אינטרקום ובקרת כניסה", 
      icon: <Lock className="w-10 h-10" />, 
      desc: "ניהול כניסות חכם דרך הסמארטפון, כולל קודנים ומערכות זיהוי ביומטריות." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#020203] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 py-5 flex justify-between items-center" dir="rtl">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <ShieldCheck className="text-white" size={24} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight">KEISAR</span>
            <span className="text-[10px] text-blue-500 font-bold tracking-[0.2em]">SECURITY SYSTEMS</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">בית</a>
          <a href="#" className="hover:text-white transition-colors">שירותים</a>
          <a href="#" className="hover:text-white transition-colors">פרויקטים</a>
          <a href="#" className="hover:text-white transition-colors">צור קשר</a>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-300">
          שיחת ייעוץ חינם
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center">
        {/* Ambient Background Light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold mb-6 tracking-widest"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          מערכות מיגון מהדור הבא
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
        >
          השקט שלך. <br />
          <span className="text-blue-600">המומחיות שלנו.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-2xl text-lg md:text-xl mb-12 leading-relaxed"
          dir="rtl"
        >
          קיסר מערכות מספקת פתרונות אבטחה מתקדמים למגזר הפרטי והעסקי. ממעגל סגור ועד בית חכם - אנחנו דואגים שתרגישו בטוחים 24/7.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row-reverse gap-4"
        >
          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20">
            קבל הצעת מחיר <ChevronLeft size={20} />
          </button>
          <button className="border border-white/10 bg-white/5 backdrop-blur-sm px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all">
            השירותים שלנו
          </button>
        </motion.div>
      </section>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.826 10.558c1.026 1.312 1.174 3.106.41 4.395L49.036 25.4a4.415 4.415 0 0 1-3.13 2.14l-11.455 1.48a4.415 4.415 0 0 1-3.923-2.14L24.328 14.953a4.415 4.415 0 0 1 .41-4.395L30.138 2.5a4.415 4.415 0 0 1 3.13-2.14l11.455-1.48a4.415 4.415 0 0 1 3.923 2.14l6.18 10.538z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
      />

      {/* Services Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto" dir="rtl">
        <motion.div {...fadeIn} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">מעטפת אבטחה מלאה</h2>
          <p className="text-gray-500 text-lg">כל מה שאתה צריך כדי לישון בשקט בלילה</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, border: "1px solid rgba(37, 99, 235, 0.5)" }}
              className="p-10 rounded-[32px] bg-gradient-to-b from-[#111] to-[#080808] border border-white/5 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <motion.div 
          {...fadeIn}
          className="max-w-5xl mx-auto rounded-[40px] bg-blue-600 p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          
          <div className="text-right flex-1" dir="rtl">
            <h2 className="text-3xl md:text-5xl font-black mb-6">רוצה להגן על הבית שלך עוד היום?</h2>
            <p className="text-blue-100 text-xl">השאר פרטים ונחזור אליך עם הצעה מנצחת.</p>
          </div>
          
          <button className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
            דבר איתנו
          </button>
        </motion.div>
      </section>

      <footer className="py-12 text-center text-gray-600 border-t border-white/5 text-sm tracking-widest">
        © 2026 KEISAR SECURITY SYSTEMS | DEVELOPED BY SHIELDUP AGENCY
      </footer>
    </main>
  );
}