/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! אזהרה: זה מאפשר ל-Build להסתיים גם אם יש שגיאות טייפ
    ignoreBuildErrors: true,
  },
  eslint: {
    // גם מתעלם משגיאות לינטינג בזמן בנייה
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;