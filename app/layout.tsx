import type { Metadata } from "next";
import { Inter, Assistant } from "next/font/google";
import "./globals.css";

// שימוש בפונט Assistant שמתאים מאוד לעברית מודרנית ונקייה
const assistant = Assistant({ 
  subsets: ["hebrew", "latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-assistant',
});

export const metadata: Metadata = {
  title: "Keisar Systems | פתרונות מתח נמוך וחשמל חכם",
  description: "הדור הבא של מערכות אבטחה, גילוי אש ובית חכם",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body
        className={`${assistant.variable} font-sans antialiased bg-[#F0F9FF] selection:bg-sky-500/30 selection:text-sky-900`}
      >
        {/* שכבת הגנה עתידנית קבועה - גריד עדין ברקע */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)`, 
                      backgroundSize: '40px 40px' }}>
        </div>
        
        {/* תוכן העמוד */}
        <main className="relative z-10">
          {children}
        </main>

        {/* אפקט תאורה עמום בפינות האתר להשלמת המראה העתידני */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-sky-200/20 blur-[150px] -z-10 rounded-full" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/30 blur-[150px] -z-10 rounded-full" />
      </body>
    </html>
  );
}