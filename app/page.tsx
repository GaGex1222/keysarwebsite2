"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Wifi, Network, Server, Globe,
  MousePointer2, MonitorCheck, Lock, Phone, Mail,
  Cpu, Shield, Send, Camera, Building2,
  ChevronLeft, ChevronRight, X, MessageCircle, CheckCircle2
} from 'lucide-react';

// ────────────────────────────────────────────────────
// Slideshow data
// ────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 'cameras',
    badge: 'מצלמות אבטחה',
    title: 'מצלמות אבטחה',
    subtitle: 'חכמות. חדות. תמיד ערות.',
    desc: 'מצלמות 4K עם זיהוי AI, ניתוח וידאו בזמן אמת ותמיכה מלאה מרחוק – לבית ולעסק.',
    Icon: Camera,
    accent: '#06b6d4',
    glowColor: 'rgba(6,182,212,0.15)',
    tags: ['4K Ultra HD', 'זיהוי AI', 'ראיית לילה', 'שליטה מרחוק'],
    cta: { label: 'קבל הצעת מחיר', type: 'offer' as const },
    href: '/outside-camera',
  },
  {
    id: 'intercom',
    badge: 'אינטרקום',
    title: 'מערכות אינטרקום',
    subtitle: 'שלוט. ראה. שלט בכניסה.',
    desc: 'פתרונות אינטרקום מתקדמים לדירות, בניינים משותפים ועסקים – עם וידאו ושליטה מהסמארטפון.',
    Icon: Building2,
    accent: '#a855f7',
    glowColor: 'rgba(168,85,247,0.15)',
    tags: ['וידאו HD', 'שליטה מהמובייל', 'בניין משותף', 'עסקי'],
    cta: { label: 'גלה פתרונות אינטרקום', type: 'link' as const },
    href: '/interkum-building',
  },
  {
    id: 'network',
    badge: 'תשתיות תקשורת',
    title: 'רשת ו-WiFi מקצועי',
    subtitle: 'חיבור מושלם. בכל פינה.',
    desc: 'פריסת רשתות Mesh, WiFi 7, נקודות LAN וארונות תקשורת – גיגה אמיתי, אפס השהייה.',
    Icon: Network,
    accent: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.15)',
    tags: ['WiFi 7', 'Mesh', 'LAN / CAT7', 'ארון תקשורת'],
    cta: { label: 'גלה פתרונות תקשורת', type: 'link' as const },
    href: '/marachot-tikshoret',
  },
];

// ────────────────────────────────────────────────────
// Price calculator
// ────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '972525022222';

const QUESTIONS = [
  {
    id: 'count',
    label: 'כמה מצלמות תרצה להתקין?',
    hint: 'כולל כל הקומות והחדרים',
    options: ['1-4 מצלמות', '5-8 מצלמות', '9-16 מצלמות', 'מעל 16 מצלמות'],
  },
  {
    id: 'location',
    label: 'היכן יותקנו המצלמות?',
    hint: 'מצלמות חוץ דורשות ציוד עמיד מזג אוויר',
    options: ['בפנים הבית בלבד', 'בחוץ בלבד', 'גם פנים וגם חוץ'],
  },
  {
    id: 'quality',
    label: 'איזו איכות תמונה?',
    hint: '4K נותן פרטים חדים גם בהגדלה',
    options: ['HD – 720p', 'Full HD – 1080p', '4K – Ultra HD'],
  },
  {
    id: 'dvr',
    label: 'האם נדרש מכשיר הקלטה?',
    hint: 'DVR/NVR שומר את ההקלטות למשך שבועות',
    options: ['כן – אני רוצה DVR/NVR', 'לא – מצלמות בלבד'],
  },
  {
    id: 'cable',
    label: 'סוג חיבור מועדף?',
    hint: 'חוטי יציב יותר; אלחוטי גמיש יותר',
    options: ['קוויות (כבל CAT6/7)', 'אלחוטיות (WiFi)'],
  },
  {
    id: 'installation',
    label: 'האם לכלול התקנה בהצעת המחיר?',
    hint: 'ההתקנה כוללת הנחת כבלים, הגדרת מערכת ובדיקה מלאה',
    options: ['כן – כולל התקנה מקצועית', 'לא – ציוד בלבד'],
  },
];

function calculatePrice(ans: Record<string, string>) {
  const countMap: Record<string, { avg: number; perCam: number; install: number }> = {
    '1-4 מצלמות':    { avg: 2.5, perCam: 800,  install: 600  },
    '5-8 מצלמות':    { avg: 6,   perCam: 720,  install: 1000 },
    '9-16 מצלמות':   { avg: 12,  perCam: 660,  install: 1500 },
    'מעל 16 מצלמות': { avg: 20,  perCam: 590,  install: 2200 },
  };
  const locAdd: Record<string, number> = {
    'בפנים הבית בלבד': 0, 'בחוץ בלבד': 160, 'גם פנים וגם חוץ': 90,
  };
  const qualAdd: Record<string, number> = {
    'HD – 720p': 0, 'Full HD – 1080p': 280, '4K – Ultra HD': 700,
  };
  const dvrAdd: Record<string, number> = {
    'כן – אני רוצה DVR/NVR': 2200, 'לא – מצלמות בלבד': 0,
  };

  const cd = countMap[ans.count] ?? { avg: 3, perCam: 800, install: 600 };
  const includeInstall = ans.installation !== 'לא – ציוד בלבד';
  const total =
    (cd.perCam + (locAdd[ans.location] ?? 0)) * cd.avg +
    (qualAdd[ans.quality] ?? 0) +
    (dvrAdd[ans.dvr] ?? 0) +
    (includeInstall ? cd.install : 0);

  return {
    min: Math.ceil((total * 0.88) / 100) * 100,
    max: Math.ceil((total * 1.15) / 100) * 100,
  };
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
    'אשמח לתאם פגישה ולקבל הצעה מדויקת 🙏',
  ];
  return encodeURIComponent(lines.join('\n'));
}

// ────────────────────────────────────────────────────
// Price Calculator Dialog
// ────────────────────────────────────────────────────
function PriceDialog({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [price, setPrice] = useState<{ min: number; max: number } | null>(null);

  const isLast = step === QUESTIONS.length - 1;
  const isDone = price !== null;

  const choose = (option: string) => {
    const q = QUESTIONS[step];
    const newAnswers = { ...answers, [q.id]: option };
    setAnswers(newAnswers);

    if (isLast) {
      setPrice(calculatePrice(newAnswers));
    } else {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setPrice(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="relative w-full max-w-lg bg-white border border-sky-200 rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-right"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 rounded-full bg-sky-50 hover:bg-sky-100 transition-colors"
        >
          <X size={18} className="text-slate-600" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-sky-100 border border-sky-500/30 rounded-xl flex items-center justify-center">
            <Camera size={20} className="text-sky-600" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-sky-600">מחשבון מחירים</p>
            <h3 className="text-lg font-black italic">הצעת מחיר למצלמות אבטחה</h3>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isDone ? (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mb-2">
                  <span>שאלה {step + 1} מתוך {QUESTIONS.length}</span>
                  <span>{Math.round(((step) / QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="h-1 bg-sky-50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-cyan-500 rounded-full"
                    initial={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                    animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Question */}
              <p className="text-xl font-black italic mb-1">{QUESTIONS[step].label}</p>
              <p className="text-xs text-slate-500 font-bold mb-6">{QUESTIONS[step].hint}</p>

              {/* Options */}
              <div className="space-y-3">
                {QUESTIONS[step].options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => choose(opt)}
                    className="w-full text-right px-5 py-4 rounded-2xl bg-sky-50 border border-sky-200 font-bold text-sm hover:border-sky-500/50 hover:bg-sky-100 hover:text-sky-500 transition-all group flex items-center justify-between"
                  >
                    <ChevronLeft size={16} className="text-slate-600 group-hover:text-sky-600 transition-colors shrink-0" />
                    <span>{opt}</span>
                  </button>
                ))}
              </div>

              {/* Back */}
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-4 text-xs text-slate-500 hover:text-slate-700 font-bold transition-colors"
                >
                  ← חזור לשאלה הקודמת
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Price result */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 border border-sky-500/30 mb-4">
                  <CheckCircle2 size={32} className="text-sky-600" />
                </div>
                <p className="text-slate-600 font-bold italic mb-2">הצעת המחיר המשוערת שלך:</p>
                <p className="text-4xl md:text-5xl font-[900] italic text-sky-600 leading-tight">
                  ₪{price!.min.toLocaleString('he-IL')}
                </p>
                <p className="text-slate-600 font-bold text-sm mt-1">
                  עד ₪{price!.max.toLocaleString('he-IL')}
                </p>
                <p className="text-[10px] text-slate-600 mt-2">*המחיר הוא הערכה. הצעה מדויקת תינתן לאחר סקר מקום</p>
              </div>

              {/* Summary */}
              <div className="bg-sky-50 rounded-2xl border border-sky-200 p-4 mb-6 space-y-2">
                {QUESTIONS.map(q => (
                  answers[q.id] && (
                    <div key={q.id} className="flex justify-between text-sm">
                      <span className="text-sky-600 font-bold">{answers[q.id]}</span>
                      <span className="text-slate-500 font-bold">{q.label.replace('?','').trim()}</span>
                    </div>
                  )
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="space-y-3">
                <p className="text-center text-sm font-bold text-slate-700 italic">
                  לקבלת הצעה מדויקת, צרו קשר עם הצוות שלנו:
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMsg(answers, price!)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-slate-900 font-[900] text-lg italic hover:brightness-110 transition-all shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={22} />
                  שלח הצעה בוואטסאפ
                </a>
                <a
                  href="tel:0525022222"
                  className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl bg-sky-50 border border-sky-200 font-bold text-sm hover:border-sky-500/30 transition-colors"
                >
                  <span className="text-sky-600">📞</span>
                  052-502-2222
                </a>
              </div>

              <button
                onClick={reset}
                className="mt-4 w-full text-center text-xs text-slate-600 hover:text-slate-600 font-bold transition-colors"
              >
                חשב מחדש
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// ────────────────────────────────────────────────────
// Slideshow
// ────────────────────────────────────────────────────
function ServicesSlideshow({ onOpenOffer }: { onOpenOffer: () => void }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative z-10 py-16 px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 border border-sky-200 rounded-full">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-sky-600">השירותים המובילים שלנו</span>
          </div>
        </div>

        {/* Slide card */}
        <div className="relative overflow-hidden rounded-[3rem] border border-sky-200 bg-white min-h-[480px] md:min-h-[420px]"
          style={{ boxShadow: `0 0 60px ${slide.glowColor}` }}
        >
          {/* Animated background glow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`glow-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 60% 60% at 80% 50%, ${slide.glowColor}, transparent)` }}
            />
          </AnimatePresence>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px] md:min-h-[420px]">
            {/* Content side */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex flex-col justify-center p-10 md:p-14"
              >
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-6"
                  style={{ borderColor: `${slide.accent}40`, color: slide.accent, backgroundColor: `${slide.accent}10` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: slide.accent }} />
                  {slide.badge}
                </div>

                <h2 className="text-4xl md:text-6xl font-[900] italic leading-tight mb-2 text-slate-900">
                  {slide.title}
                </h2>
                <p className="text-xl font-bold mb-4" style={{ color: slide.accent }}>
                  {slide.subtitle}
                </p>
                <p className="text-slate-500 italic font-medium leading-relaxed mb-8 max-w-md">
                  {slide.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {slide.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-black px-3 py-1 rounded-full border"
                      style={{ borderColor: `${slide.accent}30`, color: slide.accent, backgroundColor: `${slide.accent}08` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {slide.cta.type === 'offer' ? (
                  <button
                    onClick={onOpenOffer}
                    className="self-start flex items-center gap-3 px-8 py-4 rounded-2xl font-[900] text-lg italic transition-all hover:brightness-110 active:scale-95"
                    style={{ backgroundColor: slide.accent, color: '#000' }}
                  >
                    קבל הצעת מחיר
                    <span className="text-2xl">💰</span>
                  </button>
                ) : (
                  <a
                    href={slide.href}
                    className="self-start flex items-center gap-3 px-8 py-4 rounded-2xl font-[900] text-lg italic border-2 transition-all hover:opacity-90 active:scale-95"
                    style={{ borderColor: slide.accent, color: slide.accent }}
                  >
                    {slide.cta.label}
                    <ChevronLeft size={20} />
                  </a>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Icon side */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`icon-${current}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex items-center justify-center p-14"
              >
                <div
                  className="relative w-56 h-56 rounded-[3rem] flex items-center justify-center border"
                  style={{
                    backgroundColor: `${slide.accent}08`,
                    borderColor: `${slide.accent}20`,
                    boxShadow: `0 0 60px ${slide.glowColor}`,
                  }}
                >
                  {/* Rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-4 rounded-full border border-dashed"
                    style={{ borderColor: `${slide.accent}20` }}
                  />
                  <slide.Icon size={80} style={{ color: slide.accent }} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 right-6 -translate-y-1/2 w-10 h-10 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-full flex items-center justify-center transition-all z-20"
          >
            <ChevronRight size={18} className="text-slate-700" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 left-6 -translate-y-1/2 w-10 h-10 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-full flex items-center justify-center transition-all z-20"
          >
            <ChevronLeft size={18} className="text-slate-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '2rem' : '0.5rem',
                height: '0.5rem',
                backgroundColor: i === current ? slide.accent : '#bfdbfe',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────
// Main Page
// ────────────────────────────────────────────────────
export default function KeisarUltraModern() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroScale  = useTransform(scrollYProgress, [0, 0.18], [1, 0.85]);
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const services = [
    { title: 'תשתיות תקשורת & WiFi', icon: <Wifi />, desc: 'פריסת רשתות Mesh עוצמתיות לכיסוי מלא. פתרונות WiFi 7 למהירויות קצה.', tags: ['Mesh', 'WiFi 7'] },
    { title: 'נקודות רשת ביתיות', icon: <Network />, desc: 'התקנת נקודות LAN לגיימינג וסטרימינג ללא השהייה (Lag).', tags: ['Cat7', 'סיבים'] },
    { title: 'תקשורת אלחוטית לעסקים', icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>, desc: 'רשתות עמידות לעומסים כבדים, הפרדת רשתות ואבטחת מידע.', tags: ['VLAN', 'עסקי'] },
    { title: 'מערכות מצלמות AI', icon: <MonitorCheck />, desc: 'מצלמות חכמות עם זיהוי פנים וניתוח וידאו בזמן אמת.', tags: ['4K', 'זיהוי פנים'] },
    { title: 'נקודות רשת לעסק', icon: <Server />, desc: 'ניהול ארונות תקשורת ופריסת קווי תקשורת יציבים למשרדים.', tags: ['ארון תקשורת', 'מנוהל'] },
    { title: 'אבטחת קצה וסייבר', icon: <Lock />, desc: 'הגנה מפני פריצות, חומות אש וניהול גישה מאובטח.', tags: ['סייבר', 'Firewall'] },
  ];

  return (
    <div className="bg-sky-50 text-slate-900 selection:bg-sky-200 selection:text-black overflow-x-hidden w-full min-h-screen font-sans" dir="rtl">

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#bae6fd_1px,transparent_1px),linear-gradient(to_bottom,#bae6fd_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-sky-50 blur-[150px] rounded-full" />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]"
        />
      </div>

      {/* Hero */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="text-center">

          <div className="relative mb-12 group inline-block">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute -inset-12 border border-sky-500/10 rounded-full" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute -inset-8 border border-sky-500/20 rounded-[3rem] border-dashed" />
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 bg-sky-50 rounded-[2.5rem] p-1 shadow-2xl shadow-sky-500/20 overflow-hidden border border-sky-200 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img src="/keisar_systems-removebg-preview.png" alt="לוגו קיסר מערכות" className="w-full h-full object-cover rounded-[2.3rem]" />
            </div>
          </div>

          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-7xl sm:text-9xl md:text-[150px] font-[900] leading-[0.8] tracking-tighter uppercase italic">
              קיסר <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2.5px #0284c7' }}>מערכות</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4 text-sky-600 font-mono text-sm tracking-[0.3em] uppercase"
          >
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            תשתית _ מוכנה _ 2026
          </motion.div>

          <motion.p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto italic mt-8 mb-12 leading-tight font-medium">
            הקמת תשתיות תקשורת מתקדמות, <span className="text-slate-900 font-bold">WiFi 7</span> ומערכות אבטחה חכמות בסטנדרט של המחר.
          </motion.p>

          <motion.button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(2,132,199,0.4)' }}
            className="bg-sky-600 text-white px-16 py-6 rounded-2xl font-[900] text-2xl italic flex items-center gap-3 mx-auto transition-all hover:bg-sky-700"
          >
            התחל פרויקט <MousePointer2 size={24} />
          </motion.button>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-t from-cyan-500 to-transparent" />
          <span className="text-[10px] tracking-[0.3em] text-sky-600 uppercase font-black">גללו למטה</span>
        </div>
      </header>

      {/* ── Slideshow ── */}
      <ServicesSlideshow onOpenOffer={() => setIsOfferOpen(true)} />

      {/* Services Grid */}
      <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-24 text-right">
          <h2 className="text-5xl sm:text-8xl font-[900] italic">הפתרונות <span className="text-sky-600 underline underline-offset-[12px]">שלנו.</span></h2>
          <p className="text-slate-500 max-w-xl text-lg font-bold">תשתיות יציבות הן הבסיס לכל טכנולוגיה. אנחנו כאן כדי לוודא שהבסיס שלך חזק מתמיד.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="p-10 rounded-[2.5rem] bg-sky-50/50 border border-sky-100 relative overflow-hidden group transition-all duration-500 hover:border-sky-500/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-sky-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-slate-900">
                  {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 40 })}
                </div>
                <div className="flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[8px] font-mono text-sky-600 uppercase">פעיל</span>
                </div>
              </div>
              <h3 className="text-2xl font-[900] italic mb-4 uppercase">{s.title}</h3>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed group-hover:text-slate-800 transition-colors italic">{s.desc}</p>
              <div className="flex flex-wrap gap-2 justify-start">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black px-3 py-1 rounded-full border border-sky-200 bg-sky-50 group-hover:border-sky-500/30 group-hover:bg-sky-100">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Section */}
      <section className="py-40 bg-sky-50 border-y border-sky-100 relative z-10 text-right">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-sky-50/80 border border-sky-100 rounded-[2.5rem] space-y-4 hover:border-sky-500/30 transition-all group">
              <Globe className="text-sky-600 w-10 h-10 group-hover:animate-spin mr-0 ml-auto" />
              <h4 className="text-xl font-[900] italic">תשתית עסקית</h4>
              <p className="text-slate-500 text-sm italic">ניהול רשתות לסניפים מרוחקים תחת מעטפת אבטחה אחת.</p>
            </div>
            <div className="p-8 bg-sky-50/80 border border-sky-100 rounded-[2.5rem] space-y-4 hover:border-sky-500/30 transition-all group">
              <Server className="text-sky-600 w-10 h-10 group-hover:translate-y-[-5px] transition-transform mr-0 ml-auto" />
              <h4 className="text-xl font-[900] italic">חדרי שרתים</h4>
              <p className="text-slate-500 text-sm italic font-bold">הקמת ארונות תקשורת בצורה מודולרית ועמידה לעומס.</p>
            </div>
            <div className="p-8 bg-sky-50/80 border border-sky-100 rounded-[2.5rem] space-y-4 col-span-2 hover:border-sky-500/30 transition-all group">
              <Shield className="text-sky-600 w-10 h-10 mr-0 ml-auto" />
              <h4 className="text-xl font-[900] italic">מעטפת אבטחת סייבר</h4>
              <p className="text-slate-500 text-sm italic font-bold">הגנה אקטיבית על כל נקודות הקצה ברשת העסקית שלך.</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-6xl font-[900] italic leading-none">המוח של <br /><span className="text-sky-600">העסק שלך.</span></h2>
            <p className="text-xl text-slate-700 font-light italic leading-relaxed">אנחנו לא רק מתקינים כבלים. אנחנו בונים מערכת עצבית חכמה לעסק שלך.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact-form" className="py-32 relative z-10 px-6 border-t border-sky-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-5xl sm:text-7xl font-[900] italic">מוכנים לשדרוג?</h3>
            <p className="text-slate-600 font-bold italic text-xl text-center">השאירו פרטים ונחזור אליכם עם פתרון מנצח</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 bg-sky-50/50 p-8 sm:p-12 rounded-[3rem] border border-sky-100 shadow-2xl">
            <div className="space-y-2 text-right">
              <label className="text-[10px] uppercase tracking-[0.2em] text-sky-600 font-black mr-4">שם מלא</label>
              <input type="text" className="w-full bg-sky-50 border border-sky-200 rounded-2xl px-6 py-4 focus:border-sky-500/50 focus:outline-none transition-all italic font-medium text-right" />
            </div>
            <div className="space-y-2 text-right">
              <label className="text-[10px] uppercase tracking-[0.2em] text-sky-600 font-black mr-4">טלפון</label>
              <input type="tel" className="w-full bg-sky-50 border border-sky-200 rounded-2xl px-6 py-4 focus:border-sky-500/50 focus:outline-none transition-all italic font-medium text-right" />
            </div>
            <div className="md:col-span-2 space-y-2 text-right">
              <label className="text-[10px] uppercase tracking-[0.2em] text-sky-600 font-black mr-4">איך נוכל לעזור?</label>
              <textarea rows={4} placeholder="ספרו לנו קצת על הפרויקט שלכם..." className="w-full bg-sky-50 border border-sky-200 rounded-2xl px-6 py-4 focus:border-sky-500/50 focus:outline-none transition-all italic font-medium resize-none text-right" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 bg-sky-600 text-white py-6 rounded-2xl font-[900] text-xl italic flex items-center justify-center gap-3 shadow-lg shadow-sky-500/20 hover:bg-sky-700 transition-colors"
            >
              שלח הודעה <Send size={20} />
            </motion.button>
          </form>

          <div className="flex flex-col items-center space-y-12">
            <div className="flex flex-wrap justify-center gap-12 text-lg">
              <a href="tel:0525022222" className="flex items-center gap-3 font-[900] italic hover:text-sky-600 transition-colors"><Phone size={22} className="text-sky-600" /> 052-502-2222</a>
              <a href="mailto:office@keisar.co.il" className="flex items-center gap-3 font-[900] italic hover:text-sky-600 transition-colors"><Mail size={22} className="text-sky-600" /> office@keisar.co.il</a>
            </div>
            <div className="w-full pt-12 border-t border-sky-100 text-center">
              <div className="text-sky-600 font-[900] italic tracking-[0.5em] text-[10px] mb-4 uppercase opacity-50">קיסר מערכות // תשתיות תקשורת מתקדמות</div>
              <p className="text-slate-800 text-[10px] font-mono">&copy; 2026 | נבנה על ידי SHIELDUP | כל הזכויות שמורות</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Price Calculator Dialog */}
      <AnimatePresence>
        {isOfferOpen && <PriceDialog onClose={() => setIsOfferOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
