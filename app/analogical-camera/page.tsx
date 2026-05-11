"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, Eye, ShieldCheck, Database, Layers, 
  Network, HardDrive, Cpu, Zap, Info, 
  ChevronLeft, AlertCircle, Maximize, Share2,
  Table as TableIcon, Activity
} from 'lucide-react';

const techComparison = [
  { tech: "IP", res: "5.0MP - 20MP+", quality: "הטובה ביותר, חדות מקסימלית", distance: "100m (CAT5)", compatibility: "תקן פתוח / ONVIF" },
  { tech: "HD-CVI", res: "1080p", quality: "נאמנה למציאות, טובה ביום", distance: "487m (RG59)", compatibility: "קניינית (Dahua)" },
  { tech: "AHD", res: "1080p", quality: "טובה, פחות חדה", distance: "487m (RG59)", compatibility: "תקן פתוח" },
  { tech: "HD-TVI", res: "1080p", quality: "חדה מאוד, צבעים נאמנים", distance: "487m (RG59)", compatibility: "מעל 100 יצרנים" },
];

export default function IPCamerasGuidePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) - 0.5, 
        y: (e.clientY / window.innerHeight) - 0.5 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans overflow-x-hidden selection:bg-blue-500/30" dir="rtl">
      
      {/* --- GRID BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-48 pb-32 px-6 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-xl"
        >
          <Activity size={16} className="text-blue-400 animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">Next_Gen_Surveillance // IP_VS_ANALOG</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[110px] font-[1000] italic leading-[0.85] tracking-tighter uppercase mb-10"
          style={{ x: mousePos.x * -20, y: mousePos.y * -15 }}
        >
          עולם ה-<span className="text-blue-500">IP</span> <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>מול ה-HD.</span>
        </motion.h1>

        <p className="max-w-3xl text-slate-400 text-xl md:text-2xl italic font-light leading-relaxed border-l-4 border-blue-500/50 pl-8">
          המדריך המלא לבחירת מערכות צילום: מרזולוציות מגה-פיקסל ועד תשתיות כבילה חכמות. 
          כל מה שצריך לדעת על המעבר לדיגיטל.
        </p>
      </header>

      {/* --- CORE CONTENT --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-60">
        
        {/* Section 1: IP Advantages (The High-Tech Choice) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="space-y-16"
        >
          <div className="flex items-end gap-6 border-b border-white/5 pb-10">
            <div className="bg-blue-500 p-4 rounded-2xl"><Video size={40} className="text-black" /></div>
            <div>
              <h2 className="text-5xl font-[1000] italic uppercase">העליונות של IP</h2>
              <p className="text-blue-400 font-mono text-sm tracking-widest">DIGITAL_REVOLUTION_01</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all group">
              <Maximize className="mb-6 text-blue-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-2xl font-black italic mb-4">רזולוציה ללא פשרות</h3>
              <p className="text-slate-400 leading-relaxed font-light italic">
                יכולת זיהוי פרטים לשימוש משפטי, הגדלה דיגיטלית ללא איבוד צלילות ודיוק רב לניתוח אוטומטי.
              </p>
            </div>

            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all group">
              <Layers className="mb-6 text-blue-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-2xl font-black italic mb-4">PoE - כבל אחד להכל</h3>
              <p className="text-slate-400 leading-relaxed font-light italic">
                חשמל, וידאו ונתונים על גבי כבל Ethernet בודד. פשטות התקנה שחוסכת זמן ותשתית כפולה.
              </p>
            </div>

            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all group">
              <Network className="mb-6 text-blue-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-2xl font-black italic mb-4">עצמאות רשתית</h3>
              <p className="text-slate-400 leading-relaxed font-light italic">
                כל מצלמה היא שרת וידאו עצמאי עם כתובת IP ייחודית, המאפשרת גישה ישירה מכל מקום בעולם.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Technical Constraints (Dark Glass Style) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="p-12 rounded-[4rem] bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle className="text-red-500" size={32} />
              <h2 className="text-4xl font-[1000] italic uppercase">מגבלות ה-IP</h2>
            </div>
            <ul className="space-y-6">
              {[
                "דרישה לתשתית רשת מורכבת ויקרה",
                "מרחק שידור מוגבל (עד 100 מטר ללא הגברה)",
                "השהיית וידאו (Latency) נפוצה בשידורים חיים",
                "צריכת רוחב פס משמעותית ברשת הארגונית"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-bold italic text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl font-[1000] italic leading-tight">
              האלטרנטיבה: <br /> <span className="text-blue-500">ANALOG HD</span>
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed italic">
              מערכות אלו מספקות איכות של 1080p על גבי תשתית קואקסיאלית קיימת. זהו הפתרון האידיאלי לשדרוג מבלי להחליף את כל הכבילה בבניין.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="px-6 py-3 border border-white/10 rounded-full font-mono text-xs">NO_LICENSE_FEES</div>
               <div className="px-6 py-3 border border-white/10 rounded-full font-mono text-xs">ZERO_LATENCY</div>
               <div className="px-6 py-3 border border-white/10 rounded-full font-mono text-xs">500M_RANGE</div>
            </div>
          </div>
        </section>

        {/* Section 3: Professional Comparison Table */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <TableIcon className="mx-auto text-blue-500" size={40} />
            <h2 className="text-5xl font-[1000] italic uppercase">השוואת טכנולוגיות</h2>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 font-black italic uppercase text-blue-400">טכנולוגיה</th>
                  <th className="p-6 font-black italic uppercase text-blue-400">רזולוציה מקסימלית</th>
                  <th className="p-6 font-black italic uppercase text-blue-400">איכות שידור</th>
                  <th className="p-6 font-black italic uppercase text-blue-400">מרחק (RG59)</th>
                  <th className="p-6 font-black italic uppercase text-blue-400">תאימות</th>
                </tr>
              </thead>
              <tbody className="font-bold italic">
                {techComparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                    <td className="p-6 text-white text-xl">{row.tech}</td>
                    <td className="p-6 text-slate-400">{row.res}</td>
                    <td className="p-6 text-slate-400">{row.quality}</td>
                    <td className="p-6 text-slate-400">{row.distance}</td>
                    <td className="p-6 text-slate-400">{row.compatibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 4: Storage & Bandwidth (Tech UI) */}
        <section className="relative p-12 md:p-24 rounded-[4rem] border border-blue-500/20 bg-blue-500/[0.02] overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Database size={200} className="text-blue-500" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-4xl font-[1000] italic">אחסון ורוחב פס</h3>
              <p className="text-slate-400 text-lg leading-relaxed italic">
                רזולוציות גבוהות (5MP-20MP) דורשות נפח אחסון אדיר. בחירה נכונה של קצב פריימים (FPS) ושיטת דחיסה היא קריטית לאופטימיזציה של המערכת. בקיסר, אנו מתכננים את השרתים כך שיעמדו בעומס המידע מבלי לקרוס.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 rounded-3xl bg-black/40 border border-white/5 flex flex-col items-center justify-center text-center">
                <Cpu className="text-blue-500 mb-4" />
                <div className="text-2xl font-black">H.265+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-tighter">Compression_Standard</div>
              </div>
              <div className="p-8 rounded-3xl bg-black/40 border border-white/5 flex flex-col items-center justify-center text-center">
                <HardDrive className="text-blue-500 mb-4" />
                <div className="text-2xl font-black">20TB+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-tighter">Scalable_Storage</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center space-y-12"
        >
          <h2 className="text-5xl md:text-8xl font-[1000] italic leading-none">
            צריכים ייעוץ <br /> <span className="text-blue-500">טכנולוגי מקצועי?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-blue-500 text-black px-16 py-6 rounded-2xl font-[1000] text-2xl italic hover:bg-white transition-all shadow-2xl shadow-blue-500/20 flex items-center gap-4">
              <Zap size={24} />
              תכננו לי מערכת IP
            </button>
            <button className="border border-white/10 text-white px-16 py-6 rounded-2xl font-[1000] text-2xl italic hover:bg-white/5 transition-all">
              דברו עם מומחה
            </button>
          </div>
        </motion.section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#030508] border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500">
              <Eye size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black italic uppercase leading-none">Keisar Systems</span>
              <span className="text-[8px] text-blue-500 font-bold tracking-[0.4em]">ADVANCED_SECURITY_ARCH</span>
            </div>
          </div>
          <div className="flex gap-10 text-slate-500 text-sm font-bold italic">
            <span>OFFICE@KEISAR.CO.IL</span>
            <span className="text-white/20">//</span>
            <span>2026 TECHNOLOGY REPORT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}