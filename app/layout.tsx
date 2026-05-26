"use client";
import "./globals.css";
import React, { useState } from 'react';
import { Heebo } from "next/font/google";
import { AnimatePresence, motion } from 'framer-motion';
import { Shield, Phone, Mail, ChevronDown, Menu, X, ChevronLeft } from 'lucide-react';

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
});

const menuItems = [
  {
    id: 'cameras',
    label: 'מצלמות אבטחה',
    href: "/outside-camera",
    children: [
      { title: "מצלמות אבטחה לעסק", href: "/outside-camera" },
      { title: "מצלמה לבית", href: "/home-camera" },
      { title: "מכשירי DVR", href: "/dvr-camera" },
      { title: "מצלמות אבטחה IP", href: "/ip-cameras" },
      { title: "מצלמה עם מסך", href: "/security-camera-with-screen" },
      { title: "מצלמות לחצר", href: "/camera-for-yard" },
      { title: "מצלמה אלחוטית", href: "/wifi-camera" },
      { title: "מצלמה אנלוגית", href: "/analogical-camera" },
      { title: "שירות התקנה", href: "/installation-guide" },
      { title: "מצלמות אנליטיקה", href: "/analytical-camera" },
    ]
  },
  {
    id: 'alarms',
    label: 'אזעקות לבית',
    href: "/home-alarms",
    children: [
      { title: "איך לבחור מערכת אזעקה?", href: "/how-to-choose-alarm" },
      { title: "אזעקות לבית", href: "/home-alarms" },
      { title: "טכנאי אזעקות לבית", href: "/technai-azakot-labait" },
    ]
  },
  {
    id: 'intercom',
    label: 'אינטרקום',
    href: "/interkum-dira",
    children: [
      { title: "מערכת אינטרקום לעסק", href: "/interkum-esek" },
      { title: "קודן לבית", href: "/codan-labait" },
      { title: "אינטרקום לבניין משותף", href: "/interkum-building" },
      { title: "אינטרקום לדירה", href: "/interkum-dira" },
      { title: "אינטרקום עם מסך", href: "/interkum-masach" },
    ]
  },
  {
    id: 'comm',
    label: 'תקשורת',
    href: "/marachot-tikshoret",
    children: [
      { title: "ארון תקשורת לבית", href: "/aron-tikshoret-labait" },
      { title: "טכנאי מערכות תקשורת", href: "/marachot-tikshoret" },
    ]
  },
  {
    id: 'shelter',
    label: 'אינטרנט במקלט',
    href: "/internet-miklat",
    children: []
  },
  {
    id: 'areas',
    label: 'אזורי שירות',
    href: "/services-area",
    children: []
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (id: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === id ? null : id);
  };

  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} antialiased bg-slate-50 text-slate-900 overflow-x-hidden`}>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center text-white">
                <Shield size={18} fill="currentColor" />
              </div>
              <span className="text-lg font-bold text-slate-900">קיסר מערכות</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 h-full">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => (item.children?.length ?? 0) > 0 && setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      activeMenu === item.id
                        ? 'text-blue-900 bg-blue-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    {(item.children?.length ?? 0) > 0 && (
                      <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === item.id ? 'rotate-180' : ''}`} />
                    )}
                  </a>

                  <AnimatePresence>
                    {activeMenu === item.id && (item.children?.length ?? 0) > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 w-56 bg-white border border-slate-200 shadow-lg rounded-xl overflow-hidden py-1 mt-0.5"
                      >
                        {item.children?.map((child, idx) => (
                          <a
                            key={idx}
                            href={child.href}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                          >
                            <span className="w-1 h-1 bg-blue-900 rounded-full shrink-0" />
                            {child.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href="tel:0525022222"
                className="hidden sm:flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                <Phone size={14} />
                052-502-2222
              </a>
              <button
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-[190] lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="fixed top-0 right-0 h-full w-80 max-w-full bg-white z-[200] flex flex-col lg:hidden shadow-2xl"
              >
                {/* Mobile header */}
                <div className="flex justify-between items-center px-5 h-16 border-b border-slate-100">
                  <span className="font-bold text-slate-900">תפריט</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                    <X size={20} className="text-slate-500" />
                  </button>
                </div>

                {/* Mobile links */}
                <div className="flex-1 overflow-y-auto py-4">
                  {menuItems.map((item) => {
                    const hasChildren = (item.children?.length ?? 0) > 0;
                    const isExpanded = openMobileSubmenu === item.id;
                    return (
                      <div key={item.id}>
                        <div className="flex items-center justify-between px-5 py-3">
                          <a
                            href={item.href}
                            onClick={() => !hasChildren && setIsMobileMenuOpen(false)}
                            className="text-slate-800 font-semibold text-sm flex-1"
                          >
                            {item.label}
                          </a>
                          {hasChildren && (
                            <button
                              onClick={() => toggleMobileSubmenu(item.id)}
                              className="p-1.5 rounded-md hover:bg-slate-100 transition-colors"
                            >
                              <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                        <AnimatePresence>
                          {hasChildren && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-slate-50"
                            >
                              {item.children?.map((child, i) => (
                                <a
                                  key={i}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 px-8 py-2.5 text-sm text-slate-600 hover:text-blue-900 transition-colors"
                                >
                                  <ChevronLeft size={12} className="text-slate-400" />
                                  {child.title}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile footer */}
                <div className="p-5 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Mail size={14} />
                    <span>office@keisar.co.il</span>
                  </div>
                  <a
                    href="tel:0525022222"
                    className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-blue-800 transition-colors"
                  >
                    <Phone size={15} />
                    התקשר עכשיו: 052-502-2222
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Page content */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Shield size={16} fill="white" className="text-white" />
                  </div>
                  <span className="font-bold text-white">קיסר מערכות</span>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                  פתרונות אבטחה ותקשורת מקצועיים לבית ולעסק בכל רחבי הארץ.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">מצלמות אבטחה</h4>
                <ul className="space-y-2">
                  {[
                    { t: 'מצלמות לעסק', h: '/outside-camera' },
                    { t: 'מצלמה לבית', h: '/home-camera' },
                    { t: 'מצלמות IP', h: '/ip-cameras' },
                    { t: 'DVR / הקלטה', h: '/dvr-camera' },
                  ].map(l => (
                    <li key={l.h}><a href={l.h} className="text-blue-300 hover:text-white text-sm transition-colors">{l.t}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">שירותים נוספים</h4>
                <ul className="space-y-2">
                  {[
                    { t: 'אזעקות לבית', h: '/home-alarms' },
                    { t: 'אינטרקום', h: '/interkum-dira' },
                    { t: 'ארון תקשורת', h: '/aron-tikshoret-labait' },
                    { t: 'אינטרנט במקלט', h: '/internet-miklat' },
                  ].map(l => (
                    <li key={l.h}><a href={l.h} className="text-blue-300 hover:text-white text-sm transition-colors">{l.t}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">צור קשר</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-blue-200 text-sm">
                    <Phone size={14} />
                    <a href="tel:0525022222" className="hover:text-white transition-colors">052-502-2222</a>
                  </li>
                  <li className="flex items-center gap-2 text-blue-200 text-sm">
                    <Mail size={14} />
                    <a href="mailto:office@keisar.co.il" className="hover:text-white transition-colors">office@keisar.co.il</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-center text-blue-300 text-xs">
              © 2026 קיסר מערכות. כל הזכויות שמורות.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
