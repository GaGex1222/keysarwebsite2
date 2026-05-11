"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, CheckCircle2, Video, hardDrive, LayoutList, 
  ChevronLeft, AlertTriangle, Radio, MousePointer2, Settings2 
} from 'lucide-react';

export default function BusinessSecurityPage() {
  const cameraTypes = [
    { type: "מצלמה דיסקרטית", desc: "קטנה וניתנת להחבאה במקומות מוסתרים.", price: "₪200 – ₪500", detail: "נועדה להיות חסויה למעקב שקט אחרי פעילויות חשודות בדלפקים או באזורי שירות." },
    { type: "מצלמת כיפה (Dome)", desc: "מותקנת על תקרה/קיר, כיסוי מרחבי רחב.", price: "₪800 – ₪1500", detail: "כוללת זום וזווית רחבה, אידיאלית לאולמות תצוגה ומרכזי קניות." },
    { type: "מצלמת צבע Full Color", desc: "תמונה צבעונית באיכות גבוהה גם בלילה.", price: "₪1500 – ₪3000", detail: "קריטי לעסקים שבהם צבע המוצר חשוב כמו חנויות בגדים או גני ילדים." },
    { type: "מצלמת רשת (IP)", desc: "חיבור ישיר לרשת לשליטה מרחוק.", price: "₪500 – ₪1000", detail: "מאפשרת ניהול מרכזי של מספר סניפים במקביל דרך ממשק תוכנה." },
  ];

  return (
    <div className="min-h-screen bg-[#1c1f26] text-white font-sans selection:bg-cyan-500/30" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 text-cyan-500 mb-6 font-black italic uppercase tracking-widest text-sm">
              <Shield size={20} /> Professional_Security_Protocol
            </div>
            <h1 className="text-5xl md:text-7xl font-[1000] italic leading-tight mb-8">
              מצלמות אבטחה <br/> 
              <span className="text-cyan-500">לניהול ומיגון העסק</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl border-r-2 border-white/10 pr-6 italic">
              מערכת אבטחה איכותית היא לא רק "עיניים" – היא שקט נפשי, כלי ניהולי וגורם הרתעה המפחית סטטיסטית עד 50% מניסיונות הפריצה.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Table of Contents - Cyber Style */}
        <div className="bg-[#2a2f3a]/30 border border-white/5 p-8 rounded-3xl mb-20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <LayoutList className="text-cyan-500" />
            <h2 className="text-xl font-black italic uppercase">תוכן עניינים לנוחיותכם</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "הגורם המרתיע", "בחירת מכשיר DVR", "יתרונות המערכת", 
              "תיעוד פריצה", "גישה מרחוק", "מצלמות מומלצות"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold italic">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Cameras Table */}
        <section className="mb-32">
          <h2 className="text-4xl font-[1000] italic mb-12 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-cyan-500" />
            מצלמות אבטחה מומלצות לעסקים
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-black/20">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-white/5 text-cyan-500 uppercase text-xs font-black italic tracking-widest">
                  <th className="p-6 border-b border-white/10">סוג מצלמה</th>
                  <th className="p-6 border-b border-white/10">תיאור</th>
                  <th className="p-6 border-b border-white/10">טווח מחיר</th>
                  <th className="p-6 border-b border-white/10">פירוט פעולה</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {cameraTypes.map((cam, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="p-6 font-black text-white">{cam.type}</td>
                    <td className="p-6 italic">{cam.desc}</td>
                    <td className="p-6 text-cyan-400 font-mono font-bold">{cam.price}</td>
                    <td className="p-6 text-sm leading-relaxed">{cam.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-slate-500 italic">* המחירים משוערים ועשויים להשתנות בהתאם ליצרן ולתנאי השטח.</p>
        </section>

        {/* Benefits Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-[#2a2f3a]/20 p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-3xl font-black italic mb-6">הגורם המרתיע והגנה משולבת</h3>
              <p className="text-slate-300 text-lg leading-relaxed italic">
                שילוב של מערכת מצלמות איכותית יחד עם מערכת אזעקה יוצר "שילדת ברזל וירטואלית". במקרה של פריצה, התיעוד מאפשר שיתוף פעולה מהיר עם המשטרה לשליפת אירועים ממכשיר ה-DVR/NVR.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <AlertTriangle />, title: "תיעוד פריצה", text: "זמן ותאריך מדויקים משמשים כראייה משפטית ומסייעים בתפיסת הפורץ בזמן אמת." },
                { icon: <MousePointer2 />, title: "גישה מרחוק", text: "ניטור העסק מכל מקום בעולם דרך הסמארטפון - צפייה חיה, הקלטה ושליטה." },
                { icon: <CheckCircle2 />, title: "ביטחון העובדים", text: "מצלמות מגינות על העובדים מפני אירועים אלימים ותורמות לאווירה בטוחה." },
                { icon: <Settings2 />, title: "ייעול העסק", text: "פיקוח על עמדות קופה, מחסנים ותפוקת עבודה ללא צורך בנוכחות פיזית." },
              ].map((benefit, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5">
                  <div className="text-cyan-500 mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-black italic mb-3">{benefit.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm italic">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side Considerations Panel */}
          <div className="bg-cyan-500 text-black p-10 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black italic leading-tight mb-8 uppercase">שיקולים בבחירת מערכת</h3>
              <ul className="space-y-6">
                {[
                  "גודל העסק והיקפו",
                  "רמת תאורה (יום/לילה)",
                  "אזורי קבלת קהל",
                  "מיקומי קופה וכספת",
                  "דרישות אסתטיקה",
                  "צרכי ביטוח ספציפיים"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-bold italic border-b border-black/10 pb-2">
                    <span className="text-xs bg-black text-white w-5 h-5 flex items-center justify-center rounded-full shrink-0">{i+1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 bg-black text-white p-6 rounded-2xl">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-500 mb-2">Pro Tip:</p>
              <p className="text-sm italic">אל תתפשרו על קצב פריימים (FPS). ודאו שה-DVR תומך ב-25fps לכל ערוץ להקלטה חלקה.</p>
            </div>
          </div>
        </section>

        {/* Wireless vs Wired Comparison */}
        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Radio className="mx-auto text-cyan-500 mb-4" size={40} />
            <h2 className="text-4xl font-[1000] italic uppercase mb-6 text-white">קווית או אלחוטית?</h2>
            <p className="text-slate-400 italic">הדילמה הטכנולוגית של כל בעל עסק. הנה מה שחשוב לדעת לפני שמחליטים:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-white/10 p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent">
              <h4 className="text-2xl font-black italic mb-6 text-cyan-500">אלחוטית (Wi-Fi)</h4>
              <ul className="space-y-4 text-slate-300 italic">
                <li>• התקנה פשוטה ללא תשתיות מורכבות.</li>
                <li className="text-red-400">• סכנת עיכובים בקבלת נתונים (Latency).</li>
                <li className="text-red-400">• תלות בטווח השידור ומחסומים (קירות).</li>
                <li className="text-red-400">• רגישות להפרעות גלי רדיו ממכשירים אחרים.</li>
              </ul>
            </div>
            <div className="border border-white/10 p-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 to-transparent">
              <h4 className="text-2xl font-black italic mb-6 text-white">קווית (Cabled)</h4>
              <ul className="space-y-4 text-slate-300 italic">
                <li>• אמינות מקסימלית ללא נפילות שידור.</li>
                <li>• שידור רציף של נתונים בזמן אמת.</li>
                <li>• איכות וידאו גבוהה ללא דחיסה אלחוטית.</li>
                <li>• דורשת מתקין מקצועי להנחת תשתיות.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-[1000] italic mb-12 text-center uppercase">Security_FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "כמה עולות מצלמות אבטחה?", a: "המחיר משתנה, אך ב'קיסר' ניתן למצוא סטים החל מ-2,490 ש\"ח הכוללים 4 מצלמות, DVR, חיווט והתקנה מלאה." },
              { q: "איך למקם את המצלמות?", a: "זה הפרמטר הקריטי ביותר. מומלץ להתקין בכניסות, יציאות, אזור קופה, מחסנים (בכל מעבר) ובנקודות רגישות בעסק." },
              { q: "האם מומלץ לקנות מצלמות IP אלחוטיות?", a: "זה תלוי באופי העסק. למקומות ללא תשתית זה פתרון טוב, אך לעסק שדורש אמינות 24/7 אנו ממליצים על מערכת קווית." }
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <h5 className="text-xl font-black italic text-cyan-500 mb-4">{faq.q}</h5>
                <p className="text-slate-400 italic leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="py-20 text-center border-t border-white/5 opacity-50">
        <div className="flex justify-center gap-8 mb-8">
           <Shield className="text-cyan-500" />
           <Video className="text-cyan-500" />
           <hardDrive className="text-cyan-500" />
        </div>
        <p className="text-[10px] font-black tracking-[0.6em] uppercase italic">
          Keisar // Business Security Standards // 2026
        </p>
      </footer>
    </div>
  );
}