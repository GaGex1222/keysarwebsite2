"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Award, Clock, Users, MapPin, Briefcase, Video, Network, Lock } from 'lucide-react';
export default function Page() {
  const features = [{icon:Network,t:"IP מתקדם",d:"מערכות IP המנוהלות מרכזית עם גמישות מלאה בהרחבה."},{icon:Lock,t:"בקרת גישה",d:"ניהול הרשאות גישה לחדרים שונים לכל עובד או מחלקה."},{icon:Video,t:"וידאו HD",d:"צפייה בזמן אמת בכל נקודות הכניסה מתחנת האבטחה."}];
  return (
    <div className="bg-slate-50 min-h-screen" dir="rtl">
      <section className="bg-white border-b border-slate-200 py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 mb-6"><Briefcase size={12}/> אינטרקום לעסק</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">מערכת אינטרקום לעסק<br/><span className="text-blue-900">בקרת כניסה מקצועית</span></h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">פתרונות אינטרקום לעסקים — מרמת הכניסה הבודדת ועד ל-IP מתקדם רב-קומות.</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:0525022222" className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"><Phone size={16}/> 052-502-2222</a>
            <a href="/" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">קבל הצעת מחיר</a>
          </div>
        </div>
      </section>
      <section className="py-16 px-4"><div className="max-w-5xl mx-auto">
        <div className="text-center mb-10"><p className="text-xs font-semibold text-blue-900 uppercase tracking-widest mb-2">יתרונות</p><h2 className="text-2xl font-bold text-slate-900">מה אנחנו מציעים</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">{features.map((f,i)=>(<motion.div key={i} whileHover={{y:-3}} transition={{duration:0.2}} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"><div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4"><f.icon size={20} className="text-blue-900"/></div><h3 className="font-semibold text-slate-900 mb-2">{f.t}</h3><p className="text-sm text-slate-500 leading-relaxed">{f.d}</p></motion.div>))}</div>
      </div></section>
      <section className="py-16 px-4 bg-white border-y border-slate-200"><div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div><p className="text-xs font-semibold text-blue-900 uppercase tracking-widest mb-3">למה לבחור בנו?</p><h2 className="text-2xl font-bold text-slate-900 mb-6">אבטחת עסק מקצועית</h2>
          <ul className="space-y-3"><li key="שליטה" className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle size={16} className="text-blue-900 mt-0.5 shrink-0"/>שליטה מרכזית על כל הכניסות</li><li key="הרשאו" className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle size={16} className="text-blue-900 mt-0.5 shrink-0"/>הרשאות גישה לפי עובד</li><li key="יומן " className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle size={16} className="text-blue-900 mt-0.5 shrink-0"/>יומן כניסות מפורט</li><li key="חיבור" className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle size={16} className="text-blue-900 mt-0.5 shrink-0"/>חיבור לתוכנות HR וניהול</li><li key="שדרוג" className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle size={16} className="text-blue-900 mt-0.5 shrink-0"/>שדרוג קל ומהיר</li><li key="תמיכה" className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle size={16} className="text-blue-900 mt-0.5 shrink-0"/>תמיכה טכנית 24/7</li></ul>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8"><Briefcase size={48} className="text-blue-900 mb-5"/>
          <h3 className="text-xl font-bold text-slate-900 mb-3">אבטחה לפי גודל העסק</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">בין אם מדובר במשרד קטן או קמפוס גדול — יש לנו פתרון בקרת כניסה מתאים.</p>
          <div className="grid grid-cols-2 gap-3">{[['15+','שנות ניסיון'],['2,000+','התקנות'],['24/7','תמיכה'],['100%','שביעות רצון']].map(([v,l])=>(<div key={l} className="text-center p-3 bg-white rounded-lg border border-slate-200"><p className="text-xl font-bold text-blue-900">{v}</p><p className="text-xs text-slate-500">{l}</p></div>))}</div>
        </div>
      </div></section>
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">למה לבחור בקיסר מערכות?</h2>
          <p className="text-blue-200 text-sm">15 שנות ניסיון, אלפי התקנות, שירות אישי ומקצועי</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{icon:Award,t:'מוסמכים',d:'טכנאים מורשים'},{icon:Clock,t:'זמינות 24/7',d:'תמיכה בכל שעה'},{icon:Users,t:'שירות אישי',d:'ליווי מלא'},{icon:MapPin,t:'כיסוי ארצי',d:'בכל מקום בארץ'}].map((item,i)=>(
            <div key={i} className="text-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3"><item.icon size={18} className="text-blue-200"/></div>
              <p className="font-semibold text-white text-sm mb-1">{item.t}</p>
              <p className="text-blue-300 text-xs">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 bg-amber-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">דברו איתנו היום</h2>
          <p className="text-amber-100 mb-6 text-sm">ייעוץ חינם ותאום סקר מקום ללא התחייבות</p>
          <a href="tel:0525022222" className="inline-flex items-center gap-2 bg-white text-amber-700 px-8 py-3 rounded-lg font-bold hover:bg-amber-50 transition-colors"><Phone size={18}/> 052-502-2222</a>
        </div>
      </section>
    </div>
  );
}