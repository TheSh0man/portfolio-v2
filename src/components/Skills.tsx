"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", snippet: 'print("Hello, World!")' },
      { name: "SQL", snippet: "SELECT 'Hello, World!';" },
      { name: "C++", snippet: 'cout << "Hello, World!";' },
      { name: "Flutter", snippet: "Text('Hello, World!')" },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Pandas", snippet: "import pandas as pd\ndf.head()" },
      { name: "NumPy", snippet: "np.array([1, 2, 3])" },
      { name: "Matplotlib", snippet: "plt.plot(x, y)\nplt.show()" },
      { name: "Seaborn", snippet: "sns.heatmap(corr_matrix)" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "TensorFlow", snippet: "model.fit(X_train, y_train)" },
      { name: "Scikit-learn", snippet: "clf = RandomForestClassifier()\nclf.predict(X)" },
      { name: "OpenCV", snippet: "cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)" },
      { name: "NLP", snippet: "tokenizer.encode('Intelligence, engineered.')" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", snippet: "git commit -m 'Initial commit'" },
      { name: "Excel", snippet: "=VLOOKUP(A2, Data!A:C, 3, FALSE)" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-40 bg-black relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
            The foundation.
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Tools and technologies mastered to build scalable, intelligent systems.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <SkillCategoryCard key={category.title} category={category} index={catIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({ category, index }: { category: typeof skillCategories[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-[#0a0a0a] rounded-[32px] p-10 border border-white/5 transition-all duration-500 hover:border-white/10"
    >
      {/* Subtle silver glow behind the card content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <h3 className="text-3xl font-semibold mb-10 text-white relative z-10">
        {category.title}
      </h3>
      
      <div className="flex flex-wrap gap-4 relative z-10 items-start">
        {category.skills.map((skill) => (
          <SkillHoverChip key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillHoverChip({ skill }: { skill: { name: string; snippet: string } }) {
  return (
    <div className="relative group/chip cursor-crosshair">
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-xl opacity-0 scale-95 group-hover/chip:opacity-100 group-hover/chip:scale-100 group-hover/chip:-translate-y-1 pointer-events-none transition-all duration-300 z-50 whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <code className="text-white font-mono text-xs">
          {skill.snippet}
        </code>
        {/* Triangle pointer */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-white/10" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] border-4 border-transparent border-t-[#1a1a1a]" />
      </div>

      {/* Chip */}
      <div className="px-5 py-3 bg-[#111111] rounded-full border border-white/10 group-hover/chip:border-white/40 group-hover/chip:bg-white/5 group-hover/chip:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
        <span className="text-zinc-300 font-medium text-sm tracking-wide">
          {skill.name}
        </span>
      </div>
    </div>
  );
}
