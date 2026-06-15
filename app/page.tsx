"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import CustomCursor from "@/app/components/CustomCursor";
import Background from "@/app/components/Background";
import GlitchText from "@/app/components/GlitchText";

const CONTENT = {
  name: "Anandhita Akhileshwaran",
  role: "Business Analyst & Developer",
  manifesto: [
  "I am a passionate Computer Science and Business Analytics student with a strong interest in cybersecurity, programming, and technology incorporated for business statistics. Proficient in multiple programming languages, I thrive in dynamic learning environments and continuously seek to expand my technical skill set.",
  "I am actively involved in extracurricular activities, such as being a member cyber security club, codechef club, and have a keen interest in graphics and art and I do animation. I also enjoy cooking and designing, which further reflects my creativity and problem-solving abilities.",
  "Along with my technical strengths, I possess excellent soft skills and have significant experience working in collaborative team settings. An avid reader and music enthusiast (particularly fond of Konnakol), I am an eager learner with a curiosity for exploring diverse fields and ideas."
  ],
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
  { name: "Python", type: "crimson" },
  { name: "Java", type: "crimson" },
  { name: "C/C++", type: "crimson" },
  { name: "R and R studio", type: "nitro" },
  { name: "Machine Learning", type: "nitro" },
  { name: "Model Making", type: "crimson" },
  { name: "Business Analytics", type: "nitro" },
  { name: "Data Modelling Using Spreadsheets", type: "crimson" },
  { name: "Next. js", type: "nitro" },
  { name: "HTML/CSS/js", type: "nitro" },
  { name: "SQL // NoSQL", type: "nitro" },
  { name: "Cyber-Forensics", type: "nitro" },
  { name: "Linux Systems", type: "crimson" },
  { name: "Network Security", type: "crimson" },
  { name: "Git and GitHub", type: "nitro" },
  { name: "Software Engineering Documentation (SDLC)", type: "nitro" },
  { name: "Accounting", type: "crimson" },
  { name: "Animation", type: "crimson" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loadingTrigger, setLoadingTrigger] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }
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
      <Background />

      {/* 1. HERO SECTION */}
        <section className="relative z-30 h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-[8vw] lg:text-[9vw] font-black italic uppercase tracking-[-0.05em] md:tracking-[-0.08em] leading-[0.95] md:leading-[0.9] font-sans text-white max-w-5xl select-none"
          >
            <GlitchText text={CONTENT.name} />
          </motion.h1>

          {/* Fade the sub-role text in smoothly slightly after the decrypt sequence starts */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 md:mt-10 text-crimson font-bold tracking-[0.3em] sm:tracking-[0.6em] md:tracking-[1em] text-lg sm:text-2xl md:text-[30px] uppercase opacity-90 font-sans drop-shadow-[0_0_12px_rgba(255,0,0,0.8)] px-2 balance-text"
          >
            {CONTENT.role}
          </motion.p>
        </section>

      {/* 2. CONTENT STREAM */}
      {/* Adjusted layout gaps from space-y-[60vh] down to space-y-[30vh] on smaller touch-points */}
      <div className="relative z-30 max-w-7xl mx-auto space-y-[30vh] md:space-y-[60vh] pb-40 px-4 sm:px-6 md:px-8">
        <section className="reveal w-full">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-crimson font-bold text-base md:text-[20px] tracking-[0.4em] md:tracking-[0.6em] mb-6 md:mb-8 uppercase opacity-80 font-sans drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
                DATA_ENTRY
            </h2>

            <div className="space-y-6 border-l-2 border-crimson/40 pl-4 md:pl-6 transition-all duration-500 hover:border-crimson">
              {CONTENT.manifesto.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="font-manifesto text-base sm:text-xl md:text-2xl leading-[1.6] md:leading-[1.5] text-zinc-400 tracking-[0.02em] sm:tracking-[0.05em]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 md:mt-12 h-px w-20 bg-gradient-to-r from-crimson to-transparent opacity-40 shadow-[0_0_8px_rgba(255,0,0,0.4)]" />
          </div>
        </section>

        {/* --- TECHNICAL_VAULT ENCLOSURE --- */}
        <section className="reveal w-full relative group/section">
          
          {/* 1. TOP CONTAINER BAR */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 border-b border-zinc-800/80 pb-4 gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-2 w-2 bg-nitro animate-pulse shadow-[0_0_12px_#0055ff] flex-shrink-0" />
              <h2 className="text-nitro font-bold text-xs sm:text-sm md:text-[20px] tracking-[0.3em] md:tracking-[0.6em] uppercase opacity-80 font-sans drop-shadow-[0_0_8px_rgba(0,85,255,0.4)]">
                 LOG_DIRECTORY: TECHNICAL_ASSETS
              </h2>
            </div>
            {/* Added an active memory readout module to the top right header */}
            <span className="font-mono text-[8px] md:text-[9px] text-zinc-500 tracking-[0.2em] md:tracking-[0.4em] uppercase flex items-center gap-2">
              <span className="inline-block animate-[spin_4s_linear_infinite] text-nitro/60">⚡</span> 
              Loc: 42.3611° N, 71.0570° W // SEC_02
            </span>
          </div>

          {/* 2. THE MAIN ENCLOSURE BOX */}
          {/* Enhanced: Added a subtle nitro ambient glow overlay (shadow) that grows stronger when user interacts with the block */}
          <div className="relative w-full p-4 sm:p-6 md:p-10 bg-zinc-950/40 border border-zinc-900/80 rounded-[2px] backdrop-blur-xs transition-all duration-700 shadow-[0_0_30px_rgba(0,85,255,0.02)] group-hover/section:shadow-[0_0_50px_rgba(0,85,255,0.06)] group-hover/section:border-zinc-800/60 overflow-hidden">
            
            {/* --- THE ADVANCED LASER MATRIX ENHANCEMENT --- */}
            {/* This layer generates the high-tech vertical tracking scan line */}
            <div 
              className="absolute inset-x-0 h-[60px] bg-gradient-to-b from-transparent via-nitro/[0.07] to-transparent border-b border-crimson/30 pointer-events-none z-20 left-0 w-full"
              style={{
                animation: 'cyberScan 6s cubic-bezier(0.4, 0, 0.2, 1) infinite'
              }}
            />

            {/* Injected the keyframe utility styles directly so it requires zero tailwind.config setups */}
            <style jsx global>{`
              @keyframes cyberScan {
                0% { top: -60px; opacity: 0; }
                5% { opacity: 1; }
                95% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
              }
            `}</style>

            {/* Cyber Brackets / Tech Crosshairs in the outer structural corners */}
            {/* Enhanced: The corner target brackets now brighten up with full color when the mouse enters the box! */}
            <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-nitro/30 group-hover/section:border-nitro transition-all duration-500" />
            <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t-2 border-r-2 border-zinc-800 group-hover/section:border-zinc-600 transition-all duration-500" />
            <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b-2 border-l-2 border-zinc-800 group-hover/section:border-zinc-600 transition-all duration-500" />
            <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-nitro/30 group-hover/section:border-nitro transition-all duration-500" />

            {/* Blueprint Grid Mesh Matrix Layer - Faint technical backing lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#141417_1px,transparent_1px),linear-gradient(to_bottom,#141417_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-40 pointer-events-none" />

            {/* YOUR CARDS GRID - EXACTLY UNCHANGED */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-1 md:gap-y-2">
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

            {/* 3. BOTTOM CONTAINER PANEL METADATA STRIP */}
            {/* Enhanced: Added a small responsive bit counter frame next to the status readouts */}
            <div className="mt-8 pt-4 border-t border-zinc-900/60 flex justify-between items-center font-mono text-[8px] text-zinc-600 tracking-widest relative z-20 select-none">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-nitro/50 rounded-full animate-pulse shadow-[0_0_8px_#0055ff]" />
                <span className="text-zinc-500 group-hover/section:text-zinc-400 transition-colors">MEM_BLOCK_IDX // VOL_01</span>
              </div>
              <div className="text-zinc-600 group-hover/section:text-nitro/80 transition-colors font-semibold uppercase tracking-wider">
                SYS_STATUS: CRYPTO_VAULT_ACTIVE
              </div>
            </div>

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