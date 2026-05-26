"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Video, Flame, UserCheck, Cpu, Shield, 
  Phone, Mail, Send, Activity, ChevronLeft, 
  Target, Scan, Eye, Radio, ChevronDown, 
  Wifi, Signal, HardDrive, ShieldAlert, Globe,
  Menu, X, Lock, Info
} from 'lucide-react';

export default function ShelterInternetPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // נתונים לתפריט הניווט (Table of Contents)
  const toc = [
    { id: 'challenge', title: 'האתגר והפתרון', icon: <Target size={18} /> },
    { id: 'importance', title: 'שגרה וחירום', icon: <Activity size={18} /> },
    { id: 'execution', title: 'ביצוע מקצועי', icon: <Zap size={18} /> },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans overflow-x-hidden selection:bg-sky-200/30" dir="rtl">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-100 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* --- HUD NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-sky-100 bg-white/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-sky-500/50 rounded-lg flex items-center justify-center text-sky-600 shadow-[0_0_20px_rgba(2,132,199,0.2)] relative group overflow-hidden">
              <Shield size={20} className="relative z-10" />
              <div className="absolute inset-0 bg-sky-100 translate-y-full group-hover:translate-y-0 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black italic tracking-tighter uppercase leading-none">KEISAR PRO</span>
              <span className="text-[10px] text-sky-600 font-bold tracking-[0.3em]">SHELTER_NET_v2.0</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {toc.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-sky-600 transition-all group"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-600">/</span>
                {item.title}
              </a>
            ))}
          </div>

          <a href="tel:0525022222" className="bg-sky-600 text-white px-5 py-2 rounded-md font-black text-xs italic hover:bg-sky-700 transition-all shadow-[0_0_20px_rgba(2,132,199,0.4)]">
            CONNECT_NOW
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full mb-8 backdrop-blur-md">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-600">Mission: Digital Continuity</span>
          </div>
          
          <h1 className="text-5xl md:text-[110px] font-[1000] italic leading-[0.9] tracking-tighter uppercase mb-8">
            אינטרנט <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>בתוך המקלט.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto italic font-medium leading-relaxed mb-12 relative">
            <span className="absolute -right-4 top-0 bottom-0 w-1 bg-cyan-500" />
            במצבי חירום, המקלט הוא המבצר שלכם. אנחנו דואגים שהוא לא יהיה מנותק. פתרונות תקשורת חודרי בטון ופלדה.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-sky-600 text-white px-10 py-4 rounded-xl font-black text-xl italic shadow-2xl shadow-sky-500/30 hover:bg-sky-700 transition-colors"
            >
              בדיקת תשתית חינם
            </motion.button>
            <div className="flex items-center gap-3 bg-sky-50 border border-sky-200 px-6 py-4 rounded-xl backdrop-blur-md">
              <Scan size={20} className="text-sky-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Analyzing_Signal_Loss...</span>
            </div>
          </div>
        </motion.div>

        {/* Floating HUD Elements */}
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 right-10 border border-sky-200 p-4 rounded-lg bg-sky-100 backdrop-blur-sm">
                <Wifi className="text-sky-600 mb-2" />
                <div className="h-1 w-20 bg-sky-100 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-1/3" />
                </div>
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-1/4 left-10 border border-sky-200 p-4 rounded-lg bg-sky-100 backdrop-blur-sm">
                <ShieldAlert className="text-red-500 mb-2" />
                <span className="text-[8px] font-mono block">SIGNAL_BLOCKED_BY_CONCRETE</span>
            </motion.div>
        </div>
      </header>

      {/* --- MAIN CONTENT SECTIONS --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* Section 1: The Challenge */}
        <motion.section 
          id="challenge"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-sky-100 rounded-[3rem] blur-2xl group-hover:bg-sky-100 transition-all" />
            <div className="relative bg-white border border-sky-200 p-8 md:p-12 rounded-[2.5rem] overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                    <Target className="text-sky-600" />
                    <h2 className="text-3xl md:text-5xl font-black italic">האתגר <span className="text-sky-600">הטכנולוגי.</span></h2>
                </div>
                <div className="space-y-6 text-slate-700 italic text-lg leading-relaxed">
                    <p>
                    הקושי המרכזי נובע מכך שקירות הבטון בולעים את אותות ה-WIFI. רבים מנסים להשתמש במגדילי טווח פשוטים, אך התוצאה היא ניתוקים חוזרים ברגע האמת.
                    </p>
                    <div className="p-6 bg-sky-50 border-r-2 border-sky-500 rounded-lg">
                        <p className="font-bold text-slate-900">הפתרון שלנו:</p>
                        יצירת חיבור פיזי מבוסס כבלים ייעודיים לתוך המרחב המוגן, המבטיח רוחב פס מלא ללא פשרות.
                    </div>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: <Lock />, label: "חדירת בטון" },
               { icon: <Globe />, label: "סיב אופטי" },
               { icon: <Signal />, label: "אפס ניתוקים" },
               { icon: <Cpu />, label: "ניתוב חכם" }
             ].map((box, i) => (
               <div key={i} className="aspect-square bg-sky-50 border border-sky-200 rounded-3xl flex flex-col items-center justify-center gap-4 group hover:bg-sky-500 transition-all cursor-crosshair">
                 <div className="text-sky-600 group-hover:text-black transition-colors">{box.icon}</div>
                 <span className="text-xs font-black group-hover:text-black uppercase tracking-tighter">{box.label}</span>
               </div>
             ))}
          </div>
        </motion.section>

        {/* Section 2: Routine & Emergency */}
        <motion.section 
          id="importance"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
          className="relative"
        >
          <div className="text-center mb-16">
             <h2 className="text-5xl md:text-8xl font-[1000] italic uppercase opacity-10 absolute inset-0 -z-10 select-none">EMERGENCY_READY</h2>
             <h2 className="text-4xl md:text-6xl font-black italic">שגרה <span className="text-sky-600">וחירום.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-sky-200 p-10 rounded-[3rem] hover:border-sky-400 transition-colors shadow-sm">
                <div className="w-14 h-14 bg-sky-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-sky-500/20">
                    <ShieldAlert size={28} />
                </div>
                <h3 className="text-2xl font-black italic mb-4">ביטחון בחירום</h3>
                <p className="text-slate-600 italic leading-relaxed">עדכוני פיקוד העורף, חדשות בזמן אמת ותקשורת עם הקרובים לכם כשזה הכי חשוב.</p>
            </div>
            <div className="bg-white border border-sky-200 p-10 rounded-[3rem] hover:border-sky-400 transition-colors shadow-sm">
                <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6">
                    <Radio size={28} />
                </div>
                <h3 className="text-2xl font-black italic mb-4">פנאי ועבודה</h3>
                <p className="text-slate-600 italic leading-relaxed">הפיכת הממ"ד לחדר עבודה שקט או חדר משחקים לילדים עם גלישה מהירה ורציפה.</p>
            </div>
            <div className="bg-white border border-sky-200 p-10 rounded-[3rem] hover:border-sky-400 transition-colors shadow-sm">
                <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6">
                    <Video size={28} />
                </div>
                <h3 className="text-2xl font-black italic mb-4">שליטה במצלמות</h3>
                <p className="text-slate-600 italic leading-relaxed">צפייה במצלמות האבטחה שמחוץ לבית ישירות מהסמארטפון בתוך המקלט הסגור.</p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Professional Execution */}
        <motion.section 
          id="execution"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
          className="bg-sky-600 rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 flex flex-col gap-2">
                {[...Array(5)].map((_,i) => <div key={i} className="h-1 w-40 bg-black rounded-full" />)}
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-5xl md:text-7xl font-[1000] italic leading-tight mb-8 uppercase">ביצוע <br />הנדסי.</h2>
                <p className="text-xl md:text-2xl font-bold italic mb-10 leading-relaxed">
                  התקנת נקודת רשת פיזית היא הדרך היחידה להבטיח 100% יציבות. אנחנו משתמשים בתשתיות קיימות או השחלת כבלים בתוך צנרת החשמל בצורה אסתטית ונקייה.
                </p>
                <ul className="space-y-4">
                    {["שימוש בכבלי CAT7 ממוגנים", "שמירה על אטימות הממ\"ד", "בדיקת עוצמת אות דציבלית", "אחריות מלאה על התשתית"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 font-black italic">
                            <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center text-[10px]">✓</div>
                            {item}
                        </li>
                    ))}
                </ul>
             </div>
             <div className="relative">
                <div className="bg-black text-sky-600 p-8 rounded-3xl border-4 border-black shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-6 border-b border-sky-500/30 pb-4">
                        <span className="text-[10px] font-mono">SYSTEM_STATUS: OK</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                        </div>
                    </div>
                    <p className="font-mono text-xs mb-4">/INITIATING_CONNECTION...</p>
                    <p className="font-mono text-xs mb-4">/BYPASSING_CONCRETE_WALLS...</p>
                    <p className="font-mono text-sm font-bold">STABLE_CONNECTION_ESTABLISHED_1Gbps</p>
                </div>
             </div>
          </div>
        </motion.section>

      </main>

      {/* --- FOOTER / CONTACT --- */}
      <footer className="relative bg-sky-50 border-t border-sky-100 pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
           <div>
              <h2 className="text-6xl md:text-9xl font-[1000] italic uppercase leading-none mb-10">מוכנים <br /> <span className="text-sky-600">לגלוש?</span></h2>
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                   <div className="w-20 h-20 bg-sky-50 border border-sky-200 rounded-3xl flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-black transition-all">
                      <Phone size={32} />
                   </div>
                   <div>
                      <span className="text-[10px] font-black uppercase text-slate-500 italic tracking-widest">Voice_Comm</span>
                      <p className="text-3xl md:text-4xl font-black italic">052-502-2222</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-20 h-20 bg-sky-50 border border-sky-200 rounded-3xl flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-black transition-all">
                      <Mail size={32} />
                   </div>
                   <div>
                      <span className="text-[10px] font-black uppercase text-slate-500 italic tracking-widest">Digital_Comm</span>
                      <p className="text-3xl md:text-4xl font-black italic">office@keisar.co.il</p>
                   </div>
                </div>
              </div>
           </div>

           <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-sky-200 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-100 blur-[60px] rounded-full" />
              <div className="space-y-6 relative z-10">
                <input className="w-full bg-sky-50 border border-sky-100 p-6 rounded-2xl font-bold italic focus:border-sky-500 transition-colors outline-none text-xl" placeholder="שם מלא" />
                <input className="w-full bg-sky-50 border border-sky-100 p-6 rounded-2xl font-bold italic focus:border-sky-500 transition-colors outline-none text-xl" placeholder="טלפון לחזרה" />
                <textarea className="w-full bg-sky-50 border border-sky-100 p-6 rounded-2xl font-bold italic focus:border-sky-500 transition-colors outline-none text-xl" rows={4} placeholder="איך נוכל לעזור?" />
                <button className="w-full bg-sky-600 text-white py-6 rounded-2xl font-[1000] text-2xl italic shadow-2xl shadow-sky-500/20 hover:bg-sky-700 transition-all transform active:scale-95">
                  שלח פנייה למנהל
                </button>
              </div>
           </div>
        </div>

        <div className="text-center">
            <div className="flex justify-center gap-4 mb-8 text-slate-900/20">
                <Shield size={20} /> <Target size={20} /> <Cpu size={20} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">
                Keisar Systems Shelter Protocol &copy; 2026 | No Signal Left Behind
            </p>
        </div>
      </footer>

      {/* Mouse Follower Glow */}
      <div 
        className="fixed w-[400px] h-[400px] bg-sky-50 rounded-full blur-[100px] pointer-events-none z-0 transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * 100}px, ${mousePos.y * 100}px)`,
          left: 'calc(50% - 200px)',
          top: 'calc(50% - 200px)'
        }}
      />
    </div>
  );
}