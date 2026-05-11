"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  Zap,
  ChevronLeft,
  Globe
} from 'lucide-react';

const regionsData = {
  north: {
    title: "צפון הארץ והגליל",
    subTitle: "ביטחון מקסימלי מהחרמון ועד חיפה",
    cities: ["חיפה", "קריות", "נהריה", "עכו", "טבריה", "צפת", "כרמיאל", "נצרת"],
    stats: { technicians: 12, responseTime: "עד 3 שעות", activeProjects: "450+" },
    color: "emerald"
  },
  center: {
    title: "גוש דן והמרכז",
    subTitle: "הגנה חכמה בלב הפועם של ישראל",
    cities: ["תל אביב", "ראשון לציון", "פתח תקווה", "חולון", "רמת גן", "הרצליה", "נתניה", "רחובות"],
    stats: { technicians: 28, responseTime: "עד 90 דקות", activeProjects: "1,200+" },
    color: "blue"
  },
  south: {
    title: "דרום הארץ והנגב",
    subTitle: "מיגון מתקדם מאשדוד ועד אילת",
    cities: ["באר שבע", "אשדוד", "אשקלון", "שדרות", "נתיבות", "דימונה", "אילת", "ערד"],
    stats: { technicians: 15, responseTime: "עד 4 שעות", activeProjects: "600+" },
    color: "orange"
  }
};

export default function ServiceRegionPage({ region = 'center' }) {
  const data = regionsData[region];

  return (
    <div className="min-h-screen bg-[#030508] text-white font-sans selection:bg-blue-500 overflow-hidden" dir="rtl">
      
      {/* Dynamic Background Aura */}
      <div className={`fixed inset-0 pointer-events-none opacity-20 bg-${data.color}-500/5 blur-[120px] rounded-full -top-24 -right-24 w-96 h-96`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Breadcrumbs & Badge */}
        <nav className="flex items-center gap-4 mb-12 text-[10px] font-black tracking-widest uppercase italic text-slate-500">
          <span>ALSEC_NETWORK</span>
          <ChevronLeft size={12} />
          <span className={`text-${data.color}-500`}>SERVICE_REGION_{region.toUpperCase()}</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10rem] font-[1000] italic leading-[0.8] mb-10 tracking-tighter uppercase"
          >
            מחוז <br/>
            <span className={`text-${data.color}-500`}>{data.title.split(' ')[0]}</span>
          </motion.h1>
          <p className="text-2xl text-slate-400 italic max-w-3xl leading-tight border-r-4 border-white/10 pr-8">
            {data.subTitle}. צוות הטכנאים המוסמכים של אלסק פרוס בכל רחבי המחוז, מוכן להעניק פתרונות מיגון ואבטחה בזמן אמת.
          </p>
        </header>

        {/* Quick Stats Dashboard */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { label: "טכנאים במחוז", value: data.stats.technicians, icon: <Navigation /> },
            { label: "זמן תגובה ממוצע", value: data.stats.responseTime, icon: <Clock /> },
            { label: "פרויקטים פעילים", value: data.stats.activeProjects, icon: <ShieldCheck /> }
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col items-center text-center group hover:bg-white/[0.08] transition-all">
              <div className={`text-${data.color}-500 mb-6 group-hover:scale-110 transition-transform`}>{stat.icon}</div>
              <div className="text-4xl font-[1000] italic mb-2 uppercase italic">{stat.value}</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Cities Grid - The "Heatmap" */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-[1000] italic uppercase">ערים מרכזיות בשירות</h2>
            <div className="flex-grow h-px bg-white/10" />
            <MapPin className={`text-${data.color}-500`} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.cities.map((city, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 transition-all flex items-center justify-between group">
                <span className="font-bold italic text-lg">{city}</span>
                <div className={`w-2 h-2 rounded-full bg-${data.color}-500 group-hover:animate-ping`} />
              </div>
            ))}
          </div>
        </section>

        {/* Visual Map / Info Section */}
        <section className="bg-white/5 border border-white/10 rounded-[4rem] p-12 lg:p-20 overflow-hidden relative mb-32">
          <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none">
            <Globe size={300} className={`text-${data.color}-500`} />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8 text-right">
              <h3 className="text-5xl font-[1000] italic uppercase italic leading-none">פריסה ארצית,<br/> שירות מקומי</h3>
              <p className="text-slate-400 italic leading-relaxed text-lg italic">
                אנחנו מבינים שביטחון הוא עניין של זמן. לכן, חילקנו את אלסק למחוזות עצמאיים. כל מחוז מצויד בטכנאים מקומיים שמכירים את השטח, את סוגי המבנים ואת צרכי האבטחה הספציפיים של האזור.
              </p>
              <div className="flex gap-4">
                <button className={`bg-${data.color}-500 text-black px-10 py-5 rounded-2xl font-[1000] italic text-lg uppercase flex items-center gap-3`}>
                  <PhoneCall size={20} />
                  חיוג למוקד המחוזי
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full aspect-square bg-black/40 rounded-[3rem] border border-white/5 flex items-center justify-center relative">
               <div className="space-y-4 text-center">
                  <div className={`text-6xl font-[1000] italic text-${data.color}-500 italic uppercase`}>{region}</div>
                  <div className="text-xs font-black tracking-[0.5em] text-slate-500 uppercase italic">Active_Service_Zone</div>
                  <div className={`w-32 h-1 bg-${data.color}-500 mx-auto shadow-[0_0_15px_#3b82f6]`} />
               </div>
            </div>
          </div>
        </section>

        {/* Final Regional CTA */}
        <section className={`bg-gradient-to-br from-${data.color}-600 to-${data.color}-400 rounded-[4rem] p-16 text-black text-center shadow-2xl`}>
          <h2 className="text-5xl md:text-7xl font-[1000] italic mb-8 uppercase italic leading-none">אלסק ב{data.title.split(' ')[1]}</h2>
          <p className="text-xl font-bold italic mb-12 max-w-2xl mx-auto italic leading-tight">
            הבית או העסק שלכם ב{data.title.split(' ')[1]} זקוקים להגנה? אל תתפשרו על פחות מהטובים ביותר. צוות המחוז זמין עבורכם עכשיו.
          </p>
          <button className="bg-black text-white px-16 py-6 rounded-2xl font-[1000] italic text-2xl uppercase flex items-center gap-4 mx-auto group hover:scale-105 transition-transform">
            <Zap size={24} className="group-hover:animate-pulse" />
            קבלו הצעה מנצחת במחוז {data.title.split(' ')[1]}
          </button>
        </section>

      </div>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-black tracking-[1em] uppercase italic text-slate-700 italic">
          ALSEC_REGIONAL_NETWORK // {region.toUpperCase()}_DISTRICT // 2026
        </p>
      </footer>
    </div>
  );
}