"use client";

import React from "react";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import * as Icons from "lucide-react";

// הגדרת סוג הנתונים לשירותים
interface Service {
  title: string;
  icon: keyof typeof Icons;
  desc: string;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // פתרון ה-Error: הגדרת הטיפוס עבור האנימציה
  const fadeIn: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const services: Service[] = [
    { title: "מערכות מצלמות (CCTV)", icon: "Video", desc: "פתרונות הקלטה וצפייה מרחוק באיכות 4K עם זיהוי אנושי מבוסס AI." },
    { title: "מערכות אזעקה", icon: "Bell", desc: "מערכות פריצה קוויות ואלחוטיות מהמותגים המובילים בעולם עם חיבור למוקד." },
    { title: "אינטרקום ובקרת כניסה", icon: "Smartphone", desc: "מערכות IP מתקדמות, פתיחה מהסמארטפון ובקרות כניסה ביומטריות." },
    { title: "בית חכם (Smart Home)", icon: "Zap", desc: "שליטה מלאה על תאורה, מיזוג וחשמל מכל מקום בעולם בממשק אחד." },
    { title: "תשתיות תקשורת", icon: "Wifi", desc: "הקמת רשתות WI-FI עוצמתיות, פריסת סיבים אופטיים וארונות תקשורת." },
    { title: "גילוי אש ועשן", icon: "AlertTriangle", desc: "התקנת מערכות עפ\"י תקן 1220 לבטיחות מקסימלית של המבנה." }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans" dir="rtl">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full" 
        />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-cyan-50/50 blur-[100px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-blue-100 px-6 md:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Icons.ShieldCheck className="text-white" size={28} />
          </div>
          <div className="flex flex-col leading-tight text-right">
            <span className="text-2xl font-black tracking-tight text-blue-900">קיסר מערכות</span>
            <span className="text-[10px] text-blue-500 font-bold tracking-[0.1em]">SECURITY & TECHNOLOGY</span>
          </div>
        </div>

        <div className="hidden md:flex gap-10 text-sm font-bold text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">שירותים</a>
          <a href="#" className="hover:text-blue-600 transition-colors">עלינו</a>
          <a href="#" className="hover:text-blue-600 transition-colors">לקוחות</a>
        </div>

        <button className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
          צור קשר
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-8 border border-blue-100"
          >
            מצוינות במיגון וטכנולוגיה
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 text-slate-900 leading-[0.95] tracking-tight"
          >
            הגנה חכמה. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-500">שקט נפשי מלא.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 max-w-3xl mx-auto text-xl md:text-2xl mb-12 font-medium leading-relaxed"
          >
            קיסר מערכות מספקת פתרונות קצה לעולם הביטחון והמתח הנמוך. אנו משלבים טכנולוגיה מתקדמת עם התקנה מקצועית לבית ולעסק.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-3">
              לקבלת הצעת מחיר <Icons.ChevronLeft size={24} />
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
              הפרויקטים שלנו
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 relative bg-white/40">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-right mb-20 border-r-4 border-blue-600 pr-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">פתרונות טכנולוגיים מתקדמים</h2>
            <p className="text-slate-500 text-xl font-medium">המומחיות שלנו היא הביטחון האישי שלך</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-right">
            {services.map((s, i) => {
              const IconComponent = Icons[s.icon] as React.ElementType;
              return (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group p-8 rounded-[40px] bg-white border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg font-medium">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-blue-600 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10">מוכנים לשדרג את הביטחון?</h2>
            <p className="text-blue-100 text-xl md:text-2xl mb-12 font-medium">
              הצטרפו למאות לקוחות שכבר נהנים משירות מקצועי, יחס אישי וטכנולוגיה ללא פשרות.
            </p>
            <button className="bg-white text-blue-600 px-16 py-6 rounded-[28px] font-black text-2xl hover:scale-105 transition-transform shadow-2xl active:scale-95 flex items-center gap-4 mx-auto">
              <Icons.PhoneCall size={28} /> דברו איתנו עכשיו
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 font-bold tracking-widest text-sm uppercase">
          © 2026 קיסר מערכות | פותח ע"י ShieldUp
        </p>
      </footer>
    </main>
  );
}