"use client"; 
import "./globals.css";
import React, { useState } from 'react';
import { Heebo } from "next/font/google";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Phone, Mail, ChevronLeft, 
  ChevronDown, Menu, X, Target, Scan 
} from 'lucide-react';

const heebo = Heebo({ 
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
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
    href: "/interkum-for-apartment",
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
    href: "/comm-technician",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State to track which mobile category is currently expanded
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (id: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === id ? null : id);
  };

  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} antialiased bg-[#1c1f26] text-white overflow-x-hidden selection:bg-cyan-500/30 p-0 m-0`}>
        
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:30px_30px]" />
          <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-cyan-600/10 blur-[150px] rounded-full" />
        </div>

        <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-[#1c1f26]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            
            <a href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-[#1c1f26] shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Shield size={22} fill="currentColor" />
              </div>
              <span className="text-xl md:text-2xl font-[1000] italic uppercase tracking-tighter">קיסר מערכות</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 h-full">
              {menuItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative h-full flex items-center" 
                  onMouseEnter={() => (item.children?.length ?? 0) > 0 && setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a 
                    href={item.href}
                    className={`flex items-center gap-1.5 font-bold text-[14px] italic transition-colors hover:text-cyan-400 ${activeMenu === item.id ? 'text-cyan-400' : 'text-slate-200'}`}
                  >
                    {item.label}
                    {(item.children?.length ?? 0) > 0 && (
                      <ChevronDown size={14} className={activeMenu === item.id ? 'rotate-180 transition-transform' : 'transition-transform'} />
                    )}
                  </a>

                  <AnimatePresence>
                    {activeMenu === item.id && (item.children?.length ?? 0) > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 w-[240px] bg-[#2a2f3a] border border-white/10 shadow-2xl rounded-b-xl overflow-hidden py-2"
                      >
                        {item.children?.map((child, idx) => (
                          <a 
                            key={idx} 
                            href={child.href} 
                            className="block px-5 py-2.5 text-[13px] font-bold text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all italic flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-50" />
                            {child.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="tel:0525022222" className="hidden sm:flex bg-cyan-500 text-black px-4 py-2 rounded-lg font-black text-sm italic hover:bg-white transition-colors items-center gap-2">
                <Phone size={14} />
                052-502-2222
              </a>
              <button 
                className="lg:hidden p-2 bg-white/5 rounded-lg border border-white/10" 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} className="text-cyan-400" />
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-[#1c1f26] z-[200] flex flex-col lg:hidden"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center h-20 bg-[#1c1f26]">
                <span className="text-cyan-500 font-black italic text-xl uppercase">קיסר תפריט</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full">
                  <X size={30} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-right">
                {menuItems.map((item) => {
                  const hasChildren = (item.children?.length ?? 0) > 0;
                  const isExpanded = openMobileSubmenu === item.id;

                  return (
                    <div key={item.id} className="border-b border-white/5 pb-4">
                      {/* Main Category Row */}
                      <div className="flex justify-between items-center">
                        <a 
                          href={item.href}
                          onClick={() => !hasChildren && setIsMobileMenuOpen(false)}
                          className={`text-xl font-black italic text-white flex-1 ${isExpanded ? 'text-cyan-400' : ''}`}
                        >
                          {item.label}
                        </a>
                        
                        {hasChildren && (
                          <button 
                            onClick={() => toggleMobileSubmenu(item.id)}
                            className="p-2 bg-white/5 rounded-lg"
                          >
                            <ChevronDown 
                              size={20} 
                              className={`text-cyan-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                            />
                          </button>
                        )}
                      </div>

                      {/* Collapsible Children Section */}
                      <AnimatePresence>
                        {hasChildren && isExpanded && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 mr-4 grid grid-cols-1 gap-3">
                              {item.children?.map((child, i) => (
                                <a 
                                  key={i} 
                                  href={child.href} 
                                  onClick={() => setIsMobileMenuOpen(false)} 
                                  className="flex items-center gap-2 text-slate-400 font-bold hover:text-cyan-400 italic py-1"
                                >
                                  <ChevronLeft size={14} className="text-cyan-500" />
                                  {child.title}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 bg-black/40 backdrop-blur-md border-t border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-slate-400 justify-center">
                  <Mail size={18} />
                  <span className="text-sm font-bold">office@keisar.co.il</span>
                </div>
                <a href="tel:0525022222" className="block w-full bg-cyan-500 text-black text-center py-4 rounded-xl font-black italic text-lg shadow-lg shadow-cyan-500/20">
                  התקשר לייעוץ: 052-502-2222
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 pt-20"> 
          {children}
        </div>

        <footer className="py-20 text-center border-t border-white/5 bg-black/20 mt-20 relative z-10">
          <div className="flex justify-center gap-6 mb-8 text-slate-500">
              <Shield size={24} />
              <Target size={24} />
              <Scan size={24} />
          </div>
          <p className="text-slate-500 text-[11px] font-[1000] tracking-[0.6em] uppercase italic">
            Keisar Systems Engineering Protocol &copy; 2026 | All Rights Reserved
          </p>
        </footer>
      </body>
    </html>
  );
}