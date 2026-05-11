"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Settings, Map, HardHat, 
  Database, Radio, Lock, Activity, 
  DoorOpen, Layout, Warehouse, 
  Layers, Info, CheckCircle, ChevronLeft,
  Cpu, LayoutDashboard, MonitorPlay
} from 'lucide-react';

export default function SecurityInstallationGuide() {
  const cameraPrices = [
    { type: "מצלמת דירה (פנים)", price: "₪200", icon: <LayoutDashboard size={20} /> },
    { type: "מצלמת חצר (חוץ)", price: "₪350", icon: <Warehouse size={20} /> },
    { type: "מצלמת בית (משולבת)", price: "₪500", icon: <ShieldAlert size={20} /> },
    { type: "מצלמת רשת (IP)", price: "₪800", icon: <Radio size={20} /> },
    { type: "מצלמת פנורמית 360°", price: "₪1,200", icon: <Activity size={20} /> }
  ];

  const installationSteps = [
    { title: "אפיון ומיפוי", desc: "סימון נקודות תורפה בנכס ובחירת סוג המצלמה (כיפה/גוף) לכל אזור." },
    { title: "תשתית וחיווט", desc: "הכנת תעלות, כבלי PoE איכותיים ואיטום סיליקון מקצועי למניעת קורוזיה." },
    { title: "הגדרה וסנכרון", desc: "הגדרת כתובות IP, הפניית פורטים לגישה מרחוק והגדרת אפליקציה." }
  ];

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-cyan-500 selection:text-black" dir="rtl">
      
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero: The Real-Time Reality */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-[10px] font-black tracking-[0.3em] mb-8 uppercase"
        >
          <Activity size={14} className="animate-pulse" /> Live_Security_Feed_Active
        </motion.div>
        <h1 className="text-7xl md:text-9xl font-[1000] italic leading-[0.8] mb-12 tracking-tighter uppercase italic">
          PROTECT <br/>
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>YOUR ASSETS</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto italic font-light leading-relaxed">
          פריצה יכולה להסתיים באובדן רכוש או פגיעה בנפש. עם התקנה מקצועית של אלסק, אתם לא רק צופים במתרחש – אתם שולטים בסיטואציה בזמן אמת.
        </p>
      </section>

      {/* Price & Specs Table */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-xl">
          <div className="p-10 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl font-[1000] italic uppercase">מחירון מצלמות אבטחה 2026</h2>
            <div className="text-xs text-cyan-500 font-black italic tracking-widest bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/20">
              OPTIMIZED_PRICING_ESTIMATES
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-white/5 text-slate-500 text-xs uppercase tracking-widest italic font-black">
                  <th className="p-8">סוג המצלמה</th>
                  <th className="p-8">מחיר משוער</th>
                  <th className="p-8 hidden md:table-cell text-center">סטטוס הגנה</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {cameraPrices.map((item, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-8 flex items-center gap-4">
                      <span className="text-cyan-500 group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span className="font-black italic text-lg">{item.type}</span>
                    </td>
                    <td className="p-8 font-mono text-xl text-cyan-400">{item.price}</td>
                    <td className="p-8 hidden md:table-cell">
                      <div className="flex justify-center">
                        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="bg-cyan-500 h-full" style={{ width: `${(i + 1) * 20}%` }} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 Critical Spots - Blueprint Visualization */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-[1000] italic mb-4 uppercase">5 נקודות קריטיות להתקנה</h2>
          <p className="text-slate-500 italic">המקומות שבהם פורצים מעדיפים להיכנס - והדרך של אלסק לחסום אותם.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { id: "01", name: "דלת כניסה", icon: <DoorOpen />, stat: "34% מהפריצות" },
            { id: "02", name: "דלת אחורית", icon: <ChevronLeft />, stat: "22% מהפריצות" },
            { id: "03", name: "חלונות צד", icon: <Layout />, stat: "גישה נסתרת" },
            { id: "04", name: "חצר ושער", icon: <Warehouse />, stat: "שטח פתוח" },
            { id: "05", name: "גישת מרתף", icon: <Layers />, stat: "חדירה תת-קרקעית" }
          ].map((spot, i) => (
            <div key={i} className="relative group">
              <div className="absolute -top-4 -right-4 text-6xl font-[1000] text-white/[0.03] group-hover:text-cyan-500/10 transition-colors">
                {spot.id}
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl h-full flex flex-col items-center justify-center text-center hover:border-cyan-500/50 transition-all">
                <div className="text-cyan-500 mb-6 group-hover:scale-125 transition-transform">{spot.icon}</div>
                <h4 className="text-xl font-black italic mb-2">{spot.name}</h4>
                <p className="text-[10px] text-red-400 font-bold tracking-tighter uppercase">{spot.stat}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pro Tip Box */}
        <div className="mt-12 p-8 bg-cyan-500 rounded-[2rem] text-black flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
           <Info size={48} className="shrink-0 opacity-20" />
           <div>
              <h4 className="text-2xl font-black italic mb-2 uppercase italic">טיפ המומחים של אלסק:</h4>
              <p className="text-lg font-bold leading-tight italic">
                התקינו מצלמות בחור ההצצה של הדלת או בגובה קומה שנייה כדי למנוע חבלה פיזית. השתמשו במצלמות כיפה (Dome) באזורים נגישים.
              </p>
           </div>
        </div>
      </section>

      {/* Installation Steps - The Blueprint */}
      <section className="bg-white/5 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 space-y-10">
              <h2 className="text-5xl font-[1000] italic leading-none uppercase pr-6 border-r-8 border-cyan-500">מדריך <br/>ההתקנה <br/>של אלסק</h2>
              <p className="text-slate-400 italic leading-relaxed">
                התקנה היא לא רק הברגת ברגים. היא אמנות של תכנון רשתי, מיקום אופטימלי ואיטום מקצועי. הנה איך אנחנו עושים את זה:
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                 <div className="flex gap-4 items-center mb-4 text-cyan-500 font-black italic">
                   <MonitorPlay size={20} />
                   <span>CCTV vs IP Cloud</span>
                 </div>
                 <p className="text-xs text-slate-500 italic leading-relaxed">
                   אנחנו משלבים בין הקלטה מקומית (CCTV) לגיבוי ענן (IP) כדי להבטיח שהמידע יישמר גם אם המכשיר נגנב.
                 </p>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {installationSteps.map((step, i) => (
                <div key={i} className="p-10 bg-black/50 border border-white/10 rounded-[3rem] relative group hover:bg-black transition-colors">
                  <div className="text-4xl font-[1000] text-cyan-500/20 mb-6 group-hover:text-cyan-500 transition-colors italic">0{i+1}</div>
                  <h3 className="text-2xl font-black italic mb-4">{step.title}</h3>
                  <p className="text-slate-500 text-sm italic leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Checklist - The Gear */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-[#0e1117] p-12 rounded-[4rem] border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px]" />
          <h3 className="text-3xl font-[1000] italic mb-12 text-center uppercase">צ'ק-ליסט טכני למערכת מנצחת</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Database />, title: "נפח אחסון", text: "חישוב שעות הקלטה לפי כמות המצלמות." },
              { icon: <ShieldAlert />, title: "יחידת אל-פסק (UPS)", text: "המשך הקלטה גם בהפסקת חשמל זדונית." },
              { icon: <Cpu />, title: "עיבוד חכם", text: "זיהוי תנועה, חציית קו וזיהוי פנים." },
              { icon: <Settings />, title: "איטום וסיליקון", text: "הגנה אבסולוטית מפני לחות ומים." }
            ].map((gear, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto text-cyan-500">
                  {gear.icon}
                </div>
                <h5 className="font-black italic uppercase text-sm">{gear.title}</h5>
                <p className="text-slate-500 text-xs italic leading-tight">{gear.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Q&A Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
        <h3 className="text-3xl font-[1000] italic mb-12 text-center uppercase tracking-tighter italic">השאלות שאתם שואלים אותנו</h3>
        <div className="space-y-4">
          {[
            { q: "כמה עולות מצלמות אבטחה?", a: "החל מ-2490 ש\"ח לסט מלא הכולל 4 מצלמות 5MP, מכשיר הקלטה NVR, חיווט, התקנה ואפליקציה." },
            { q: "איך למקם את המצלמות?", a: "המיקום הוא הפרמטר הכי חשוב. המתקינים של אלסק מבצעים אפיון שטח מקצועי למקסום זווית הצפייה וכיסוי כל נקודות התורפה." },
            { q: "האם אתם גם מתקינים מצלמות?", a: "בהחלט. אלסק מספקת שירות התקנה קצה-לקצה לבתים פרטיים, משרדים ומוסדות ציבור בכל רחבי הארץ." }
          ].map((faq, i) => (
            <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 group hover:border-cyan-500 transition-all">
              <div className="flex gap-4 items-start mb-4">
                 <CheckCircle className="text-cyan-500 shrink-0 mt-1" size={18} />
                 <h4 className="text-xl font-black italic">{faq.q}</h4>
              </div>
              <p className="text-slate-400 text-sm italic pr-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-8xl font-[1000] italic mb-10 leading-none uppercase italic">
            READY TO <br/>
            <span className="text-cyan-500">UPGRADE?</span>
          </h2>
          <p className="text-xl text-slate-400 italic mb-12 font-light">
            אלסק מערכות אבטחה – השותף שלכם לשקט נפשי. תכנון, התקנה ושירות מקצועי ללא פשרות.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-cyan-500 text-black px-12 py-5 rounded-2xl font-[1000] text-xl italic hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all">
              תיאום טכנאי אלסק
            </button>
            <button className="bg-white/5 border border-white/20 text-white px-12 py-5 rounded-2xl font-[1000] text-xl italic hover:bg-white/10 transition-colors">
              לצפייה בתיק עבודות
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-black tracking-[0.8em] uppercase italic opacity-30">
          ALSEC SECURITY // INSTALLATION_GUIDE_V2 // 2026
        </p>
      </footer>
    </div>
  );
}