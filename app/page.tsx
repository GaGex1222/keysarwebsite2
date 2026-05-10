"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, Video, ShieldCheck, Flame, Mic2, Lightbulb, 
  UserCheck, Satellite, Mail, Phone, ArrowLeft,
  Activity, Camera, Radio, ChevronLeft
} from 'lucide-react';

export default function KeisarProUltra() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0); // ברירת מחדל לשירות הראשון
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'מתח נמוך', icon: <Zap />, desc: 'תשתיות תקשורת, חשמל ופיקוד למבנים מורכבים.' },
    { title: 'אבטחה', icon: <Video />, desc: 'מצלמות AI, ניטור חכם ומערכות הקלטה בענן.' },
    { title: 'גילוי אש', icon: <Flame />, desc: 'מערכות מצילות חיים לפי תקן 1222 כולל כריזה.' },
    { title: 'בית חכם', icon: <Lightbulb />, desc: 'אינטגרציה מלאה לתאורה, מיזוג ואודיו בממשק אחד.' },
    { title: 'בקרת כניסה', icon: <UserCheck />, desc: 'אינטרקום חכם, זיהוי ביומטרי וניהול הרשאות.' },
    { title: 'תקשורת', icon: <Satellite />, desc: 'רשתות Wi-Fi יציבות ותשתיות סיבים אופטיים.' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#0F172A] font-['Heebo',sans-serif] selection:bg-cyan-500/20 overflow-x-hidden" dir="rtl">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-[100] p-4 md:p-6 transition-all duration-500">
        <div className={`container mx-auto flex justify-between items-center px-5 py-3 rounded-2xl border transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-slate-200' : 'bg-transparent border-transparent'}`}>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center border border-slate-100 overflow-hidden">
                <img src="/keisar-logo.png" alt="לוגו" className="object-contain w-8 h-8" />
             </div>
             <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">KEISAR</span>
                <span className="text-[9px] text-cyan-600 font-bold tracking-widest uppercase italic leading-none">Security Systems</span>
             </div>
          </div>
          <button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="bg-slate-900 text-white text-[11px] font-bold px-6 py-2.5 rounded-xl hover:bg-cyan-600 transition-all shadow-md">
            שיחת ייעוץ
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION: הנדסת ביטחון משופרת --- */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center text-center px-6 overflow-hidden pt-20">
        
        {/* רקע שכבות דינמי */}
        <motion.div style={{ opacity, y: yTranslate }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px] opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[600px] bg-cyan-100/30 skew-y-12 blur-[120px] rounded-full" />
          
          {/* אלמנטים של טכנולוגיה רצה */}
          <div className="absolute top-32 left-10 text-[10px] font-mono text-cyan-600/30 hidden lg:block text-left uppercase italic">
            {`> system_status: active`} <br />
            {`> secure_link: established`} <br />
            {`> signal_strength: 100%`}
          </div>
        </motion.div>

        <div className="relative z-10 max-w-6xl w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm"
          >
            <span className="text-xs font-black text-cyan-600 uppercase tracking-widest italic">
              Elite Engineering Solutions
            </span>
          </motion.div>

          <h1 className="text-[14vw] md:text-[140px] font-black leading-[0.8] tracking-tighter mb-8 italic uppercase text-slate-900 drop-shadow-sm">
            <span className="block mb-2">ביטחון.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 via-blue-600 to-cyan-500 not-italic">ללא פשרות.</span>
          </h1>

          <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/30 p-6 rounded-3xl border border-white/50 shadow-xl mb-12">
            <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed italic">
              קיסר מערכות מעצבת את עתיד המיגון והמתח הנמוך. אנחנו הופכים טכנולוגיה מורכבת לביטחון פשוט ושקט עבורכם.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}
              className="w-full sm:w-auto bg-slate-900 text-white px-14 py-6 rounded-2xl font-black text-2xl hover:bg-cyan-600 transition-all shadow-2xl shadow-slate-300"
            >
              התחילו פרויקט עכשיו
            </motion.button>
            <div className="flex items-center gap-3 text-slate-400 font-bold opacity-70">
              <Activity size={24} className="text-cyan-500 animate-pulse" />
              <span>מערך שירות 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE SECTION: פתרון למובייל - גריד קומפקטי --- */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-right">
            <h3 className="text-4xl md:text-7xl font-black italic text-slate-900 mb-4">התמחויות.</h3>
            <div className="h-2 w-20 bg-cyan-500 rounded-full" />
          </div>

          {/* מבנה גריד קומפקטי - מעולה למובייל */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                onClick={() => setActiveService(i)}
                className={`relative p-5 md:p-10 rounded-3xl border transition-all cursor-pointer overflow-hidden ${
                  activeService === i 
                  ? 'bg-slate-900 border-slate-900 shadow-2xl scale-[1.02] z-10' 
                  : 'bg-slate-50 border-slate-100 hover:border-cyan-200'
                }`}
              >
                <div className={`mb-4 md:mb-8 transition-colors ${activeService === i ? 'text-cyan-400' : 'text-slate-400'}`}>
                   {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <h4 className={`text-xl md:text-3xl font-black mb-2 tracking-tight ${activeService === i ? 'text-white' : 'text-slate-800'}`}>
                  {service.title}
                </h4>
                
                {/* תיאור שמופיע רק במצב פעיל - חוסך מקום גלילה */}
                <AnimatePresence>
                  {activeService === i && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-cyan-100/60 text-sm md:text-lg font-light leading-snug mt-2 italic"
                    >
                      {service.desc}
                    </motion.p>
                  )}
                </AnimatePresence>

                {activeService !== i && (
                  <div className="absolute bottom-4 left-4 text-slate-300">
                    <ChevronLeft size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-[#F8FAFC] px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-right">
              <h2 className="text-6xl md:text-9xl font-black mb-6 italic tracking-tighter italic text-slate-900">דברו <br /><span className="text-cyan-600 font-normal">איתנו.</span></h2>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Email</span>
                  <a href="mailto:office@keisar.co.il" className="text-xl md:text-3xl font-light text-slate-600 italic transition-all hover:text-cyan-600">office@keisar.co.il</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Direct</span>
                  <a href="tel:0500000000" className="text-xl md:text-3xl font-light text-slate-600 italic transition-all hover:text-cyan-600">050-XXXXXXX</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-14 rounded-[40px] shadow-2xl border border-slate-100">
              <div className="flex flex-col gap-6">
                <input type="text" placeholder="שם מלא" className="bg-transparent w-full text-lg border-b border-slate-200 py-3 focus:border-cyan-500 outline-none transition-all text-right" />
                <input type="tel" placeholder="טלפון" className="bg-transparent w-full text-lg border-b border-slate-200 py-3 focus:border-cyan-500 outline-none transition-all text-right" />
                <textarea placeholder="איך נוכל לעזור?" className="bg-transparent w-full text-lg border-b border-slate-200 py-3 focus:border-cyan-500 outline-none h-24 resize-none text-right" />
                <button className="bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-cyan-600 transition-all shadow-lg">
                  שלח הודעה
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-300 font-mono text-[9px] tracking-[0.5em] uppercase border-t border-slate-100">
        Keisar Systems // 2026 // Secure Infrastructure
      </footer>
    </div>
  );
}