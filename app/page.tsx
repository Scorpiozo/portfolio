"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import CustomCursor from "@/app/components/CustomCursor";
import Background from "@/app/components/Background"; // Imported our background here!

const CONTENT = {
  name: "Anandhita Akhileshwaran",
  role: "Business Analyst & Developer",
  manifesto:
    "I am a passionate Computer Science and Business Analytics student with a strong interest in cybersecurity, programming, and technology incorporated for business statistics. Proficient in multiple programming languages, I thrive in dynamic learning environments and continuously seek to expand my technical skill set. I am actively involved in extracurricular activities, such as being a member cyber security club, codechef club, and have a keen interest in graphics and art and I do animation. I also enjoy cooking and designing, which further reflects my creativity and problem-solving abilities. Along with my technical strengths, I possess excellent soft skills and have significant experience working in collaborative team settings. An avid reader and music enthusiast (particularly fond of Konnakol), I am an eager learner with a curiosity for exploring diverse fields and ideas.",
  github: "https://github.com/Scorpiozo",
  linkedin: "https://www.linkedin.com/in/anandhita-akhileshwaran-304738316/",
  codechef: "https://www.codechef.com/users/scorpiozo",
  instagram: "https://instagram.com/",
  kaggle: "https://www.kaggle.com/anuakhil",
  clubs: [
    {
      id: "01",
      title: "CYBER SECURITY",
      desc: "Technical & Design Division",
      path: "/clubs/cyber-security",
    },
    {
      id: "02",
      title: "CODE CHEF",
      desc: "Speed Coding & Algorithms",
      path: "/clubs/code-chef",
    },
    {
      id: "03",
      title: "MICROSOFT",
      desc: "Development Division",
      path: "/clubs/microsoft",
    },
  ],
};

const SKILLS = [
  { name: "Next. js", type: "nitro" },
  { name: "Python", type: "crimson" },
  { name: "Java", type: "crimson" },
  { name: "C/C++", type: "crimson" },
  { name: "R and R studio", type: "nitro" },
  { name: "Machine Learning", type: "nitro" },
  { name: "Business Stats", type: "nitro" },
  { name: "Data Modelling Using Spreadsheets", type: "crimson" },
  { name: "SQL // NoSQL", type: "nitro" },
  { name: "Cyber-Forensics", type: "nitro" },
  { name: "Linux Systems", type: "crimson" },
  { name: "Network Security", type: "crimson" },
  { name: "HTML/CSS/js", type: "nitro" },
  { name: "Git and GitHub", type: "nitro" },
  { name: "Software Engineering Documentation (SDLC)", type: "nitro" },
  { name: "Animation", type: "crimson" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loadingTrigger, setLoadingTrigger] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setLoadingTrigger(true);
    setTimeout(() => {
      router.push(path);
    }, 200);
  };

  useEffect(() => {
    if (!mounted) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
  }, [mounted]);

  if (!mounted) return <div className="bg-black w-screen h-screen" />;

  return (
    <main className="void-grain relative bg-black min-h-screen overflow-x-hidden">
      {/* Target Background Component injected cleanly */}
      <Background />

      {/* 1. HERO SECTION */}
      <section className="relative z-30 h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-[8vw] lg:text-[9vw] font-black italic uppercase tracking-[-0.05em] md:tracking-[-0.08em] leading-[0.95] md:leading-[0.9] font-sans text-white max-w-4xl"
        >
          {CONTENT.name}
        </motion.h1>

        <p className="mt-6 md:mt-10 text-crimson font-bold tracking-[0.3em] sm:tracking-[0.6em] md:tracking-[1em] text-lg sm:text-2xl md:text-[30px] uppercase opacity-90 font-sans drop-shadow-[0_0_12px_rgba(255,0,0,0.8)] px-2 balance-text">
          {CONTENT.role}
        </p>
      </section>

      {/* 2. CONTENT STREAM */}
      {/* Adjusted layout gaps from space-y-[60vh] down to space-y-[30vh] on smaller touch-points */}
      <div className="relative z-30 max-w-7xl mx-auto space-y-[30vh] md:space-y-[60vh] pb-40 px-4 sm:px-6 md:px-8">
        <section className="reveal w-full">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-crimson font-bold text-base md:text-[20px] tracking-[0.4em] md:tracking-[0.6em] mb-6 md:mb-8 uppercase opacity-80 font-sans drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
                DATA_ENTRY
            </h2>

            <p className="font-manifesto italic text-base sm:text-xl md:text-2xl leading-[1.4] md:leading-[1.3] text-zinc-300 tracking-tight">
              {CONTENT.manifesto}
            </p>

            <div className="mt-8 md:mt-12 h-px w-20 bg-gradient-to-r from-crimson to-transparent opacity-40 shadow-[0_0_8px_rgba(255,0,0,0.4)]" />
          </div>
        </section>

        {/* --- TECHNICAL_VAULT --- */}
        <section className="reveal">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 md:mb-16 border-b border-zinc-900 pb-6 gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-2 w-2 bg-nitro animate-pulse shadow-[0_0_10px_#0055ff] flex-shrink-0" />
              <h2 className="text-nitro font-bold text-xs sm:text-sm md:text-[20px] tracking-[0.3em] md:tracking-[0.8em] uppercase opacity-80 font-sans drop-shadow-[0_0_8px_rgba(0,85,255,0.4)]">
                 LOG_DIRECTORY: TECHNICAL_ASSETS
              </h2>
            </div>

            <span className="font-mono text-[8px] md:text-[9px] text-zinc-700 tracking-[0.2em] md:tracking-[0.4em] uppercase">
              Loc: 42.3611° N, 71.0570° W
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-1 md:gap-y-2">
            {SKILLS.map((skill, i) => (
              <div
                key={i}
                className="group relative flex items-center justify-between py-3 md:py-6 px-3 md:px-4 border border-transparent hover:border-white/5 hover:bg-white/[0.01] transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`absolute left-0 top-0 h-full w-[1px] md:w-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                    skill.type === "crimson"
                      ? "bg-crimson shadow-[0_0_20px_rgba(255,0,0,1)]"
                      : "bg-nitro shadow-[0_0_20px_rgba(0,85,255,1)]"
                  }`}
                />

                <div className="flex items-center gap-4 md:gap-8 relative z-10 mr-4">
                  <div className="flex flex-col min-w-[25px] md:min-w-[30px]">
                    <span className="font-mono text-[7px] md:text-[8px] text-zinc-800 group-hover:text-zinc-500 transition-colors uppercase tracking-tighter">
                      S_{i + 1}0
                    </span>
                    <span className="font-mono text-[9px] md:text-[10px] text-zinc-600">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </span>
                  </div>

                  <span className="text-base sm:text-lg md:text-2xl font-normal italic uppercase tracking-tighter text-zinc-300 group-hover:text-white transition-all duration-300 font-sans break-words max-w-[180px] sm:max-w-none">
                    {skill.name}
                  </span>
                </div>

                <div className="flex flex-col items-end relative z-10 flex-shrink-0">
                  <span
                    className={`text-[8px] md:text-[9px] font-mono font-bold tracking-[0.1em] md:tracking-[0.3em] mb-1 ${
                      skill.type === "crimson"
                        ? "text-crimson drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]"
                        : "text-nitro/60"
                    }`}
                  >
                    {skill.type}
                  </span>

                  <div className="flex gap-0.5 md:gap-1">
                    {[...Array(4)].map((_, bit) => (
                      <div
                        key={bit}
                        className={`h-[1px] md:h-[2px] w-1.5 sm:w-2 md:w-3 ${
                          bit < 3
                            ? skill.type === "crimson"
                              ? "bg-crimson shadow-[0_0_6px_rgba(255,0,0,0.6)]"
                              : "bg-nitro/40"
                            : "bg-zinc-800"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- AFFILIATED_CLUBS --- */}
        <section className="reveal">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 md:mb-24 px-2 md:px-0 gap-4">
            <div>
              <h2 className="text-crimson font-bold text-lg md:text-[20px] tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-80 font-sans mb-2 md:mb-4 drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]">
                  AFFILIATED_CLUBS
              </h2>
              <p className="text-zinc-500 font-sans text-[10px] sm:text-xs uppercase tracking-widest italic">
                SELECT sector for more...
              </p>
            </div>
            <div className="hidden md:block h-px w-1/3 bg-gradient-to-r from-transparent to-zinc-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-64">
            {CONTENT.clubs.map((club, index) => (
              <a
                href={club.path}
                key={club.id}
                onClick={(e) => handleNavigation(e, club.path)}
                className={`group block relative md:col-span-7 cursor-pointer ${
                  index % 2 !== 0 ? "md:col-start-6" : "md:col-start-1"
                }`}
              >
                <div className="relative transition-all duration-700 px-2 md:px-0">
                  <span className="absolute -top-6 -left-2 md:-top-12 md:-left-8 text-[18vw] md:text-[12vw] font-black text-white/[0.03] transition-colors duration-700 group-hover:text-crimson/[0.08] font-sans pointer-events-none leading-none">
                    {club.id}
                  </span>

                  <div className="relative z-10 border-l border-zinc-800 group-hover:border-zinc-500 pl-4 md:pl-8 transition-all duration-700">
                    <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                      <div className="h-[1px] w-4 md:w-8 bg-zinc-500 group-hover:bg-nitro group-hover:w-16 group-hover:shadow-[0_0_15px_#0055ff] transition-all duration-700" />
                      <span className="text-[8px] md:text-[10px] font-mono text-nitro opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,85,255,0.7)]">
                        Initialize_Link
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl md:text-7xl font-black italic uppercase text-white group-hover:text-zinc-500 transition-all duration-500 font-sans leading-[0.9] md:leading-[0.85] tracking-tighter break-words">
                      {club.title}
                    </h3>

                    <div className="mt-3 md:mt-6 flex flex-col gap-1 md:gap-2">
                      <p className="text-zinc-400 uppercase tracking-[0.15em] md:tracking-[0.4em] text-[8px] md:text-[9px] font-sans group-hover:text-zinc-600 transition-colors">
                        {club.desc}
                      </p>
                      <span className="inline-block w-fit px-2 py-0.5 md:py-1 bg-zinc-950 border border-zinc-800 text-[7px] md:text-[8px] text-zinc-500 font-mono mt-1 md:mt-2 group-hover:border-nitro/40 group-hover:text-nitro transition-all">
                        SEC_TYPE: {club.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 3. FINAL SOCIAL FOOTER */}
        <section className="reveal flex flex-col items-center py-20 md:py-40 border-t border-white/5">
          <h2 className="text-crimson font-black text-lg md:text-[20px] tracking-[0.4em] md:tracking-[0.6em] mb-10 md:mb-12 uppercase opacity-80 font-sans drop-shadow-[0_0_12px_rgba(255,0,0,0.8)] text-center">
            ESTABLISH_CONNECTION
          </h2>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 md:gap-6 w-full max-w-5xl px-2 sm:px-4">
            <SocialLink
              label="GitHub"
              href={CONTENT.github}
              color="border-crimson/30 text-crimson hover:bg-crimson shadow-hover-red"
            />
            <SocialLink
              label="LinkedIn"
              href={CONTENT.linkedin}
              color="border-nitro/30 text-nitro hover:bg-nitro shadow-hover-blue"
            />
            <SocialLink
              label="Codechef"
              href={CONTENT.codechef}
              color="border-zinc-500/30 text-zinc-400 hover:bg-zinc-200"
            />
            <SocialLink
              label="Instagram"
              href={CONTENT.instagram}
              color="border-purple-500/30 text-purple-400 hover:bg-purple-500"
            />
            <SocialLink
              label="Kaggle"
              href={CONTENT.kaggle}
              color="border-zinc-800 text-zinc-600 hover:bg-white"
            />
          </div>

          <p className="mt-[150px] md:mt-[300px] text-sm md:text-[20px] tracking-[0.5em] md:tracking-[1em] text-crimson uppercase text-center font-black italic drop-shadow-[0_0_20px_rgba(255,0,0,1)] px-4">
            SYSTEM_TERMINATED
          </p>
        </section>
      </div>

      <AnimatePresence mode="wait">
        {loadingTrigger && (
          <motion.div
            key="loading-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[10000]"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
    </main>
  );
}

function SocialLink({
  label,
  href,
  color,
}: {
  label: string;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full sm:w-auto sm:min-w-[180px] py-4 sm:py-6 border text-center text-base sm:text-lg font-black italic uppercase tracking-[0.1em] transition-all duration-500 sm:skew-x-[-12deg] hover:scale-[1.05] hover:text-black ${color} font-sans`}
    >
      <span className="inline-block sm:skew-x-[12deg]">{label}</span>
    </a>
  );
}