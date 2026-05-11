"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Cctv, 
  Cpu, 
  ArrowLeftRight, 
  Database, 
  Wifi, 
  ShieldCheck, 
  Cable, 
  RefreshCcw, 
  HardDrive, 
  Maximize2,
  Lock,
  Layers,
  ChevronLeft,
  Zap
} from 'lucide-react';

export default function HDUpgradePage() {
  const upgradeReasons = [
    { title: "הסוף לאנלוג", desc: "מערכות ישנות מתקרבות לקץ ימיהן. המחירים יורדים והטכנולוגיה מתקדמת.", icon: <RefreshCcw size={24} /> },
    { title: "נוחות התקנה", desc: "מערכות Plug-and-Play ופתרונות היברידיים מאפשרים שדרוג קל ומהיר.", icon: <Zap size={24} /> },
    { title: "עלות-תועלת", desc: "NVR משמש כבסיס לכל צרכי האחסון וניהול הנתונים של העסק.", icon: <Layers size={24} /> },
    { title: "יכולת הרחבה", desc: "ניתן להוסיף מצלמות IP למערכת קיימת ולבצע מעבר הדרגתי.", icon: <Maximize2 size={24} /> },
    { title: "עמידות RAID", desc: "שימוש בכוננים מקצועיים וגיבוי נתונים רב-שכבתי למניעת אובדן מידע.", icon: <Database size={24} /> },
    { title: "איכות תמונה", desc: "מ-0.4 מגה פיקסל ועד 29 מגה פיקסל - זיהוי פנים ולוחיות רישוי מושלם.", icon: <Cctv size={24} /> },
    { title: "תאימות רגולטורית", desc: "עמידה בסטנדרטים גלובליים מחמירים של אבטחה ותיעוד.", icon: <ShieldCheck size={24} /> },
    { title: "תכונות ענן", desc: "ניטור מרחוק, אפליקציות מתקדמות וכלי ניתוח מבוססי ענן פרטי.", icon: <Wifi size={24} /> }
  ];

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-blue-500 overflow-hidden" dir="rtl">
      
      {/* Background Tech Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Hero Section */}
        <header className="mb-24 pt-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-blue-400 mb-6 font-black tracking-widest text-xs italic uppercase"
          >
            <div className="h-px w-8 bg-blue-400" />
            ANALOG_TO_DIGITAL_EVOLUTION
          </motion.div>
          
          <h1 className="text-6xl md:text-[10rem] font-[1000] italic leading-[0.8] mb-12 tracking-tighter uppercase">
            שדרוג <br/>
            <span className="text-blue-500">למערכות HD</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl text-slate-400 italic max-w-xl leading-relaxed border-r-2 border-white/10 pr-6">
              המדריך המלא לשדרוג מערך המצלמות שלך מאנלוגי ל-HD ו-IP. גלו כיצד רזולוציה גבוהה הופכת את התיעוד לאפקטיבי, מדויק ומתקדם יותר.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-blue-500 font-black text-2xl italic">29MP</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Max Resolution</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-blue-500 font-black text-2xl italic">250m</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Coax Range</div>
              </div>
            </div>
          </div>
        </header>

        {/* Technology Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          
          {/* AHD CCTV */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] relative group overflow-hidden">
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
             <Cable className="text-blue-500 mb-6" size={40} />
             <h3 className="text-2xl font-[1000] italic mb-4 uppercase">מה זה AHD?</h3>
             <p className="text-slate-400 text-sm italic leading-relaxed mb-6">
               טלוויזיה במעגל סגור המשתמשת בכבל קואקסיאלי (RG59/RG6) להעברת וידאו HD. מאפשרת שדרוג ל-720p ו-1080p מבלי להחליף את התשתית הקיימת למרחקים של עד 250 מטר.
             </p>
             <ul className="text-[11px] text-slate-500 space-y-2 font-bold uppercase italic">
               <li>• Works with RG59/RG6 Coax</li>
               <li>• Zero Latency Transmission</li>
               <li>• Cost Effective Upgrade</li>
             </ul>
          </div>

          {/* HD-SDI */}
          <div className="bg-blue-500 p-10 rounded-[3rem] text-black group overflow-hidden relative">
             <Cpu className="text-black/30 mb-6" size={40} />
             <h3 className="text-2xl font-[1000] italic mb-4 uppercase">טכנולוגיית HD-SDI</h3>
             <p className="text-black/80 text-sm italic leading-relaxed mb-6 font-bold">
               הפתרון למי שרוצה איכות IP ללא סיבוכי רשת. תמיכה ב-1080p (2.1MP) ללא עכבות (Latency) וללא בעיות רוחב פס.
             </p>
             <div className="space-y-3">
               <div className="flex items-center gap-2 text-xs font-black italic"><ShieldCheck size={14}/> אין צורך בהקצאת IP</div>
               <div className="flex items-center gap-2 text-xs font-black italic"><ShieldCheck size={14}/> אין בעיות תאימות מותגים</div>
               <div className="flex items-center gap-2 text-xs font-black italic"><ShieldCheck size={14}/> המרה ישירה ל-HDMI</div>
             </div>
          </div>

          {/* IP Systems */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] relative group overflow-hidden">
             <Wifi className="text-cyan-400 mb-6" size={40} />
             <h3 className="text-2xl font-[1000] italic mb-4 uppercase text-cyan-400">NVR & IP CLOUD</h3>
             <p className="text-slate-400 text-sm italic leading-relaxed mb-6">
               העתיד של האבטחה. מערכות רשתיות מבוססות NVR המציעות אחסון חכם (RAID), ניהול מרחוק ואנליטיקה מתקדמת בענן.
             </p>
             <div className="flex gap-2">
               <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[10px] font-black rounded-lg">RAID SUPPORT</span>
               <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[10px] font-black rounded-lg">NAS READY</span>
             </div>
          </div>
        </div>

        {/* Resolution Comparison Visual */}
        <section className="mb-32 relative bg-white/5 border border-white/10 rounded-[4rem] p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-4xl font-[1000] italic uppercase italic leading-none">ההבדל <br/>שמשנה הכל</h2>
               <p className="text-slate-400 italic">
                 מצלמה סטנדרטית מקליטה ב-0.4MP בלבד. המערכות של קיסר מקליטות עד 29MP. זה ההבדל בין "כתם מטושטש" לבין זיהוי פנים ולוחית רישוי שניתן להשתמש בו בבית משפט.
               </p>
               <div className="space-y-4">
                 <div className="flex items-center gap-4">
                   <div className="w-24 h-1 bg-red-500/20" />
                   <span className="text-xs font-bold text-slate-500">ANALOG: 720x480 (Low Detail)</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-full h-1 bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                   <span className="text-xs font-bold text-blue-500 whitespace-nowrap">ULTRA HD: 6576×4384 (Full Detail)</span>
                 </div>
               </div>
            </div>
            <div className="md:w-1/2 w-full aspect-video bg-black rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 p-10 flex flex-col justify-between">
                  <div className="text-[10px] font-black tracking-widest opacity-50 uppercase italic">Visual_Analysis_Mode</div>
                  <div className="h-32 w-32 border border-cyan-500/50 relative">
                     <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-500" />
                     <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-500" />
                     <div className="absolute inset-0 flex items-center justify-center text-[10px] text-cyan-500 font-black animate-pulse uppercase italic">Face_Detected</div>
                  </div>
               </div>
               <Maximize2 size={120} className="text-white/5" />
            </div>
          </div>
        </section>

        {/* 8 Reasons Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-[1000] italic uppercase italic">8 סיבות לשדרוג</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upgradeReasons.map((reason, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group">
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform w-fit">
                  {reason.icon}
                </div>
                <h4 className="text-lg font-[1000] italic mb-3 uppercase italic leading-tight">{i+1}. {reason.title}</h4>
                <p className="text-slate-500 text-xs italic leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-blue-500 rounded-[4rem] p-16 text-black text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
             <RefreshCcw size={150} />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-[1000] italic mb-8 uppercase italic leading-none">עוזבים את האנלוג מאחור</h2>
            <p className="text-xl font-bold italic mb-12 max-w-2xl mx-auto italic">
              זה הזמן למצוא את הדרך מחוץ לסבך האנלוגי לעבר עולם ה-HD. שפרו את היעילות העסקית והגבירו את הביטחון עם קיסר.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="bg-black text-white px-12 py-5 rounded-2xl font-[1000] italic text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform group">
                <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
                שיחת ייעוץ לשדרוג המערך
              </button>
            </div>
          </div>
        </section>

      </div>
      
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-black tracking-[1em] uppercase italic text-slate-600 italic">
          Keisar_EVOLUTION // HD_SYSTEMS // 2026
        </p>
      </footer>
    </div>
  );
}