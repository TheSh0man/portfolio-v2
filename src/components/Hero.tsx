"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";

const roles = [
  "AI Engineer.",
  "Data Analyst.",
  "Machine Learning.",
  "Computer Vision.",
  "Problem Solver."
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] bg-black"
    >
      {/* Sticky container for the scrollytelling effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Subtle Silver Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />

        {/* Text Layer */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="z-20 text-center px-6 flex flex-col items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white mb-2 leading-none"
          >
            Abdelrahman
            <br />
            <span className="text-gradient-silver">Shoman.</span>
          </motion.h1>

          <div className="h-16 md:h-24 overflow-hidden relative w-full flex justify-center mt-6">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl md:text-4xl text-zinc-400 font-medium tracking-tight absolute"
              >
                {roles[index]}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <p className="text-xs text-zinc-500 uppercase tracking-[0.2em] mb-4">
              Scroll to explore
            </p>
            <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-500 to-transparent mx-auto" />
          </motion.div>
        </motion.div>

        {/* Image Layer (Fades in automatically after 2 seconds) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none"
        >
          {/* 
            Note: We use a transparent PNG here so the background doesn't block the glow.
          */}
          <div className="relative w-full max-w-4xl h-[90vh] flex justify-center items-end mx-auto">
             {/* Fade the bottom edge of the image so it blends into the black page naturally */}
             <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20" />
             <img 
               src="/profile-bg-removed.png" 
               alt="Abdelrahman Shoman"
               className="w-full h-full object-contain object-bottom opacity-90 drop-shadow-2xl grayscale contrast-125"
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
