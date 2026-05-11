"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, BarChart3, ShieldCheck, ChevronDown, Package, Zap, Cpu, ArrowLeft } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden" dir="rtl">
      {/* --- SCANLINE EFFECT --- */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" 
           style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 255, 255, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }} />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-3 text-cyan-500 mb-8 px-4 py-2 bg-cyan-500/5 rounded-full border border-cyan-500/20">
            <BarChart3 size={20} />
            <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase italic">System_Pricing_Protocol_2026</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-[1000] italic leading-[0.85] tracking-tighter uppercase mb-10 text-white">
            מחירון <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>מתקין.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-300 max-w-2xl italic font-light leading-relaxed mb-12 border-b-2 border-cyan-500/30 pb-8">
            כל הפתרונות, הציוד והתשתיות במקום אחד. <br/>
            <span className="text-cyan-500 font-bold">מעודכן לרבעון הנוכחי (2026).</span>
          </p>

          {/* MAIN DOWNLOAD BUTTON */}
          <a 
            href="https://alsec.co.il/wp-content/uploads/%D7%9E%D7%97%D7%99%D7%A8%D7%95%D7%9F-%D7%9E%D7%AA%D7%A7%D7%99%D7%A0%D7%99%D7%9D-%D7%9E%D7%A2%D7%95%D7%93%D7%9B%D7%9F-1-1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center gap-6 bg-cyan-500 text-black px-12 py-8 rounded-[2rem] font-[1000] text-3xl italic w-full sm:w-auto"
            >
              <Download size={36} className="animate-bounce" />
              לחצו להורדת המחירון
              <div className="absolute inset-0 rounded-[2rem] border-2 border-white/40 scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all" />
            </motion.button>
          </a>
        </motion.div>

        {/* --- CONTENT PREVIEW SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
          {[
            { icon: <Package />, title: "חומרה וציוד", desc: "מצלמות IP, מקליטים (NVR) וכרטיסי זיכרון" },
            { icon: <Zap />, title: "תשתיות מתח", desc: "כבילה, ספקי כוח וארונות תקשורת" },
            { icon: <Cpu />, title: "פתרונות AI", desc: "תוכנות אנליטיקה ורישיונות זיהוי פנים" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-cyan-500/50 transition-colors"
            >
              <div className="text-cyan-500 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-black italic mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- INFO / AD SECTION --- */}
        <div className="mt-32 w-full max-w-3xl bg-gradient-to-br from-[#2a2f3a] to-transparent p-12 rounded-[4rem] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 p-8 opacity-5 text-8xl font-black italic select-none">INFO</div>
          <h2 className="text-4xl font-black italic mb-6">צריך הצעה מותאמת אישית?</h2>
          <p className="text-slate-300 italic text-lg mb-8 leading-relaxed">
            המחירון נותן אינדיקציה כללית, אך לכל פרויקט יש את המורכבות שלו. המומחים שלנו מחכים לעזור לך לבנות את המעטפת המדויקת ביותר.
          </p>
        </div>

        {/* Footer Trust Bar */}
        <div className="mt-32 flex flex-wrap justify-center items-center gap-8 md:gap-12 py-10 border-t border-white/5 opacity-50 w-full">
          {[
            "Authorized_Dealer",
            "Certified_Equipment",
            "Official_Warranty"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 font-black italic uppercase text-[10px] md:text-xs">
              <ShieldCheck className="text-cyan-500" size={16} /> {text}
            </div>
          ))}
        </div>

      </main>

      <footer className="py-12 text-center text-slate-600 border-t border-white/5">
        <p className="text-[10px] font-black tracking-[0.6em] uppercase italic">
          Keisar Systems // 2026 // Security Architecture
        </p>
      </footer>
    </div>
  );
}