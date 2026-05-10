"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Video, Flame, UserCheck, Share2, Cpu, Shield, Phone, Mail, MapPin, Send, Activity, ChevronLeft, Target, Scan, Eye, Radio } from 'lucide-react';

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
    { title: 'מתח נמוך', icon: <Zap />, desc: 'תכנון והקמת תשתיות תקשורת, חשמל חכם ולוחות פיקוד מתקדמים.', color: 'from-blue-400 to-cyan-500' },
    { title: 'גילוי אש', icon: <Flame />, desc: 'התקנת מערכות גילוי אש מצילות חיים בהתאם לתקן הישראלי 1220.', color: 'from-orange-400 to-red-500' },
    { title: 'בית חכם', icon: <Cpu />, desc: 'שליטה מלאה על התאורה, המיזוג והחשמל בממשק אחד פשוט מהנייד.', color: 'from-purple-400 to-indigo-500' },
    { title: 'בקרת כניסה', icon: <UserCheck />, desc: 'מערכות אינטרקום חכמות, זיהוי ביומטרי וניהול הרשאות כניסה.', color: 'from-green-400 to-emerald-500' },
    { title: 'סאונד', icon: <Share2 />, desc: 'תכנון מערכות שמע היקפיות, קולנוע ביתי ומערכות כריזה לעסקים.', color: 'from-pink-400 to-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-[#1c1f26] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 p-0 m-0 border-none" dir="rtl">
      
      {/* --- BACKGROUND ENGINE (לא נגעתי) --- */}
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
        <div className="flex justify-between items-center px-2 md:px-4">
          <div className="flex items-center gap-2 md:gap-3 text-white">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center text-[#1c1f26] shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Shield size={18} md:size={22} fill="currentColor" />
            </div>
            <span className="text-xl md:text-2xl font-[1000] tracking-tighter italic">קיסר מערכות</span>
          </div>
          <a href="#contact" className="bg-white text-black px-4 md:px-6 py-2 rounded-xl font-black text-xs md:text-sm hover:bg-cyan-500 transition-all uppercase tracking-widest">
            צור קשר
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION (Background ללא שינוי) --- */}
      <header className="relative min-h-screen flex items-center justify-center px-6 z-10 overflow-hidden pt-0 mt-0 border-none">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] left-[10%] text-cyan-400">
                <Video size={120} strokeWidth={0.5} />
                <div className="hidden md:block text-[10px] font-mono mt-2 bg-black/50 p-1">CAM_01: ACTIVE</div>
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[20%] right-[15%] text-red-500/50">
                <Radio size={100} strokeWidth={0.5} className="animate-pulse" />
                <div className="hidden md:block text-[10px] font-mono mt-2 bg-black/50 p-1">FIRE_DETECTOR: OK</div>
            </motion.div>
        </div>

        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-60 text-left">
            <div className="relative">
                <Scan className="text-cyan-500 animate-pulse" size={50} strokeWidth={1.5} />
                <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase animate-pulse">Scanning_Threats...</span>
                <div className="flex flex-col gap-1">
                    {[1, 2].map(i => (
                        <div key={i} className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div animate={{ x: [-130, 130] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }} className="w-10 h-full bg-cyan-500" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <motion.div style={{ x: mousePos.x * 25, y: mousePos.y * 25 }} className="text-center relative z-20">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
            <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-cyan-500/20 rounded-full animate-[spin_25s_linear_infinite]" />
          </div>

          <div className="flex justify-center gap-3 mb-4 md:mb-6 text-cyan-500">
             <Eye size={18} className="animate-bounce" />
             <span className="text-[10px] md:text-xs font-black tracking-[0.4em] md:tracking-[0.6em] uppercase italic">Smart_Detection_Systems</span>
          </div>

          <h1 className="text-5xl md:text-[140px] font-[1000] leading-[0.9] md:leading-[0.85] tracking-[-0.05em] italic uppercase">
            קיסר <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px md:2.5px #06b6d4' }}>מערכות.</span>
          </h1>

          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
            <p className="text-lg md:text-3xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed italic border-r-4 border-cyan-500 pr-4 md:pr-6 text-right">
              מהנדסים <span className="text-white font-bold underline decoration-cyan-500 decoration-2">ביטחון חכם</span>. מומחים במערכות מיגון וטכנולוגיית קצה.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 pt-4">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} 
                  className="w-full md:w-auto bg-cyan-500 text-black px-12 py-4 rounded-2xl font-[1000] text-lg md:text-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] uppercase italic"
                >
                  אפיון מערכת
                </button>
                <div className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-md text-xs md:text-sm font-bold">
                    <Activity size={18} className="text-cyan-500" />
                    <span>מענה טכני מיידי</span>
                </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* --- SERVICES SECTION (מונגש למובייל) --- */}
      <section className="relative py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto z-10">
        <h2 className="text-3xl md:text-4xl font-black italic mb-8 md:mb-12 border-b-2 border-cyan-500 pb-2 md:pb-4 inline-block">הפתרונות שלנו</h2>
        
        {/* Desktop View: Interactive Tabs */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                onClick={() => setActiveTab(i)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border flex items-center justify-between group ${activeTab === i ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeTab === i ? 'bg-black text-white' : 'bg-white/5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all'}`}>
                    {s.icon}
                  </div>
                  <span className="text-xl font-black italic">{s.title}</span>
                </div>
                <ChevronLeft className={`${activeTab === i ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
              </motion.div>
            ))}
          </div>
          <div className="lg:col-span-7 relative h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="absolute inset-0 bg-[#2a2f3a]/50 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 flex flex-col justify-center overflow-hidden">
                <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br ${services[activeTab].color} opacity-20 blur-[80px] rounded-full`} />
                <h3 className="text-5xl font-black italic mb-6 text-white leading-tight underline decoration-cyan-500 decoration-4">{services[activeTab].title}</h3>
                <p className="text-2xl text-slate-300 font-medium leading-relaxed max-w-xl italic">{services[activeTab].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View: Clean Grid Cards (מונע גלילה אינסופית) */}
        <div className="lg:hidden grid grid-cols-2 gap-3 md:gap-4">
          {services.map((s, i) => (
            <div key={i} className="bg-[#2a2f3a]/50 border border-white/10 p-4 rounded-2xl flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center">
                {React.cloneElement(s.icon, { size: 20 })}
              </div>
              <h3 className="text-sm font-black italic leading-tight">{s.title}</h3>
              <p className="text-[10px] text-slate-400 line-clamp-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION (מונגש למובייל) --- */}
      <section id="contact" className="relative py-16 md:py-32 px-4 md:px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="text-right">
              <h2 className="text-5xl md:text-7xl font-black italic mb-4 md:mb-6 leading-none">מוכנים <br /><span className="text-cyan-500 underline">להתמגן?</span></h2>
              <p className="text-slate-400 text-lg md:text-xl mb-8 md:mb-12 font-light italic">השאירו פרטים ונחזור אליכם עם הצעה מנצחת.</p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer pr-4 border-r-2 border-cyan-500">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400"><Phone size={20}/></div>
                  <span className="text-lg md:text-xl font-bold italic">050-0000000</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer pr-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400"><Mail size={20}/></div>
                  <span className="text-lg md:text-xl font-bold italic">office@keisar.co.il</span>
                </div>
              </div>
            </div>
            <div className="bg-[#2a2f3a]/50 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative">
              <div className="space-y-4 md:space-y-5">
                <input type="text" className="w-full bg-black/30 border border-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl outline-none focus:border-cyan-500 transition-all font-bold text-sm" placeholder="שם מלא" />
                <input type="tel" className="w-full bg-black/30 border border-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl outline-none focus:border-cyan-500 transition-all font-bold text-sm" placeholder="מספר טלפון" />
                <textarea rows={3} className="w-full bg-black/30 border border-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl outline-none focus:border-cyan-500 transition-all font-bold text-sm" placeholder="סוג המערכת..." />
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-cyan-500 text-black py-4 md:py-5 rounded-xl md:rounded-2xl font-[1000] text-lg md:text-xl italic shadow-xl flex items-center justify-center gap-3">
                  שלח נתונים
                  <Send size={18} className="rotate-180" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-black tracking-[0.5em] uppercase italic">Keisar Systems 2026</p>
      </footer>
    </div>
  );
}