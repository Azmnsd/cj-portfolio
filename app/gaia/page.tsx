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
      {/* Hero Section */}
      <section className="flex justify-center items-center px-10 md:px-40 mt-8">
        <div className="relative w-full max-w-6xl h-[450px] md:h-[600px]">
        <h1 className="text-5xl font-bold tracking-wide text-center mb-5">Gaia</h1>
          <Image
            src="/hardware1.jpg"
            alt="Messenger Desktop"
            width={400}
            height={300}
            priority
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black text-white px-10 md:px-40 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-5xl font-bold tracking-wide">GAIA</h1>
          <h2 className="text-xl font-semibold tracking-widest text-white-700">SMART COMPOSTING MACHINE</h2>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-6 text-white-800">
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">WHAT</p>
            <p>A smart composting machine powered by IoT technology that turns organic waste into fertilizer.</p>
          </div>
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">HOW</p>
            <p>Built using Flutter for mobile, React for web, and Firebase as the database backend. The hardware is developed and assembled for real-time compost monitoring.</p>
          </div>
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">WHEN</p>
            <p>Developed as part of an IoT engineering project for sustainable compost automation.</p>
          </div>
          <p>
            I developed Gaia as an IoT Engineer, building the hardware system to automate composting. The project uses sensors to monitor temperature and humidity, integrated with Flutter and React interfaces powered by Firebase for real-time data visualization.
          </p>
        </div>
      </section>
      {/* Footer Section */}
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
        <ProjectPager current="gaia" />

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
