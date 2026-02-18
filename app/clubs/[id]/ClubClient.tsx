"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Loading from "@/app/loading";
import CustomCursor from "@/app/components/CustomCursor";

interface ClubData {
  title: string;
  role: string;
  desc: string;
  accent: string;
  bgAccent: string;
  capabilities: Record<string, number>;
  operation?: {
    name: string;
    status: string;
    detail: string;
  };
  logs: Array<{
    label: string;
    content: string;
  }>;
}


const CLUB_DATA: Record<string, ClubData> = {
  "cyber-security": {
    title: "CYBER SECURITY",
    role: "CTF Contributor & Design Member",
    desc: "Technical & Design Division",
    accent: "border-crimson text-crimson",
    bgAccent: "bg-crimson",
    capabilities: { Forensics: 92, Cryptography: 88, Networking: 85 },
    logs: [
      {
        label: "Challenge_Engineering",
        content:
          "Authored original CTF challenges specializing in Cryptography (encryption/decryption) and Digital Forensics.",
      },
      {
        label: "Vulnerability_Analysis",
        content:
          "Led workshops in OSINT and forensics to identify and mitigate real-world security vulnerabilities.",
      },
      {
        label: "Systems_&_Networking",
        content:
          "Leveraging Linux proficiency and TCP/IP principles to build and simulate network-based attack scenarios.",
      },
    ],
  },
  "code-chef": {
    title: "CODECHEF CHAPTER",
    role: "Technical & Design Member",
    desc: "Speed Coding & Algorithms",
    accent: "border-nitro text-nitro",
    bgAccent: "bg-nitro",
    capabilities: { Efficiency: 95, Logic: 90, Complexity: 88 },
    logs: [
      {
        label: "Competitive_Programming",
        content:
          "Participate in weekly contests, maintaining a consistent practice schedule to improve algorithmic efficiency.",
      },
      {
        label: "Technical_Analysis",
        content:
          "Analysis of optimal solutions and time complexity ($O(n)$ analysis) for diverse data structure challenges.",
      },
      {
        label: "Problem_Solving",
        content:
          "Completed the Advent of Code, solving 25 complex puzzles requiring creative logic and implementation.",
      },
    ],
  },
  microsoft: {
    title: "MICROSOFT CLUB",
    role: "Innovations // Project Lead",
    desc: "Development Division",
    accent: "border-white text-white",
    bgAccent: "bg-white",
    capabilities: { Architecture: 94, Frontend: 90, AI_Integration: 85 },
    operation: {
      name: "Smart AI Academic Assistant",
      status: "UNDERWAY",
      detail:
        "Unified agent system featuring advanced OCR and intelligent text extraction.",
    },
    logs: [
      {
        label: "Unified_Agent",
        content:
          "Designed for academic content processing with automated OCR for handwritten notes.",
      },
      {
        label: "Report_Gen",
        content:
          "Comprehensive analysis and professional PDF report generation for academic processing.",
      },
      {
        label: "Modern_Stack",
        content:
          "Building a modern Next.js frontend with robust intelligent text extraction protocols.",
      },
    ],
  },
};
export default function ClubClient({ id }: { id: string }) {
  const router = useRouter();
  const club = CLUB_DATA[id];
  const [loadingTrigger, setLoadingTrigger] = useState(false);

  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoadingTrigger(true);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  if (!club) return <div className="p-20 text-white font-mono bg-black min-h-screen">SECTOR_NOT_FOUND...</div>;

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-16 lg:p-24 font-sans relative overflow-x-hidden">
      {/* Your existing JSX here */}
      <CustomCursor />
      {/* LOADING OVERLAY */}
      {loadingTrigger && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <Loading />
        </div>
      )}

      {/* 1. RESTORED NAVIGATION (Top Left) */}
      <nav className="max-w-7xl mx-auto mb-12 relative z-10">
        <Link
          href="/"
          onClick={handleReturn}
          className="group inline-flex items-center gap-4 text-xs font-mono tracking-[0.5em] text-zinc-500 hover:text-white transition-all uppercase"
        >
          <span className="text-lg group-hover:-translate-x-2 transition-transform duration-300">
            ←
          </span>
          <span>Return_to_Main_Void</span>
        </Link>
      </nav>

      {/* BACKGROUND DECO */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:50px_50px] z-0" />

      {/* HEADER SECTION */}
      <header className="max-w-7xl mx-auto mb-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-3 h-3 ${club.bgAccent} animate-ping`} />
              <span className="text-xs font-mono tracking-[0.4em] text-zinc-400 uppercase font-bold">
                Established_Node // 0{id.length}
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter">
              {club.title}
            </h1>
          </div>
          <div className="text-left md:text-right space-y-3">
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-[0.4em] border-b border-zinc-800 pb-3">
              {/* // */} {club.desc}
            </p>
            <p className="text-xs font-mono text-zinc-600 uppercase italic tracking-widest">
              {club.role}
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 relative z-10">
        {/* CAPABILITIES PANEL */}
        <div className="lg:col-span-4 space-y-10">
          <div className="p-8 border border-zinc-900 bg-zinc-950/40 backdrop-blur-xl relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-[3px] h-full ${club.bgAccent} opacity-60`}
            />
            <h3 className="text-xs font-mono text-zinc-500 uppercase mb-8 tracking-[0.3em] border-b border-zinc-900 pb-3">
              Division_Capability
            </h3>
            <div className="space-y-8">
              {Object.entries(club.capabilities).map(
                ([skill, value]: [string, number]) => (
                  <div key={skill} className="space-y-3">
                    <div className="flex justify-between text-[11px] font-mono uppercase text-zinc-300 font-bold tracking-wider">
                      <span>{skill}</span>
                      <span className={club.accent.split(" ")[1]}>
                        {value}%
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-zinc-900">
                      <div
                        className={`h-full ${club.bgAccent} opacity-80 transition-all duration-1000`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* LOGS PANEL */}
        <div className="lg:col-span-8 space-y-16">
          {club.operation && (
            <div className="group relative p-10 border border-zinc-800 bg-zinc-950/30 hover:border-zinc-500 transition-all">
              <div className="absolute top-6 right-6 flex items-center gap-3">
                <span className="text-[10px] font-mono text-zinc-500 font-bold">
                  STATUS:
                </span>
                <span
                  className={`text-[10px] font-mono px-3 py-1 border-2 ${club.accent} animate-pulse font-black`}
                >
                  {club.operation.status}
                </span>
              </div>
              <h2 className="text-xs font-mono text-zinc-500 uppercase mb-6 tracking-[0.5em]">
                Featured_Operation
              </h2>
              <h4 className="text-4xl font-bold italic mb-4 uppercase leading-tight">
                {club.operation.name}
              </h4>
              <p className="text-zinc-400 text-base font-mono leading-relaxed max-w-2xl">
                {club.operation.detail}
              </p>
            </div>
          )}

          <div className="space-y-20">
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.5em] flex items-center gap-6">
              Mission_Logs <div className="h-[1px] flex-1 bg-zinc-900" />
            </h2>
            {club.logs.map((log: { label: string; content: string }, i: number) => (
              <div key={i} className="group flex gap-10">
                <span className="text-zinc-800 font-mono text-4xl font-black">
                  0{i + 1}
                </span>
                <div className="flex-1 border-t border-zinc-800 pt-8">
                  <h5
                    className={`text-sm font-mono uppercase tracking-[0.3em] mb-5 font-bold ${
                      club.accent.split(" ")[1]
                    }`}
                  >
                    {log.label}
                  </h5>
                  <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-snug group-hover:text-white transition-colors">
                    {log.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto mt-32 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
        <div className="text-[10px] font-mono uppercase tracking-[0.6em] font-bold">
          Terminal_ID: {id}_VOID_STATION
        </div>
        <div className="flex gap-12 text-[10px] font-mono uppercase tracking-[0.3em]">
          <span>Auth: ADMIN_LEVEL_4</span>
          <span className="text-nitro">Buffer: 100%_SYN_OK</span>
        </div>
      </footer>
    </main>
  );
}