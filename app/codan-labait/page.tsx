"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Key, 
  SquareAsterisk, 
  ScanFace, 
  ShieldAlert, 
  Home, 
  Building2, 
  Briefcase, 
  Zap, 
  Settings, 
  CheckCircle, 
  Smartphone,
  Unlock, 
  MousePointerClick
} from 'lucide-react';

export default function KeypadsHomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const types = [
    { 
      title: "קודן בסיסי", 
      desc: "לחצנים פיזיים אמינים המשמשים רובד אבטחה נוסף למפתח המסורתי.", 
      icon: <SquareAsterisk className="w-8 h-8" /> 
    },
    { 
      title: "זיהוי פנים 4K", 
      desc: "הדור הבא של הקודנים. מצלמה מובנית שמזהה אתכם עוד לפני שנגעתם בדלת.", 
      icon: <ScanFace className="w-8 h-8" /> 
    },
    { 
      title: "קודן דיגיטלי חכם", 
      desc: "מסכי מגע אלגנטיים, דיבורית מובנית ושליטה מלאה מהסמארטפון.", 
      icon: <Smartphone className="w-8 h-8" /> 
    }
  ];

  const benefits = [
    "נוחות מקסימלית - להתראות למפתחות שאובדים",
    "ניהול הרשאות זמניות לאורחים ולעובדים",
    "עמידות מלאה בתנאי חוץ ומזג אוויר קיצוני",
    "מעקב כניסות ויציאות בזמן אמת",
    "עיצוב יוקרתי המשתלב בכל סגנון אדריכלי"
  ];

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans overflow-x-hidden" dir="rtl">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 z-10 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block p-3 rounded-2xl bg-white/5 border border-white/10 mb-6"
        >
          <Unlock className="text-cyan-400 w-6 h-6" />
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-9xl font-[1000] italic leading-tight tracking-tighter uppercase mb-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        >
          הבית שלך. <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>הקוד שלך.</span>
        </motion.h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-xl md:text-2xl font-light italic leading-relaxed">
          תפסיקו לחפש את המפתחות בתיק. הקודנים הדיגיטליים של אלסק הופכים את הכניסה לבית לחוויה חכמה, בטוחה ומעוצבת.
        </p>
      </section>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* --- SECTION: TYPES --- */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {types.map((type, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-cyan-500/30"
              >
                <div className="mb-8 text-cyan-500 group-hover:text-white transition-colors">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-black italic mb-4">{type.title}</h3>
                <p className="text-slate-500 italic font-medium leading-relaxed">
                  {type.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SECTION: INSTALLATION --- */}
        <motion.section 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase leading-none">
              איך זה <br /><span className="text-cyan-500">עובד?</span>
            </h2>
            <div className="space-y-8">
              {[
                { n: "01", t: "הכנת תשתית", d: "התקנת הקודן על הדלת או השער ללא צורך במנעולן חיצוני." },
                { n: "02", t: "סנכרון יחידה פנימית", d: "חיבור ליחידת הבקרה בתוך הבית לשליטה מרחוק." },
                { n: "03", t: "הגדרת קוד אישי", d: "הזנת הסיסמה והרשאות הגישה שלכם ויוצאים לדרך." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start group" dir="rtl">
                  <span className="text-4xl font-[1000] italic text-white/10 group-hover:text-cyan-500/40 transition-colors">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold italic text-white">{step.t}</h4>
                    <p className="text-slate-500 italic font-medium">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-full opacity-30" />
            <div className="relative p-12 border border-white/10 rounded-[4rem] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
               <Settings className="w-12 h-12 text-cyan-500 mb-6 animate-spin-slow" />
               <h3 className="text-3xl font-black italic mb-4 text-white">התקנה מקצועית</h3>
               <p className="text-slate-400 italic leading-relaxed mb-8">
                 תהליך ההתקנה מבוצע על ידי המומחים של אלסק, תוך שמירה קפדנית על אסתטיקת הכניסה שלכם ואיכות רכיבים ללא פשרות.
               </p>
               <div className="flex gap-4">
                  <CheckCircle className="text-cyan-500" />
                  <span className="font-bold italic">אחריות מלאה על המערכת</span>
               </div>
            </div>
          </div>
        </motion.section>

        {/* --- SECTION: TARGET --- */}
        <section className="text-center space-y-16">
           <h2 className="text-4xl md:text-6xl font-black italic uppercase">למי זה <span className="text-cyan-500 underline decoration-1 underline-offset-8">מתאים?</span></h2>
           <div className="flex flex-wrap justify-center gap-12">
              {[
                { icon: <Home />, label: "בתים פרטיים" },
                { icon: <Building2 />, label: "בנייני מגורים" },
                { icon: <Briefcase />, label: "משרדים ועסקים" },
                { icon: <Zap />, label: "חניונים ושערים" }
              ].map((target, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all">
                    {React.cloneElement(target.icon, { className: "w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors" })}
                  </div>
                  <span className="font-bold italic text-slate-500 group-hover:text-white transition-colors">{target.label}</span>
                </div>
              ))}
           </div>
        </section>

        {/* --- SECTION: ADVANTAGES --- */}
        <section className="relative py-20 px-8 border border-white/5 rounded-[4rem] overflow-hidden bg-white/[0.01]">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldAlert size={200} />
           </div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <h2 className="text-4xl md:text-6xl font-[1000] italic leading-tight">
                היתרונות <br /> <span className="text-cyan-500">של אלסק.</span>
              </h2>
              <ul className="space-y-6">
                 {benefits.map((benefit, i) => (
                   <li key={i} className="flex items-center gap-4 text-xl italic font-bold text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                      {benefit}
                   </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* --- FINAL CTA --- */}
        <motion.section 
          className="text-center py-20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-[1000] italic uppercase mb-8 leading-none">
            שומרים על הבית <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>מכל משמר.</span>
          </h2>
          <button className="relative group">
            <div className="absolute -inset-1 bg-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-12 py-6 bg-[#080a0f] border border-cyan-500/50 rounded-2xl leading-none flex items-center gap-3">
              <span className="text-2xl font-black italic text-white transition duration-200 group-hover:text-cyan-400">צרו קשר להתקנה</span>
              <MousePointerClick className="text-cyan-400 animate-bounce" />
            </div>
          </button>
        </motion.section>

      </main>

      <footer className="py-12 border-t border-white/5 text-center text-slate-700 font-bold italic text-sm tracking-widest">
        ALSEC SECURITY SOLUTIONS &copy; 2026 | THE FUTURE OF ACCESS CONTROL
      </footer>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}