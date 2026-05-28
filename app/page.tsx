"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Camera, Building2, Network, Phone, Mail, Send,
  CheckCircle, ChevronLeft, ChevronRight, X, MessageCircle,
  Award, Clock, Users, MapPin, Wifi, Lock, Monitor, Zap
} from 'lucide-react';

const WHATSAPP_NUMBER = '972525022222';

const SLIDES = [
  {
    id: 'cameras',
    badge: 'מצלמות אבטחה',
    title: 'הגנה חכמה על הנכס שלכם',
    desc: 'מצלמות 4K עם זיהוי AI, ניטור 24/7 ושליטה מהסמארטפון — לבית ולעסק.',
    Icon: Camera,
    tags: ['4K Ultra HD', 'זיהוי AI', 'ראיית לילה', 'שליטה מרחוק'],
    cta: { label: 'קבל הצעת מחיר', type: 'offer' as const },
    href: '/outside-camera',
    color: 'blue',
  },
  {
    id: 'intercom',
    badge: 'מערכות אינטרקום',
    title: 'שליטה מלאה על הכניסה לנכס',
    desc: 'אינטרקום עם וידאו HD, פתיחת דלת מרחוק וניהול גישה חכם לדירות ועסקים.',
    Icon: Building2,
    tags: ['וידאו HD', 'פתיחת דלת', 'בניין משותף', 'עסקי'],
    cta: { label: 'גלה פתרונות אינטרקום', type: 'link' as const },
    href: '/interkum-dira',
    color: 'indigo',
  },
  {
    id: 'network',
    badge: 'תשתיות תקשורת',
    title: 'רשת מהירה ויציבה בכל פינה',
    desc: 'פריסת WiFi 7, רשתות Mesh, ארונות תקשורת — גיגה אמיתי בכל נקודה.',
    Icon: Network,
    tags: ['WiFi 7', 'Mesh', 'LAN / CAT7', 'ארון תקשורת'],
    cta: { label: 'גלה פתרונות תקשורת', type: 'link' as const },
    href: '/marachot-tikshoret',
    color: 'blue',
  },
];

const QUESTIONS = [
  { id: 'count', label: 'כמה מצלמות תרצה/י להתקין?', hint: 'כולל כל הקומות והחדרים', options: ['1-4 מצלמות', '5-8 מצלמות', '9-16 מצלמות', 'מעל 16 מצלמות'] },
  { id: 'location', label: 'היכן יותקנו המצלמות?', hint: 'מצלמות חוץ דורשות ציוד עמיד מזג אוויר', options: ['בפנים הבית בלבד', 'בחוץ בלבד', 'גם פנים וגם חוץ'] },
  { id: 'quality', label: 'איזו איכות תמונה?', hint: '4K נותן פרטים חדים גם בהגדלה', options: ['HD – 720p', 'Full HD – 1080p', '4K – Ultra HD'] },
  { id: 'dvr', label: 'האם נדרש מכשיר הקלטה?', hint: 'DVR/NVR שומר הקלטות למשך שבועות', options: ['כן – אני רוצה DVR/NVR', 'לא – מצלמות בלבד'] },
  { id: 'cable', label: 'סוג חיבור מועדף?', hint: 'חוטי יציב יותר; אלחוטי גמיש יותר', options: ['קוויות (כבל CAT6/7)', 'אלחוטיות (WiFi)'] },
  { id: 'installation', label: 'האם לכלול התקנה בהצעה?', hint: 'כולל הנחת כבלים, הגדרת מערכת ובדיקה מלאה', options: ['כן – כולל התקנה מקצועית', 'לא – ציוד בלבד'] },
];

function calculatePrice(ans: Record<string, string>) {
  const countMap: Record<string, { avg: number; perCam: number; install: number }> = {
    '1-4 מצלמות': { avg: 2.5, perCam: 800, install: 600 },
    '5-8 מצלמות': { avg: 6, perCam: 720, install: 1000 },
    '9-16 מצלמות': { avg: 12, perCam: 660, install: 1500 },
    'מעל 16 מצלמות': { avg: 20, perCam: 590, install: 2200 },
  };
  const locAdd: Record<string, number> = { 'בפנים הבית בלבד': 0, 'בחוץ בלבד': 160, 'גם פנים וגם חוץ': 90 };
  const qualAdd: Record<string, number> = { 'HD – 720p': 0, 'Full HD – 1080p': 280, '4K – Ultra HD': 700 };
  const dvrAdd: Record<string, number> = { 'כן – אני רוצה DVR/NVR': 2200, 'לא – מצלמות בלבד': 0 };
  const cd = countMap[ans.count] ?? { avg: 3, perCam: 800, install: 600 };
  const includeInstall = ans.installation !== 'לא – ציוד בלבד';
  const total = (cd.perCam + (locAdd[ans.location] ?? 0)) * cd.avg + (qualAdd[ans.quality] ?? 0) + (dvrAdd[ans.dvr] ?? 0) + (includeInstall ? cd.install : 0);
  return { min: Math.ceil((total * 0.88) / 100) * 100, max: Math.ceil((total * 1.15) / 100) * 100 };
}

function buildWhatsAppMsg(ans: Record<string, string>, price: { min: number; max: number }) {
  const lines = [
    'שלום! קיבלתי הצעת מחיר דרך האתר של קיסר מערכות:',
    '',
    `• כמות מצלמות: ${ans.count}`,
    `• מיקום: ${ans.location}`,
    `• איכות תמונה: ${ans.quality}`,
    `• מכשיר הקלטה: ${ans.dvr}`,
    `• סוג חיבור: ${ans.cable}`,
    `• התקנה: ${ans.installation}`,
    '',
    `הצעת מחיר משוערת: ₪${price.min.toLocaleString('he-IL')} – ₪${price.max.toLocaleString('he-IL')}`,
    '',
    'אשמח לתאם פגישה ולקבל הצעה מדויקת',
  ];
  return encodeURIComponent(lines.join('\n'));
}

function PriceDialog({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [price, setPrice] = useState<{ min: number; max: number } | null>(null);
  const isLast = step === QUESTIONS.length - 1;

  const choose = (option: string) => {
    const q = QUESTIONS[step];
    const newAnswers = { ...answers, [q.id]: option };
    setAnswers(newAnswers);
    if (isLast) setPrice(calculatePrice(newAnswers));
    else setStep(step + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center px-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-blue-900 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Camera size={18} className="text-blue-200" />
            <div>
              <p className="text-white font-semibold text-sm">מחשבון מחירים</p>
              <p className="text-blue-300 text-xs">הצעת מחיר למצלמות אבטחה</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <X size={16} className="text-white" />
          </button>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {!price ? (
              <motion.div key={`step-${step}`} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.2 }}>
                {/* Progress */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                    <span>שאלה {step + 1} מתוך {QUESTIONS.length}</span>
                    <span>{Math.round(((step + 1) / QUESTIONS.length) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-900 rounded-full"
                      animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                <p className="text-base font-semibold text-slate-900 mb-1">{QUESTIONS[step].label}</p>
                <p className="text-xs text-slate-500 mb-4">{QUESTIONS[step].hint}</p>
                <div className="space-y-2">
                  {QUESTIONS[step].options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => choose(opt)}
                      className="w-full text-right px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-700 hover:border-blue-900 hover:bg-blue-50 hover:text-blue-900 transition-all flex items-center justify-between group"
                    >
                      <ChevronLeft size={14} className="text-slate-400 group-hover:text-blue-900 transition-colors" />
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button onClick={() => setStep(step - 1)} className="mt-4 text-xs text-slate-400 hover:text-slate-600 transition-colors">
                    ← חזור לשאלה הקודמת
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="text-center mb-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={24} className="text-blue-900" />
                  </div>
                  <p className="text-sm text-slate-500 mb-1">הצעת המחיר המשוערת שלך</p>
                  <p className="text-3xl font-bold text-blue-900">₪{price.min.toLocaleString('he-IL')}</p>
                  <p className="text-sm text-slate-500">עד ₪{price.max.toLocaleString('he-IL')}</p>
                  <p className="text-xs text-slate-400 mt-1">*הערכה בלבד. הצעה מדויקת לאחר סקר מקום</p>
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 mb-4 space-y-1.5">
                  {QUESTIONS.map(q => answers[q.id] && (
                    <div key={q.id} className="flex justify-between text-xs">
                      <span className="text-blue-900 font-medium">{answers[q.id]}</span>
                      <span className="text-slate-400">{q.label.replace('?', '').trim()}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMsg(answers, price)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:brightness-105 transition-all mb-2"
                >
                  <MessageCircle size={18} />
                  שלח הצעה בוואטסאפ
                </a>
                <a href="tel:0525022222" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                  <Phone size={14} />
                  052-502-2222
                </a>
                <button onClick={() => { setStep(0); setAnswers({}); setPrice(null); }} className="mt-3 w-full text-xs text-slate-400 hover:text-slate-600 transition-colors">
                  חשב מחדש
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServicesSlideshow({ onOpenOffer }: { onOpenOffer: () => void }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = SLIDES[current];

  return (
    <section id="cameras-offer" className="py-16 px-4" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold text-blue-900 uppercase tracking-widest mb-2">השירותים שלנו</p>
          <h2 className="text-2xl font-bold text-slate-900">פתרון מלא לכל צורך</h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[340px]">
            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-10 flex flex-col justify-center"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-5 self-start">
                  <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                  {slide.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{slide.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm">{slide.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {slide.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                {slide.cta.type === 'offer' ? (
                  <button
                    onClick={onOpenOffer}
                    className="self-start bg-amber-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-700 transition-colors"
                  >
                    {slide.cta.label}
                  </button>
                ) : (
                  <a
                    href={slide.href}
                    className="self-start border border-blue-900 text-blue-900 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    {slide.cta.label}
                    <ChevronLeft size={14} />
                  </a>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Icon panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`icon-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:flex items-center justify-center bg-blue-900 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff,transparent_70%)]" />
                </div>
                <slide.Icon size={96} className="text-white/80 relative z-10" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-slate-100 bg-slate-50">
            <div className="flex gap-2">
              <button onClick={prev} className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center transition-colors">
                <ChevronRight size={14} className="text-slate-500" />
              </button>
              <button onClick={next} className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center transition-colors">
                <ChevronLeft size={14} className="text-slate-500" />
              </button>
            </div>
            <div className="flex gap-1.5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-blue-900' : 'w-2 h-2 bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: 'מצלמות אבטחה', icon: Camera, desc: 'פריסה מקצועית של מצלמות 4K עם זיהוי AI לבית ולעסק.', href: '/outside-camera' },
  { title: 'מערכות אזעקה', icon: Shield, desc: 'אזעקות חכמות לבית ולעסק עם ניטור 24/7 ומענה מיידי.', href: '/home-alarms' },
  { title: 'אינטרקום ובקרת כניסה', icon: Monitor, desc: 'מערכות אינטרקום עם וידאו HD ופתיחת דלת מרחוק.', href: '/interkum-dira' },
  { title: 'תשתיות תקשורת', icon: Network, desc: 'WiFi 7, רשתות Mesh וארונות תקשורת מנוהלים.', href: '/marachot-tikshoret' },
  { title: 'אינטרנט במקלט', icon: Wifi, desc: 'חיבור אינטרנט יציב לממ"ד — שגרה וחירום כאחד.', href: '/internet-miklat' },
  { title: 'אבטחת סייבר', icon: Lock, desc: 'הגנה על רשתות הארגון, חומות אש וניהול גישה מאובטח.', href: '/marachot-tikshoret' },
];

const stats = [
  { value: '15+', label: 'שנות ניסיון' },
  { value: '2,000+', label: 'התקנות בוצעו' },
  { value: '24/7', label: 'תמיכה טכנית' },
  { value: '100%', label: 'שביעות רצון' },
];

export default function HomePage() {
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen" dir="rtl">

      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 mb-6">
                <Zap size={12} />
                מספר 1 בפתרונות אבטחה ותקשורת
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                אבטחה חכמה<br />
                <span className="text-blue-900">לבית ולעסק</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                קיסר מערכות מספקת פתרונות אבטחה ותקשורת מקצועיים עם התקנה מהירה, אחריות מלאה ותמיכה 24/7.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => document.getElementById('cameras-offer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  קבל הצעת מחיר
                </button>
                <a
                  href="tel:0525022222"
                  className="flex items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Phone size={16} />
                  052-502-2222
                </a>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                {['התקנה מקצועית', 'אחריות מלאה', 'מחיר הוגן'].map(tag => (
                  <div key={tag} className="flex items-center gap-1.5 text-sm text-slate-500">
                    <CheckCircle size={14} className="text-blue-900" />
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-blue-900 mb-1">{s.value}</p>
                    <p className="text-sm text-slate-500 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <ServicesSlideshow onOpenOffer={() => setIsOfferOpen(true)} />

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue-900 uppercase tracking-widest mb-2">מה אנחנו מציעים</p>
            <h2 className="text-3xl font-bold text-slate-900">פתרונות מקצועיים לכל צורך</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                  <s.icon size={20} className="text-blue-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3">למה קיסר מערכות?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">מקצועיות ואמינות<br />בכל פרויקט</h2>
              <p className="text-blue-200 leading-relaxed mb-8">
                מעל 15 שנות ניסיון בתחום האבטחה והתקשורת. אנחנו לא רק מוכרים ציוד — אנחנו מתכננים, מתקינים ותומכים לאורך כל הדרך.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Award, title: 'מוסמכים ומורשים', desc: 'טכנאים מוסמכים עם הכשרה מקצועית מלאה' },
                  { icon: Clock, title: 'זמינות 24/7', desc: 'תמיכה טכנית זמינה בכל שעה, כולל שישי ושבת' },
                  { icon: Users, title: 'שירות אישי', desc: 'ליווי מלא מהייעוץ הראשוני ועד לאחר ההתקנה' },
                  { icon: MapPin, title: 'כיסוי ארצי', desc: 'מגיעים לכל מקום בארץ — מצפון לדרום' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-blue-200" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-blue-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-bold text-white text-lg mb-6">השאירו פרטים ונחזור אליכם</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-blue-200 mb-1.5">שם מלא</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-blue-300 text-sm focus:outline-none focus:border-white/40 transition-colors" placeholder="ישראל ישראלי" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-blue-200 mb-1.5">טלפון</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-blue-300 text-sm focus:outline-none focus:border-white/40 transition-colors" placeholder="05X-XXXXXXX" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-blue-200 mb-1.5">במה נוכל לעזור?</label>
                  <textarea rows={3} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-blue-300 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none" placeholder="תארו בקצרה את הצורך שלכם..." />
                </div>
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                  <Send size={15} />
                  שלח פנייה
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-2">
                <a href="tel:0525022222" className="flex items-center gap-2 text-blue-200 text-sm hover:text-white transition-colors">
                  <Phone size={14} />
                  052-502-2222
                </a>
                <a href="mailto:office@keisar.co.il" className="flex items-center gap-2 text-blue-200 text-sm hover:text-white transition-colors">
                  <Mail size={14} />
                  office@keisar.co.il
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Dialog */}
      <AnimatePresence>
        {isOfferOpen && <PriceDialog onClose={() => setIsOfferOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
