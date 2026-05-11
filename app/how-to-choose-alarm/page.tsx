"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BellRing, 
  ShieldAlert, 
  Wifi, 
  Cable, 
  Zap, 
  Users, 
  Dog, 
  Wind, 
  Home, 
  Lock, 
  CheckCircle2, 
  ArrowLeftRight,
  Radio,
  Microchip,
  Layers
} from 'lucide-react';

export default function SecurityAlarmPage() {
  const systemTypes = [
    {
      title: "מערכת קווית",
      icon: <Cable className="text-blue-500" />,
      recom: "מומלץ לבתים בבנייה",
      pros: ["יציבות מקסימלית", "ללא צורך בסוללות", "חסינה להפרעות קליטה"],
      cons: ["דורשת תשתית חיווט", "התקנה מורכבת בבית קיים"],
      color: "blue"
    },
    {
      title: "מערכת אלחוטית",
      icon: <Wifi className="text-cyan-400" />,
      recom: "מומלץ לבתים קיימים",
      pros: ["התקנה נקייה ומהירה", "גמישות במיקום גלאים", "טכנולוגיה מתקדמת"],
      cons: ["דורשת החלפת סוללות", "רגישות להפרעות קליטה"],
      color: "cyan"
    }
  ];

  const detectorTypes = [
    { name: "גלאי נפח", desc: "מזהה תנועה לפי שינויי טמפרטורה. הבחירה הנפוצה ביותר.", icon: <Wind /> },
    { name: "גלאי וילון", desc: "יוצר 'מסך' הגנה על חלונות. מתריע ברגע ניסיון החדירה.", icon: <Layers /> },
    { name: "גלאי חיות (Pet)", desc: "מתעלם מבעלי חיים ומונע אזעקות שווא מיותרות.", icon: <Dog /> }
  ];

  return (
    <div className="min-h-screen bg-[#020408] text-white font-sans selection:bg-red-500 overflow-hidden" dir="rtl">
      
      {/* Dynamic Security Radar Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/20 rounded-full animate-[ping_10s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full animate-[ping_7s_linear_infinite]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Hero Section */}
        <header className="mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-xs font-black tracking-widest italic mb-8"
          >
            <BellRing size={14} className="animate-bounce" /> ALSEC_PROTECTION_ARMED
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-[1000] italic leading-[0.85] uppercase tracking-tighter mb-12">
            איך לבחור <br/>
            <span className="text-blue-500">מערכת אזעקה</span>
          </h1>

          <p className="text-xl text-slate-400 italic max-w-2xl leading-relaxed border-r-4 border-blue-600 pr-6">
            בישראל, ביטחון הוא לא מותרות – הוא טבע שני. המדריך של אלסק יעזור לכם לבחור את מערכת ההגנה המושלמת לבית שלכם, בלי כאבי ראש מיותרים.
          </p>
        </header>

        {/* System Type Comparison */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {systemTypes.map((type, i) => (
            <div key={i} className={`p-12 bg-white/5 border border-white/10 rounded-[4rem] relative overflow-hidden group hover:border-${type.color}-500/50 transition-all`}>
              <div className="flex justify-between items-start mb-10">
                <div className={`p-5 bg-${type.color}-500/10 rounded-3xl text-${type.color}-500`}>
                  {type.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">{type.recom}</span>
              </div>
              <h3 className="text-4xl font-[1000] italic mb-8 uppercase">{type.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-black text-green-500 uppercase mb-4 tracking-widest italic">יתרונות מרכזיים</h4>
                  <ul className="space-y-3">
                    {type.pros.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm italic text-slate-300">
                        <CheckCircle2 size={14} className="text-green-500" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-black text-red-500 uppercase mb-4 tracking-widest italic">חסרונות</h4>
                  <ul className="space-y-3">
                    {type.cons.map((c, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm italic text-slate-500">
                        <div className="w-1 h-1 bg-red-500 rounded-full" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Perimeter Protection Visual */}
        <section className="mb-32 bg-blue-600 rounded-[4rem] p-16 text-black relative overflow-hidden">
          <div className="absolute top-0 left-0 p-12 opacity-10">
            <ShieldAlert size={200} />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 text-right">
              <h2 className="text-5xl font-[1000] italic uppercase leading-none italic">הגנה היקפית:<br/> להקדים תרופה למכה</h2>
              <p className="text-xl font-bold italic leading-tight">
                גלאים חיצוניים (חצר, מרפסת) מאפשרים לזהות את הפורץ עוד לפני שהוא נוגע בחלון. זוהי ההרתעה האפקטיבית ביותר שקיימת כיום.
              </p>
              <div className="flex gap-4">
                 <div className="bg-black/10 p-4 rounded-2xl backdrop-blur-sm">
                    <span className="block font-black text-2xl italic">PRE-CRIME</span>
                    <span className="text-[10px] uppercase font-bold italic">Detection Level</span>
                 </div>
                 <div className="bg-black/10 p-4 rounded-2xl backdrop-blur-sm">
                    <span className="block font-black text-2xl italic">REPEL</span>
                    <span className="text-[10px] uppercase font-bold italic">Intruder Status</span>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="bg-black/20 p-8 rounded-[3rem] border border-black/10 backdrop-blur-md">
                 <h4 className="font-black italic mb-6 border-b border-black/10 pb-4 italic">טיפ מקצועי מהמומחים של אלסק:</h4>
                 <p className="text-sm font-bold italic leading-relaxed">
                   אל תרכזו את כל הגלאים בפינה אחת. פריסה חכמה על פני כל השטח מקשה על ניטרול המערכת ושומרת על אפקטיביות מקסימלית. גלאי חיצוני הוא יקר, אך הוא משנה את חוקי המשחק.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* Detectors Showcase */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-[1000] italic uppercase italic">סוגי גלאים מומלצים</h2>
            <Radio className="text-blue-500 animate-pulse" size={40} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detectorTypes.map((det, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/[0.08] transition-all group">
                <div className="mb-8 p-4 bg-blue-500/10 rounded-2xl w-fit text-blue-500 group-hover:scale-110 transition-transform">
                  {det.icon}
                </div>
                <h3 className="text-2xl font-[1000] italic mb-4 uppercase italic">{det.name}</h3>
                <p className="text-slate-500 text-sm italic leading-relaxed">{det.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Table */}
        <section className="mb-32">
          <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 text-blue-500/5">
              <Microchip size={300} />
            </div>
            <h2 className="text-4xl font-[1000] italic uppercase mb-12 text-center italic">כמה זה עולה לכם?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-2xl font-black italic italic">מערכת קווית</span>
                    <span className="text-3xl font-[1000] text-blue-500 italic">₪1,700 - 3,500</span>
                  </div>
                  <p className="text-xs text-slate-500 italic">כולל 2 גלאים, לוח מקשים ושני צופרים. לא כולל תשתית (₪250 לנקודה).</p>
               </div>
               <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-2xl font-black italic italic">מערכת אלחוטית</span>
                    <span className="text-3xl font-[1000] text-cyan-400 italic">עד ₪5,000</span>
                  </div>
                  <p className="text-xs text-slate-500 italic">כולל 2 גלאים, לוח מקשים, חייגן ושני צופרים. התקנה מהירה ללא חיווט.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-b from-transparent to-blue-500/10 rounded-[4rem] p-20 border border-white/5">
          <div className="max-w-3xl mx-auto space-y-10">
            <Users className="mx-auto text-blue-500" size={64} />
            <h2 className="text-5xl md:text-6xl font-[1000] italic leading-none uppercase italic">אל תתפשרו על <br/>המקום הבטוח שלכם</h2>
            <p className="text-xl text-slate-400 italic leading-relaxed">
              השקעה במערכת אזעקה היא השקעה בשקט הנפשי. צוות אלסק זמין עבורכם בכל הארץ לייעוץ מקצועי, התקנה מוסמכת ויחס אישי.
            </p>
            <button className="bg-white text-black px-16 py-6 rounded-2xl font-[1000] italic text-2xl uppercase hover:bg-blue-500 transition-all flex items-center gap-4 mx-auto group">
              <Zap size={24} className="group-hover:animate-pulse" />
              קבלו ייעוץ מאלסק עכשיו
            </button>
          </div>
        </section>

      </div>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-black tracking-[1em] uppercase italic text-slate-700 italic">
          ALSEC_SECURITY // ALARM_SYSTEMS_GUIDE // 2026
        </p>
      </footer>
    </div>
  );
}