"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

const projects = [
  {
    id: "dimension-x",
    title: "Dimension X",
    category: "Computer Vision",
    brief:
      "Fully autonomous, computer-vision-based logistics platform using a custom YOLOv8 model to calculate physical box dimensions and optimize packing capacity in real-time.",
    tech: ["Python", "YOLOv8", "OpenCV", "Flask", "Deep Learning"],
    image: "/portfolio-v2/projects/dimensionx-1.png",
    link: "https://github.com/TheSh0man/Dimension-X",
    images: [
      "/portfolio-v2/projects/dimensionx-1.png",
      "/portfolio-v2/projects/dimensionx-2.png",
      "/portfolio-v2/projects/dimensionx-3.png",
      "/portfolio-v2/projects/dimensionx-4.jpg",
    ],
    longDescription: `Dimension X is a smart box measurement and logistics dashboard. It utilizes advanced computer vision techniques and deep learning to instantly calculate the Length, Width, and Height of physical boxes using a standard camera. By placing an ArUco marker as a scale reference, the system calculates the exact physical dimensions from pixels.

Key Features & Architecture:
- Custom YOLOv8 Model: Trained specifically to accurately isolate and detect box boundaries using Spatial Pyramid Pooling (SPP) and deep layer fusion.
- ArUco Marker Calibration: Uses DICT_4X4_50 for precise pixel-to-metric ratio conversion.
- Multi-Modal API Integration: Integrates Cloud Vision APIs (LLaVA / Gemini) to perform semantic object recognition, identifying the contents of the boxes.
- Logistics Optimization: Calculates internal capacity and splits box volumes based on client weight shares dynamically.

The system replaces inaccurate manual measurements with high-precision AI calculations, designed to operate in unmanned environments without requiring human intervention.`,
  },
  {
    id: "excel-dashboard",
    title: "Interactive Excel Dashboard",
    category: "Data Analysis",
    brief:
      "End-to-end data analysis project: raw data transformed into a comprehensive interactive dashboard with Dark/Light modes and dynamic filters.",
    tech: ["Excel", "Data Cleaning", "Pivot Tables", "Dashboarding"],
    image: "/portfolio-v2/projects/excel-project.png",
    link: "https://www.linkedin.com/posts/abdalrahmanshoman_dataanalysis-excel-creativa-activity-7364275063874801665-VVTm",
    images: [
      "/portfolio-v2/projects/excel-project.png",
      "/portfolio-v2/projects/excel-1.png",
      "/portfolio-v2/projects/excel-2.png",
      "/portfolio-v2/projects/excel-3.png",
      "/portfolio-v2/projects/excel-4.png",
      "/portfolio-v2/projects/excel-5.png",
      "/portfolio-v2/projects/excel-6.png",
      "/portfolio-v2/projects/excel-7.png",
    ],
    longDescription: `An end-to-end Data Analysis project transforming raw datasets into a comprehensive, interactive business dashboard.

Key Features:
- Dynamic UI with Dark Mode and Light Mode
- Interactive filtering by Months, Years (2016-2017), and Categories

Project Workflow:
1. Business Intelligence Questions: Identified peak sales months, top customers, best-selling products, and regional performance.
2. Data Cleaning: Handled missing values, removed duplicates, standardized formats.
3. Analysis & Visualization: Leveraged Pivot Tables to uncover insights and built a clean dashboard.

Developed as part of the Creativa Innovation Hub, Mansoura.`,
  },
  {
    id: "al-aseel-dashboard",
    title: "Al-Aseel Sales Dashboard",
    category: "Data Analysis",
    brief:
      "End-to-End Excel project for a fictional company 'Al-Aseel' (using real data), from data cleaning to advanced dashboarding.",
    tech: ["Excel", "Data Cleaning", "Pivot Tables", "Business Intelligence"],
    image: "/portfolio-v2/projects/al-aseel-1.png",
    link: "", // No link provided yet
    images: [
      "/portfolio-v2/projects/al-aseel-1.png",
      "/portfolio-v2/projects/al-aseel-2.png",
      "/portfolio-v2/projects/al-aseel-3.png",
      "/portfolio-v2/projects/al-aseel-4.png",
    ],
    longDescription: `An end-to-end data analysis project for a fictional company "Al-Aseel" built with real-world datasets.

Project Workflow:
1. Data Cleaning: Processed raw data, fixed inconsistencies, and structured it for analysis.
2. Data Analysis & Problem Solving: Formulated relevant business questions to uncover hidden trends.
3. Pivot Tables: Created comprehensive summaries and cross-tabulations.
4. Dashboard Creation: Built an interactive, dynamic Excel dashboard to visually answer business questions and track key performance indicators.`,
  },
];

export default function Projects() {
  const [modalProject, setModalProject] = useState<(typeof projects)[0] | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="projects" className="py-40 bg-black relative z-20">
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white text-center">
          Pro-level work.
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <ProjectRow 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={() => setModalProject(project)} 
          />
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
          onImageClick={setLightboxImg}
        />
      )}

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl flex items-center justify-center cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Full view"
            className="max-w-[95%] max-h-[95vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

function ProjectRow({ project, index, onClick }: { project: (typeof projects)[0], index: number, onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative h-[80vh] w-full flex items-center overflow-hidden cursor-pointer group" onClick={onClick}>
      {/* Background Image Parallax */}
      <motion.div 
        style={{ scale: imgScale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-700 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex">
        <motion.div 
          style={{ y: textY }}
          className={`w-full max-w-xl p-12 apple-glass rounded-[32px] ${isEven ? "ml-auto" : "mr-auto"}`}
        >
          <span className="text-white/60 font-medium text-sm tracking-widest uppercase mb-4 block">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {project.title}
          </h3>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            {project.brief}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-white/10 text-white text-xs font-medium rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  onImageClick,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
  onImageClick: (src: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-2xl" 
        onClick={onClose} 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/10 rounded-[32px] p-8 md:p-12 z-10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <span className="text-white/50 text-sm tracking-widest uppercase mb-4 block">
          {project.category}
        </span>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">{project.title}</h2>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Screenshot ${i + 1}`}
              className="w-full h-48 object-cover rounded-2xl border border-white/5 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              onClick={(e) => {
                e.stopPropagation();
                onImageClick(img);
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          {/* Description */}
          <div className="text-zinc-400 text-lg leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </div>

          {/* Sidebar */}
          <div>
            <h4 className="text-white font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-sm rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Project on LinkedIn
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
