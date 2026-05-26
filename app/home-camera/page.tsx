"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Eye, ShieldCheck, Wifi, Battery, 
  Lock, Users, Baby, Truck, Zap, Cloud, Info
} from 'lucide-react';

export default function HomeSecurityPage() {
  const useCases = [
    { 
      icon: <Baby size={32} />, 
      title: "ילדים ללא השגחה", 
      text: "העין שלכם תמיד פקוחה על השמרטף או הילדים שחזרו מביה\"ס, גם כשאתם בישיבה בעבודה." 
    },
    { 
      icon: <Users size={32} />, 
      title: "בעלי מקצוע", 
      text: "פיקוח על שיפוצניקים או מנקים שנמצאים בשטח הפרטי שלכם ללא ליווי צמוד." 
    },
    { 
      icon: <Truck size={32} />, 
      title: "שליחים ומסירות", 
      text: "ודאו שהמשלוח הגיע לדלת הנכונה ומנעו גניבות חבילות מפתח הבית בזמן אמת." 
    }
  ];

  const faqItems = [
    { q: "האם אפשר לצפות במצלמה מכל מקום בעולם?", a: "כן. כל עוד יש חיבור אינטרנט פעיל בבית ובמכשיר הנייד, תוכלו לצפות בשידור חי ולגשת להקלטות דרך האפליקציה." },
    { q: "מה עדיף – סוללה או חיבור קבוע לחשמל?", a: "סוללה מצוינת למיקומים ללא שקע; חיבור חשמל קבוע מבטל את הצורך בטעינה ומומלץ לנקודות קריטיות עם פעילות תדירה." },
    { q: "מה קורה אם האינטרנט נופל?", a: "לא תוכלו לצפות בשידור חי בזמן הנפילה, אך דגמים רבים ממשיכים להקליט מקומית על כרטיס זיכרון." }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans selection:bg-sky-200/30" dir="rtl">
      
      {/* Hero Section - Futuristic Focus */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-500/20 text-sky-600 text-xs font-black uppercase tracking-widest mb-8">
              <Zap size={14} fill="currentColor" /> Remote_Access_Enabled
            </div>
            <h1 className="text-6xl md:text-8xl font-[1000] italic leading-[0.9] tracking-tighter mb-8">
              הבית שלך <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>בכף היד.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 border-r-4 border-sky-500 pr-6 italic">
              מצלמה לבית דרך הטלפון היא כבר מזמן לא מותרות. היא מייצגת שקט נפשי ושליטה מלאה על המתרחש במבצר הפרטי שלכם, מכל מקום בעולם.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Smartphone />, title: "שליטה מלאה", desc: "פתיחת האפליקציה וצפייה בשידור חי ב-HD מכל מקום." },
            { icon: <Eye />, title: "ראיית לילה", desc: "תיעוד חד וברור גם בחשיכה מוחלטת בתוך הבית." },
            { icon: <ShieldCheck />, title: "הרתעה", desc: "נוכחות המצלמה מונעת פריצות וחדירות לא רצויות." },
            { icon: <Cloud />, title: "גיבוי ענן", desc: "החומרים שלכם שמורים ומאובטחים גם במקרה של גניבה." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white border border-sky-100 rounded-[2rem] hover:border-sky-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-500 group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-black italic mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm italic leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scenario Section - Who is it for? */}
      <section className="py-32 bg-sky-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-[1000] italic text-center mb-20 uppercase tracking-tighter">
            למי זה <span className="text-sky-600">רלוונטי?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {useCases.map((use, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex p-6 rounded-full bg-black border border-sky-500/20 text-sky-600 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(2,132,199,0.1)]">
                  {use.icon}
                </div>
                <h4 className="text-2xl font-black italic mb-4">{use.title}</h4>
                <p className="text-slate-600 italic leading-relaxed">{use.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Breakdown - "How it works" */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-[1000] italic mb-8 border-r-4 border-sky-500 pr-6 uppercase">Technology_Core</h2>
            <p className="text-slate-700 text-lg mb-12 italic leading-relaxed">
              המצלמות מחוברות למודם האינטרנט הביתי בחיבור Wi-Fi יציב. הנתונים מוצפנים ונשלחים ישירות לענן ולאפליקציה בטלפון שלך.
            </p>
            
            <div className="space-y-8">
              {[
                { label: "מיקום אסטרטגי", detail: "כיסוי דלת כניסה, סלון ומסדרונות ללא שטחים מתים." },
                { label: "איכות צילום", detail: "Full HD ומעלה עם התמקדות אוטומטית בתנועה." },
                { label: "אבטחת מידע", detail: "הצפנה מקצה לקצה ואימות דו-שלבי לפרטיות מלאה." }
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-sky-600"><Info size={20} /></div>
                  <div>
                    <h5 className="font-black italic text-slate-900">{point.label}</h5>
                    <p className="text-sm text-slate-600 italic">{point.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
             <div className="aspect-square bg-gradient-to-tr from-cyan-500/20 to-purple-500/10 rounded-[3rem] border border-sky-200 flex items-center justify-center relative overflow-hidden group">
                {/* Visual Placeholder for a Phone/App mockup */}
                <Smartphone size={150} className="text-slate-900/20 group-hover:scale-110 group-hover:text-sky-600 transition-all duration-700" strokeWidth={1} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="absolute bottom-10 inset-x-10 p-6 bg-sky-200 backdrop-blur-xl border border-sky-200 rounded-2xl">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      <p className="text-xs font-black uppercase tracking-widest">Live_Feed_Active</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Table Styled */}
      <section className="max-w-5xl mx-auto px-6 py-20 mb-20">
        <div className="bg-white rounded-[2.5rem] border border-sky-100 overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-sky-100 bg-sky-50">
            <h3 className="text-2xl font-[1000] italic text-center uppercase tracking-widest">Frequently_Asked_Questions</h3>
          </div>
          <div className="divide-y divide-white/5">
            {faqItems.map((faq, i) => (
              <div key={i} className="p-8 flex flex-col md:flex-row gap-6 hover:bg-sky-50 transition-colors">
                <div className="md:w-1/3 font-black italic text-sky-600 text-lg">
                   {faq.q}
                </div>
                <div className="md:w-2/3 text-slate-600 italic leading-relaxed">
                   {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-50 -skew-y-3" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-[1000] italic mb-8">אל תתפשרו על <span className="text-sky-600">הביטחון שלכם.</span></h2>
          <p className="text-xl text-slate-600 italic mb-12">צרו קשר עם מומחי 'קיסר' להתקנה מקצועית ושקט נפשי אמיתי.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-600 text-white px-12 py-6 rounded-2xl font-[1000] text-2xl italic shadow-[0_10px_40px_rgba(6,182,212,0.4)]"
          >
            תיאום ייעוץ מקצועי
          </motion.button>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 border-t border-sky-100">
        <p className="text-[10px] font-black tracking-[0.6em] uppercase italic">
          Keisar Home Security // Advanced_Monitoring_System // 2026
        </p>
      </footer>
    </div>
  );
}