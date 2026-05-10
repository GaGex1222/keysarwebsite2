"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, HTMLMotionProps, useSpring } from "framer-motion";
import * as Icons from "lucide-react";

// הגדרת סוג הנתונים לשירותים
interface Service {
  title: string;
  icon: keyof typeof Icons;
  desc: string;
}

// קומפוננטת רקע עתידני דינמי
const FuturisticBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      {/* 3D Grid Parallel */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(#e0f7fa 1px, transparent 1px), linear-gradient(90deg, #e0f7fa 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-200px) scale(3)',
          transformOrigin: 'top',
        }}
      />
      {/* Radial Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-100 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-white blur-[120px] rounded-full" />
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // אפקט Parallax מורכב יותר לכותרת
  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // הגדרת טיפוס עבור האנימציה - פתרון ה-Error
  const fadeInProps: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 40, rotateX: -10 },
    whileInView: { opacity: 1, y: 0, rotateX: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom easeOutExponetial
  };

  const services: Service[] = [
    { title: "מערכות מצלמות (CCTV)", icon: "Video", desc: "צפייה מרחוק ב-4K עם אנליטיקה מתקדמת מבוססת AI." },
    { title: "מערכות אזעקה", icon: "Bell", desc: "הגנה היקפית חכמה עם חיבור ישיר למוקד ואפליקציה." },
    { title: "אינטרקום ובקרת כניסה", icon: "Smartphone", desc: "מערכות IP, פתיחה ביומטרית ושליטה מהסמארטפון." },
    { title: "בית חכם (Smart Home)", icon: "Zap", desc: "אוטומציה מלאה של תאורה, מיזוג וחשמל בממשק אחד." },
    { title: "תשתיות תקשורת", icon: "Wifi", desc: "פריסת סיבים אופטיים ורשתות WI-FI 6 עוצמתיות." },
    { title: "גילוי אש ועשן", icon: "AlertTriangle", desc: "התקנת מערכות תקניות (תקן 1220) לבטיחות המבנה." }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-slate-950 overflow-hidden font-sans selection:bg-cyan-100" dir="rtl">
      
      <FuturisticBackground />

      {/* Navbar - Glassmorphism מודגש */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-2xl border-b border-cyan-100 px-6 md:px-20 py-4 flex justify-between items-center shadow-lg shadow-cyan-50/20 tracking-tight">
        <div className="flex items-center gap-3">
          {/* לוגו עתידני מואר */}
          <motion.div 
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center shadow-md shadow-cyan-300/50"
          >
            <Icons.ShieldCheck className="text-white" size={28} />
          </motion.div>
          <div className="flex flex-col leading-tight text-right">
            <span className="text-2xl font-black text-cyan-950">קיסר מערכות</span>
            <span className="text-[10px] text-cyan-600 font-bold tracking-[0.15em]">ADVANCED SECURITY TECHNOLOGIES</span>
          </div>
        </div>

        <div className="hidden md:flex gap-10 text-sm font-bold text-cyan-900/80">
          <a href="#services" className="hover:text-cyan-500 transition-colors">פרוטוקול שירותים</a>
          <a href="#" className="hover:text-cyan-500 transition-colors">ממשק עלינו</a>
          <a href="#" className="hover:text-cyan-500 transition-colors">מרכז תמיכה</a>
        </div>

        <button className="bg-cyan-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-cyan-700 transition-all shadow-md shadow-cyan-200 active:scale-95">
          סנכרון התקשרות
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-60 pb-40 px-6 text-center z-10">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }} // Overshoot ease
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-black mb-10 border border-cyan-100 shadow-inner tracking-widest uppercase"
          >
            SYSTEM STATUS: ACTIVE // CYBER-PHYSICAL PROTECTION
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-7xl md:text-9xl font-black mb-10 text-cyan-950 leading-[0.9] tracking-tighter"
          >
            אבטחה. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-cyan-300">בפקודתך.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-cyan-900/70 max-w-4xl mx-auto text-2xl md:text-3xl mb-16 font-medium leading-relaxed tracking-tight"
          >
            קיסר מערכות הופכת טכנולוגיית מיגון מורכבת לשקט נפשי טוטאלי. מהנדסים את הביטחון שלך, פאזה אחר פאזה.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="bg-cyan-600 text-white px-14 py-6 rounded-3xl font-black text-2xl hover:bg-cyan-700 transition-all hover:shadow-2xl hover:shadow-cyan-200 active:scale-95 flex items-center justify-center gap-4 group">
              אתחול הצעת מחיר <Icons.ChevronLeft size={28} className="group-hover:-translate-x-2 transition-transform" />
            </button>
            <button className="bg-white text-cyan-900 border-2 border-cyan-100 px-14 py-6 rounded-3xl font-black text-2xl hover:bg-cyan-50 transition-all shadow-sm">
              ארכיון פרויקטים
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-40 px-6 relative bg-white/80 backdrop-blur-sm z-10 border-y border-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInProps} className="text-right mb-24 border-r-8 border-cyan-500 pr-8">
            <h2 className="text-5xl md:text-7xl font-black text-cyan-950 mb-5 tracking-tight">ארכיטקטורת מיגון היקפית</h2>
            <p className="text-cyan-900/60 text-2xl font-semibold tracking-tight">מודולים טכנולוגיים מותאמים אישית לצרכים שלך</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 text-right">
            {services.map((s, i) => {
              const IconComponent = Icons[s.icon] as React.ElementType;
              return (
                <motion.div
                  key={i}
                  {...fadeInProps}
                  transition={{ ...fadeInProps.transition, delay: 0.2 + i * 0.15, rotateX: { delay: 0.2 + i * 0.15, duration: 1 } }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.02, 
                    boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.3)",
                    borderColor: "rgba(34, 211, 238, 0.5)"
                  }}
                  className="group p-10 rounded-[50px] bg-white border border-cyan-50 shadow-sm transition-all duration-500 relative overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-cyan-50 text-cyan-600 rounded-3xl flex items-center justify-center mb-10 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 shadow-inner"
                    >
                      <IconComponent size={40} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-3xl font-black text-cyan-950 mb-5 tracking-tight group-hover:text-cyan-700 transition-colors">{s.title}</h3>
                    <p className="text-cyan-900/70 leading-relaxed text-xl font-medium tracking-tight">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - עתידני קיצוני */}
      <section className="py-40 bg-cyan-600 relative overflow-hidden text-center z-10 border-t-8 border-cyan-400/50">
        {/* Animated Lines Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
              className="absolute h-px bg-white"
              style={{ top: `${i * 10}%`, left: 0, right: 0 }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-20">
          <motion.div {...fadeInProps}>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-tight">פרוטוקול שדרוג אבטחה ביוזמתך</h2>
            <p className="text-cyan-50 max-w-4xl mx-auto text-2xl md:text-3xl mb-16 font-medium leading-relaxed tracking-tight">
              אל תחכה לפריצה הבאה. צור קשר עכשיו לסנכרון מערכות מלא והטמעת טכנולוגיית המיגון המתקדמת ביותר.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.4)" }}
              whileButtonActive={{ scale: 0.95 }}
              className="bg-white text-cyan-700 px-20 py-8 rounded-[35px] font-black text-3xl hover:bg-cyan-50 transition-all shadow-2xl shadow-cyan-900/30 active:scale-95 flex items-center gap-5 mx-auto border-4 border-white/50"
            >
              <Icons.PhoneCall size={35} /> הפעלת תקשורת מיידית
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100 text-center relative z-10">
        <p className="text-cyan-900/40 font-bold tracking-[0.2em] text-xs uppercase">
          © 2026 קיסר מערכות // קריפטו-סקיוריטי פרוטוקול // פותח ע"י ShieldUp Agency
        </p>
      </footer>
    </main>
  );
}