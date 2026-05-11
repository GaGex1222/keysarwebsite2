"use client";
import React from 'react';
import { motion } from 'react-motion'; // Using framer-motion logic
import { motion as framerMotion } from 'framer-motion';
import { 
  PhoneCall, 
  Wifi, 
  Fingerprint, 
  ShieldAlert, 
  Home, 
  Smartphone, 
  MonitorCheck, 
  HardDrive, 
  Zap, 
  ShieldCheck,
  ChevronLeft,
  Construction
} from 'lucide-react';

export default function ApartmentIntercomPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const intercomTypes = [
    { 
      t: "אינטרקום בסיסי", 
      d: "המערכת הקלאסית: שפופרת דיבור ופתיחה פשוטה. אמינות ללא פשרות.", 
      icon: <PhoneCall className="w-8 h-8" /> 
    },
    { 
      t: "מערכות IP & WIFI", 
      d: "הבית בכף ידכם. מענה ופתיחת הדלת ישירות מהסמארטפון מכל מקום.", 
      icon: <Wifi className="w-8 h-8" /> 
    },
    { 
      t: "זיהוי ביומטרי", 
      d: "הדור הבא: פתיחת דלת באמצעות טביעת אצבע. אבטחה ברמה הגבוהה ביותר.", 
      icon: <Fingerprint className="w-8 h-8" /> 
    },
    { 
      t: "קודן אנטי-ונדלי", 
      d: "עמידות מוחלטת למזג אוויר וחבטות. גוף מתכת חזק שלא מחליד.", 
      icon: <ShieldAlert className="w-8 h-8" /> 
    }
  ];

  return (
    <div className="min-h-screen bg-[#080a0f] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden" dir="rtl">
      
      {/* --- BACKDROP DECOR --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 px-6 z-10 text-center">
        <framerMotion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <Zap size={14} className="text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Smart_Home_Access</span>
        </framerMotion.div>

        <framerMotion.h1 
          className="text-6xl md:text-[110px] font-[1000] italic leading-[0.85] tracking-tighter uppercase mb-8"
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        >
          החבר הכי טוב <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>שלכם בבית.</span>
        </framerMotion.h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-xl md:text-2xl font-light italic leading-relaxed">
          זה כבר לא רק מכשיר פלסטיק על הקיר. האינטרקום המודרני הוא פריט דקורטיבי, חכם ואפקטיבי שהופך את החיים לקלים (ובטוחים) הרבה יותר.
        </p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* --- SECTION: WHAT IS INTERCOM? --- */}
        <framerMotion.section 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black italic leading-tight">
              יותר מסתם <br /><span className="text-cyan-500 uppercase">'מקשר פנים'</span>
            </h2>
            <div className="text-slate-400 text-lg md:text-xl italic leading-relaxed space-y-6">
              <p>
                האינטרקום עבר גלגול טכנולוגי. ממכשיר שפופרת פשוט למערכת בקרה מתוחכמת המאפשרת תקשורת בין חדרים, זיהוי פנים וצפייה בשידור חי.
              </p>
              <div className="p-6 border border-cyan-500/20 rounded-3xl bg-cyan-500/5 backdrop-blur-sm">
                <p className="text-white font-bold italic">
                  "בדיקה מהירה של מי עומד מעבר לדלת היא לא מותרות – היא הביטחון הבסיסי שלכם."
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative h-[450px] border border-white/10 rounded-[3rem] bg-[#0d1117] overflow-hidden flex items-center justify-center">
               <MonitorCheck size={120} className="text-cyan-500/20" />
               <div className="absolute bottom-10 left-10 right-10 p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-md">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-cyan-400">ENCRYPTED_SIGNAL</span>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
                  <div className="h-2 w-2/3 bg-white/10 rounded-full" />
               </div>
            </div>
          </div>
        </framerMotion.section>

        {/* --- SECTION: TYPES GRID --- */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase">אפשרויות <span className="text-cyan-500">ללא גבולות.</span></h2>
            <p className="text-slate-500 font-bold italic">מהבסיסי ועד לביומטרי - פתרונות לכל צורך ותקציב.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {intercomTypes.map((type, i) => (
              <framerMotion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 border border-white/5 rounded-[3rem] bg-white/[0.01] hover:bg-white/[0.03] transition-all flex flex-col md:flex-row gap-8 items-center text-center md:text-right"
              >
                <div className="p-6 rounded-3xl bg-cyan-500/10 text-cyan-500">
                  {type.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-black italic mb-3 text-white">{type.t}</h4>
                  <p className="text-slate-500 italic font-medium leading-relaxed">{type.d}</p>
                </div>
              </framerMotion.div>
            ))}
          </div>
        </section>

        {/* --- SECTION: INSTALLATION PROCESS --- */}
        <framerMotion.section 
          className="relative py-24 px-8 border border-white/5 rounded-[4rem] bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
            <Construction size={300} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase">התקנה מקצועית <br /><span className="text-cyan-500">ללא דופי.</span></h2>
              <p className="text-slate-400 italic text-xl leading-relaxed">
                אנשי המקצוע של אלסק בוחנים את תנאי השטח, מתאימים את המערכת באופן אישי ודואגים להתקנה נקייה ומהירה.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { t: "אפיון צרכים", i: <ShieldCheck /> },
                { t: "התאמה טכנית", i: <HardDrive /> },
                { t: "אחריות מקיפה", i: <Zap /> }
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-500">
                    {item.i}
                  </div>
                  <h5 className="font-bold italic text-lg">{item.t}</h5>
                </div>
              ))}
            </div>
          </div>
        </framerMotion.section>

        {/* --- FINAL CTA --- */}
        <section className="text-center space-y-12">
           <h2 className="text-5xl md:text-8xl font-[1000] italic leading-tight uppercase">
             אלסק. הביטחון <br /> <span className="text-cyan-500 underline decoration-1 underline-offset-[15px]">שלכם בידיים שלנו.</span>
           </h2>
           <p className="text-slate-500 font-bold italic tracking-widest uppercase text-sm">
             Available nationwide: Tel Aviv • Jerusalem • Haifa • Eilat • Beer Sheva
           </p>
           <framerMotion.button 
             whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
             className="relative group px-16 py-7 bg-white text-black font-[1000] italic text-3xl rounded-[2rem] shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all"
           >
             <span className="flex items-center gap-4">
               ייעוץ מקצועי עכשיו
               <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
             </span>
           </framerMotion.button>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <Home className="text-cyan-500" />
            <span className="text-2xl font-black italic uppercase tracking-tighter">ALSEC RESIDENTIAL</span>
          </div>
          <p className="max-w-md text-slate-600 font-bold italic text-xs leading-relaxed uppercase tracking-widest">
            Providing futuristic security & intercom solutions for modern living environments.
          </p>
        </div>
      </footer>

    </div>
  );
}