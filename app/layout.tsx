import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      {/* כאן אנחנו מוודאים שאין class של bg-white על ה-body */}
      <body className={`${inter.className} antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}