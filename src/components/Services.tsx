"use client";

import { motion } from "motion/react";

const services = [
  {
    title: "Data Analysis",
    description:
      "Transform raw datasets into actionable insights through cleaning, analysis, and interactive dashboard visualization.",
  },
  {
    title: "Machine Learning",
    description:
      "Build predictive models using modern ML frameworks. From classification to regression, tailored to your business needs.",
  },
  {
    title: "Computer Vision",
    description:
      "Design real-time object detection and image processing systems for industrial and commercial applications.",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile applications built with Flutter, featuring clean architecture and smooth user experiences.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-black relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
            Capabilities.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group p-10 rounded-[32px] border border-white/5 bg-[#0a0a0a] hover:bg-[#111111] hover:border-white/10 transition-colors duration-500 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
