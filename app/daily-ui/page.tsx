"use client";
import Image from "next/image";
import ProjectPager from "../../components/ProjectPager";
import PageTransition from "../../components/PageTransition";
import { useState, useEffect } from "react";

export default function DailyUI() {
  const [showScroll, setShowScroll] = useState(false);
  
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <PageTransition>
    <main className="bg-black min-h-screen font-lexend text-white mt-22  pt-2">
      <section className="flex justify-center items-center px-10 md:px-40 mt-8">
        <div className="relative w-full max-w-6xl h-[450px] md:h-[600px]">
        <h1 className="text-5xl font-bold tracking-wide text-center">SoilTrack</h1>
          <Image
            src="/hardware1.2.png"
            alt="Messenger Desktop"
            layout="fill"
            objectFit="contain"
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="bg-black text-white px-10 md:px-40 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-5xl font-bold tracking-wide">SOIL TRACK</h1>
          <h2 className="text-xl font-semibold tracking-widest text-white-700">IoT SOIL DETECTING DEVICE</h2>
        </div>

        
        <div className="flex flex-col justify-center space-y-6 text-white-800">
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">WHAT</p>
            <p>An IoT-based soil detecting system for monitoring moisture and fertility in real time.</p>
          </div>
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">HOW</p>
            <p>Developed using Flutter for mobile, React for web, and Arduino for hardware integration.</p>
          </div>
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">WHEN</p>
            <p>Created as part of an IoT research and development project.</p>
          </div>
          <p>
            I developed Soil Track as an IoT engineer, focusing on real-time soil analysis. The system uses sensors connected to Arduino for data collection, a Flutter app for mobile monitoring, and a React web interface for visualization.
          </p>
        </div>
      </section>
      
      <footer className="bg-black text-white py-12 px-10 md:px-40 flex flex-col items-center space-y-10 border-t border-neutral-800 mt-35">
        {/* <div className="w-full flex justify-between text-sm font-semibold tracking-widest">
          <a href="#" className="hover:text-gray-400 flex items-center space-x-2">
            <span>‹</span>
            <span>PREVIOUS PROJECT</span>
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center space-x-2">
            <span>NEXT PROJECT</span>
            <span>›</span>
          </a>
        </div> */}
        <ProjectPager current="daily-ui" />

        {showScroll && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 bg-white text-black w-12 h-12 
            rounded-none flex items-center justify-center shadow-lg 
            hover:bg-gray-200 hover:scale-110 hover:-rotate-12
            transition-all duration-300 ease-in-out
            cursor-default hover:cursor-pointer"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </footer>
    </main>
    </PageTransition>
  );
}
