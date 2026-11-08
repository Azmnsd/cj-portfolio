"use client";
import ProjectPager from "@/components/ProjectPager";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Jude() {
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
    <main className="bg-black min-h-screen font-lexend text-white mt-22 pt-2">
      <section className="flex justify-center items-center px-10 md:px-40 mt-8">
        <div className="relative w-full max-w-6xl h-[450px] md:h-[600px]">
        <h1 className="text-5xl font-bold tracking-wide text-center mb-20">Anastasia Coffee Shop</h1>
          <Image
            src="/web2.jpg"
            alt="Messenger Desktop"
            width={700}
            height={500}
            priority
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      <section className="bg-black text-white px-10 md:px-40 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-5xl font-bold tracking-wide">ANASTASIA COFFEE SHOP</h1>
          <h2 className="text-xl font-semibold tracking-widest text-white-700">WEB-BASED POS & ORDERING SYSTEM</h2>
        </div>

        
        <div className="flex flex-col justify-center space-y-6 text-white-800">
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">WHAT</p>
            <p>A coffee shop ordering and Point of Sale (POS) system built to help small businesses take and manage online orders efficiently.</p>
          </div>
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">HOW</p>
            <p>Developed using PHP, MySQL, JavaScript, and HTML as a solo project, designed to collaborate with and support local small businesses by providing an easy-to-use digital ordering and POS platform.</p>
          </div>
          <div className="space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">WHEN</p>
            <p>Created as a personal project to enhance small business operations and introduce digital solutions for coffee shop management.</p>
          </div>
          <p>
            I developed Anastasia Coffee Shop as a solo web-based project using PHP, MySQL, JavaScript, and HTML. The system enables customers to order coffee online while providing a POS interface for store staff to track sales, manage inventory, and streamline operations.
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
        <ProjectPager current="anastasia" />

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
