"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-40 bg-black relative z-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-12 leading-tight"
        >
          Transforming complex data into{" "}
          <span className="text-gradient-silver">elegant solutions.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-20"
        >
          My work spans Machine Learning, Computer Vision, and building interactive
          dashboards that drive real business decisions. I believe in building
          things from scratch to truly understand every layer.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-white/10 py-16">
          {[
            { number: "10+", label: "Projects Delivered" },
            { number: "5+", label: "Core Technologies" },
            { number: "3+", label: "Professional Certifications" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center"
            >
              <p className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                {stat.number}
              </p>
              <p className="text-zinc-500 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
