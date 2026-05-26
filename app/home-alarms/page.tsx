"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Settings, 
  Smartphone, 
  Home, 
  Wifi, 
  Cable, 
  BellRing, 
  Flame, 
  Wind, 
  Droplets, 
  Cpu, 
  MousePointer2, 
  Users, 
  Zap,
  Info,
  ChevronLeft,
  LayoutGrid
} from 'lucide-react';

export default function HomeAlarmInstallation() {
  const mainComponents = [
    { title: "יחידת בקרה (רכזת)", desc: "המוח של המערכת, הכולל את כרטיסי החומרה והמעבד.", icon: <Cpu /> },
    { title: "לוח מקשים", desc: "ממשק התכנות, הדריכה והניטרול של המערכת.", icon: <LayoutGrid /> },
    { title: "גלאי בטיחות", desc: "חיישני עשן, גז, מים וגלאי מצוקה מתקדמים.", icon: <Flame /> },
    { title: "מגעים מגנטיים", desc: "הגנה היקפית לחלונות ודלתות נגד פתיחה.", icon: <MousePointer2 /> },
    { title: "סוללות גיבוי", desc: "הבטחת פעילות רציפה גם בהפסקות חשמל יזומות.", icon: <Zap /> },
    { title: "צופרים (סירנות)", desc: "צופר פנימי וחיצוני להרתעה מקסימלית.", icon: <BellRing /> }
  ];

  const monitoringMethods = [
    { type: "סלולרי (Cellular)", speed: "מהיר מאוד", reliability: "מקסימלית", desc: "לא ניתן לנטרול על ידי חיתוך קווים.", icon: <Smartphone />, active: true },
    { type: "פס רחב (IP)", speed: "מהיר ביותר", reliability: "גבוהה", desc: "שליחה דרך האינטרנט, חסכוני במחיר.", icon: <Wifi />, active: false },
    { type: "קו טלפון", speed: "איטי", reliability: "בינונית", desc: "השיטה המסורתית, דורשת קו פיזי.", icon: <Cable />, active: false }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans selection:bg-blue-500 overflow-hidden" dir="rtl">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-100 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-blue-400 mb-6 font-black tracking-widest text-xs italic uppercase"
          >
            <div className="h-px w-12 bg-blue-400" />
            HOME_SECURITY_ARCHITECTURE
          </motion.div>
          
          <h1 className="text-6xl md:text-[8rem] font-[1000] italic leading-[0.8] mb-10 tracking-tighter uppercase">
            התקנת <br/>
            <span className="text-blue-500 text-glow">אזעקה לבית</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
            <p className="text-xl text-slate-600 italic max-w-2xl leading-relaxed">
              השקעה באזעקה ביתית היא לא רק הגנה על רכוש, אלא השקעה בשקט הנפשי שלכם. גלו את הטכנולוגיות שיהפכו את הבית שלכם למבצר חכם ומבוצר.
            </p>
            <div className="bg-sky-50 border border-sky-200 p-6 rounded-3xl backdrop-blur-md">
                <div className="flex items-center gap-4 text-blue-500 font-black italic">
                   <ShieldCheck size={32} />
                   <span className="text-2xl italic uppercase">SECURE_HOME_V4</span>
                </div>
            </div>
          </div>
        </header>

        {/* Main Components Grid */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-[1000] italic uppercase">רכיבי המערכת</h2>
            <div className="flex-grow h-px bg-sky-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainComponents.map((comp, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="p-8 bg-sky-50 border border-sky-200 rounded-[2.5rem] transition-all group"
              >
                <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl w-fit text-blue-500 group-hover:scale-110 transition-transform">
                  {comp.icon}
                </div>
                <h3 className="text-xl font-[1000] italic mb-3 uppercase">{comp.title}</h3>
                <p className="text-slate-500 text-sm italic leading-relaxed">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Home Automation & Smart Control */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
             <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative bg-sky-50 border border-sky-200 rounded-[4rem] p-12 overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                   <Smartphone size={48} className="text-blue-500" />
                   <div className="text-[10px] font-black bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full uppercase tracking-widest italic">Live_Control</div>
                </div>
                <h2 className="text-4xl font-[1000] italic mb-6 uppercase leading-tight italic">אוטומציה ובית חכם</h2>
                <p className="text-slate-600 italic mb-8 leading-relaxed">
                   המערכת שלנו היא לא רק אזעקה. היא מאפשרת לכם לשלוט בתאורה, בדוד, במזגן ובמכשירי החשמל – הכל מאפליקציה אחת מכל מקום בעולם.
                </p>
                <ul className="space-y-4">
                  {["דריכה ונטרול מרחוק", "צפייה במצלמות בזמן אמת", "דיווח על חזרת ילדים מהביה\"ס", "ניטור טמפרטורה וצריכת חשמל"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold italic text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
          <div className="space-y-8">
             <div className="p-8 bg-blue-600 rounded-[3rem] text-black group relative overflow-hidden">
                <Users size={80} className="absolute -bottom-4 -left-4 opacity-10" />
                <h3 className="text-2xl font-[1000] italic mb-4 uppercase">הילדים חזרו? קיבלתם SMS</h3>
                <p className="font-bold italic text-sm leading-relaxed">
                   המערכת המודרנית יודעת לשלוח התראה מידית להורים כשהילדים נכנסים הביתה ומנטרלים את המערכת. שקט נפשי מלא גם כשאתם בעבודה.
                </p>
             </div>
             <div className="p-8 bg-sky-50 border border-sky-200 rounded-[3rem]">
                <h3 className="text-xl font-[1000] italic mb-4 text-blue-500 uppercase">ניטור בטיחות מתקדם</h3>
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 text-xs font-black italic"><Flame size={16} className="text-red-500"/> גילוי אש</div>
                   <div className="flex items-center gap-3 text-xs font-black italic"><Wind size={16} className="text-slate-600"/> דליפת גז</div>
                   <div className="flex items-center gap-3 text-xs font-black italic"><Droplets size={16} className="text-sky-600"/> הצפת מים</div>
                   <div className="flex items-center gap-3 text-xs font-black italic"><Info size={16} className="text-blue-500"/> פחמן דו-חמצני</div>
                </div>
             </div>
          </div>
        </section>

        {/* Monitoring Methods Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-[1000] italic uppercase italic">שיטות ניטור וקשר</h2>
            <p className="text-slate-500 mt-4 italic">איך המערכת שלכם מדברת עם העולם במקרה חירום?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monitoringMethods.map((method, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border transition-all ${method.active ? 'bg-blue-600 text-black border-blue-500' : 'bg-sky-50 border-sky-200 text-slate-900'}`}>
                <div className="mb-6">{method.icon}</div>
                <h3 className="text-2xl font-[1000] italic mb-2 uppercase">{method.type}</h3>
                <div className="flex gap-2 mb-6">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded border ${method.active ? 'border-black/20' : 'border-sky-200'}`}>מהירות: {method.speed}</span>
                </div>
                <p className={`text-sm italic leading-relaxed font-bold ${method.active ? 'text-black/80' : 'text-slate-500'}`}>
                  {method.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DIY vs Professional Installation */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="p-12 bg-sky-50 border border-sky-200 rounded-[4rem]">
              <h3 className="text-3xl font-[1000] italic mb-6 uppercase">התקנה עצמית (DIY)</h3>
              <p className="text-slate-600 italic mb-6 text-sm leading-relaxed">
                מערכות אלחוטיות המגיעות מוכנות להגדרה. פתרון מהיר וכלכלי, ללא צורך בביקור טכנאי. מומלץ לשוכרי דירות או למי שמחפש פשטות.
              </p>
              <div className="flex items-center gap-2 text-sky-600 font-black italic">
                 <Settings size={20} /> חסכון בעלויות התקנה
              </div>
           </div>
           <div className="p-12 bg-blue-500/10 border border-blue-500/30 rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20"><Info size={80}/></div>
              <h3 className="text-3xl font-[1000] italic mb-6 uppercase text-blue-500">התקנה מקצועית</h3>
              <p className="text-slate-700 italic mb-6 text-sm leading-relaxed">
                טכנאי מוסמך של קיסר מבצע את כל החיווט, התכנות וההדרכה. מבטיח שהמערכת עובדת ב-100% דיוק ושלמות ללא תקלות עתידיות.
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-black italic">
                 <ShieldCheck size={20} /> אחריות מלאה על הציוד והעבודה
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-[4rem] p-16 text-black text-center relative overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-[1000] italic mb-8 uppercase leading-none italic">מוכנים לאבטח את הבית?</h2>
            <p className="text-xl font-bold italic mb-12 max-w-2xl mx-auto italic leading-tight">
              צוות קיסר מחכה לייעוץ לכם ולהתאים לכם את מערכת האזעקה האידיאלית שתגן על היקר לכם מכל. אל תחכו למקרה הבא.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="bg-black text-slate-900 px-16 py-6 rounded-2xl font-[1000] italic text-2xl uppercase hover:scale-105 transition-transform flex items-center gap-4">
                <Zap size={24} />
                קבלו הצעת מחיר מקיסר
              </button>
            </div>
          </div>
        </section>

      </div>

      <footer className="py-12 border-t border-sky-100 text-center">
        <p className="text-[10px] font-black tracking-[1em] uppercase italic text-slate-700 italic">
          Keisar_SECURITY // SMART_ALARM_INSTALLATION // 2026
        </p>
      </footer>
    </div>
  );
}