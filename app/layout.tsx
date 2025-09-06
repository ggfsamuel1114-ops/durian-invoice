import "./css/style.css";
import type { Metadata } from "next";
import Footer from "@/components/ui/footer";   // ⛔ 这里导致默认每个页面都有黑色 footer

export const metadata = {
  title: "Syve",
  description: "Embrace Diverse",
  icons: {
    icon: "images/syvelogoweb.png", // ✅ 这里用你新 logo
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
        <Footer /> {/* ⛔ 这里导致黑色 footer 每个页面都会有 */}
      </body>
    </html>
  );
}
