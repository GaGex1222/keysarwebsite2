"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Video, Flame, UserCheck, Share2, Cpu, Shield, Phone, Mail, Send, Activity, ChevronLeft, Scan, Eye, Radio } from 'lucide-react';

export default function KeisarMobileOptimized() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    { title: 'מיגון ואבטחה', icon: <Video />, desc: 'מערכות מצלמות במעגל סגור (CCTV) עם ניתוח וידאו מבוסס AI וזיהוי פנים.', color: 'from-cyan-400 to-teal-500' },
    { title: 'מתח נמוך', icon: <Zap />, desc: 'תכנון והקמת תשתיות תקשורת, חשמל חכם ולוחות פיקוד מתקדמים.', color: 'from-blue-400 to-cyan-500' },
    { title: 'גילוי אש', icon: <Flame />, desc: 'התקנת מערכות גילוי אש מצילות חיים בהתאם לתקן הישראלי 1220.', color: 'from-orange-400 to-red-500' },
    { title: 'בית חכם', icon: <Cpu />, desc: 'שליטה מלאה על התאורה, המיזוג והחשמל בממשק אחד פשוט מהנייד.', color: 'from-purple-400 to-indigo-500' },
    { title: 'בקרת כניסה', icon: <UserCheck />, desc: 'מערכות אינטרקום חכמות, זיהוי ביומטרי וניהול הרשאות כניסה.', color: 'from-green-400 to-emerald-500' },
    { title: 'סאונד', icon: <Share2 />, desc: 'תכנון מערכות שמע היקפיות, קולנוע ביתי ומערכות כריזה לעסקים.', color: 'from-pink-400 to-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-[#1c1f26] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 p-0 m-0 border-none" dir="rtl">
      
      {/* --- BACKGROUND ENGINE --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:30px_30px]" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }} 
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-cyan-600/20 blur-[80px] md:blur-[150px] rounded-full" 
        />
      </div>

      {/* --- NAVIGATION (CLEAN - NO BAR) --- */}
      <nav className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-5xl">
        <div className="flex justify-between items-center px-4 md:px-8 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <Shield size={18} fill="currentColor" />
            </div>
            <span className="text-lg md:text-2xl font-[1000] tracking-tighter italic uppercase">קיסר מערכות</span>
          </div>
          <a href="#contact" className="bg-white text-black px-4 md:px-6 py-2 rounded-lg font-black text-xs md:text-sm hover:bg-cyan-500 transition-all">צור קשר</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center px-4 z-10 pt-0">
        <motion.div style={{ x: mousePos.x * 15, y: mousePos.y * 15 }} className="text-center relative z-20 w-full">
          <div className="flex justify-center gap-2 mb-4 text-cyan-500">
             <Eye size={16} className="animate-bounce" />
             <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase italic">Smart_Detection_Systems</span>
          </div>

          <h1 className="text-6xl md:text-[140px] font-[1000] leading-[0.9] italic uppercase">
            קיסר <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>מערכות.</span>
          </h1>

          <div className="mt-8 space-y-6">
            <p className="text-lg md:text-3xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed italic border-r-2 border-cyan-500 pr-4 text-right">
              מהנדסים <span className="text-white font-bold underline decoration-cyan-500 decoration-2">ביטחון חכם</span>. מומחים במיגון וטכנולוגיית קצה.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 px-4">
                <button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="bg-cyan-500 text-black px-10 py-4 rounded-xl font-[1000] text-lg hover:bg-white transition-all shadow-xl italic uppercase">אפיון מערכת</button>
                <div className="flex items-center justify-center gap-3 bg-white/5 px-6 py-4 rounded-xl border border-white/10 backdrop-blur-md text-xs font-bold"><Activity size={16} className="text-cyan-500" /><span>מענה טכני מיידי</span></div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* --- SERVICES SECTION (MOBILE SLIDER) --- */}
      <section className="relative py-20 px-4 md:px-6 max-w-7xl mx-auto z-10">
        <h2 className="text-3xl font-black italic mb-8 border-b-2 border-cyan-500 pb-2 inline-block">הפתרונות שלנו</h2>
        
        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-12 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x no-scrollbar">
          
          {/* Tabs Menu - Hidden on Mobile, Sidebar on Desktop */}
          <div className="hidden md:flex md:col-span-4 flex-col gap-3">
            {services.map((s, i) => (
              <div key={i} onClick={() => setActiveTab(i)} className={`p-5 rounded-xl cursor-pointer border transition-all flex items-center justify-between ${activeTab === i ? 'bg-cyan-500 border-cyan-400 text-black' : 'bg-white/5 border-white/5 hover:border-white/20'}`}>
                <div className="flex items-center gap-3">
                    {React.cloneElement(s.icon, { size: 20 })}
                    <span className="font-black italic">{s.title}</span>
                </div>
                <ChevronLeft size={16} className={activeTab === i ? 'opacity-100' : 'opacity-0'} />
              </div>
            ))}
          </div>

          {/* Slider for Mobile / Content for Desktop */}
          <div className="flex md:block md:col-span-8 gap-4 w-full">
            {/* Mobile View: All Cards as Slides */}
            <div className="md:hidden flex gap-4">
              {services.map((s, i) => (
                <div key={i} className="min-w-[85vw] snap-center bg-[#2a2f3a]/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden h-[300px] flex flex-col justify-center">
                   <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${s.color} opacity-20 blur-3xl rounded-full`} />
                   <div className="text-cyan-400 mb-4">{s.icon}</div>
                   <h3 className="text-2xl font-black italic mb-3">{s.title}</h3>
                   <p className="text-slate-300 text-sm leading-relaxed font-medium italic">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Desktop View: Active Tab Content */}
            <div className="hidden md:block h-full min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-[#2a2f3a]/50 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 h-full flex flex-col justify-center relative overflow-hidden">
                   <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br ${services[activeTab].color} opacity-20 blur-[80px] rounded-full`} />
                   <h3 className="text-5xl font-black italic mb-6 underline decoration-cyan-500 decoration-4">{services[activeTab].title}</h3>
                   <p className="text-2xl text-slate-300 font-medium leading-relaxed italic max-w-xl">{services[activeTab].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex justify-center gap-2 mt-4 opacity-50">
           {services.map((_, i) => (
             <div key={i} className={`h-1 rounded-full transition-all ${activeTab === i ? 'w-6 bg-cyan-500' : 'w-2 bg-white/20'}`} />
           ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h2 className="text-5xl md:text-7xl font-black italic mb-6">מוכנים <br /><span className="text-cyan-500 underline">להתמגן?</span></h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 pr-4 border-r-2 border-cyan-500"><Phone size={20} className="text-cyan-400"/><span className="text-xl font-bold">050-0000000</span></div>
              <div className="flex items-center gap-4 pr-4 border-r-2 border-transparent"><Mail size={20} className="text-cyan-400"/><span className="text-xl font-bold italic underline">office@keisar.co.il</span></div>
            </div>
          </div>
          <div className="bg-[#2a2f3a]/50 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-[2rem] shadow-2xl">
            <div className="space-y-4">
              <input type="text" className="w-full bg-black/30 border border-white/5 p-4 rounded-xl outline-none focus:border-cyan-500 transition-all font-bold" placeholder="שם מלא" />
              <input type="tel" className="w-full bg-black/30 border border-white/5 p-4 rounded-xl outline-none focus:border-cyan-500 transition-all font-bold" placeholder="מספר טלפון" />
              <textarea rows={3} className="w-full bg-black/30 border border-white/5 p-4 rounded-xl outline-none focus:border-cyan-500 transition-all font-bold" placeholder="סוג המערכת..." />
              <button className="w-full bg-cyan-500 text-black py-4 rounded-xl font-[1000] text-lg italic shadow-xl flex items-center justify-center gap-3">שלח נתונים<Send size={18} className="rotate-180" /></button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-white/5 opacity-50">
        <p className="text-[10px] font-black tracking-[0.3em] uppercase italic">Keisar Systems 2026 // Security Excellence</p>
      </footer>

      {/* Tailwind CSS Hide Scrollbar Class */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}