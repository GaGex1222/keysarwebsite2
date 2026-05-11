"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, EyeOff, CloudRain, Moon, Smartphone, 
  Wind, ShieldAlert, TrendingUp, HelpCircle, 
  Trees, Home, Lock, Camera,
  CheckCircle2
} from 'lucide-react';

export default function OutdoorSecurityPage() {
  const outdoorFeatures = [
    { icon: <CloudRain />, title: "עמידות למזג אוויר", desc: "מיגון מלא מפני גשם, שמש ישירה ורוחות (מצלמות אנטי-ונדל)." },
    { icon: <Moon />, title: "ראיית לילה IR", desc: "צילום אינפרא-אדום המפיק סרט ברור גם בחושך מוחלט (24/7)." },
    { icon: <EyeOff />, title: "פתרונות הסלקה", desc: "מצלמות מוסתרות בתוך גופי תאורה, גלאים או עציצים." },
    { icon: <TrendingUp />, title: "חיישן תנועה חכם", desc: "הקלטה מבוססת תנועה לחסכון באחסון ונעילה על אובייקט." }
  ];

  const priceTable = [
    { item: "מצלמת דמה (צעצוע מרתיע)", price: "₪80 - ₪120", detail: "למטרת הרתעה בלבד, ללא צילום בפועל." },
    { item: "מצלמת אבטחה בסיסית", price: "החל מ-₪400", detail: "מתאימה בעיקר לצילום פנים או בקרה פשוטה." },
    { item: "מצלמת חוץ מוגנת (IP66/7)", price: "+20-35% מהבסיס", detail: "עמידה למים ושמש, מיועדת לחצר ללא קירוי." },
    { item: "מצלמת ראיית לילה מתקדמת", price: "+30% מהבסיס", detail: "אינפרא-אדום איכותי לצילום בחושך מוחלט." }
  ];

  return (
    <div className="min-h-screen bg-[#0b0d11] text-white font-sans" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto relative z-10 text-right">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase mb-8">
              <Shield size={14} /> OUTDOOR_SURVEILLANCE_2026
            </div>
            <h1 className="text-6xl md:text-8xl font-[1000] italic leading-none mb-8 tracking-tighter">
              החצר שלך <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>תחת שליטה</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-light italic leading-relaxed border-r-4 border-cyan-500 pr-6">
              מצלמות נסתרות וגלויות לחצר הן כבר לא מוצר יוקרה – הן כלי חיוני לשמירה על הרכוש, הביטחון האישי והשקט הנפשי שלכם.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Why Outdoor? */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-[1000] italic uppercase border-r-4 border-cyan-500 pr-6">היתרון הנסתר בחצר</h2>
            <p className="text-slate-400 leading-relaxed italic">
              בניגוד למצלמות גלויות, מצלמה נסתרת לחצר מאפשרת תיעוד שקט מבלי לעורר חשד. היא הפתרון המושלם למניעת גניבות ציוד (אופניים, ריהוט גן), ונדליזם, ומעקב אחר כניסות ויציאות של אנשי מקצוע ודיירים.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { t: "הרתעה אקטיבית", d: "עצם נוכחות המצלמה גורמת לפורצים לוותר על החדירה." },
                 { t: "סביבה מבוקרת", d: "שמירה על קשישים, ילדים או בעלי חיים בחצר." },
                 { t: "מיגון אנטי-ונדל", d: "מצלמות עשויות ברזל העמידות בפני ניסיונות חבלה." },
                 { t: "תיעוד מוסלק", d: "מצלמות מוסתרות בתוך עציצים או גופי תאורה." }
               ].map((box, i) => (
                 <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                    <CheckCircle2 className="text-cyan-500 mb-2" size={18} />
                    <div className="font-black italic text-sm mb-1">{box.t}</div>
                    <div className="text-[11px] text-slate-500 leading-tight italic">{box.d}</div>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-900/20 to-black rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden">
               <Trees className="text-white/5 absolute -bottom-10 -right-10" size={300} />
               <Camera size={120} className="text-cyan-500 opacity-20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-white/5 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-[1000] italic mb-16 uppercase">תכונות קריטיות למצלמת חוץ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {outdoorFeatures.map((f, i) => (
              <div key={i} className="p-10 bg-[#161a21] rounded-[2.5rem] border border-white/5 group hover:border-cyan-500/50 transition-all">
                <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="text-xl font-black italic mb-3">{f.title}</h4>
                <p className="text-slate-500 text-sm italic leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Matrix & Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-4xl font-[1000] italic mb-8 italic">איך מקבלים <br/><span className="text-cyan-500">החלטה?</span></h3>
            <p className="text-slate-400 italic mb-8">לפני הרכישה, שאלו את עצמכם:</p>
            <ul className="space-y-4 text-sm italic text-slate-300">
              <li className="flex gap-3"><HelpCircle size={18} className="text-cyan-500 shrink-0" /> מה המטרה? (ביטחון או פיקוח בסיסי)</li>
              <li className="flex gap-3"><HelpCircle size={18} className="text-cyan-500 shrink-0" /> היכן להתקין? (חצר פתוחה או שטח מקורה)</li>
              <li className="flex gap-3"><HelpCircle size={18} className="text-cyan-500 shrink-0" /> האם המצלמות צריכות להיות גלויות או מוסלקות?</li>
              <li className="flex gap-3"><HelpCircle size={18} className="text-cyan-500 shrink-0" /> האם נדרש תיעוד של כל השטח או רק חלק ממנו?</li>
            </ul>
          </div>
          
          <div className="lg:w-2/3 bg-[#1c1f26] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-8 bg-cyan-500 text-black">
              <h4 className="text-2xl font-[1000] italic uppercase italic">מחירון והערכות תקציב (₪)</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="bg-black/20 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <th className="p-6">סוג המוצר / פונקציה</th>
                    <th className="p-6">מחיר משוער</th>
                    <th className="p-6">פרטים טכניים</th>
                  </tr>
                </thead>
                <tbody className="text-sm italic">
                  {priceTable.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-6 font-black text-white">{row.item}</td>
                      <td className="p-6 text-cyan-500 font-bold">{row.price}</td>
                      <td className="p-6 text-slate-400 text-xs">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Alsec Advantage - Brand Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-cyan-500/5 rounded-[3rem] border border-cyan-500/10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-right px-8">
            <Home className="text-cyan-500 mb-4 mx-auto md:mr-0" size={40} />
            <h4 className="text-2xl font-[1000] italic mb-2">פתרונות לבתים פרטיים</h4>
            <p className="text-slate-400 text-sm italic">התאמה אישית לבתים חד-קומתיים עם חצרות וגינות.</p>
          </div>
          <div className="text-center md:text-right px-8 border-y md:border-y-0 md:border-x border-white/10">
            <Lock className="text-cyan-500 mb-4 mx-auto md:mr-0" size={40} />
            <h4 className="text-2xl font-[1000] italic mb-2">אבטחה מוסלקת</h4>
            <p className="text-slate-400 text-sm italic">תיעוד אפקטיבי מבלי לפגוע באסתטיקה של הבית.</p>
          </div>
          <div className="text-center md:text-right px-8">
            <Smartphone className="text-cyan-500 mb-4 mx-auto md:mr-0" size={40} />
            <h4 className="text-2xl font-[1000] italic mb-2">שליטה מהנייד</h4>
            <p className="text-slate-400 text-sm italic">קבלת התראות בזמן אמת וצפייה מכל מקום בעולם.</p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-[1000] italic mb-8 uppercase leading-[0.9]">
            אל תחכו לאירוע חריג <br/>
            <span className="text-cyan-500 underline decoration-2 underline-offset-8">הגנו על הבית עכשיו</span>
          </h2>
          <p className="text-xl text-slate-400 italic mb-12">
            מצלמות נסתרות לחצר מבית אלסק מערכות אבטחה מעניקות לכם ביטחון אמיתי וטכנולוגיה חכמה ששומרת על כל מה שחשוב לכם.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-2xl font-[1000] text-xl italic hover:bg-white/5 transition-colors">
              ייעוץ אישי חינם
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-black tracking-[0.8em] uppercase italic opacity-30">
          ALSEC SECURITY SYSTEMS // OUTDOOR_STEALTH_UNIT // 2026
        </p>
      </footer>
    </div>
  );
}