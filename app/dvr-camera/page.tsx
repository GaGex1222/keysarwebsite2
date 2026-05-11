"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Cpu, HardDrive, Network, Layers, 
  Monitor, Info, BarChart, CheckCircle2, ShieldAlert, Zap,
  Users
} from 'lucide-react';

export default function RecordingSystemsPage() {
  const dvrModels = [
    { name: "DVR-100", brand: "XYZ", features: "הקלטה באיכות HD, נפח 500GB", price: "₪500" },
    { name: "ProDVR200", brand: "ABC", features: "הקלטה וזיכוי 4K, נפח 1TB", price: "₪1,200" },
    { name: "UltraVision", brand: "QWE", features: "צפייה חיה 1080p, נפח 2TB", price: "₪2,000" },
    { name: "SmartDVR 300", brand: "RST", features: "חיבור אפליקציה ניידת לניהול מרחוק", price: "₪800" },
    { name: "EliteDVR 500", brand: "UVW", features: "הקלטה 4K, נפח 2TB", price: "₪2,500" },
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-cyan-500/30" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-right"
          >
            <div className="flex items-center gap-3 text-cyan-500 mb-6 font-black italic tracking-widest text-sm">
              <Database size={20} /> RECORDING_CENTRAL_UNIT_2026
            </div>
            <h1 className="text-5xl md:text-8xl font-[1000] italic leading-[0.85] tracking-tighter uppercase mb-8">
              מערכות הקלטה <br/>
              <span className="text-cyan-500">DVR & NVR</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed italic border-r-4 border-cyan-500 pr-6">
              לב המערכת שלך: מכשירים המאפשרים להקליט, לשמור ולנהל את כל תכני הוידאו והאבטחה שלכם בצורה דיגיטלית וחכמה.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* DVR Table 2026 */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-4xl font-[1000] italic uppercase flex items-center gap-4">
              <div className="w-12 h-1 bg-cyan-500" />
              מכשירי DVR מומלצים ל-2026
            </h2>
            <div className="text-xs font-mono text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              Last_Update: Sept_2021 | Data_Ref: 2023_Call_Support
            </div>
          </div>
          
          <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-md">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-white/5 text-cyan-400 uppercase text-xs font-black italic tracking-widest">
                  <th className="p-6 border-b border-white/10">שם המכשיר</th>
                  <th className="p-6 border-b border-white/10">יצרן</th>
                  <th className="p-6 border-b border-white/10">תכונות מרכזיות</th>
                  <th className="p-6 border-b border-white/10 text-left">מחיר משוער*</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {dvrModels.map((m, i) => (
                  <tr key={i} className="hover:bg-cyan-500/5 transition-colors border-b border-white/5 last:border-0 group">
                    <td className="p-6 font-black text-white group-hover:text-cyan-400 transition-colors">{m.name}</td>
                    <td className="p-6 italic">{m.brand}</td>
                    <td className="p-6 text-sm italic">{m.features}</td>
                    <td className="p-6 text-left font-mono font-bold text-cyan-500">{m.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex gap-4 items-start text-xs text-slate-500 italic leading-relaxed">
            <ShieldAlert size={14} className="text-cyan-500 shrink-0" />
            <p>המחירים משוערים וכפופים לשינויים. תכונות נוספות עשויות להיות זמינות בדגמים אלו. המידע מדויק נכון לספטמבר 2021. לקבלת מחירון 2023/2026 עדכני - פנו אלינו טלפונית.</p>
          </div>
        </section>

        {/* DVR vs NVR Guide */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#1c1f26] p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <HardDrive size={120} />
            </div>
            <h3 className="text-3xl font-[1000] italic mb-6 text-white uppercase">מה זה DVR?</h3>
            <p className="text-slate-400 leading-relaxed italic mb-8">
              Digital Video Recorder - יחידת הקלטה מקומית המאפשרת הקלטה של מצלמות על גבי דיסק קשיח פנימי. המכשיר מאפשר צפייה מקומית (מסך/טלוויזיה) וצפייה מרחוק דרך סמארטפון או מחשב. תומך בהקלטה של חודש ימים ומעלה בהתאם לנפח הכונן.
            </p>
            <div className="flex items-center gap-4 text-cyan-500 font-black italic text-sm">
              <Zap size={18} /> LOCAL_STORAGE_CORE
            </div>
          </div>

          <div className="bg-cyan-500 p-10 rounded-[2.5rem] text-black relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-20">
              <Network size={120} />
            </div>
            <h3 className="text-3xl font-[1000] italic mb-6 uppercase">מה זה NVR?</h3>
            <p className="font-bold leading-relaxed italic mb-8">
              Network Video Recorder - מכשיר רשתי עצמאי (מתפקד כמחשב) המיועד בעיקר למצלמות IP (רשתיות). הוא מקליט וידאו באופן אוטומטי מהמצלמות המחוברות לרשת לפי הגדרות המשתמש.
            </p>
            <div className="flex items-center gap-4 font-black italic text-sm text-black/60">
              <Zap size={18} /> NETWORK_IP_PROTOCOL
            </div>
          </div>
        </section>

        {/* 4 Key Differences */}
        <section className="mb-32">
          <h2 className="text-4xl font-[1000] italic mb-16 text-center uppercase">4 ההבדלים העיקריים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: "סוג חיבור", d: "DVR מתחבר בכבל קואקסיאלי אנלוגי, NVR מתחבר בכבל רשת (IP)." },
              { t: "עיבוד תמונה", d: "ב-DVR המכשיר מבצע המרה ודחיסה. ב-NVR הוידאו מגיע מוכן וחד יותר ישירות מהמצלמה." },
              { t: "תשתית חכמה (PoE)", d: "NVR מספק וידאו, אודיו ומתח חשמלי על כבל רשת אחד בלבד. DVR דורש מספר כבלים נפרדים." },
              { t: "טווח מרחק", d: "מצלמות רשת (NVR) תומכות במרחק כבל של עד 200 מטר, משמעותית יותר מחיבור אנלוגי." }
            ].map((diff, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="text-cyan-500 text-2xl font-black italic">0{i+1}</div>
                <div>
                  <h4 className="text-xl font-black italic mb-2 text-white">{diff.t}</h4>
                  <p className="text-slate-400 italic text-sm">{diff.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases & Analytics */}
        <section className="mb-32 py-20 bg-cyan-500/5 rounded-[3rem] border border-cyan-500/10 px-10">
          <h3 className="text-3xl font-[1000] italic mb-12 text-center uppercase">שימושי מערכות הקלטה</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-500 font-black italic uppercase text-xs tracking-widest"><BarChart size={16}/> Business_Protection</div>
              <ul className="space-y-4 text-slate-300 italic text-sm">
                <li>• ניטור בזמן אמת של העסק/בית</li>
                <li>• הגנה והרתעה מפני פורצים</li>
                <li>• זיהוי מספרי רכב (LPR)</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-500 font-black italic uppercase text-xs tracking-widest"><Users size={16}/> Human_Monitoring</div>
              <ul className="space-y-4 text-slate-300 italic text-sm">
                <li>• פיקוח על קשישים ומטפלות</li>
                <li>• מעקב סמוי ומוסווה</li>
                <li>• ספירה ממוחשבת של סחורה</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-500 font-black italic uppercase text-xs tracking-widest"><Cpu size={16}/> Advance_Analytics</div>
              <ul className="space-y-4 text-slate-300 italic text-sm">
                <li>• אנליטיקה וניתוח תמונה מדויק</li>
                <li>• תמיכה ב-4, 8, 16 ו-32 ערוצים</li>
                <li>• תמיכה בפרוטוקולי ONVIF ו-PSIA</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leading Brands */}
        <section className="mb-20">
          <h2 className="text-4xl font-[1000] italic mb-16 uppercase border-r-4 border-cyan-500 pr-6">מותגים מומלצים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "HIKVISION", origin: "סין (2001)", desc: "מובילה עולמית, שווי שוק 9.5 מיליארד דולר. מציעה DVR, NVR, מצלמות PTZ וכרטיסי דחיסה." },
              { name: "iCATCH", origin: "טיוואן (2005)", desc: "חברה דינמית המשווקת מכשירי IVR, DVR ומערכות CCTV מתקדמות לשוק העולמי." },
              { name: "PROVISION", origin: "ישראל (2011)", desc: "חברה ישראלית (כפר סבא) המתפתחת במהירות. יצרנית מצלמות AHD, נסתרות ו-NVR איכותיים." }
            ].map((brand, i) => (
              <div key={i} className="p-10 bg-[#1c1f26] border border-white/5 rounded-[2.5rem] group hover:border-cyan-500/50 transition-all">
                <h4 className="text-2xl font-black italic mb-2 text-white">{brand.name}</h4>
                <div className="text-cyan-500 text-xs font-black mb-6 italic uppercase tracking-widest">{brand.origin}</div>
                <p className="text-slate-400 italic text-sm leading-relaxed">{brand.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer / CTA */}
      <footer className="py-20 text-center bg-black/40 border-t border-white/5 relative z-20">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-3xl font-[1000] italic mb-6 uppercase">מחפש מערכת אבטחה איכותית?</h3>
          <p className="text-slate-400 italic mb-10">הגעת למקום הנכון. צוות קיסר זמין עבורך לייעוץ והתאמת המערכת המדויקת ביותר.</p>
          <div className="text-[10px] font-black tracking-[0.6em] uppercase italic opacity-30">
            Keisar Systems // DVR_NVR_Protocol // 2026
          </div>
        </div>
      </footer>
    </div>
  );
}