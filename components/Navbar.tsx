"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [navigating, setNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  // Reset navbar when the new page is loaded
  useEffect(() => {
    if (!navigating) return;

    const finishTransition = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setNavigating(false);
        setProgress(0);
      }, 350);
    }, 500);

    return () => clearTimeout(finishTransition);
  }, [pathname, navigating]);

  // Click handler for links — delays navigation for visible transition
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === href) return; // avoid reloading same page

    setNavigating(true);
    setProgress(10);

    // Animate progress bar before navigation actually happens
    const progressInterval = setInterval(() => {
      setProgress((p) => (p < 85 ? p + Math.random() * 10 : p));
    }, 120);

    setTimeout(() => {
      router.push(href);
      clearInterval(progressInterval);
    }, 400); // delay route change for visible fade-out
  };

  return (
    <nav
      className={
        "fixed top-0 left-0 w-full flex flex-col items-center z-50 transition-all duration-500 ease-in-out " +
        (navigating ? "opacity-50 scale-95" : "opacity-100 scale-100")
      }
    >
      {/* Progress bar */}
      <div
        className="h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 rounded-full"
        style={{
          width: `${progress}%`,
          opacity: navigating ? 1 : 0,
        }}
      />

      {/* Navbar content */}
      <div className="flex items-center gap-6 mt-4 bg-[#111]/70 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/10">
        <div
          onClick={handleNavClick("/")}
          className="flex items-center gap-3 text-white font-semibold cursor-pointer hover:opacity-80 transition"
        >
          <Image
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/squarespace.svg"
            alt="logo"
            width={24}
            height={24}
            className="invert"
          />
          <span>Home</span>
        </div>

        <div
          onClick={handleNavClick("/about")}
          className="text-white font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 cursor-pointer"
        >
          About me
        </div>
      </div>
    </nav>
  );
}
