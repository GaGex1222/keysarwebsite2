"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, Eye, ShieldCheck, Cloud, LayoutGrid, 
  Moon, Save, PlusCircle, Headset, Smartphone, 
  Maximize, Zap, CheckCircle2
} from 'lucide-react';

export default function SecurityWithMonitorPage() {
  const features = [
    { icon: <Zap size={24} />, title: "גישה מיידית", desc: "אין צורך באינטרנט או בטלפון; הכל מוצג בלחיצת כפתור אחת." },
    { icon: <ShieldCheck size={24} />, title: "פרטיות מלאה", desc: "מערכת סגורה שאינה תלויה בגורמים חיצוניים או בשרתים ציבוריים." },
    { icon: <LayoutGrid size={24} />, title: "תצוגה מרובה", desc: "צפייה במספר מצלמות בו-זמנית על מסך גדול וברור." },
    { icon: <Smartphone size={24} />, title: "שילוב היברידי", desc: "תמיכה מלאה באפליקציה במקביל למסך הייעודי." }
  ];

  const tableData = [
    { label: "גודל המסך", check: "7–12 אינץ׳", why: "תצוגה ברורה ונוחה לצפייה בזמן אמת" },
    { label: "רזולוציית צילום", check: "Full HD / 4K", why: "מאפשרת זיהוי פרטים קטנים כמו פנים או לוחיות רכב" },
    { label: "צילום לילה", check: "אינפרא אדום / מצב אוטומטי", why: "פיקוח מלא גם בחושך מוחלט" },
    { label: "אחסון וגיבוי", check: "כרטיס זיכרון, HDD, ענן", why: "שמירה על החומרים גם במקרה של תקלה" },
    { label: "אפשרות הרחבה", check: "תמיכה בריבוי מצלמות", why: "שליטה בכמה אזורים בו־זמנית" },
    { label: "שירות ואחריות", check: "חברה מוכרת עם תמיכה", why: "מבטיח שימוש רציף ושקט נפשי לאורך זמן" }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans" dir="rtl">
      
      {/* Hero Section - The "Command Center" feel */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-sky-100 blur-[150px] -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-lg text-sky-600 text-xs font-black mb-8 tracking-widest">
              <Monitor size={14} /> DEDICATED_DISPLAY_SYSTEM
            </div>
            <h1 className="text-6xl md:text-8xl font-[1000] italic leading-[0.9] tracking-tighter mb-8">
              אבטחה עם <br/>
              <span className="text-sky-600">מסך ייעודי</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light italic border-r-4 border-sky-500 pr-6 max-w-2xl">
              אל תסתמכו רק על הסמארטפון. חוויית שליטה מיידית, תצוגה חיה וביטחון מלא במערכת אחת שמשלבת מסך אינטראקטיבי עם מצלמות קצה.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Solution Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-black rounded-[2rem] border border-sky-200 overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Monitor size={120} className="text-slate-900/10 group-hover:text-sky-600/20 transition-all duration-700" />
              </div>
              <div className="absolute bottom-6 right-6 left-6 flex justify-between items-center bg-sky-100 backdrop-blur-md p-4 rounded-xl border border-sky-200">
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                   <span className="text-[10px] font-black tracking-widest">LIVE_SURVEILLANCE</span>
                </div>
                <div className="text-[10px] font-mono opacity-50">QUAD_VIEW_ENABLED</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-100 blur-3xl rounded-full" />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter">פתרון חכם לנוחות וביטחון</h2>
            <p className="text-slate-600 leading-relaxed italic">
              מצלמת אבטחה עם מסך היא מערכת המגיעה עם יחידת תצוגה ייעודית – מסך מובנה או נייד. היא מאפשרת צפייה בזמן אמת ללא צורך בהפעלת אפליקציה או חיבור מרוחק. פתרון אידיאלי למשפחות העוקבות אחר הכניסה לבית או בעלי עסקים השולטים על המתרחש בקופה ובמחסן.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="p-4 bg-sky-50 border border-sky-100 rounded-2xl hover:border-sky-500/30 transition-all">
                  <div className="text-sky-600 mb-2">{f.icon}</div>
                  <div className="text-sm font-black italic text-slate-900 mb-1">{f.title}</div>
                  <div className="text-[11px] text-slate-500 italic leading-tight">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-32 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-[1000] italic mb-16 uppercase italic">למי המוצר מיועד?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "בתים פרטיים", d: "השגחה על הילדים והכניסה לבית." },
              { t: "עסקים קטנים", d: "פיקוח על המתרחש בקופה ובחנות." },
              { t: "בנייני מגורים", d: "מעקב אחר חניונים ולובי הבניין." },
              { t: "משרדים", d: "פתרון יעיל ללא שירותים חיצוניים יקרים." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-black border border-sky-200 rounded-3xl group hover:border-sky-500 transition-all">
                <h4 className="text-xl font-black italic mb-3 text-sky-600">{item.t}</h4>
                <p className="text-slate-600 text-sm italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Integration: App & Cloud */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-[1000] italic mb-8 border-r-4 border-sky-500 pr-6">חיבור לאפליקציות ולענן</h2>
            <p className="text-slate-700 text-lg mb-8 italic leading-relaxed">
              מצלמות עם מסך אינן סותרות את הגמישות הדיגיטלית. הן משלבות בין המסך הפיזי בבית לבין גישה מכל מקום בעולם דרך הסמארטפון. התיעוד נשמר באופן כפול: מקומי על גבי המערכת וגיבוי מאובטח בענן למקרה של פגיעה פיזית בציוד.
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-sky-600 font-black italic text-xs uppercase tracking-widest"><Cloud size={16} /> Cloud_Sync</div>
              <div className="flex items-center gap-2 text-sky-600 font-black italic text-xs uppercase tracking-widest"><Smartphone size={16} /> Mobile_Ready</div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             {[
               { icon: <Maximize />, label: "זום דיגיטלי" },
               { icon: <Moon />, label: "צילום לילה IR" },
               { icon: <Save />, label: "אחסון מקומי" },
               { icon: <PlusCircle />, label: "הרחבת מצלמות" }
             ].map((box, i) => (
               <div key={i} className="aspect-square bg-white rounded-3xl flex flex-col items-center justify-center border border-sky-100 group hover:border-sky-500 transition-all">
                  <div className="text-sky-600 mb-4 group-hover:scale-110 transition-transform">{box.icon}</div>
                  <div className="font-black italic text-sm">{box.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Technical Specification Table */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white rounded-[3rem] border border-sky-200 overflow-hidden shadow-2xl">
          <div className="p-10 bg-sky-600 text-white">
             <h3 className="text-3xl font-[1000] italic uppercase">מה חשוב לבדוק לפני רכישה?</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-sky-100 text-xs font-black uppercase italic tracking-widest text-slate-600">
                  <th className="p-6 border-b border-sky-100">קריטריון</th>
                  <th className="p-6 border-b border-sky-100">מה לבדוק?</th>
                  <th className="p-6 border-b border-sky-100">למה זה חשוב?</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tableData.map((row, i) => (
                  <tr key={i} className="border-b border-sky-100 hover:bg-sky-50 transition-colors group">
                    <td className="p-6 font-black italic text-slate-900">{row.label}</td>
                    <td className="p-6 text-sky-600 font-bold">{row.check}</td>
                    <td className="p-6 text-slate-600 italic">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Competitive Edge - Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="p-12 bg-gradient-to-l from-cyan-500/10 to-transparent border-r-4 border-sky-500 rounded-l-[3rem]">
          <h3 className="text-3xl font-[1000] italic mb-6 uppercase italic">היתרון התחרותי</h3>
          <p className="text-xl text-slate-700 italic max-w-4xl leading-relaxed">
            בעוד שמצלמות ביתיות רגילות מחייבות אתכם להיות עם הסמארטפון זמין, מערכת עם מסך מציעה זמינות מיידית, פשטות ואינטגרציה מלאה עם אורח החיים. זוהי חוויית שימוש אחרת לגמרי – לראות את הכל מול העיניים, בלי אפליקציות ובלי עיכובים.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-[1000] italic mb-8 italic">השקעה חכמה לשקט נפשי ארוך טווח</h2>
          <p className="text-xl text-slate-600 italic mb-12">צוות קיסר מציע פתרונות מותאמים אישית, התקנה מקצועית ושירות מקיף לכל אורך הדרך.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-sky-600 text-white px-12 py-5 rounded-2xl font-[1000] text-xl italic shadow-[0_10px_40px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform">
              לקבלת הצעת מחיר אישית
            </button>
            <div className="flex items-center justify-center gap-3 text-sky-600 font-black italic">
               <Headset size={24} />
               <span>תמיכה טכנית ושירות VIP</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-sky-100 text-center">
        <p className="text-[10px] font-black tracking-[0.8em] uppercase italic opacity-30">
          Keisar SECURITY // MONITOR_INTEGRATED_SYSTEM // 2026
        </p>
      </footer>
    </div>
  );
}