"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const phrases = [
  "Building full-stack web apps",
  "Exploring ML model integration",
  "Leading tech communities",
  "Shipping projects that matter",
];

const orbitChips = [
  { label: "Python", angle: 0 },
  { label: "React", angle: 120 },
  { label: "9.48 GPA", angle: 240 },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 25 : 40;

    if (!isDeleting && charIndex === current.length) {
      const t = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((p) => (p + 1) % phrases.length);
      return;
    }
    const t = setTimeout(() => {
      setDisplayText(current.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
      setCharIndex((p) => p + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, phraseIndex]);

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute top-[5%] left-[5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* LEFT */}
          <motion.div className="flex-1 text-center lg:text-left" variants={stagger} initial="hidden" animate="visible">
            {/* Status pill */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                Open to Internships & SDE Roles
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-5 tracking-tight text-white">
              I Build Things That
              <br />
              <span className="text-gradient">Actually Work.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p variants={fadeUp} className="text-gray-400 text-base md:text-lg max-w-xl mb-6 leading-relaxed mx-auto lg:mx-0">
              AI/ML & Data Science Explorer — turning ideas into systems that run in the real world, not just on paper.
            </motion.p>

            {/* Highlight strip */}
            <motion.p variants={fadeUp} className="text-sm text-gray-500 font-medium tracking-wide mb-8 mx-auto lg:mx-0">
              <span className="text-white">9.48 CGPA</span>
              <span className="mx-2 text-gray-600">·</span>
              <span className="text-white">ACM Chapter Chairperson</span>
              <span className="mx-2 text-gray-600">·</span>
              <span className="text-white">7+ Hackathons Organized</span>
            </motion.p>

            {/* Typing */}
            <motion.div variants={fadeUp} className="mb-10 min-h-[48px] flex items-start justify-center lg:justify-start">
              <p className="text-gray-500 text-sm md:text-base font-mono">
                <span className="text-gray-600 mr-2">&gt;</span>
                <span className="text-gray-400">{displayText}</span>
                <span className="inline-block w-[2px] h-4 bg-cyan-400 ml-0.5 align-middle" style={{ animation: "typewriter-blink 0.8s step-end infinite" }} />
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="btn-magnetic group px-7 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold text-sm shadow-[0_0_24px_rgba(124,58,237,0.25)] hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                See My Work
                <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1k0PclNwKItt6miyHDZ3nuqAsOvVDWmGH/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="btn-magnetic px-7 py-3.5 border border-white/15 rounded-full font-medium text-sm text-gray-300 hover:bg-white/[0.04] hover:border-white/25 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start gap-3">
              {[
                { href: "https://github.com/mrincredibletx", label: "GitHub", d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" },
                { href: "http://www.linkedin.com/in/rakesh-bangra-706b41286", label: "LinkedIn", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
                { href: "mailto:contact.bangra@gmail.com", label: "Email", d: "M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3-8 5.7a1.94 1.94 0 0 1-2.06 0L2 7" },
              ].map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"} aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-gray-500 hover:text-white hover:border-cyan-500/25 hover:bg-cyan-500/5 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={s.d} /></svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" as const }}
            className="flex-shrink-0 relative"
          >
            {/* Soft glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl opacity-60" />

            {/* Subtle rotating ring */}
            <motion.div
              className="absolute -inset-3 rounded-full border border-white/[0.04]"
              style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(124,58,237,0.12) 85%, rgba(6,182,212,0.12) 95%, transparent 100%)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Photo */}
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full p-[2px] bg-gradient-to-br from-purple-500/40 via-white/10 to-cyan-500/40">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0F19] p-[2px]">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image src="/hero-profile.jpeg" alt="Rakesh Bangra" fill className="object-cover object-top" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 380px" />
                </div>
              </div>
            </div>

            {/* Orbiting skill chips */}
            {orbitChips.map((chip, i) => (
              <motion.div
                key={chip.label}
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{ width: 0, height: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute px-3 py-1.5 rounded-full text-[11px] font-semibold bg-[#0B0F19]/90 border border-white/[0.08] text-gray-300 shadow-lg whitespace-nowrap backdrop-blur-sm"
                  style={{
                    transform: `rotate(${chip.angle}deg) translateX(${170 + i * 12}px) rotate(-${chip.angle}deg)`,
                  }}
                >
                  {chip.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center p-1.5">
          <motion.div className="w-1 h-1.5 rounded-full bg-cyan-400/60" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
