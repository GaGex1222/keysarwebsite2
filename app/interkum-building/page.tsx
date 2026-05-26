"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  History, 
  Cctv, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Wifi, 
  MonitorPlay, 
  ChevronLeft,
  ShieldCheck,
  Zap,
  Layers,
  MapPin
} from 'lucide-react';

export default function SharedBuildingIntercom() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cityList = ["תל אביב והמרכז", "ירושלים", "חיפה והגליל", "אשדוד ואשקלון", "באר שבע", "אילת"];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans selection:bg-sky-200/30" dir="rtl">
      
      {/* --- AMBIENT GRADIENT --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-50 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 px-6 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-3 mb-6 text-sky-600 font-bold italic tracking-widest text-sm"
        >
          <History size={18} />
          <span>FROM 1980s TO 2026</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[120px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-8"
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        >
          שדרגו את <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #06b6d4' }}>הכניסה לבניין.</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-slate-600 text-xl md:text-2xl font-light italic leading-relaxed">
          האינטרקום הישן עם הלחצנים כבר מזמן הפך למוצג מוזיאוני. הגיע הזמן להעניק לבניין שלכם מראה יוקרתי, בטוח וחכם שמבוסס על התשתית הקיימת.
        </p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* --- SECTION: UPGRADE ON EXISTING INFRA --- */}
        <motion.section 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-500/20 text-sky-600 font-bold italic text-sm">
              <Zap size={16} />
              <span>שדרוג חכם על תשתית קיימת</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic leading-tight uppercase">
              לא חולמים. <br /><span className="text-sky-600">משדרגים.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl italic leading-relaxed">
              יש לכם תשתית ישנה בבניין? מעולה. אנחנו לא צריכים לחפור קירות. טכנאי קיסר יודעים להלביש את המערכות החדשניות ביותר על תשתית קיימת – מה שחוסך זמן יקר ועלויות התקנה משמעותיות.
            </p>
            <div className="flex items-center gap-4 p-6 border border-sky-100 rounded-3xl bg-white/[0.02]">
              <TrendingUp className="text-sky-600 w-10 h-10" />
              <div>
                <h4 className="font-bold text-xl italic text-slate-900">ערך הנכס עולה</h4>
                <p className="text-slate-500 text-sm italic">בניין מטופח עם אינטרקום חכם שווה יותר בשוק הנדל"ן.</p>
              </div>
            </div>
          </div>

          {/* Visual: Floating UI Elements */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent blur-3xl opacity-20" />
            <motion.div 
              animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="relative z-20 w-72 h-96 border border-sky-200 rounded-[3rem] bg-white/[0.03] backdrop-blur-2xl p-6 shadow-2xl"
            >
              <div className="h-48 rounded-2xl bg-slate-900 border border-sky-100 flex items-center justify-center overflow-hidden mb-6">
                <Cctv size={48} className="text-sky-600/30" />
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-sky-100 rounded-full" />
                <div className="h-2 w-2/3 bg-sky-100 rounded-full" />
                <div className="flex gap-2 pt-4">
                  <div className="h-10 w-full rounded-xl bg-sky-100 border border-sky-500/40" />
                  <div className="h-10 w-full rounded-xl bg-sky-50 border border-sky-200" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* --- SECTION: FEATURES GRID --- */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase">הטכנולוגיה <span className="text-sky-600">שמנהלת את הבית.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Cctv />, t: "מצלמות לילה 4K", d: "זיהוי מושלם גם בחושך מוחלט, עם אופציה למצלמה חבויה." },
              { icon: <Smartphone />, t: "שליטה מהנייד", d: "פתחו את הדלת וצפו בשידור חי מכל מקום בעולם." },
              { icon: <MonitorPlay />, t: "מערכת הקלטה", d: "תיעוד מלא של כל מי שנכנס או ניסה להכנס לבניין." },
              { icon: <Layers />, t: "תגי כניסה", d: "כניסה מהירה עם צ'יפ חכם ללא צורך בהקשת קוד." }
            ].map((f, i) => (
              <div key={i} className="p-8 border border-sky-100 rounded-[2.5rem] bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <div className="mb-6 text-sky-600 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="text-xl font-bold italic mb-4">{f.t}</h4>
                <p className="text-slate-500 text-sm italic leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION: LUXURY & IMPRESSION --- */}
        <section className="relative py-24 border-y border-sky-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-64 rounded-3xl bg-sky-50 border border-sky-200" />
                  <div className="h-64 rounded-3xl bg-sky-50 border border-sky-500/10 mt-12" />
               </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-[1000] italic leading-tight uppercase">
                נוחות ויוקרה <br /><span className="text-sky-600">במערכת אחת.</span>
              </h2>
              <p className="text-slate-600 text-xl italic font-light leading-relaxed">
                האינטרקום הוא כרטיס הביקור של הבניין. מערכת חדשנית, מבריקה ואיכותית מעניקה רושם ראשוני מנצח לכל אורח, לקוח או דייר שנכנס בדלת.
              </p>
              <ul className="space-y-4">
                {["התאמה אישית לטעם העיצובי", "מסכי מגע פנימיים בכל דירה", "תחזוקה שוטפת ע\"י צוות מקצועי"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold italic text-slate-700">
                    <ShieldCheck size={20} className="text-sky-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- SECTION: SERVICE AREA & CLOSING --- */}
        <section className="space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase">קיסר בפריסה <span className="text-sky-600">ארצית.</span></h2>
            <p className="text-slate-600 italic font-bold">מגיעים לכל נקודה בישראל עם שירות ללא פשרות.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {cityList.map((city, i) => (
              <div key={i} className="px-6 py-3 border border-sky-200 rounded-full bg-sky-50 text-sm font-black italic flex items-center gap-2 hover:border-sky-500/50 transition-colors">
                <MapPin size={14} className="text-sky-600" />
                {city}
              </div>
            ))}
          </div>

          <motion.div 
            className="p-12 md:p-20 border border-sky-100 rounded-[4rem] bg-gradient-to-br from-white/[0.02] to-transparent text-center relative overflow-hidden"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <h3 className="text-3xl md:text-5xl font-black italic mb-8">כשהחיים מרגישים בטוחים, <br /> הם פשוט מרגישים <span className="text-sky-600 italic uppercase">טוב יותר.</span></h3>
            <button className="group relative px-12 py-6 bg-white text-black font-[1000] italic text-2xl rounded-2xl transition-all hover:scale-105 active:scale-95">
              <span className="flex items-center gap-4">
                התקשרו לייעוץ עכשיו
                <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
              </span>
            </button>
          </motion.div>
        </section>

      </main>

      <footer className="py-20 border-t border-sky-100 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Building className="text-sky-600" />
          <span className="text-2xl font-black italic uppercase">Keisar SHARED_BUILDINGS</span>
        </div>
        <p className="text-slate-600 font-bold italic tracking-widest text-xs uppercase">
          Providing high-end security infrastructure across all sectors.
        </p>
      </footer>

    </div>
  );
}