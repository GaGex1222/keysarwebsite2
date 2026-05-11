"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Video, Flame, UserCheck, Share2, Cpu, 
  Phone, Mail, Activity, ChevronLeft, Eye,
  ShieldCheck, Clock, Award, Target, ZapOff, Hexagon
} from 'lucide-react';

export default function KeisarProWebsite() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { title: 'מיגון ואבטחה', icon: <Video />, desc: 'מערכות מצלמות במעגל סגור (CCTV) עם ניתוח וידאו מבוסס AI וזיהוי פנים.' },
    { title: 'מערכות מתח נמוך', icon: <Zap />, desc: 'תכנון והקמת תשתיות תקשורת, חשמל חכם ולוחות פיקוד מתקדמים.' },
    { title: 'גילוי אש ועשן', icon: <Flame />, desc: 'התקנת מערכות גילוי אש מצילות חיים בהתאם לתקן הישראלי 1220.' },
    { title: 'בית חכם', icon: <Cpu />, desc: 'שליטה מלאה על התאורה, המיזוג והחשמל בממשק אחד פשוט מהנייד.' },
    { title: 'בקרת כניסה', icon: <UserCheck />, desc: 'מערכות אינטרקום חכמות, זיהוי ביומטרי וניהול הרשאות כניסה.' },
    { title: 'סאונד וקולנוע', icon: <Share2 />, desc: 'תכנון מערכות שמע היקפיות, קולנוע ביתי ומערכות כריזה לעסקים.' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#0f1115] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden w-full">
      {/* --- SCANLINE OVERLAY --- */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" 
           style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 255, 255, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }} />

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden text-center">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        <motion.div style={{ x: mousePos.x * 20, y: mousePos.y * 20 }} className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* --- LOGO ARCHITECTURE --- */}
<div className="relative mb-12 group">
  {/* HUD Animated Visuals */}
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="absolute -inset-12 border border-cyan-500/10 rounded-full"
  />
  <motion.div 
    animate={{ rotate: -360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute -inset-8 border border-cyan-500/20 rounded-[3rem] border-dashed"
  />
  
  {/* Image Container */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 bg-[#1a1d23] rounded-[2.5rem] p-1 shadow-2xl shadow-cyan-500/20 overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              
              {/* REPLACE THE SRC BELOW WITH YOUR LOGO/IMAGE PATH */}
              <img 
                src="/keisar_systems-removebg-preview.png" 
                alt="Keisar Systems Logo" 
                className="w-full h-full object-cover rounded-[2.3rem] transition-transform duration-700 group-hover:scale-110"
              />

              {/* Decorative HUD Elements on Image */}
              <div className="absolute top-4 right-4 z-20 flex gap-1">
                <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping" />
                <div className="w-1 h-1 bg-cyan-500 rounded-full opacity-50" />
              </div>
            </div>

            {/* Outer Corner Brackets */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500/40 rounded-br-xl" />
          </div>

          <div className="text-cyan-500 mb-6 flex justify-center items-center gap-3">
            <div className="hidden sm:block h-[1px] w-8 bg-cyan-500/30" />
            <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase italic">Keisar_Systems_Intelligence</span>
            <div className="hidden sm:block h-[1px] w-8 bg-cyan-500/30" />
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-[140px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-8">
            קיסר <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>מערכות.</span>
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto italic font-light leading-relaxed border-r-4 border-cyan-500 pr-4 sm:pr-6 text-right mb-12">
            הדור הבא של אבטחה וטכנולוגיה. תכנון והקמת מערכות מתח נמוך ומיגון חכם לעסקים ולפרטיים.
          </p>

          <button 
            onClick={scrollToContact}
            className="w-full max-w-xs sm:w-auto bg-cyan-500 text-black px-16 py-6 rounded-2xl font-black text-2xl italic shadow-[0_20px_50px_rgba(6,182,212,0.3)] hover:bg-white hover:shadow-white/20 transition-all transform hover:-translate-y-2 active:scale-95 z-20"
          >
            בואו נתחיל
          </button>
        </motion.div>
      </header>

      {/* --- STATS STRIP --- */}
      <section className="py-16 bg-black/50 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {[
            { label: 'INSTALLED_UNITS', val: '4,800+', icon: <ShieldCheck size={14}/> },
            { label: 'RESPONSE_TIME', val: '0.4ms', icon: <Clock size={14}/> },
            { label: 'AI_ACCURACY', val: '99.9%', icon: <Target size={14}/> },
            { label: 'SATISFACTION', val: '100%', icon: <Award size={14}/> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="text-cyan-500 font-mono text-[9px] mb-2 tracking-[0.1em] flex items-center gap-2">
                {stat.icon} {stat.label}
              </div>
              <p className="text-4xl sm:text-5xl font-black italic group-hover:text-cyan-400 transition-colors tracking-tighter">
                {stat.val}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-right">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black italic leading-none">הפתרונות <br/><span className="text-cyan-500">שלנו.</span></h2>
          <p className="text-slate-400 max-w-sm italic font-bold border-r-2 md:border-r-0 md:border-l-2 border-cyan-500 pr-4 md:pr-0 md:pl-4">מערכות הגנה חכמות המותאמות אישית לצרכים שלך.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 0.98 }}
                onClick={() => setActiveTab(i)} 
                className={`p-6 sm:p-8 rounded-[2rem] cursor-pointer transition-all border-2 aspect-square flex flex-col items-center justify-center text-center group ${activeTab === i ? 'bg-cyan-500 border-cyan-400 text-black shadow-xl shadow-cyan-500/20' : 'bg-[#2a2f3a]/40 border-white/5 hover:border-cyan-500/50'}`}
              >
                <div className={`mb-4 transition-transform group-hover:scale-110 ${activeTab === i ? 'text-black' : 'text-cyan-500'}`}>
                  {React.cloneElement(s.icon, { size: 35 })}
                </div>
                <span className="text-sm sm:text-lg font-[1000] italic uppercase leading-tight">{s.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }} 
                className="bg-[#2a2f3a]/60 p-8 sm:p-12 md:p-16 rounded-[3rem] border border-white/10 min-h-[350px] sm:min-h-[450px] flex flex-col justify-center relative overflow-hidden backdrop-blur-3xl text-center md:text-right"
              >
                <h3 className="text-4xl sm:text-6xl font-black italic mb-6 text-white">{services[activeTab].title}</h3>
                <p className="text-lg sm:text-2xl text-slate-300 italic font-light leading-relaxed mb-8">{services[activeTab].desc}</p>
                <button onClick={scrollToContact} className="flex items-center gap-3 text-cyan-500 font-black italic text-lg sm:text-xl group mx-auto md:ml-0 md:mr-auto flex-row-reverse">
                  <ChevronLeft className="group-hover:-translate-x-2 transition-transform" /> לפרטים נוספים 
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- ADVANTAGE SECTION --- */}
      <section className="py-24 bg-white/5 border-y border-white/5 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl sm:text-6xl font-black italic mb-12">למה דווקא <span className="text-cyan-500">קיסר?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: 'תמיכה 24/7', d: 'אנחנו זמינים לכל תקלה בכל שעה, כי הביטחון שלך הוא בראש סדר העדיפויות.', icon: <Activity className="text-cyan-500 mx-auto" /> },
              { t: 'AI מתקדם', d: 'אלגוריתמים חכמים לזיהוי איומים ומניעת התראות שווא.', icon: <Cpu className="text-cyan-500 mx-auto" /> },
              { t: 'גימור מושלם', d: 'התקנה נקייה, אסתטית ומקצועית ללא פשרות.', icon: <ZapOff className="text-cyan-500 mx-auto" /> }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] hover:border-cyan-500/50 transition-all">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-black italic mb-3">{item.t}</h4>
                <p className="text-slate-400 italic text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section ref={contactRef} id="contact" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-right">
            <h2 className="text-6xl sm:text-8xl font-black italic mb-8 leading-[0.8]">מוכנים <br/><span className="text-cyan-500">לביטחון?</span></h2>
            <div className="space-y-6 flex flex-col items-center lg:items-end">
              <div className="flex items-center gap-6 group cursor-pointer w-fit flex-row-reverse">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Phone size={28} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-slate-500 italic">Call_Now</p>
                  <p className="text-2xl sm:text-3xl font-black italic">055-970-5013</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer w-fit flex-row-reverse">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Mail size={28} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-slate-500 italic">Email_Us</p>
                  <p className="text-2xl sm:text-3xl font-black italic text-wrap break-all">office@keisar.co.il</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1e222a] p-8 sm:p-12 rounded-[3rem] border border-white/10 space-y-4 backdrop-blur-xl relative w-full max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full bg-black/40 border border-white/5 p-5 rounded-xl font-bold italic focus:border-cyan-500 transition-all outline-none text-right" placeholder="שם מלא" />
              <input className="w-full bg-black/40 border border-white/5 p-5 rounded-xl font-bold italic focus:border-cyan-500 transition-all outline-none text-right" placeholder="טלפון" />
            </div>
            <textarea className="w-full bg-black/40 border border-white/5 p-5 rounded-xl font-bold italic focus:border-cyan-500 transition-all outline-none text-right" rows={4} placeholder="באיזה נושא נוכל לעזור?" />
            <button className="w-full bg-cyan-500 text-black py-6 rounded-2xl font-[1000] text-xl sm:text-2xl italic shadow-xl shadow-cyan-500/20 hover:bg-white transition-all transform active:scale-95">
              שלח פנייה למערכת
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5 text-center px-4 relative z-10">
        <p className="text-slate-600 font-mono text-[10px] tracking-widest uppercase italic">
          © 2026 KEISAR_SYSTEMS // SECURED_BY_AI // DESIGNED_FOR_SAFETY
        </p>
      </footer>
    </div>
  );
}