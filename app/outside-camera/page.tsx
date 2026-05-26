"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Video, Eye, Smartphone, 
  Sun, CloudFog, Thermometer, ShieldAlert, 
  UserCheck, Award, Headset, HardHat, 
  Search, CheckCircle2, CloudSun
} from 'lucide-react';

export default function OutdoorSurveillancePage() {
  const techAdvantage = [
    { 
      icon: <Sun size={32} className="text-sky-600" />, 
      title: "טכנולוגיית HDR מתקדמת", 
      desc: "תמונה ברורה גם בתנאי תאורה קיצוניים, ערפל, אובך או סצנות בהילוך מהיר." 
    },
    { 
      icon: <Thermometer size={32} className="text-sky-600" />, 
      title: "חיישנים תרמיים", 
      desc: "זיהוי תנודות חשודות ופעולות חריגות על בסיס חום ותנועה לדיוק מקסימלי." 
    },
    { 
      icon: <CloudFog size={32} className="text-sky-500" />, 
      title: "עמידות בתנאי קיצון", 
      desc: "מיגון מלא מפני קורוזיה, אבק ומזג אוויר סוער להבטחת פעילות רציפה." 
    }
  ];

  const expertPillars = [
    { icon: <Award />, label: "ניסיון עשיר", detail: "שנות ותק בהובלת תחום האבטחה." },
    { icon: <HardHat />, label: "מיומנות טכנית", detail: "הכשרה מקצועית לכל סוגי ההתקנות." },
    { icon: <UserCheck />, label: "שירות אדיב", detail: "מענה אישי, סבלני ומקצועי לכל לקוח." }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans" dir="rtl">
      
      {/* Dynamic Background Overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-100 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 text-xs font-black uppercase mb-10 tracking-[0.2em]"
          >
            <ShieldCheck size={16} /> Outdoor_Security_Investment
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-[1000] italic leading-none tracking-tighter mb-10 uppercase italic">
            OUTDOOR <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>SHIELD</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-700 font-light italic max-w-4xl mx-auto leading-tight">
            שקט נפשי מתחיל בביטחון חיצוני. מצלמות האבטחה של קיסר מספקות שכבת הגנה בלתי חדירה לנכס, לעסק ולרכוש שלכם.
          </p>
        </div>
      </section>

      {/* Tech Grid - Advantages */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techAdvantage.map((tech, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-sky-50 border border-sky-200 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {tech.icon}
              </div>
              <div className="mb-8 p-4 bg-sky-50 w-fit rounded-2xl border border-sky-200">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-[1000] italic mb-4 text-slate-900 uppercase">{tech.title}</h3>
              <p className="text-slate-600 italic leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Install? - Features Breakdown */}
      <section className="bg-sky-50 py-32 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
              <h2 className="text-5xl font-[1000] italic leading-none border-r-8 border-sky-500 pr-8">למה כדאי להתקין <br/>מצלמת אבטחה לבחוץ?</h2>
              <div className="space-y-6">
                {[
                  { t: "הרתעה מוכחת", d: "נוכחות מצלמות גלויות מרחיקה פורצים פוטנציאליים עוד לפני הניסיון הראשון." },
                  { t: "תיעוד ברזולוציית 4K", d: "יכולת זיהוי פנים ולוחיות רישוי המשמשת כראיה משפטית מכרעת." },
                  { t: "מעקב מכל מקום", d: "צפייה בשידור חי 24/7 דרך אפליקציה ייעודית מכל מקום בעולם." },
                  { t: "הטבות בביטוח", d: "חברות ביטוח רבות מעניקות הנחות משמעותיות לבתים ועסקים ממוגנים." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <CheckCircle2 className="text-sky-600 shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                    <div>
                      <h4 className="text-lg font-black italic text-slate-900 leading-tight mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm italic">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
               <div className="bg-sky-600 rounded-[3rem] p-10 text-white flex flex-col justify-between aspect-square">
                  <ShieldAlert size={40} />
                  <div className="text-2xl font-[1000] italic uppercase leading-none">השקעה <br/>בשקט נפשי</div>
               </div>
               <div className="bg-sky-100 rounded-[3rem] p-10 border border-sky-300 flex flex-col justify-between aspect-square">
                  <CloudSun size={40} className="text-sky-600" />
                  <div className="text-xl font-black italic text-slate-900">עמידות בכל <br/>מזג אוויר</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keisar Expertise - Professionalism */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-[1000] italic mb-6">מקצוענות זה אנחנו</h2>
          <p className="text-xl text-slate-600 italic max-w-3xl mx-auto">
            קיסר היא חברה מובילה לפתרונות אבטחה, המשלבת טכנולוגיה עילית עם שירות בסטנדרט בלתי מתפשר.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {expertPillars.map((p, i) => (
            <div key={i} className="text-center p-10 border-x border-sky-100 group hover:bg-sky-50 transition-all rounded-[2rem]">
              <div className="w-16 h-16 bg-sky-100 border border-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-sky-600 group-hover:bg-sky-500 group-hover:text-black transition-all">
                {p.icon}
              </div>
              <h4 className="text-2xl font-black italic mb-2">{p.label}</h4>
              <p className="text-slate-500 italic text-sm">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Grid - Beyond Cameras */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-white rounded-[4rem] border border-sky-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-[1000] italic mb-6 uppercase">מעטפת הגנה מושלמת</h3>
            <p className="text-slate-600 italic mb-8 leading-relaxed">
              אנחנו לא רק מתקינים מצלמות. קיסר מספקת פתרון אבטחה היקפי הכולל מערכות אזעקה, בקרת כניסה, אינטרקום חכם וסידור ארונות תקשורת. צוות המתקינים שלנו מגיע לכל מקום בארץ עם 100% מחויבות לתוצאה.
            </p>
            <div className="flex flex-wrap gap-4">
              {["אזעקות", "אינטרקום", "ארונות תקשורת", "מצלמות במעגל סגור"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-sky-50 rounded-full border border-sky-200 text-[10px] font-black uppercase tracking-widest text-sky-600 italic">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-sky-100 rounded-3xl border border-sky-100 flex gap-6 items-center">
               <Headset className="text-sky-600" size={32} />
               <div>
                  <div className="font-black italic text-slate-900 uppercase">תמיכה 24/7</div>
                  <div className="text-xs text-slate-500 italic uppercase">Always_Online_Response</div>
               </div>
            </div>
            <div className="p-6 bg-sky-100 rounded-3xl border border-sky-100 flex gap-6 items-center">
               <UserCheck className="text-sky-600" size={32} />
               <div>
                  <div className="font-black italic text-slate-900 uppercase">מתקינים מורשים</div>
                  <div className="text-xs text-slate-500 italic uppercase">Certified_Expert_Technicians</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 text-center relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-[1000] italic mb-8 italic uppercase leading-[0.9]">
            אל תתפשרו על <br/>
            <span className="text-sky-600">הביטחון שלכם</span>
          </h2>
          <p className="text-xl text-slate-600 italic mb-12">
            השילוש הקדוש שלנו: ניסיון, מיומנות ואדיבות. הרימו טלפון לייעוץ מקצועי עוד היום ותנו לנו לאבטח את מה שחשוב לכם באמת.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-sky-600 text-white px-12 py-5 rounded-2xl font-[1000] text-xl italic hover:shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all">
              הזמן מתקין עכשיו
            </button>
            <button className="bg-sky-50 border border-sky-300 text-slate-900 px-12 py-5 rounded-2xl font-[1000] text-xl italic hover:bg-sky-100 transition-colors">
              למידע מקצועי נוסף
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-sky-100 text-center">
        <div className="flex justify-center gap-8 mb-6 opacity-40">
           <Video size={18} />
           <ShieldCheck size={18} />
           <Smartphone size={18} />
        </div>
        <p className="text-[10px] font-black tracking-[0.8em] uppercase italic opacity-30">
          Keisar SECURITY // OUTDOOR_PROTECTION_GROUP // 2026
        </p>
      </footer>
    </div>
  );
}