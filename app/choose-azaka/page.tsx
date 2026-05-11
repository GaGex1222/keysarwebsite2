"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Wifi, 
  WifiOff, 
  Home, 
  Wind, 
  Settings, 
  Lock, 
  Eye, 
  ChevronLeft,
  Dog,
  CircleDollarSign,
  UserCheck2,
  Radar
} from 'lucide-react';

export default function AlarmSystemsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-red-500/30 overflow-hidden" dir="rtl">
      
      {/* --- RADAR ANIMATION OVERLAY --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[ping_5s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-red-500/10 rounded-full" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 px-6 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
        >
          <Radar size={14} className="animate-spin-slow" />
          <span>Active Perimeter Defense</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[110px] font-[1000] italic leading-[0.85] tracking-tighter uppercase mb-8"
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        >
          המקום <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #ef4444' }}>הבטוח בעולם.</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-slate-400 text-xl md:text-2xl font-light italic leading-relaxed">
          מערכת האזעקה היא קו ההגנה הראשון של הבית. בקיסר, אנחנו הופכים את הבית שלכם למבצר חכם שמתריע עוד לפני שהפורץ נוגע בדלת.
        </p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* --- SECTION: SYSTEM TYPES (WIRED VS WIRELESS) --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 border border-white/5 rounded-[3rem] bg-white/[0.02] space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
            <WifiOff className="text-red-500 w-12 h-12" />
            <h3 className="text-3xl font-black italic uppercase">מערכת קווית</h3>
            <p className="text-slate-400 italic leading-relaxed">
              הבחירה של אנשי המקצוע לבתים בבנייה. יציבות מקסימלית, ללא צורך בסוללות ועמידות מוחלטת בפני שיבושי קליטה.
            </p>
            <div className="text-xs font-mono text-red-500/50 uppercase tracking-widest">Recommended for new builds</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 border border-white/5 rounded-[3rem] bg-white/[0.02] space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500" />
            <Wifi className="text-cyan-500 w-12 h-12" />
            <h3 className="text-3xl font-black italic uppercase">מערכת אלחוטית</h3>
            <p className="text-slate-400 italic leading-relaxed">
              הפתרון המושלם לבתים קיימים. התקנה נקייה ללא צורך בתשתיות מורכבות, גמישות מלאה במיקום הגלאים ואמינות טכנולוגית גבוהה.
            </p>
            <div className="text-xs font-mono text-cyan-500/50 uppercase tracking-widest">Perfect for existing homes</div>
          </motion.div>
        </section>

        {/* --- SECTION: PERIMETER PROTECTION --- */}
        <section className="relative py-24 bg-red-500/5 border-y border-white/5 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase leading-tight">הגנה היקפית: <br /><span className="text-red-500">להקדים תרופה למכה.</span></h2>
            <p className="text-slate-400 text-xl italic leading-relaxed">
              אל תחכו שהפורץ ייכנס לסלון. גלאים חיצוניים בחצר ובמרפסת מרתיעים את הפולשים ומפעילים את האזעקה עוד בשלב ניסיון החדירה.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
               {[
                 { icon: <Wind />, t: "גלאי וילון" },
                 { icon: <Eye />, t: "גלאי נפח" },
                 { icon: <Dog />, t: "מתאים לבעלי חיים" },
                 { icon: <Lock />, t: "אפס אזעקות שווא" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-black/40 border border-white/5">
                   <div className="text-red-500">{item.icon}</div>
                   <span className="font-bold italic text-xs uppercase">{item.t}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- SECTION: PRICING & TIERS --- */}
        <section className="space-y-16">
          <div className="flex items-end justify-between border-b border-white/10 pb-8">
            <h2 className="text-5xl font-black italic uppercase">עלויות <br /><span className="text-red-500 italic">והשקעה.</span></h2>
            <CircleDollarSign size={60} className="text-slate-800" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
            <div className="space-y-4">
              <h4 className="text-2xl font-black italic text-red-500">מערכת קווית</h4>
              <p className="text-5xl font-[1000] tracking-tighter">₪1,700 - ₪3,500</p>
              <ul className="text-slate-500 font-medium italic space-y-2">
                <li>• כולל 2 גלאים ולוח מקשים</li>
                <li>• דורש הכנת תשתית מראש</li>
                <li>• ללא צורך בתחזוקת סוללות</li>
              </ul>
            </div>
            <div className="space-y-4 border-r border-white/10 pr-12">
              <h4 className="text-2xl font-black italic text-cyan-500">מערכת אלחוטית</h4>
              <p className="text-5xl font-[1000] tracking-tighter">₪3,000 - ₪5,000</p>
              <ul className="text-slate-500 font-medium italic space-y-2">
                <li>• התקנה מהירה ונקייה</li>
                <li>• כולל חייגן וצופרים עוצמתיים</li>
                <li>• שליטה מלאה מהסמארטפון</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- SECTION: PRO TIPS --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-white/[0.02] p-12 md:p-24 rounded-[4rem] border border-white/5"
        >
          <div className="space-y-8">
            <UserCheck2 className="text-red-500 w-16 h-16" />
            <h2 className="text-4xl md:text-6xl font-black italic leading-tight uppercase">איך לבחור <br /> <span className="text-red-500">איש מקצוע?</span></h2>
            <p className="text-slate-400 text-lg italic leading-relaxed">
              אל תתפשרו על הביטחון שלכם. בחרו מתקין מוסמך, וודאו שיש לו ניסיון והכי חשוב – כימיה ויחסי אנוש. בקיסר, השירות הוא חלק בלתי נפרד מהמיגון.
            </p>
            <div className="space-y-4 font-bold italic text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>הסמכה מטעם היבואן</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>ליווי צמוד מאפיון ועד התקנה</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-square">
             <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full" />
             <div className="relative h-full flex flex-col justify-center gap-6">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }} whileInView={{ x: "0%" }} transition={{ delay: i * 0.2, duration: 1.5 }}
                      className="h-full bg-red-500/40 w-1/2" 
                    />
                  </div>
                ))}
                <div className="text-center">
                  <span className="text-[120px] font-[1000] italic leading-none opacity-10">PRO</span>
                </div>
             </div>
          </div>
        </motion.section>

        {/* --- FINAL CTA --- */}
        <section className="text-center py-20">
           <motion.h2 
             initial={{ scale: 0.9 }} whileInView={{ scale: 1 }}
             className="text-5xl md:text-[90px] font-[1000] italic leading-tight uppercase mb-12"
           >
             הגנו על <span className="text-red-500 italic uppercase underline decoration-2 underline-offset-8">הבית</span> <br /> עוד היום.
           </motion.h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <button className="group relative px-16 py-8 bg-red-600 text-white font-[1000] italic text-2xl rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.3)] transition-all hover:scale-105 active:scale-95">
                <span className="flex items-center gap-4">
                  קבלו הצעת מחיר למערכת מיגון
                  <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
                </span>
             </button>
           </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <ShieldAlert size={32} className="text-red-500" />
            <span className="text-2xl font-black italic uppercase tracking-tighter">Keisar DEFENSE_SYSTEMS</span>
          </div>
          <p className="text-slate-600 font-bold italic text-[10px] uppercase tracking-widest max-w-sm leading-relaxed">
            Professional security integration and alert systems for high-end residential and commercial assets.
          </p>
        </div>
      </footer>

    </div>
  );
}