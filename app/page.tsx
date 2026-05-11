"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Video, Flame, UserCheck, Share2, Cpu, 
  Phone, Mail, Activity, ChevronLeft, Eye 
} from 'lucide-react';

export default function KeisarProWebsite() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
    <>
      {/* --- HERO SECTION --- */}
      <header className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ x: mousePos.x * 15, y: mousePos.y * 15 }} className="text-center w-full max-w-5xl">
          <div className="text-cyan-500 mb-6 flex justify-center items-center gap-3">
            <div className="h-[1px] w-12 bg-cyan-500/30" />
            <Eye size={22} className="animate-pulse" />
            <span className="text-xs font-black tracking-[0.4em] uppercase italic">Intelligence_Defense</span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-8">
            קיסר <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>מערכות.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto italic font-light leading-relaxed border-r-4 border-cyan-500 pr-6 text-right mb-12">
            תכנון, התקנה ותחזוקה של מערכות אבטחה חכמות, תקשורת מתקדמת ופתרונות מתח נמוך לעסקים ופרטיים.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto bg-cyan-500 text-black px-12 py-5 rounded-2xl font-black text-2xl italic shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-transform">
              ייעוץ חינם עכשיו
            </button>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl backdrop-blur-md">
              <Activity className="text-cyan-500 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">System_Protocol_Active</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* --- SERVICES SECTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <h2 className="text-5xl md:text-8xl font-black italic leading-none">הפתרונות <br/><span className="text-cyan-500">שלנו.</span></h2>
          <p className="text-slate-400 max-w-md text-right italic font-bold">אנחנו לא רק מתקינים ציוד, אנחנו בונים מעטפת הגנה חכמה שמותאמת אישית לצרכים שלך.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 0.98 }}
                onClick={() => setActiveTab(i)} 
                className={`p-8 rounded-[2.5rem] cursor-pointer transition-all border-2 aspect-square flex flex-col items-center justify-center text-center group ${activeTab === i ? 'bg-cyan-500 border-cyan-400 text-black shadow-2xl shadow-cyan-500/20' : 'bg-[#2a2f3a]/40 border-white/5 hover:border-cyan-500/50'}`}
              >
                <div className={`mb-6 transition-transform group-hover:scale-110 ${activeTab === i ? 'text-black' : 'text-cyan-500'}`}>
                  {React.cloneElement(s.icon, { size: 45 })}
                </div>
                <span className="text-lg font-[1000] italic uppercase tracking-tighter leading-tight">{s.title}</span>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab} 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -30 }} 
              className="bg-[#2a2f3a]/60 p-12 md:p-16 rounded-[4rem] border border-white/10 min-h-[450px] flex flex-col justify-center relative overflow-hidden backdrop-blur-3xl"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full" />
              <h3 className="text-5xl md:text-7xl font-black italic mb-8 text-white">{services[activeTab].title}</h3>
              <p className="text-xl md:text-3xl text-slate-300 italic font-light leading-relaxed mb-10">{services[activeTab].desc}</p>
              <button className="flex items-center gap-3 text-cyan-500 font-black italic text-xl group">
                לפרטים נוספים <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 px-6 max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black italic mb-10 leading-[0.9]">מוכנים <br/><span className="text-cyan-500">לביטחון?</span></h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Phone size={30} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-500 italic tracking-widest">חייגו אלינו</p>
                  <p className="text-3xl font-black italic">055-970-5013</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Mail size={30} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-500 italic tracking-widest">שלחו מייל</p>
                  <p className="text-3xl font-black italic">office@keisar.co.il</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2f3a]/40 p-10 md:p-14 rounded-[3.5rem] border border-white/10 space-y-6 backdrop-blur-xl relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-cyan-500/20 blur-3xl rounded-full" />
            <input className="w-full bg-black/40 border border-white/5 p-6 rounded-2xl font-bold italic focus:border-cyan-500 transition-colors outline-none text-xl" placeholder="שם מלא" />
            <input className="w-full bg-black/40 border border-white/5 p-6 rounded-2xl font-bold italic focus:border-cyan-500 transition-colors outline-none text-xl" placeholder="מספר טלפון" />
            <textarea className="w-full bg-black/40 border border-white/5 p-6 rounded-2xl font-bold italic focus:border-cyan-500 transition-colors outline-none text-xl" rows={3} placeholder="באיזה נושא תרצו שנדבר?" />
            <button className="w-full bg-cyan-500 text-black py-6 rounded-2xl font-[1000] text-2xl italic shadow-2xl shadow-cyan-500/20 hover:bg-white transition-all transform active:scale-95">
              שלח פנייה למנהל
            </button>
          </div>
        </div>
      </section>
    </>
  );
}