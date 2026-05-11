"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, BarChart3, ShieldCheck } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#1c1f26] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden" dir="rtl">
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-cyan-500 mb-6">
              <BarChart3 size={24} />
              <span className="text-xs font-black tracking-[0.4em] uppercase italic">System_Pricing_2026</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-[1000] italic leading-[0.9] tracking-tighter uppercase mb-8 text-white">
              מחירון <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>מתקין.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-xl italic font-light leading-relaxed border-r-4 border-cyan-500 pr-6 mb-10">
              לקבלת מחירון מתקין מצלמות ₪ מעודכן (2026) לחצו כאן!
            </p>

            <a 
              href="https://alsec.co.il/wp-content/uploads/%D7%9E%D7%97%D7%99%D7%A8%D7%95%D7%9F-%D7%9E%D7%AA%D7%A7%D7%99%D7%A0%D7%99%D7%9D-%D7%9E%D7%A2%D7%95%D7%93%D7%9B%D7%9F-1-1.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="self-start md:self-auto"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 bg-cyan-500 text-black px-12 py-8 rounded-2xl font-[1000] text-3xl italic shadow-[0_0_50px_rgba(6,182,212,0.3)]"
              >
                <Download size={32} />
                לחצו כאן למחירון
                <div className="absolute inset-0 rounded-2xl border-2 border-white/50 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all" />
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Footer Trust Bar */}
        <div className="mt-32 flex flex-wrap justify-center items-center gap-12 py-10 border-t border-white/5 opacity-50">
          <div className="flex items-center gap-2 font-black italic uppercase text-sm"><ShieldCheck className="text-cyan-500" size={18} /> Authorized_Dealer</div>
          <div className="flex items-center gap-2 font-black italic uppercase text-sm"><ShieldCheck className="text-cyan-500" size={18} /> Certified_Equipment</div>
          <div className="flex items-center gap-2 font-black italic uppercase text-sm"><ShieldCheck className="text-cyan-500" size={18} /> Official_Warranty</div>
        </div>

      </main>

      <footer className="py-12 text-center text-slate-600 border-t border-white/5">
        <p className="text-[10px] font-black tracking-[0.6em] uppercase italic">
          Keisar Systems // 2026
        </p>
      </footer>
    </div>
  );
}