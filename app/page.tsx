"use client";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Wifi, Network, Radio, Server, Globe, Activity, 
  MousePointer2, MonitorCheck, Lock, Phone, Mail, Zap, 
  Cpu, ChevronDown, Shield, Send
} from 'lucide-react';

export default function KeisarUltraModern() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);

  const services = [
    { title: 'תשתיות תקשורת & WiFi', icon: <Wifi />, desc: 'פריסת רשתות Mesh עוצמתיות לכיסוי מלא. פתרונות WiFi 7 למהירומות קצה.', tags: ['Mesh', 'WiFi 7'] },
    { title: 'נקודות רשת ביתיות', icon: <Network />, desc: 'התקנת נקודות LAN לגיימינג וסטרימינג ללא השהייה (Lag).', tags: ['Cat7', 'סיבים'] },
    { title: 'תקשורת אלחוטית לעסקים', icon: <Radio />, desc: 'רשתות עמידות לעומסים כבדים, הפרדת רשתות ואבטחת מידע.', tags: ['VLAN', 'עסקי'] },
    { title: 'מערכות מצלמות AI', icon: <MonitorCheck />, desc: 'מצלמות חכמות עם זיהוי פנים וניתוח וידאו בזמן אמת.', tags: ['4K', 'זיהוי פנים'] },
    { title: 'נקודות רשת לעסק', icon: <Server />, desc: 'ניהול ארונות תקשורת ופריסת קווי תקשורת יציבים למשרדים.', tags: ['ארון תקשורת', 'מנוהל'] },
    { title: 'אבטחת קצה וסייבר', icon: <Lock />, desc: 'הגנה מפני פריצות, חומות אש וניהול גישה מאובטח.', tags: ['סייבר', 'Firewall'] },
  ];

  return (
    <div className="bg-[#02040a] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden w-full min-h-screen font-sans" dir="rtl">
      
      {/* --- רקע טכנולוגי חי --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-cyan-500/5 blur-[150px] rounded-full" />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }} 
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="text-center">
          
          <div className="relative mb-12 group inline-block">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -inset-12 border border-cyan-500/10 rounded-full" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-8 border border-cyan-500/20 rounded-[3rem] border-dashed" />
            
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 bg-[#1a1d23] rounded-[2.5rem] p-1 shadow-2xl shadow-cyan-500/20 overflow-hidden border border-white/10 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img src="/keisar_systems-removebg-preview.png" alt="לוגו קיסר מערכות" className="w-full h-full object-cover rounded-[2.3rem]" />
            </div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl sm:text-9xl md:text-[150px] font-[900] leading-[0.8] tracking-tighter uppercase italic">
              קיסר <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>מערכות</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4 text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase"
          >
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            תשתית _ מוכנה _ 2026
          </motion.div>

          <motion.p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto italic mt-8 mb-12 leading-tight font-medium">
            הקמת תשתיות תקשורת מתקדמות, <span className="text-white font-bold">WiFi 7</span> ומערכות אבטחה חכמות בסטנדרט של המחר.
          </motion.p>

          <motion.button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
            className="bg-cyan-500 text-black px-16 py-6 rounded-2xl font-[900] text-2xl italic flex items-center gap-3 mx-auto transition-all"
          >
            התחל פרויקט <MousePointer2 size={24} />
          </motion.button>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-[1px] h-12 bg-gradient-to-t from-cyan-500 to-transparent" />
            <span className="text-[10px] tracking-[0.3em] text-cyan-500 uppercase font-black">גללו למטה</span>
        </div>
      </header>

      {/* --- SERVICES GRID --- */}
      <section className="relative z-10 py-40 max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-24 text-right">
          <h2 className="text-5xl sm:text-8xl font-[900] italic">הפתרונות <span className="text-cyan-500 underline underline-offset-[12px]">שלנו.</span></h2>
          <p className="text-slate-500 max-w-xl text-lg font-bold">תשתיות יציבות הן הבסיס לכל טכנולוגיה. אנחנו כאן כדי לוודא שהבסיס שלך חזק מתמיד.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              className="p-10 rounded-[2.5rem] bg-[#0f1218]/50 border border-white/5 relative overflow-hidden group transition-all duration-500 hover:border-cyan-500/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-cyan-500 transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                  {React.cloneElement(s.icon, { size: 40 })}
                </div>
                <div className="flex gap-1 items-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                   <span className="text-[8px] font-mono text-cyan-500 uppercase">פעיל</span>
                </div>
              </div>
              <h3 className="text-2xl font-[900] italic mb-4 uppercase">{s.title}</h3>
              <p className="text-slate-400 font-medium mb-6 leading-relaxed group-hover:text-slate-200 transition-colors italic">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 justify-start">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black px-3 py-1 rounded-full border border-white/10 bg-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BUSINESS SECTION --- */}
      <section className="py-40 bg-white/5 border-y border-white/5 relative z-10 text-right">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
             <div className="p-8 bg-[#0a0c12]/80 border border-white/5 rounded-[2.5rem] space-y-4 hover:border-cyan-500/30 transition-all group">
                <Globe className="text-cyan-500 w-10 h-10 group-hover:animate-spin mr-0 ml-auto" />
                <h4 className="text-xl font-[900] italic">תשתית עסקית</h4>
                <p className="text-slate-500 text-sm italic">ניהול רשתות לסניפים מרוחקים תחת מעטפת אבטחה אחת.</p>
             </div>
             <div className="p-8 bg-[#0a0c12]/80 border border-white/5 rounded-[2.5rem] space-y-4 hover:border-cyan-500/30 transition-all group">
                <Server className="text-cyan-500 w-10 h-10 group-hover:translate-y-[-5px] transition-transform mr-0 ml-auto" />
                <h4 className="text-xl font-[900] italic">חדרי שרתים</h4>
                <p className="text-slate-500 text-sm italic font-bold">הקמת ארונות תקשורת בצורה מודולרית ועמידה לעומס.</p>
             </div>
             <div className="p-8 bg-[#0a0c12]/80 border border-white/5 rounded-[2.5rem] space-y-4 col-span-2 hover:border-cyan-500/30 transition-all group">
                <Shield className="text-cyan-500 w-10 h-10 mr-0 ml-auto" />
                <h4 className="text-xl font-[900] italic">מעטפת אבטחת סייבר</h4>
                <p className="text-slate-500 text-sm italic font-bold">הגנה אקטיבית על כל נקודות הקצה ברשת העסקית שלך.</p>
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-6xl font-[900] italic leading-none">המוח של <br /><span className="text-cyan-500">העסק שלך.</span></h2>
            <p className="text-xl text-slate-300 font-light italic leading-relaxed">אנחנו לא רק מתקינים כבלים. אנחנו בונים מערכת עצבית חכמה לעסק שלך.</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer id="contact-form" className="py-32 relative z-10 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-5xl sm:text-7xl font-[900] italic">מוכנים לשדרוג?</h3>
            <p className="text-slate-400 font-bold italic text-xl text-center">השאירו פרטים ונחזור אליכם עם פתרון מנצח</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 bg-[#0f1218]/50 p-8 sm:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
            <div className="space-y-2 text-right">
              <label className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-black mr-4">שם מלא</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500/50 focus:outline-none transition-all italic font-medium text-right" />
            </div>
            <div className="space-y-2 text-right">
              <label className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-black mr-4">טלפון</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500/50 focus:outline-none transition-all italic font-medium text-right" />
            </div>
            <div className="md:col-span-2 space-y-2 text-right">
              <label className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-black mr-4">איך נוכל לעזור?</label>
              <textarea rows="4" placeholder="ספרו לנו קצת על הפרויקט שלכם..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500/50 focus:outline-none transition-all italic font-medium resize-none text-right"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 bg-cyan-500 text-black py-6 rounded-2xl font-[900] text-xl italic flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20"
            >
              שלח הודעה <Send size={20} />
            </motion.button>
          </form>

          <div className="flex flex-col items-center space-y-12">
            <div className="flex flex-wrap justify-center gap-12 text-lg">
               <a href="tel:0559705013" className="flex items-center gap-3 font-[900] italic hover:text-cyan-500 transition-colors"><Phone size={22} className="text-cyan-500"/> 055-970-5013</a>
               <a href="mailto:office@keisar.co.il" className="flex items-center gap-3 font-[900] italic hover:text-cyan-500 transition-colors"><Mail size={22} className="text-cyan-500"/> office@keisar.co.il</a>
            </div>
            
            <div className="w-full pt-12 border-t border-white/5 text-center">
              <div className="text-cyan-500 font-[900] italic tracking-[0.5em] text-[10px] mb-4 uppercase opacity-50">קיסר מערכות // תשתיות תקשורת מתקדמות</div>
              <p className="text-slate-800 text-[10px] font-mono">&copy; 2026 | נבנה על ידי SHIELDUP | כל הזכויות שמורות</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}