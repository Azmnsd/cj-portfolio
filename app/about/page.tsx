"use client";
import Image from "next/image";
import { useState } from "react";

export default function AboutMe() {
  const [clicked, setClicked] = useState(false);
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    setFade(true);
    // start fade-out
    setTimeout(() => {
      setClicked(!clicked); // switch images mid-fade
      setFade(false); // fade back in
    }, 300); // controls fade timing
  };

  const defaultImage = clicked ? "/2.png" : "/3.png";
  const hoverImage = clicked ? "/3.png" : "/2.png";

  return (
    <main className="bg-black text-white font-lexend min-h-screen flex items-center justify-center px-10 md:px-40 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-wide text-white py-6">
            CARL JEFFREY TAMAYO
          </h1>

          <p className="text-gray-300 text-sm leading-relaxed">
            Hi! I&apos;m CJ, an IT student at <strong>National University – Baliwag</strong>, majoring in <strong>Mobile and Web Application</strong>. 
            I enjoy working on backend development and IoT projects, where I get to combine coding with hands-on hardware work. 
            I’ve built projects using <strong>PHP, MySQL, and JavaScript</strong>, and even developed systems that automate real-world tasks 
            using sensors and microcontrollers. I’m eager to continue learning and applying my skills to real-world challenges 
            in technology and innovation.
          </p>

          <div className="pt-8">
            <p className="text-lg">You can reach me through the links below.</p>
            <div className="mt-4">
              <a
                href="mailto:carljeffreytamayo@gmail.com"
                className="bg-transparent text-white px-3 py-1 inline-block text-md tracking-widest font-medium transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
              >
                carljeffreytamayo@gmail.com
              </a>
            </div>

            {/* Résumé Download Button */}
            <div className="mt-4">
              <a
                href="/CJ-Tamayo_CV.pdf"
                download
                className="bg-transparent text-white px-3 py-0 inline-block text-sm tracking-widest font-medium rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              >
                Download Résumé
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6 mt-6">
              {[
                {
                  href: "https://www.instagram.com/azmnsd/",
                  icon: "instagram",
                },
                {
                  href: "https://github.com/Azmnsd",
                  icon: "github",
                },
                {
                  href: "https://www.linkedin.com/in/cj-tamayo-335a972aa",
                  icon: "linkedin",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-125"
                >
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${s.icon}.svg`}
                    alt={s.icon}
                    className="w-6 h-6 invert transition-transform duration-300 ease-in-out"
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Click + Hover + Fade Image */}
        <div className="flex justify-center md:justify-end">
          <div
            onClick={handleClick}
            className={`relative w-[400px] h-[500px] overflow-hidden rounded-lg shadow-lg mx-auto transition-all duration-700 hover:scale-105 hover:brightness-110 hover:shadow-2xl group cursor-pointer ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Default Image */}
            <Image
              src={defaultImage}
              alt="Main Image"
              fill
              priority
              className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
            />

            {/* Hover Image */}
            <Image
              src={hoverImage}
              alt="Hover Image"
              fill
              priority
              className="object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
