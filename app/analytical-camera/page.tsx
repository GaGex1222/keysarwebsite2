"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  ScanFace, 
  Car, 
  ShieldCheck, 
  Zap, 
  Search, 
  AlertTriangle, 
  Network,
  Maximize,
  Microchip,
  Fingerprint,
  LineChart
} from 'lucide-react';

export default function AnalyticalCamerasPage() {
  const features = [
    {
      icon: <ScanFace className="text-sky-600" />,
      title: "זיהוי פנים ואימות זהות",
      desc: "השוואה מול מאגרי נתונים בזמן אמת לזיהוי פולשים או מורשי כניסה."
    },
    {
      icon: <Car className="text-sky-600" />,
      title: "זיהוי לוחיות רישוי (LPR)",
      desc: "קריאה וניתוח של מספרי רכב בכניסה לחניונים ומתחמים מוגנים."
    },
    {
      icon: <AlertTriangle className="text-sky-600" />,
      title: "זיהוי התנהגות חריגה",
      desc: "התראה על שוטטות, חפצים חשודים שהושארו או תנועות לא סדירות."
    },
    {
      icon: <Network className="text-sky-600" />,
      title: "חציית קו וסטריליות",
      desc: "הגדרת גבולות וירטואליים המפעילים אזעקה ברגע של חדירה לטווח."
    }
  ];

  const stats = [
    { label: "דיוק זיהוי אובייקטים", value: "98%", desc: "צמצום התראות שווא" },
    { label: "מהירות תגובה", value: "95%", desc: "ניתוח נתונים בזמן אמת" },
    { label: "זיהוי בתנאי תאורה", value: "88%", desc: "ביצועים גבוהים בחשיכה" }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans selection:bg-sky-200 overflow-hidden" dir="rtl">
      
      {/* Neural Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#06b6d4_0.05,transparent_0.5)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#3b82f6_0.05,transparent_0.5)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-3/5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1 bg-sky-100 border border-sky-500/20 rounded-full text-sky-600 text-xs font-black tracking-widest italic"
            >
              <Microchip size={14} className="animate-pulse" /> AI_ANALYTICS_V4.0
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl md:text-9xl font-[1000] italic leading-[0.85] uppercase tracking-tighter"
            >
              מצלמות <br/>
              <span className="text-sky-600">אנליטיות</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-xl italic leading-relaxed border-r-4 border-sky-500 pr-6"
            >
              מערכות אבטחה חכמות המשלבות בינה מלאכותית (AI) לניתוח ויזואלי, זיהוי אובייקטים ומניעת אירועים באופן אוטונומי בזמן אמת.
            </motion.p>
          </div>

          {/* Interactive Visual Element */}
          <div className="lg:w-2/5 w-full">
            <div className="relative aspect-square bg-sky-50 border border-sky-200 rounded-[4rem] overflow-hidden backdrop-blur-xl group">
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-1 bg-sky-500 shadow-[0_0_20px_rgba(2,132,199,0.8)] z-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit size={180} className="text-sky-600/10 group-hover:text-sky-600/30 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-12">
                <div className="flex justify-between items-start">
                  <div className="text-[10px] font-black text-sky-600 tracking-[0.3em] uppercase">Status: Analyzing</div>
                  <Maximize size={24} className="text-slate-900/20" />
                </div>
                <div className="space-y-4">
                   <div className="flex gap-2">
                     <div className="h-1 w-full bg-sky-100 rounded-full overflow-hidden">
                       <motion.div animate={{ width: ['20%', '90%', '40%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-cyan-500" />
                     </div>
                     <div className="h-1 w-1/2 bg-sky-100 rounded-full overflow-hidden">
                       <motion.div animate={{ width: ['80%', '30%', '70%'] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-full bg-blue-500" />
                     </div>
                   </div>
                   <div className="text-[10px] font-mono text-slate-500">OBJECT_RECOGNITION_ACTIVE...</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-sky-50 border border-sky-200 rounded-[3rem] hover:bg-white/[0.08] transition-all group relative overflow-hidden"
            >
              <div className="mb-8 p-4 bg-sky-100 rounded-2xl w-fit text-sky-600 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-[1000] italic mb-4 uppercase">{f.title}</h3>
              <p className="text-slate-500 text-sm italic leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Analytics Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 bg-sky-50 p-12 rounded-[4rem] border border-sky-200">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-[1000] italic leading-tight uppercase">הבשורה של <br/><span className="text-sky-600">הצילום האנליטי</span></h2>
            <div className="space-y-10">
              {stats.map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-black italic uppercase tracking-widest">
                    <span className="text-slate-700">{s.label}</span>
                    <span className="text-sky-600">{s.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-sky-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: s.value }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" 
                    />
                  </div>
                  <p className="text-[10px] text-slate-600 font-bold italic uppercase">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
             <div className="p-8 bg-sky-100 border border-sky-100 rounded-[2.5rem] flex items-center gap-6">
                <Search className="text-sky-600 shrink-0" size={32} />
                <p className="text-sm italic text-slate-600 leading-snug">
                  <strong className="text-slate-900 block mb-1">חיפוש חכם בהקלטות</strong>
                  ניתוח שעות של וידאו בשניות ומציאת האירועים הרלוונטיים בלבד.
                </p>
             </div>
             <div className="p-8 bg-sky-100 border border-sky-100 rounded-[2.5rem] flex items-center gap-6">
                <LineChart className="text-sky-600 shrink-0" size={32} />
                <p className="text-sm italic text-slate-600 leading-snug">
                  <strong className="text-slate-900 block mb-1">תובנות עסקיות</strong>
                  ספירת קהל, ניתוח תנועה ומפות חום לשיפור השירות בעסק.
                </p>
             </div>
          </div>
        </div>

        {/* CTA */}
        <section className="text-center">
          <div className="inline-block relative group cursor-pointer">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <button className="relative bg-white text-black px-16 py-6 rounded-2xl font-[1000] italic text-2xl uppercase hover:bg-cyan-400 transition-all flex items-center gap-4">
              <Zap size={24} />
              התייעץ עם מומחה אנליטיקה
            </button>
          </div>
          <p className="mt-8 text-[10px] font-black tracking-[1em] uppercase italic text-slate-700">
            Keisar_ANALYTICS // AI_ENGINE_2026
          </p>
        </section>

      </div>
    </div>
  );
}