import "./globals.css";
import { Heebo } from "next/font/google"; // ייבוא של Heebo במקום Inter

// הגדרת הפונט Heebo עם המשקלים הרלוונטיים
const heebo = Heebo({ 
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-heebo", // הגדרת משתנה CSS למקרה שנצטרך
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} antialiased bg-[#e0f2fe]`}>
        {children}
      </body>
    </html>
  );
}