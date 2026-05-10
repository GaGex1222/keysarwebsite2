"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Video, Flame, UserCheck, Share2, Cpu, Shield, Phone, Mail, MapPin, Send, Activity, ChevronLeft, Target, Scan, Eye, Radio, ChevronDown } from 'lucide-react';

export default function KeisarFinalClean() {
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
    { title: 'מערכות מתח נמוך', icon: <Zap />, desc: 'תכנון והקמת תשתיות תקשורת, חשמל חכם ולוחות פיקוד מתקדמים.', color: 'from-blue-400 to-cyan-500' },
    { title: 'גילוי אש ועשן', icon: <Flame />, desc: 'התקנת מערכות גילוי אש מצילות חיים בהתאם לתקן הישראלי 1220.', color: 'from-orange-400 to-red-500' },
    { title: 'בית חכם', icon: <Cpu />, desc: 'שליטה מלאה על התאורה, המיזוג והחשמל בממשק אחד פשוט מהנייד.', color: 'from-purple-400 to-indigo-500' },
    { title: 'בקרת כניסה', icon: <UserCheck />, desc: 'מערכות אינטרקום חכמות, זיהוי ביומטרי וניהול הרשאות כניסה.', color: 'from-green-400 to-emerald-500' },
    { title: 'סאונד וקולנוע', icon: <Share2 />, desc: 'תכנון מערכות שמע היקפיות, קולנוע ביתי ומערכות כריזה לעסקים.', color: 'from-pink-400 to-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-[#1c1f26] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 p-0 m-0 border-none" dir="rtl">
      
      {/* --- BACKGROUND ENGINE --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:30px_30px]" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }} 
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-cyan-600/20 blur-[150px] rounded-full" 
        />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-[#1c1f26] shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Shield size={22} fill="currentColor" />
            </div>
            <span className="text-2xl font-[1000] tracking-tighter italic">קיסר מערכות</span>
          </div>
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-xl font-black text-sm hover:bg-cyan-500 transition-all uppercase tracking-widest">
            צור קשר
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center px-6 z-10 overflow-hidden pt-12 border-none">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] left-[10%] text-cyan-400">
                <Video size={120} strokeWidth={0.5} />
                <div className="text-[10px] font-mono mt-2 bg-black/50 p-1">CAM_01: ACTIVE</div>
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[20%] right-[15%] text-red-500/50">
                <Radio size={100} strokeWidth={0.5} className="animate-pulse" />
                <div className="text-[10px] font-mono mt-2 bg-black/50 p-1">FIRE_DETECTOR: OK</div>
            </motion.div>
        </div>

        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-60 text-left">
            <div className="relative">
                <Scan className="text-cyan-500 animate-pulse" size={50} strokeWidth={1.5} />
                <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
            </div>
        </div>

        <motion.div style={{ x: mousePos.x * 25, y: mousePos.y * 25 }} className="text-center relative z-20 flex flex-col items-center w-full max-w-6xl">
          
          {/* --- LARGE LOGO CONTAINER --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 md:w-[450px] md:h-[450px] mb-8 group"
          >
            {/* טבעות היקפיות ענקיות */}
            <div className="absolute inset-[-20px] border border-cyan-500/10 rounded-[4rem] animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-[3.5rem] animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* מכולת הלוגו המרכזית */}
            <div className="absolute inset-4 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(6,182,212,0.2)] flex items-center justify-center p-12 overflow-hidden">
              <img 
                src="/keisar systems.jpg" 
                alt="Keisar Systems Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]"
              />
              {/* אפקט סריקה מוגדל */}
              <motion.div 
                animate={{ top: ['-10%', '110%'] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                className="absolute left-0 w-full h-1.5 bg-cyan-400/50 blur-md z-30" 
              />
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mb-4 text-cyan-500">
             <Eye size={20} className="animate-bounce" />
             <span className="text-sm font-[900] tracking-[0.8em] uppercase italic">Intelligence_In_Defense</span>
          </div>

          <h1 className="text-6xl md:text-[110px] font-[1000] leading-[0.85] tracking-[-0.05em] italic uppercase">
            קיסר <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>מערכות.</span>
          </h1>

          <div className="mt-8 space-y-8 w-full max-w-4xl">
            <p className="text-lg md:text-3xl text-slate-300 font-light leading-relaxed italic border-r-4 border-cyan-500 pr-6 text-right">
              מהנדסים <span className="text-white font-bold underline decoration-cyan-500 decoration-2">ביטחון חכם</span>. מומחים במערכות מיגון, מתח נמוך וטכנולוגיית קצה.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-4">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} 
                  className="bg-cyan-500 text-black px-16 py-5 rounded-2xl font-[1000] text-2xl hover:bg-white transition-all shadow-[0_0_40px_rgba(6,182,212,0.5)] uppercase italic"
                >
                  אפיון מערכת
                </button>
                <div className="flex items-center gap-4 bg-white/5 px-8 py-5 rounded-2xl border border-white/10 backdrop-blur-md text-sm font-bold uppercase tracking-widest">
                    <Activity size={20} className="text-cyan-500" />
                    <span>Systems_Online</span>
                </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* --- SERVICES SECTION --- */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto z-10">
        <div className="text-center lg:text-right mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic border-r-8 border-cyan-500 pr-6 inline-block">הפתרונות שלנו</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(i)}
                className={`flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] cursor-pointer transition-all border-2 aspect-square ${activeTab === i ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
              >
                <div className={`mb-4 transition-transform duration-300 ${activeTab === i ? 'scale-125' : ''}`}>
                  {React.cloneElement(s.icon, { size: 40 })}
                </div>
                <span className="text-base md:text-xl font-black italic leading-tight">{s.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#2a2f3a]/50 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 min-h-[350px] flex flex-col justify-center relative overflow-hidden"
              >
                <div className={`absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-br ${services[activeTab].color} opacity-20 blur-[80px] rounded-full`} />
                
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center">
                      {React.cloneElement(services[activeTab].icon, { size: 36 })}
                   </div>
                   <h3 className="text-4xl md:text-6xl font-black italic text-white">
                     {services[activeTab].title}
                   </h3>
                </div>

                <p className="text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed italic relative z-10">
                  {services[activeTab].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black italic mb-8 leading-none">מוכנים <br /><span className="text-cyan-500 underline decoration-8">להתמגן?</span></h2>
              <p className="text-slate-400 text-2xl mb-12 font-light italic">השאירו פרטים ונחזור אליכם עם הצעה מנצחת.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer pr-6 border-r-4 border-cyan-500 transition-all hover:pr-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all"><Phone size={28} /></div>
                  <span className="text-2xl font-bold italic tracking-wider">050-0000000</span>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer pr-6 transition-all hover:pr-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all"><Mail size={28} /></div>
                  <span className="text-2xl font-bold italic">office@keisar.co.il</span>
                </div>
              </div>
            </div>
            <div className="bg-[#2a2f3a]/50 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-[4rem] shadow-2xl relative">
              <div className="space-y-6">
                <input type="text" className="w-full bg-black/40 border border-white/5 p-6 rounded-2xl outline-none focus:border-cyan-500 transition-all font-bold text-xl placeholder:text-slate-600" placeholder="שם מלא" />
                <input type="tel" className="w-full bg-black/40 border border-white/5 p-6 rounded-2xl outline-none focus:border-cyan-500 transition-all font-bold text-xl placeholder:text-slate-600" placeholder="מספר טלפון" />
                <textarea rows={4} className="w-full bg-black/40 border border-white/5 p-6 rounded-2xl outline-none focus:border-cyan-500 transition-all font-bold text-xl placeholder:text-slate-600" placeholder="סוג המערכת..." />
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-cyan-500 text-black py-6 rounded-2xl font-[1000] text-2xl italic shadow-2xl hover:bg-white transition-all flex items-center justify-center gap-4">
                  שלח נתונים
                  <Send size={24} className="rotate-180" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center border-t border-white/5 bg-black/20">
        <p className="text-slate-500 text-xs font-black tracking-[0.8em] uppercase italic">Keisar Systems Protocol 2026</p>
      </footer>
    </div>
  );
}