"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Video, Mic, Smartphone, Lock, 
  UserCheck, Eye, EyeOff, Bell, Key, 
  CheckCircle2, Fingerprint, ScanEye, SmartphoneNfc,
  ChevronDown, HelpCircle, LayoutGrid
} from 'lucide-react';

export default function IntercomBusinessPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) - 0.5, 
        y: (e.clientY / window.innerHeight) - 0.5 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const faqs = [
    {
      q: "מהי מערכת אינטרקום לעסק?",
      a: "זוהי מערכת בקרה מתקדמת המאפשרת זיהוי קולי וויזואלי של הנכנסים למבנה, וניהול פתיחת הדלתות בצורה מאובטחת."
    },
    {
      q: "איך אינטרקום תורם לאבטחת העסק?",
      a: "הוא מונע כניסה של זרים לא רצויים, ריגול תעשייתי וגישה של גורמים פליליים לחומרים מסווגים."
    },
    {
      q: "האם אפשר לשלוט במערכת מהטלפון?",
      a: "כן, המערכות שלנו מבוססות ענן ומאפשרות צפייה בשידור חי ופתיחת דלת מכל מקום בעולם דרך אפליקציה ייעודית."
    },
    {
      q: "מה היתרון של מצלמות HD או 4K באינטרקום?",
      a: "זיהוי פנים מדויק גם בתנאי תאורה קשים, המאפשר לכם לדעת בוודאות מי עומד מעבר לדלת לפני האישור."
    },
    {
      q: "האם אפשר לנהל עובדים באמצעות האינטרקום?",
      a: "בוודאי. ניתן לשלב קודנים אישיים, זיהוי פנים או כרטיסי קרבה למעקב אחר שעות כניסה ויציאה."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080a0f] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30" dir="rtl">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]" />
      </div>

      {/* --- HERO / GATEKEEPER --- */}
      <header className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md"
        >
          <Fingerprint size={14} className="text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Identity_Access_Control</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[100px] font-[1000] italic leading-[0.85] tracking-tighter uppercase mb-8"
          style={{ x: mousePos.x * 20, y: mousePos.y * 10 }}
        >
          אינטרקום <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #06b6d4' }}>לעסק ולבית.</span>
        </motion.h1>

        <p className="max-w-2xl text-slate-400 text-xl md:text-2xl italic font-light leading-relaxed mb-10">
          מעטפת הגנה חכמה שמשלבת וידאו 4K, זיהוי קולי ועיצוב דור העתיד. כי בעידן המודרני, עינית בדלת היא כבר לא מספיקה.
        </p>

        <button className="bg-white/5 border border-white/10 hover:border-cyan-500/50 px-10 py-4 rounded-2xl font-black italic text-xl transition-all group">
          <span className="group-hover:text-cyan-400 transition-colors">גלה את פתרונות Keisar</span>
        </button>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* Section: Why Intercom? */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-[1000] italic leading-tight">
              עינית בדלת? <br /> <span className="text-cyan-500 uppercase italic">זה פשוט לא מספיק.</span>
            </h2>
            <div className="text-slate-400 text-lg md:text-xl italic leading-relaxed space-y-6">
              <p>
                איך אפשר לבחון מסוכנות רק ממבט חטוף? אינטרקום משולב וידאו וקול מאפשר לכם לנהל שיחה, לוודא זהות ולמנוע כניסת זרים וריגול תעשייתי.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "הגנה מגנבות", i: <Lock /> },
                  { t: "מניעת ריגול", i: <EyeOff /> },
                  { t: "שליטה מרחוק", i: <Smartphone /> },
                  { t: "זיהוי ביומטרי", i: <ScanEye /> }
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-white/5 rounded-xl bg-white/[0.02]">
                    <span className="text-cyan-500">{f.i}</span>
                    <span className="font-bold text-sm italic">{f.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual: Design Element (No solid blocks) */}
          <div className="relative flex justify-center items-center h-[400px]">
             <div className="absolute inset-0 border border-cyan-500/10 rounded-[3rem] -rotate-3" />
             <div className="relative z-10 w-64 h-[450px] border border-white/10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl flex flex-col p-6 items-center justify-between shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="w-full flex justify-between items-center opacity-50">
                   <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                   <span className="text-[8px] font-mono tracking-widest">LIVE_4K_STREAM</span>
                </div>
                <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/5 overflow-hidden">
                   <Video size={48} className="text-cyan-500 opacity-20" />
                </div>
                <div className="w-full space-y-3">
                   <div className="h-2 w-full bg-white/5 rounded-full" />
                   <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                </div>
                <div className="w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 group cursor-pointer hover:bg-cyan-500 hover:text-black transition-all">
                   <Mic size={24} />
                </div>
             </div>
          </div>
        </motion.section>

        {/* Section: Next Gen Design */}
        <section className="relative py-20">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-7xl font-[1000] italic uppercase">הדור <span className="text-cyan-500">החדש.</span></h2>
              <p className="text-slate-500 italic max-w-xl mx-auto font-bold">לא עוד לוחות מתכת מגושמים. מערכות מעוצבות שמהוות אלמנט אסתטי בכניסה לעסק.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "משולב קודן", d: "קודן אישי הניתן להחלפה תקופתית לאבטחה מקסימלית.", i: <Key /> },
                { t: "שליטה באפליקציה", d: "צפו ודברו עם הנכנסים גם כשאתם לא נמצאים בעסק.", i: <SmartphoneNfc /> },
                { t: "עיצוב חדשני", d: "חומרים איכותיים, מסכי מגע ומראה מודרני ונקי.", i: <LayoutGrid /> }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-white/5 rounded-3xl bg-white/[0.01] hover:border-cyan-500/30 transition-all group">
                   <div className="mb-6 text-cyan-500 group-hover:scale-110 transition-transform">{item.i}</div>
                   <h4 className="text-2xl font-black italic mb-4">{item.t}</h4>
                   <p className="text-slate-500 italic font-medium leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Section: FAQ (Modern Accordion) */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="flex items-center gap-4">
            <HelpCircle className="text-cyan-500" />
            <h3 className="text-3xl font-[1000] italic">שאלות <span className="text-cyan-500">ותשובות.</span></h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-right hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold italic text-slate-200">{faq.q}</span>
                  <ChevronDown className={`text-cyan-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                      className="px-6 pb-6 text-slate-500 italic font-medium"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* CTA: Protection Call */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="relative text-center py-20 border-t border-white/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]" />
          <h2 className="text-5xl md:text-8xl font-[1000] italic leading-tight mb-8">
            שומרים על <br /> <span className="text-cyan-500 uppercase">כל אקזיט לעתיד.</span>
          </h2>
          <p className="text-slate-400 text-xl italic mb-10 max-w-2xl mx-auto leading-relaxed">
            חומר מסווג, רעיונות חדשניים או פשוט בטיחות המשפחה – אנחנו כאן כדי לספק מעטפת הגנה אפסית לחדירה.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-cyan-500 text-black px-12 py-5 rounded-2xl font-[1000] text-2xl italic hover:bg-white transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              לקבלת הצעה חכמה
            </button>
          </div>
        </motion.section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050608] border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-500 italic font-black">
              AL
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xl font-black italic uppercase leading-none">Keisar SYSTEMS</span>
              <span className="text-[8px] text-slate-500 font-bold tracking-[0.4em]">SECURITY_INFRASTRUCTURE</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-slate-600 font-bold italic text-sm">
            <a href="tel:0525022222" className="hover:text-cyan-500 transition-colors">052-502-2222</a>
            <span>OFFICE@KEISAR.CO.IL</span>
            <span>PETAH TIKVA, ISRAEL</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}