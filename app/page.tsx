"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Zap, ChevronRight, Lock, BarChart3 } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { title: "אסטרטגיה שיווקית", icon: <Target className="w-8 h-8" />, desc: "בניית תוכנית עבודה מותאמת אישית לנישת הביטחון." },
    { title: "ניהול קמפיינים", icon: <BarChart3 className="w-8 h-8" />, desc: "מיקסום לידים איכותיים בעלויות נמוכות." },
    { title: "אוטומציה עסקית", icon: <Zap className="w-8 h-8" />, desc: "מערכות חכמות שעובדות בשבילך 24/7." }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          KEISAR <span className="text-white/50 text-sm font-light">SYSTEMS</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
          שיחת ייעוץ
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial="initial" animate="animate" variants={fadeIn}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs mb-8"
        >
          <Lock size={14} /> ELITE ENGINEERING SOLUTIONS
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none"
        >
          ביטחון. <br />
          <span className="text-blue-500">ללא פשרות.</span>
        </motion.h1>

        <motion.p 
          {...fadeIn}
          className="text-gray-400 max-w-2xl text-lg md:text-xl mb-10 leading-relaxed"
        >
          קיסר מערכות מעצבת את עתיד המיגון והמתח הנמוך. אנחנו הופכים טכנולוגיה מורכבת לביטחון פשוט ושקט עבורכם.
        </motion.p>

        <motion.div 
          {...fadeIn}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all group">
            התחילו פרויקט עכשיו <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
            צפו בתיק עבודות
          </button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "לקוחות מרוצים", val: "500+" },
            { label: "שנות ניסיון", val: "12" },
            { label: "פרויקטים", val: "1.2k" },
            { label: "זמינות", val: "24/7" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white">{stat.val}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center italic">השירותים שלנו</h2>
        <div className="grid md:grid-cols-3 gap-8 text-right" dir="rtl">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/50 transition-all"
            >
              <div className="text-blue-500 mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 border-t border-white/5">
        © 2026 KEISAR SYSTEMS. All Rights Reserved.
      </footer>
    </main>
  );
}