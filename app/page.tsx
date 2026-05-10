import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Video, Music, Home, Lock, Radio, Zap } from 'lucide-react';

const services = [
  { title: "מצלמות אבטחה", icon: <Video />, desc: "ניטור חכם ברזולוציה מקסימלית" },
  { title: "בית חכם", icon: <Home />, desc: "שליטה מלאה מכל מקום בעולם" },
  { title: "מערכות אזעקה", icon: <Shield />, desc: "הגנה היקפית ללא פשרות" },
  { title: "גילוי אש", icon: <Zap />, desc: "בטיחות מצילת חיים בתקנים המחמירים ביותר" },
  { title: "אינטרקום ובקרות כניסה", icon: <Lock />, desc: "ניהול גישה חכם ומאובטח" },
  { title: "קולנוע ביתי וסאונד", icon: <Music />, desc: "חוויית סאונד קולנועית אצלך בסלון" },
];

export default function KeisarSystems() {
  return (
    <div className="min-h-screen bg-[#F0F9FF] text-slate-900 font-sans dir-rtl text-right">
      
      {/* Hero Section */}
      <nav className="flex justify-between items-center p-6 bg-white/30 backdrop-blur-md sticky top-0 z-50 border-b border-sky-100">
        <div className="text-2xl font-black tracking-tighter text-black">
          KEISAR <span className="text-sky-500">SYSTEMS</span>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-sky-600 transition-all">
          צור קשר
        </button>
      </nav>

      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-sky-300 rounded-full blur-[120px] -z-10" 
        />
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          העתיד של <br />
          <span className="text-sky-500 underline decoration-black decoration-4">מערכות המתח הנמוך</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl max-w-2xl text-slate-600 font-medium"
        >
          תכנון, ביצוע ותחזוקת מערכות אבטחה, חשמל ובית חכם בסטנדרט הגבוה ביותר. 
          טכנולוגיה פוגשת ביטחון.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-sky-50 rounded-3xl shadow-xl shadow-sky-100/50 flex flex-col items-start"
            >
              <div className="bg-sky-500 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-sky-200">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Futuristic Feature Section */}
      <section className="bg-black text-white py-24 px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 italic">Integration is Key.</h2>
            <p className="text-sky-200 text-lg leading-relaxed">
              אנחנו לא רק מתקינים מערכות, אנחנו יוצרים אקו-סיסטם שלם. 
              החל מחשמל וצלחות לווין ועד למערכות כריזה וגילוי אש - הכל מסונכרן, הכל חכם.
            </p>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 border-2 border-sky-500 border-dashed rounded-full flex items-center justify-center"
          >
             <Cpu size={100} className="text-sky-500" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 border-t border-sky-100">
        <p>© 2026 KEISAR SYSTEMS | Professional Low Voltage Solutions</p>
      </footer>
    </div>
  );
}