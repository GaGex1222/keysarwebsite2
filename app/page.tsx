"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Video, Flame, UserCheck, Share2, Cpu, Shield, 
  Phone, Mail, MapPin, Send, Activity, ChevronLeft, 
  Target, Scan, Eye, Radio, ChevronDown, ExternalLink, Menu, X 
} from 'lucide-react';

export default function KeisarProWebsite() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeMenu, setActiveMenu] = useState(null); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- DATA STRUCTURE FROM YOUR IMAGES ---
  const menuItems = [
    {
      id: 'cameras',
      label: 'מצלמות אבטחה',
      children: [
        { title: "מחירון מתקין", href: "#" },
        { title: "מצלמות אבטחה לעסק", href: "#" },
        { title: "מצלמה לבית", href: "#" },
        { title: "מכשירי DVR", href: "#" },
        { title: "מצלמות אבטחה IP", href: "#" },
        { title: "מצלמה עם מסך", href: "#" },
        { title: "מצלמות לחצר", href: "#" },
        { title: "מצלמה אלחוטית", href: "#" },
        { title: "מצלמה אנלוגית", href: "#" },
        { title: "מצלמת WIFI", href: "#" },
        { title: "שירות התקנה", href: "#" },
        { title: "מצלמות ב-3490 שח", href: "#" },
        { title: "מצלמות אנליטיקה", href: "#" },
        { title: "כבלים למצלמות", href: "#" },
      ]
    },
    {
      id: 'alarms',
      label: 'אזעקות לבית',
      children: [
        { title: "איך לבחור מערכת אזעקה?", href: "#" },
        { title: "כל מה שאתם צריכים לדעת", href: "#" },
        { title: "טכנאי אזעקות לבית", href: "#" },
        { title: "אזעקה אלחוטית", href: "#" },
        { title: "מערכות פימא (PIMA)", href: "#" },
        { title: "אזעקת ריסקו (RISCO)", href: "#" },
      ]
    },
    {
      id: 'intercom',
      label: 'אינטרקום',
      children: [
        { title: "מערכת אינטרקום לעסק", href: "#" },
        { title: "קודן לבית", href: "#" },
        { title: "אינטרקום לבניין משותף", href: "#" },
        { title: "אינטרקום לדירה", href: "#" },
        { title: "אינטרקום עם מסך", href: "#" },
      ]
    },
    {
      id: 'comm',
      label: 'תקשורת',
      children: [
        { title: "ארון תקשורת לבית", href: "#" },
        { title: "טכנאי מערכות תקשורת", href: "#" },
        { title: "נקודות רשת", href: "#" },
        { title: "הגדלת טווח WIFI", href: "#" },
      ]
    },
    {
      id: 'shelter',
      label: 'אינטרנט במקלט',
      children: []
    },
    {
      id: 'areas',
      label: 'אזורי שירות',
      children: [
        { title: "אזור צפון", href: "#" },
        { title: "אזור מרכז", href: "#" },
        { title: "אזור דרום", href: "#" },
        { title: "ירושלים והסביבה", href: "#" },
      ]
    },
    {
      id: 'contact_nav',
      label: 'יצירת קשר',
      children: []
    },
  ];

  const services = [
    { title: 'מיגון ואבטחה', icon: <Video />, desc: 'מערכות מצלמות במעגל סגור (CCTV) עם ניתוח וידאו מבוסס AI וזיהוי פנים.', color: 'from-cyan-400 to-teal-500' },
    { title: 'מערכות מתח נמוך', icon: <Zap />, desc: 'תכנון והקמת תשתיות תקשורת, חשמל חכם ולוחות פיקוד מתקדמים.', color: 'from-blue-400 to-cyan-500' },
    { title: 'גילוי אש ועשן', icon: <Flame />, desc: 'התקנת מערכות גילוי אש מצילות חיים בהתאם לתקן הישראלי 1220.', color: 'from-orange-400 to-red-500' },
    { title: 'בית חכם', icon: <Cpu />, desc: 'שליטה מלאה על התאורה, המיזוג והחשמל בממשק אחד פשוט מהנייד.', color: 'from-purple-400 to-indigo-500' },
    { title: 'בקרת כניסה', icon: <UserCheck />, desc: 'מערכות אינטרקום חכמות, זיהוי ביומטרי וניהול הרשאות כניסה.', color: 'from-green-400 to-emerald-500' },
    { title: 'סאונד וקולנוע', icon: <Share2 />, desc: 'תכנון מערכות שמע היקפיות, קולנוע ביתי ומערכות כריזה לעסקים.', color: 'from-pink-400 to-rose-500' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#1c1f26] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 p-0 m-0" dir="rtl">
      
      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-cyan-600/10 blur-[150px] rounded-full" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-[#1c1f26]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-[#1c1f26] shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Shield size={22} fill="currentColor" />
            </div>
            <span className="text-xl md:text-2xl font-[1000] italic uppercase tracking-tighter">קיסר מערכות</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 h-full">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="relative h-full flex items-center" 
                onMouseEnter={() => setActiveMenu(item.id)}
              >
                <button className={`flex items-center gap-1.5 font-bold text-[14px] italic transition-colors hover:text-cyan-400 ${activeMenu === item.id ? 'text-cyan-400' : 'text-slate-200'}`}>
                  {item.label}
                  {item.children.length > 0 && <ChevronDown size={14} className={activeMenu === item.id ? 'rotate-180 transition-transform' : ''} />}
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a href="tel:0559705013" className="hidden sm:flex bg-cyan-500 text-black px-4 py-2 rounded-lg font-black text-sm italic hover:bg-white transition-colors">
              055-970-5013
            </a>
            <button 
              className="lg:hidden p-2 bg-white/5 rounded-lg border border-white/10" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} className="text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Desktop Mega-Dropdown (As requested: Horizontal bar like the image) */}
        <AnimatePresence>
          {activeMenu && menuItems.find(i => i.id === activeMenu)?.children.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }}
              onMouseLeave={() => setActiveMenu(null)}
              className="hidden lg:block absolute w-full bg-[#2a2f3a] border-b border-white/10 shadow-2xl z-[90]"
            >
              <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-x-8 gap-y-3 justify-center items-center">
                {menuItems.find(i => i.id === activeMenu).children.map((child, idx) => (
                  <a 
                    key={idx} 
                    href={child.href} 
                    className="text-[13px] font-bold text-slate-300 hover:text-cyan-400 transition-colors italic whitespace-nowrap flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-50" />
                    {child.title}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[#1c1f26] z-[200] flex flex-col lg:hidden"
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center h-20 bg-[#1c1f26]">
              <span className="text-cyan-500 font-black italic text-xl uppercase">קיסר תפריט</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full">
                <X size={30} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {menuItems.map((item) => (
                <div key={item.id} className="border-b border-white/5 pb-4">
                  <div className="text-xl font-black italic flex justify-between items-center text-white">
                    {item.label}
                    {item.children.length > 0 && <ChevronDown size={18} className="text-cyan-500" />}
                  </div>
                  {item.children.length > 0 && (
                    <div className="mt-4 mr-4 grid grid-cols-1 gap-3">
                      {item.children.map((child, i) => (
                        <a 
                          key={i} 
                          href={child.href} 
                          onClick={() => setIsMobileMenuOpen(false)} 
                          className="flex items-center gap-2 text-slate-400 font-bold hover:text-cyan-400 italic py-1"
                        >
                          <ChevronLeft size={14} className="text-cyan-500" />
                          {child.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 bg-black/40 backdrop-blur-md border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-slate-400 justify-center">
                <Mail size={18} />
                <span className="text-sm font-bold">office@keisar.co.il</span>
              </div>
              <a href="tel:0559705013" className="block w-full bg-cyan-500 text-black text-center py-4 rounded-xl font-black italic text-lg shadow-lg shadow-cyan-500/20">
                התקשר לייעוץ: 055-970-5013
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-[90vh] flex items-center justify-center pt-24 px-6 overflow-hidden">
        <motion.div style={{ x: mousePos.x * 15, y: mousePos.y * 15 }} className="text-center z-10 w-full max-w-5xl">
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
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
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
      <section id="contact" className="py-32 px-6 max-w-6xl mx-auto relative z-10">
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

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5 bg-black/20 mt-20 relative z-10">
        <div className="flex justify-center gap-6 mb-8 text-slate-500">
           <Shield size={24} />
           <Target size={24} />
           <Scan size={24} />
        </div>
        <p className="text-slate-500 text-[11px] font-[1000] tracking-[0.6em] uppercase italic">
          Keisar Systems Engineering Protocol &copy; 2026 | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}