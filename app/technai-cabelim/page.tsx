"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Headphones, 
  BatteryCharging, 
  RefreshCw, 
  UserCog, 
  MapPin, 
  Smartphone, 
  CheckCircle2, 
  ChevronLeft,
  Construction,
  Stethoscope
} from 'lucide-react';

export default function AlarmTechnicianPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans selection:bg-orange-500/30 overflow-hidden" dir="rtl">
      
      {/* --- SERVICE STATUS BAR --- */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-orange-500/10 border-b border-orange-500/20 backdrop-blur-md px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-orange-400">Technicians Online: 24/7 Support Active</span>
        </div>
        <div className="text-[10px] font-mono text-slate-900/40 uppercase hidden md:block">System Check: Optimal</div>
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-20 px-6 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
        >
          <UserCog size={14} />
          <span>Precision Engineering & Support</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[115px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-8"
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        >
          טכנאי מומחה <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f97316' }}>עד הבית.</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-slate-600 text-xl md:text-2xl font-light italic leading-relaxed">
          מערכת אבטחה היא טובה רק כמו הטכנאי שהתקין אותה. בקיסר, אנחנו מבטיחים מקצוענות ללא פשרות, ציוד קצה ושירות שזמין עבורך מסביב לשעון.
        </p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* --- SECTION: WHY Keisar (The Core Strengths) --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck />, t: "מומחיות מוכחת", d: "צוות טכנאים עם ניסיון שטח עשיר בכל סוגי המערכות הקיימות בשוק." },
            { icon: <Clock />, t: "זמינות 24/7", d: "מענה מהיר לכל תקלה או שאלה, כי הביטחון שלך לא יוצא להפסקה." },
            { icon: <Wrench />, t: "ציוד פרימיום", d: "התאמה אישית של רכיבי האבטחה האיכותיים ביותר המותאמים למבנה הבית." },
            { icon: <Construction />, t: "אחריות מקיפה", d: "אנחנו עומדים מאחורי כל התקנה ומעניקים אחריות מלאה על המוצרים והשירות." },
            { icon: <MapPin />, t: "פריסה ארצית", d: "מגיעים לכל מקום בישראל עם ציוד טכני מלא ופתרונות מיידיים." },
            { icon: <Headphones />, t: "ליווי אישי", d: "ייעוץ מקצועי מאפיון הצרכים ועד להדרכה מלאה על תפעול המערכת." }
          ].map((item, i) => (
            <motion.div 
              key={i} whileHover={{ y: -5 }}
              className="p-8 border border-sky-100 rounded-[2.5rem] bg-white/[0.02] hover:bg-orange-500/[0.05] hover:border-orange-500/20 transition-all group"
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-black italic uppercase mb-3">{item.t}</h4>
              <p className="text-slate-500 text-sm italic leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </section>

        {/* --- SECTION: INSTALLATION PROCESS (The Flow) --- */}
        <section className="relative py-24 px-12 border border-sky-100 rounded-[4rem] bg-white/[0.01] overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-[120px] opacity-20" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black italic leading-tight uppercase">מה כוללת <br /><span className="text-orange-500">ההתקנה?</span></h2>
              <div className="space-y-6">
                {[
                  { t: "ייעוץ ואפיון", d: "הערכת צרכים בשטח ותכנון מיקומי חיישנים אסטרטגיים." },
                  { t: "ביצוע מקצועי", d: "התקנה נקייה, מהירה ומדויקת של המצלמות ולוחות הבקרה." },
                  { t: "הדרכה מלאה", d: "הסבר מפורט על ניהול המערכת, האפליקציה ותפעול שוטף." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-black italic">{idx + 1}</div>
                    <div>
                      <h5 className="font-bold text-lg italic">{step.t}</h5>
                      <p className="text-slate-500 text-sm italic">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl bg-slate-900 border border-sky-200 flex items-center justify-center relative overflow-hidden">
                <Smartphone className="text-orange-500/20 w-40 h-40 absolute animate-pulse" />
                <div className="relative z-10 text-center space-y-4">
                   <div className="px-6 py-2 rounded-full border border-orange-500 bg-orange-500/10 text-orange-500 text-xs font-black italic uppercase">System Integration Active</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: MAINTENANCE (The Health Check) --- */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-7xl font-black italic uppercase">תחזוקה <span className="text-orange-500">מונעת.</span></h2>
             <p className="text-slate-500 font-bold italic uppercase tracking-widest">Ensuring 100% Operational Readiness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 border border-sky-100 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent flex gap-8 items-start">
              <Stethoscope className="text-orange-500 w-12 h-12 flex-shrink-0" />
              <div className="space-y-4">
                <h4 className="text-2xl font-black italic uppercase">בדיקות תקופתיות</h4>
                <p className="text-slate-600 italic leading-relaxed text-lg">
                  אנחנו לא מחכים לתקלה. הטכנאים שלנו מבצעים בדיקות שגרתיות לוודא שכל חיישן, סירנה ופאנל פועלים בשיא הדיוק.
                </p>
              </div>
            </div>

            <div className="p-12 border border-sky-100 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent flex gap-8 items-start">
              <BatteryCharging className="text-orange-500 w-12 h-12 flex-shrink-0" />
              <div className="space-y-4">
                <h4 className="text-2xl font-black italic uppercase">אנרגיה ועדכונים</h4>
                <p className="text-slate-600 italic leading-relaxed text-lg">
                  החלפת סוללות יזומה ועדכוני גרסה לתוכנה כדי להגן עליכם מפני פריצות דיגיטליות ולשמור על אמינות המערכת.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="text-center py-20 bg-orange-500/5 border border-orange-500/10 rounded-[4rem] relative overflow-hidden">
           <RefreshCw className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500/5 w-[500px] h-[500px] animate-spin-slow" />
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative z-10 space-y-10">
             <h2 className="text-5xl md:text-[80px] font-[1000] italic leading-tight uppercase">
               צריך טכנאי <span className="text-orange-500 italic uppercase">עכשיו?</span>
             </h2>
             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button className="group relative px-16 py-8 bg-orange-600 text-slate-900 font-[1000] italic text-2xl rounded-2xl shadow-[0_0_50px_rgba(249,115,22,0.3)] transition-all hover:scale-105 active:scale-95">
                  <span className="flex items-center gap-4">
                    הזמן טכנאי מוסמך
                    <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
                  </span>
               </button>
               <div className="text-right">
                 <p className="text-slate-600 font-bold italic uppercase text-xs">שירות חירום 24/7</p>
                 <p className="text-2xl font-black italic">05X-XXXXXXX</p>
               </div>
             </div>
           </motion.div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-sky-100 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <CheckCircle2 size={32} className="text-orange-500" />
            <span className="text-2xl font-black italic uppercase tracking-tighter">Keisar SERVICE_CORE</span>
          </div>
          <p className="text-slate-600 font-bold italic text-[10px] uppercase tracking-widest max-w-sm leading-relaxed">
            Professional maintenance and field support for nationwide security infrastructures.
          </p>
        </div>
      </footer>

    </div>
  );
}