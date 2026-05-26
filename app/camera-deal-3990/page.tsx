"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cctv, 
  HardDrive, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  Clock, 
  MousePointerClick,
  Eye,
  ShieldAlert,
  AppWindow,
  Layers
} from 'lucide-react';

export default function PromoPackagePage() {
  const specs = [
    {
      icon: <Cctv className="text-sky-600" />,
      title: "4 מצלמות אינפרא 5MP",
      desc: "מוגנות מים, אנטי-ונדל, עדשה רחבה 3.6 מ\"מ וראיית לילה ל-40 מטר."
    },
    {
      icon: <HardDrive className="text-sky-600" />,
      title: "DVR היברידי 8 ערוצים",
      desc: "תמיכה ב-5MP, כניסות מוזהבות, 4 מיקרופונים ואחסון עד 8TB."
    },
    {
      icon: <Smartphone className="text-sky-600" />,
      title: "אפליקציית שליטה חכמה",
      desc: "צפייה בזמן אמת, שחזור הקלטות וגיבוי ישירות לנייד מכל מקום בעולם."
    },
    {
      icon: <Zap className="text-sky-600" />,
      title: "התקנה והדרכה מלאה",
      desc: "חיווט מקצועי, הגדרת מערכת והדרכה אישית בבית הלקוח או בעסק."
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-sans overflow-hidden" dir="rtl">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        
        {/* Header / Badge */}
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1 bg-sky-100 border border-sky-500/20 rounded-full flex items-center gap-2"
          >
            <ShieldCheck size={14} className="text-sky-600" />
            <span className="text-sky-600 text-xs font-black tracking-widest uppercase italic">Limited_Time_Offer // Keisar_Elite</span>
          </motion.div>
        </div>

        {/* Main Title & Price */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-[1000] italic leading-tight mb-6 uppercase tracking-tighter">
            מערכת אבטחה <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>PREMIUM COMPLETE</span>
          </h1>
          
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20" />
            <div className="relative bg-sky-50 border border-sky-200 backdrop-blur-md px-12 py-6 rounded-[2.5rem]">
              <span className="text-slate-600 text-xl italic block mb-1">חבילת הכל כלול ב-</span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-7xl font-[1000] text-slate-900 italic">3,990</span>
                <span className="text-3xl font-black text-sky-600">₪</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-bold">*המחיר אינו כולל מע"מ | כולל התקנה מלאה</p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Visual Showcase Left */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
            <div className="h-full bg-sky-50 border border-sky-200 p-12 rounded-[3rem] flex flex-col justify-between overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sky-100 rounded-2xl text-sky-600">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-2xl font-black italic">ראייה מעבר לאופק</h3>
                </div>
                <p className="text-slate-600 italic text-lg leading-relaxed">
                  הסט כולל 4 מצלמות אינפרא 5MP בתקן <span className="text-slate-900 font-bold">אנטי-ונדל</span>. 
                  איכות FULL-HD שמבטיחה זיהוי פנים ולוחיות רישוי גם בחשיכה מוחלטת עד 40 מטר.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="p-4 bg-sky-100 rounded-2xl border border-sky-100 text-center">
                  <div className="text-sky-600 font-black text-xl italic mb-1">5MP</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">Resolution</div>
                </div>
                <div className="p-4 bg-sky-100 rounded-2xl border border-sky-100 text-center">
                  <div className="text-sky-600 font-black text-xl italic mb-1">IP67</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">Waterproof</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specs List Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specs.map((spec, i) => (
              <div key={i} className="p-8 bg-sky-50 border border-sky-200 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group">
                <div className="mb-4 group-hover:scale-110 transition-transform w-fit italic">
                  {spec.icon}
                </div>
                <h4 className="text-lg font-[1000] italic mb-2 uppercase tracking-tight">{spec.title}</h4>
                <p className="text-slate-500 text-xs italic leading-snug">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="bg-sky-600 p-8 rounded-[3rem] text-white mb-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldAlert size={120} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="flex items-center gap-3">
              <Clock className="shrink-0" />
              <span className="font-black italic">הקלטה רציפה ל-30 יום</span>
            </div>
            <div className="h-8 w-px bg-sky-100 hidden md:block" />
            <div className="flex items-center gap-3">
              <CheckCircle2 className="shrink-0" />
              <span className="font-black italic">כניסות מוזהבות למניעת רעשים</span>
            </div>
            <div className="h-8 w-px bg-sky-100 hidden md:block" />
            <div className="flex items-center gap-3">
              <AppWindow className="shrink-0" />
              <span className="font-black italic">ממשק היברידי מתקדם</span>
            </div>
          </div>
        </div>

        {/* Call To Action Section */}
        <section className="text-center bg-sky-50 border border-sky-200 rounded-[4rem] p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-[1000] italic mb-8">מוכנים לאבטחה ברמה אחרת?</h2>
            <p className="text-xl text-slate-600 italic mb-12 max-w-2xl mx-auto">
              הצוות של קיסר מחכה להפוך את הבית או העסק שלך למבצר טכנולוגי. 
              התקנה מהירה, מקצועית ושירות ללא פשרות.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-2xl font-[1000] italic text-xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all group">
                <MousePointerClick size={20} className="group-hover:scale-125 transition-transform" />
                להזמנת החבילה עכשיו
              </button>
              <button className="w-full md:w-auto bg-transparent border border-sky-300 text-slate-900 px-12 py-5 rounded-2xl font-[1000] italic text-xl hover:bg-sky-50 transition-all">
                ייעוץ חינם עם טכנאי
              </button>
            </div>
            
            <div className="mt-12 flex justify-center items-center gap-8 text-slate-500 opacity-50">
               <Layers size={20} />
               <span className="text-[10px] font-black tracking-[0.4em] uppercase italic">Keisar_Standard_Security_2026</span>
               <Layers size={20} />
            </div>
          </div>
        </section>

      </div>

      {/* Footer Branding */}
      <footer className="py-10 text-center border-t border-sky-100">
        <p className="text-[9px] font-black tracking-[1em] uppercase italic text-slate-600">
          Security // Innovation // Keisar_SYSTEMS
        </p>
      </footer>
    </div>
  );
}