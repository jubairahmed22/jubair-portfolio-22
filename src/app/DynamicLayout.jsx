// app/DynamicLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import "../styles/globals.css";
import Footer from "./components/Footer";
import NavPortfolio from "./components/NavPortfolio";

export default function DynamicLayout({ children }) {
  const pathname = usePathname();

  // ❌ No video
  // ❌ No loading
  // ✔ Only conditional layout based on route

  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  if (pathname?.startsWith("/dashboard")) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <NavPortfolio />

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
