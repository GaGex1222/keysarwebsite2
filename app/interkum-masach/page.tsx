"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Eye, 
  Moon, 
  UserCheck, 
  Smartphone, 
  ShieldCheck, 
  MousePointer2, 
  Briefcase, 
  Home, 
  Video,
  ChevronLeft,
  Search,
  ScanFace
} from 'lucide-react';

export default function IntercomWithScreen() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-white font-sans selection:bg-cyan-500/30 overflow-hidden" dir="rtl">
      
      {/* --- AMBIENT OVERLAY --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(6,182,212,0.08),transparent_40%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-30" />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 px-6 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-6 text-cyan-400 font-bold italic tracking-[0.2em] text-xs uppercase"
        >
          <Video size={16} />
          <span>Seeing is Believing</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[115px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-8"
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        >
          אינטרקום <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>עם מסך.</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-slate-400 text-xl md:text-2xl font-light italic leading-relaxed">
          מי שהתקין פעם אחת, לא חוזר אחורה. המעבר מתקשורת קולית לחוויה ויזואלית מלאה משנה את חוקי המשחק בביטחון האישי שלכם.
        </p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* --- SECTION: ADVANTAGES --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-tight">
              היתרונות שרואים <br /><span className="text-cyan-500 underline decoration-1 underline-offset-8">מיד.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Monitor />, t: "אינטגרציה מלאה", d: "משתלב במערכות אבטחה קיימות בקלות." },
                { icon: <MousePointer2 />, t: "ידידותי לכל גיל", d: "הפעלה אינטואיטיבית ללא צורך ברקע טכני." },
                { icon: <UserCheck />, t: "בקרה מוחלטת", d: "פיקוח מלא על כל מי שנכנס למשרד או לבית." },
                { icon: <Moon />, t: "ראיית לילה IR", d: "זיהוי פנים מדויק גם בחושך מוחלט." }
              ].map((item, i) => (
                <motion.div 
                  key={i} whileHover={{ x: -5 }}
                  className="p-6 border border-white/5 rounded-3xl bg-white/[0.02] flex flex-col gap-4"
                >
                  <div className="text-cyan-500">{item.icon}</div>
                  <h4 className="font-bold text-lg italic text-white">{item.t}</h4>
                  <p className="text-slate-500 text-sm italic">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual: Screen Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] opacity-20" />
            <div className="relative aspect-video rounded-[2rem] border-4 border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-slate-800 bg-cover opacity-20" />
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">Live_Feed_01</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ScanFace size={80} className="text-cyan-500/40" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: HOME VS OFFICE --- */}
        <section className="space-y-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase">בית או משרד? <br /><span className="text-cyan-500 underline decoration-1 underline-offset-[12px]">ההבדל הוא בצרכים.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Office */}
            <div className="group p-12 border border-white/5 rounded-[4rem] bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <Briefcase className="text-cyan-500 mb-8 w-12 h-12" />
              <h3 className="text-3xl font-black italic mb-6 uppercase">אינטרקום למשרד</h3>
              <p className="text-slate-400 text-lg italic leading-relaxed mb-8">
                במקום עם תנועה ערה, האינטרקום משמש כמרכז בקרה. שליטה על כניסות ויציאות, שילוב קוראי ברקוד ותקשורת פנים נוחה בין מחלקות.
              </p>
              <ul className="space-y-3 text-slate-500 font-bold italic text-sm">
                <li>• עמידות בעומס עבודה גבוה</li>
                <li>• ממשק ניהול עובדים</li>
                <li>• תיעוד ויזואלי של אורחים</li>
              </ul>
            </div>

            {/* Home */}
            <div className="group p-12 border border-cyan-500/10 rounded-[4rem] bg-cyan-500/[0.02] hover:bg-cyan-500/[0.04] transition-all">
              <Home className="text-cyan-500 mb-8 w-12 h-12" />
              <h3 className="text-3xl font-black italic mb-6 uppercase">אינטרקום לבית</h3>
              <p className="text-slate-400 text-lg italic leading-relaxed mb-8">
                הביטחון של הילדים והמשפחה מעל הכל. זיהוי ודאי של מי שעומד בדלת לפני שפותחים, עם עדשות איכותיות שרואות הכל – גם בחושך.
              </p>
              <ul className="space-y-3 text-slate-500 font-bold italic text-sm">
                <li>• עדשה רחבה לכיסוי מקסימלי</li>
                <li>• הפעלה פשוטה לילדים וקשישים</li>
                <li>• עיצוב דקורטיבי שמשתלב בבית</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- SECTION: PERSONAL SECURITY --- */}
        <section className="relative py-24 text-center space-y-12 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase">הביטחון האישי <br /><span className="text-cyan-500">בכל מקום.</span></h2>
            <p className="text-slate-400 text-xl italic leading-relaxed font-light">
              בעולם שבו אנחנו כבר לא משאירים דלתות פתוחות, האינטרקום עם המסך הוא השומר האישי שלכם. הוא מחליף את העינית המיושנת ומעניק לכם פיקוח איכותי וחד.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
             {["פאנל ברזל מוגן מים", "מצלמת לילה מובנית", "קודן מואר", "מסך מגע HD"].map((feat, i) => (
               <span key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-xs font-black italic uppercase tracking-widest">
                 {feat}
               </span>
             ))}
          </div>
        </section>

        {/* --- SECTION: PROFESSIONALISM --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <div className="order-2 lg:order-1 relative group">
             <div className="grid grid-cols-2 gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="h-40 rounded-2xl bg-white/5" />
                <div className="h-40 rounded-2xl bg-cyan-500/10" />
                <div className="h-40 rounded-2xl bg-cyan-500/10" />
                <div className="h-40 rounded-2xl bg-white/5" />
             </div>
             <Search className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500 w-20 h-20" />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black italic leading-tight uppercase">בחירת <br /><span className="text-cyan-500 italic">אנשי המקצוע.</span></h2>
            <p className="text-slate-400 text-lg md:text-xl italic leading-relaxed font-medium">
              התקנת מסך אינטרקום היא עבודה למקצוענים. אל תתפשרו על הביטחון שלכם – בחרו בחברה עם המלצות מוכחות, שירות ללא פשרות וניסיון של שנים בשטח.
            </p>
            <div className="flex items-center gap-4 p-6 border border-white/5 rounded-3xl bg-white/[0.02]">
              <ShieldCheck className="text-cyan-500 w-10 h-10" />
              <div>
                <h4 className="font-bold text-xl italic text-white uppercase">אחריות מלאה</h4>
                <p className="text-slate-500 text-sm italic">אנחנו כאן כדי לוודא שהמערכת שלכם עובדת מושלם, תמיד.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- FINAL CTA --- */}
        <section className="text-center py-20">
           <motion.h2 
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
             className="text-5xl md:text-[100px] font-[1000] italic leading-tight uppercase mb-12"
           >
             מוכנים <span className="text-cyan-500 italic uppercase">לראות</span> <br /> את השינוי?
           </motion.h2>
           <button className="group relative px-20 py-8 bg-white text-black font-[1000] italic text-3xl rounded-[2.5rem] shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all hover:scale-105 active:scale-95">
              <span className="flex items-center gap-4">
                צרו קשר לייעוץ
                <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
              </span>
           </button>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Eye className="text-cyan-500" />
            <span className="text-2xl font-black italic uppercase tracking-[0.2em]">ALSEC VISUAL_SECURITY</span>
          </div>
          <p className="text-slate-600 font-bold italic text-[10px] uppercase tracking-widest">
            Future-proof monitoring solutions for home and business.
          </p>
        </div>
      </footer>

    </div>
  );
}