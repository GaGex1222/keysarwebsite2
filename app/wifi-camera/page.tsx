"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, BatteryCharging, Sun, ZapOff, Layout, 
  Settings, Cloud, ShieldCheck, HelpCircle, 
  MousePointer2, Baby, Users, Briefcase, Home
} from 'lucide-react';

export default function WifiSecurityPage() {
  const energySolutions = [
    { 
      icon: <BatteryCharging size={32} />, 
      title: "סוללות נטענות", 
      desc: "סוללות בעלות אורך חיים משתנה (ממספר ימים ועד חודשים) המאפשרות הסתרה קלה ללא סרבול." 
    },
    { 
      icon: <Sun size={32} />, 
      title: "פאנל סולארי", 
      desc: "ניצול קרינת השמש לייצור חשמל רציף. אידיאלי למצלמות גלויות בשטח פתוח ללא צורך בתחזוקה." 
    },
    { 
      icon: <Settings size={32} />, 
      title: "מצבר חיצוני", 
      desc: "פתרון עוצמתי למקומות ללא תשתית, הדורש החלפה תקופתית ומעניק כוח עבודה רב למצלמה." 
    }
  ];

  const useCases = [
    { icon: <Baby />, title: "הורים לילדים", desc: "פיקוח על מטפלות וגני ילדים (באישור) לשקט נפשי של ההורים." },
    { icon: <Users />, title: "טיפול במבוגרים", desc: "מעקב אחר מטפלים זרים בבתי קשישים למניעת התעללות." },
    { icon: <Home />, title: "בתים יוקרתיים", desc: "תיעוד פריצות בבתים מעוצבים מבלי לפגוע באסתטיקה עם כבלים." },
    { icon: <Briefcase />, title: "משרדים וארגונים", desc: "פיקוח על עובדים, מניעת ונדליזם ובקרה שוטפת על הנכס." }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-sky-600 text-[10px] font-black tracking-widest mb-8 uppercase">
              <Wifi size={14} /> Wireless_Freedom_System
            </div>
            <h1 className="text-6xl md:text-8xl font-[1000] italic leading-none mb-8 tracking-tighter">
              אבטחה <span className="text-sky-600 underline decoration-1 underline-offset-8">ללא כבלים</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto italic font-light">
              המהפכה כבר כאן: מצלמות Wi-Fi ללא צורך בחיבור לחשמל. גמישות מקסימלית, התקנה נקייה ואבטחה חכמה בכל פינה.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Energy Solutions - Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {energySolutions.map((sol, i) => (
            <div key={i} className="p-10 bg-sky-50 border border-sky-200 rounded-[3rem] hover:bg-sky-50 transition-colors group">
              <div className="text-sky-600 mb-6 group-hover:scale-110 transition-transform">{sol.icon}</div>
              <h3 className="text-2xl font-black italic mb-4">{sol.title}</h3>
              <p className="text-slate-600 text-sm italic leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content: Innovation & Effectiveness */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-sky-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-[1000] italic uppercase tracking-tight border-r-4 border-sky-500 pr-6">חדשנות ואפקטיביות <br/>באותו המוצר</h2>
            <p className="text-slate-600 text-lg leading-relaxed italic">
              מצלמות Wi-Fi ללא חשמל אינן נופלות באיכותן ממצלמות קוויות. הן מאפשרות שליטה מלאה דרך אפליקציה, רזולוציה גבוהה ועמידות למזג אוויר. היתרון הגדול? **גמישות.** ניתן למקם אותן בנקודות שבעבר היו בלתי אפשריות, ללא סרבול של חוטים המכשילים את האסתטיקה או חושפים את מיקום המצלמה.
            </p>
            <div className="flex flex-wrap gap-4">
               {["ללא חוטים", "ללא שקעים", "הסתרה מושלמת", "עיצוב מודרני"].map((tag, i) => (
                 <div key={i} className="px-4 py-2 bg-sky-100 text-sky-600 rounded-xl text-xs font-black italic">#{tag}</div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-video bg-gradient-to-br from-slate-800 to-black rounded-[2.5rem] border border-sky-200 flex items-center justify-center overflow-hidden group">
                <ZapOff size={100} className="text-slate-900/5 group-hover:text-sky-600/20 transition-all duration-700" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
             </div>
          </div>
        </div>
      </section>

      {/* Why WIFI? - Use Cases */}
      <section className="bg-sky-50 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-[1000] italic mb-16">מה הצורך במצלמות אבטחה?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="p-8 bg-sky-100 rounded-3xl border border-sky-100 hover:border-sky-500 transition-all group">
                <div className="text-sky-600 mb-6 mx-auto w-fit group-hover:rotate-12 transition-transform">{uc.icon}</div>
                <h4 className="text-xl font-black italic mb-3">{uc.title}</h4>
                <p className="text-slate-500 text-xs italic leading-tight">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style Layout */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <h3 className="text-3xl font-[1000] italic mb-12 text-center uppercase">שאלות נפוצות (FAQ)</h3>
        <div className="space-y-6">
          {[
            { q: "מה היתרון המרכזי של Wi-Fi על פני מצלמה רגילה?", a: "הגמישות בהתקנה. ללא כבלי תקשורת כבדים, ניתן להתקין את המצלמה בכל מקום במהירות ובצורה נקייה." },
            { q: "האם המצלמה תמשיך לעבוד אם האינטרנט יתנתק?", a: "רוב המצלמות החדשניות כוללות כרטיס זיכרון פנימי שממשיך להקליט מקומית גם ללא רשת, ומסנכרן את המידע לענן כשהחיבור חוזר." },
            { q: "איך מוודאים שהקליטה תהיה חזקה ויציבה?", a: "המתקינים של קיסר מבצעים בדיקת 'עוצמת סיגנל' ומתקינים במידת הצורך מגדילי טווח (Range Extenders) להבטחת שידור חלק." },
            { q: "האם מצלמות אלחוטיות בטוחות מפני פריצות?", a: "המערכות שלנו משתמשות בפרוטוקולי הצפנה מתקדמים (WPA3) ואימות דו-שלבי להגנה מקסימלית על הפרטיות שלכם." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-sky-50 rounded-2xl border border-sky-200 group hover:border-sky-500 transition-all">
              <div className="flex gap-4 items-center mb-2">
                <HelpCircle className="text-sky-600 shrink-0" size={20} />
                <h4 className="font-black italic text-slate-900">{item.q}</h4>
              </div>
              <p className="text-slate-600 text-sm italic pr-9 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto p-12 bg-sky-600 rounded-[4rem] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-5xl font-[1000] italic mb-6">הצטרפו לעידן החדש של קיסר</h2>
            <p className="text-xl font-bold italic mb-10 max-w-2xl mx-auto leading-tight">
              קיסר מציעה לכם טכנולוגיה אלחוטית מתקדמת, התקנה מקצועית וליווי אישי. בואו נהפוך את הנכס שלכם לבטוח וחכם יותר.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-black text-slate-900 px-10 py-4 rounded-2xl font-black italic text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                <MousePointer2 size={18} /> תיאום ייעוץ מקצועי
              </button>
              <button className="bg-white/20 backdrop-blur-md text-black border border-black/10 px-10 py-4 rounded-2xl font-black italic text-lg hover:bg-white/30 transition-all">
                למידע נוסף באתר
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-sky-100 text-center">
        <p className="text-[10px] font-black tracking-[0.8em] uppercase italic opacity-30">
          Keisar SECURITY // WIRELESS_REVOLUTION // 2026
        </p>
      </footer>
    </div>
  );
}