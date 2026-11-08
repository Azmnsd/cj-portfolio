"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export default function Home() {
  const icons = [
    { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg", label: "GitHub", link: "https://github.com/Azmnsd" },
    { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg", label: "LinkedIn", link: "https://www.linkedin.com/in/cj-tamayo-335a972aa" },
    { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg", label: "Instagram", link: "https://www.instagram.com/azmnsd/" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-center select-none px-6 mt-40 gap-3">
      <h1 className="text-5xl md:text-9xl font-black leading-[1.1]">
        CJ TAMAYO
      </h1>
      <h2 className="text-4xl md:text-5xl font-light text-neutral-400 mb-16">
        Backend & IoT Developer
      </h2>

      <div className="flex justify-center items-center gap-10 mb-10">
        {icons.map((icon, i) => (
          <div key={i} className="flex flex-col items-center group">
            <a
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a1a1a] hover:bg-[#222] transition-all duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:-translate-y-1"
            >
              <Image
                src={icon.src}
                alt={icon.label}
                className="w-6 h-6 invert opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                width={24}
                height={24}
              />
            </a>
            <span className="text-sm text-neutral-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {icon.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="uppercase text-md tracking-widest border border-neutral-600 rounded-full px-4 py-1 text-neutral-200">
          Currently
        </span>
        <p className="text-neutral-100 text-lg">
          Student at National University - Baliwag
        </p>
      </div>

      <section className="w-full flex flex-col items-center mt-30">
        <div className="w-full flex flex-col items-center gap-20 mb-28">
          <h3 className="text-neutral-400 tracking-[0.2em] uppercase text-sm mb-10">Hardware Projects</h3>
          {[
            {
              id: 1,
              title: "Soil Track",
              role: "IoT Engineer",
              desc: "Developed a soil detecting device capable of analyzing soil moisture and fertility levels in real time.",
              img: "/hardware2.jpg",
              icon: "https://cdn-icons-png.flaticon.com/512/4149/4149650.png",
            },
            {
              id: 2,
              title: "Compost Bin",
              role: "IoT Engineer",
              desc: "A smart compost bin designed to process any compostable waste using Bokashi additives to produce nutrient-rich fertilizer.",
              img: "/hardware1.jpg",
              icon: "https://cdn-icons-png.flaticon.com/512/4149/4149650.png",
            },
          ].map((card) => (
            <ScrollCard key={card.id} {...card} />
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-20 mb-28">
          <h3 className="text-neutral-400 tracking-[0.2em] uppercase text-sm mb-10">Web Applications</h3>
          {[
            {
              id: 3,
              title: "St. Jude Clinic",
              role: "Backend Developer",
              desc: "St. Jude Clinic is a scheduling platform designed for pregnant women to easily book, manage, and track their prenatal appointments.",
              img: "/web1.jpg",
              icon: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
            },
            {
              id: 4,
              title: "Anastasia  E-commerce",
              role: "Full Stack Developer",
              desc: "Anastasia is a coffee shop ordering system with a built-in Point of Sale (POS) feature for managing orders, inventory, and payments.",
              img: "/web2.jpg",
              icon: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
            },
          ].map((card) => (
            <ScrollCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}



type ScrollCardProps = {
  title: string;
  role: string;
  desc: string;
  img: string;
  icon: string;
};

function ScrollCard({ title, role, desc, img, icon }: ScrollCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <Link href={title === "Compost Bin" ? "/gaia" : title === "St. Jude Clinic" ? "/jude" : title === "Anastasia  E-commerce" ? "/anastasia" : "/daily-ui"}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 60px rgba(255,255,255,0.2)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-[90%] md:w-[1000px] bg-[#0f0f0f] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.05)]"
      >
        <div className="flex-shrink-0 w-[400px] h-auto">
          <Image src={img} alt={title} className="rounded-2xl object-cover opacity-90" width={400} height={300} />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:ml-10 text-left">
          <p className="text-neutral-500 text-xs tracking-widest mb-2">{role}</p>
          <h3 className="text-4xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
        </div>

        <div className="absolute top-6 right-6 opacity-60">
          <Image src={icon} alt="icon" className="w-6 h-6 invert" width={24} height={24} />
        </div>
      </motion.div>
    </Link>
  );
}