"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Wifi, ShieldCheck, Zap, MousePointer2, 
  Smartphone, Monitor, Laptop, Eye, HelpCircle, 
  MapPin, Settings, Server, Activity
} from 'lucide-react';

export default function IPCamerasPage() {
  const cameraTypes = [
    {
      title: "מצלמה לא מבוזרת (Decentralized)",
      desc: "מצלמה הדורשת חיבור למכשיר הקלטה NVR לצורך אחסון הוידאו וניהול המערכת בפועל.",
      icon: <Server className="text-cyan-500" />
    },
    {
      title: "מצלמה עצמאית / מבוזרת (Centralized)",
      desc: "מסוגלת לאחסן וידאו באופן עצמאי על גבי microSD, שרתי NAS או ענן. כוללת גם מצלמות WEBCAM פשוטות.",
      icon: <Activity className="text-cyan-400" />
    }
  ];

  const connectionMethods = [
    { icon: <Smartphone />, label: "אפליקציה ייעודית", detail: "התחברות מהירה בלחיצה וצפייה מכל סמארטפון." },
    { icon: <Globe />, label: "דפדפן אינטרנט", detail: "גישה דרך Chrome/Firefox לצפייה באירועים והגדרות." },
    { icon: <Monitor />, label: "תוכנת VMS", detail: "ממשק ניהול וידאו מקצועי למחשב לשליטה מלאה." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white font-sans overflow-x-hidden" dir="rtl">
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" /> Internet_Protocol_Standard
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-[1000] italic leading-none tracking-tighter mb-10">
            IP <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>CAMERAS</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <p className="text-2xl text-slate-400 font-light italic border-r-8 border-cyan-500 pr-8 leading-tight">
              מערכות חכמות מבוססות רשת המאפשרות צפייה בזמן אמת, תיעוד מלא ושליטה מוחלטת מכל מקום בעולם. זהו פתרון המעקב המתקדם ביותר לעידן הדיגיטלי.
            </p>
            <div className="flex gap-4 justify-start lg:justify-end">
               <div className="px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="text-3xl font-black italic text-cyan-500">2MP-8MP</div>
                  <div className="text-[10px] uppercase text-slate-500 tracking-widest">Resolution_Range</div>
               </div>
               <div className="px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="text-3xl font-black italic text-cyan-500">WIFI/POE</div>
                  <div className="text-[10px] uppercase text-slate-500 tracking-widest">Connectivity</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Breakdown: Centralized vs Decentralized */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cameraTypes.map((type, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 bg-gradient-to-br from-[#1c1f26] to-[#0a0c10] border border-white/5 rounded-[3rem] hover:border-cyan-500/30 transition-all"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10">
                {type.icon}
              </div>
              <h3 className="text-2xl font-[1000] italic mb-4 text-white uppercase">{type.title}</h3>
              <p className="text-slate-400 italic leading-relaxed mb-6">{type.desc}</p>
              <div className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-[0.2em]">Protocol_Reference: ONVIF / PSIA</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advantage List - Modern Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-[1000] italic mb-12 border-r-4 border-cyan-500 pr-6">יתרונות המערכת</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-10 bg-cyan-500 rounded-[2.5rem] text-black">
            <Zap size={40} className="mb-6" />
            <h4 className="text-3xl font-[1000] italic mb-4">תשתית פשוטה: כבל אחד בלבד</h4>
            <p className="text-lg font-bold italic leading-relaxed">
              הכבל מעביר את כל הנדרש: מתח (PoE), וידאו, שמע דו-כיווני, ואפילו שליטה בתנועת המצלמה (PTZ). פשטות מקסימלית במינימום כבילה.
            </p>
          </div>
          <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem]">
            <Wifi size={40} className="text-cyan-500 mb-6" />
            <h4 className="text-2xl font-black italic mb-4 text-white">WIFI Power</h4>
            <p className="text-slate-400 text-sm italic leading-relaxed">
              אפשרות למצלמות אלחוטיות לחלוטין המשתמשות בפרוטוקול WIFI להעברת כל המידע ללא צורך בחיווט פיזי.
            </p>
          </div>
          {[
            { icon: <ShieldCheck />, t: "אבטחת נתונים", d: "גישה מוצפנת על גבי פרוטוקולי אבטחה מחמירים." },
            { icon: <MousePointer2 />, t: "גישה מיידית", d: "התחברות מרחוק מכל מקום ובכל זמן במהירות שיא." },
            { icon: <Settings />, t: "פתרון תקלות", d: "מהיר במיוחד הודות לתשתית רשת פשוטה ולא מורכבת." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors">
              <div className="text-cyan-500 mb-4">{item.icon}</div>
              <h4 className="text-xl font-black italic mb-2 text-white">{item.t}</h4>
              <p className="text-slate-400 text-xs italic leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works - Interactive Visual */}
      <section className="bg-white/5 py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-[1000] italic mb-10 tracking-tighter italic">איך זה עובד בפועל?</h2>
            <div className="space-y-10 border-r-2 border-white/10 pr-10">
              <div className="relative">
                <div className="absolute -right-[49px] top-1 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                <h5 className="font-black italic text-xl mb-2 text-white">שלב 1: חיבור והזנה</h5>
                <p className="text-slate-400 italic text-sm">חיבור המצלמה למתח ורשת (CAT5/CAT6). המצלמה מקבלת כתובת IP באופן אוטומטי (DHCP) או סטטי.</p>
              </div>
              <div className="relative">
                <div className="absolute -right-[49px] top-1 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                <h5 className="font-black italic text-xl mb-2 text-white">שלב 2: הגדרה וממשק</h5>
                <p className="text-slate-400 italic text-sm">כניסה לממשק הניהולי להגדרת איכות (MP), קצב פריימים (FPS), ראיית לילה ורגישות תנועה.</p>
              </div>
              <div className="relative">
                <div className="absolute -right-[49px] top-1 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                <h5 className="font-black italic text-xl mb-2 text-white">שלב 3: צפייה מרחוק</h5>
                <p className="text-slate-400 italic text-sm">הגדרת הראוטר וגישה מכל מקום בעולם דרך אפליקציה, דפדפן או תוכנת ניהול וידאו (VMS).</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <h4 className="text-2xl font-black italic text-center mb-4 uppercase">Methods_of_Connection</h4>
            {connectionMethods.map((m, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-black/50 border border-white/10 rounded-2xl group hover:border-cyan-500 transition-all">
                <div className="p-4 bg-white/5 rounded-xl group-hover:text-cyan-500 transition-colors">{m.icon}</div>
                <div>
                  <div className="font-black italic text-white leading-none mb-1">{m.label}</div>
                  <div className="text-xs text-slate-500 italic">{m.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-[1000] italic mb-16 text-center italic">שאלות <span className="text-cyan-500">ותשובות</span></h2>
        <div className="space-y-6">
          {[
            { q: "כמה עולות מצלמות אבטחה?", a: "המחיר תלוי באיכות ובכמות. בקיסר ניתן למצוא סטים החל מ-2,490 ש\"ח הכוללים 4 מצלמות 5MP, מערכת הקלטה 8 ערוצים, חיווט, עבודה והדרכה מלאה." },
            { q: "האם מומלץ לקנות מצלמות IP אלחוטיות?", a: "יש להן יתרונות וחסרונות. התשובה תלויה ביצרן ובמיקום ההתקנה. אם אתם מחפשים ביטחון ושקט נפשי, מומלץ להתייעץ עם מתקין מקצועי." },
            { q: "איך למקם את המצלמות?", a: "מיקום המצלמה הוא הפרמטר החשוב ביותר. הוא קובע את יעילות המערכת. צרו איתנו קשר ונפענח יחד את המיקום האופטימלי לצרכים שלכם." },
            { q: "האם אתם גם מתקינים מצלמות?", a: "בהחלט. אנו מספקים התקנה מקצועית לבתים פרטיים, בניינים, משרדים ועסקים, כולל הגדרת רשת ותמיכה טכנית." }
          ].map((faq, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
              <div className="flex gap-4 items-start mb-4">
                <HelpCircle className="text-cyan-500 shrink-0 mt-1" size={20} />
                <h4 className="text-xl font-black italic text-white leading-tight">{faq.q}</h4>
              </div>
              <p className="text-slate-400 italic text-sm pr-9 leading-relaxed border-r border-cyan-500/30 mr-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="mb-10 inline-block p-4 bg-white/5 rounded-full border border-white/10">
            <Eye size={48} className="text-cyan-500" />
          </div>
          <h2 className="text-5xl font-[1000] italic mb-8 uppercase italic leading-[0.9]">
            היה ה-"אח הגדול" <br/>
            של הנכס שלך
          </h2>
          <p className="text-xl text-slate-400 italic mb-12 max-w-2xl mx-auto">
            מצלמות IP הן ביטוי למחויבות שלך לשמור על הבית והעסק. צוות קיסר כאן לייעוץ, התאמה והתקנה מקצועית עם אחריות מלאה.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-cyan-500 text-black px-12 py-5 rounded-2xl font-[1000] text-xl italic shadow-[0_10px_40px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform">
              תיאום טכנאי להתקנה
            </button>
            <button className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-2xl font-[1000] text-xl italic hover:bg-white/5 transition-colors">
              ייעוץ אישי חינם
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-700 border-t border-white/5">
        <p className="text-[9px] font-black tracking-[0.8em] uppercase italic">
          Keisar SECURITY SOLUTIONS // IP_PROTOCOL_MODULE_V3 // 2026
        </p>
      </footer>
    </div>
  );
}