"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TITLES = ["AI Engineer", "Builder", "Soccer Fan", "Gamer", "Foodie"];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pitch-bg overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--neon-green)]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[var(--neon-orange)]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--neon-blue)]/3 blur-3xl pointer-events-none" />

      {/* Floating emoji decorations */}
      <div className="absolute top-28 right-16 text-5xl float select-none pointer-events-none">⚽</div>
      <div className="absolute top-40 left-16 text-4xl float-delay select-none pointer-events-none">🎮</div>
      <div className="absolute bottom-32 left-24 text-4xl float-delay-2 select-none pointer-events-none">🍜</div>
      <div className="absolute bottom-40 right-28 text-3xl float select-none pointer-events-none">🏆</div>
      <div className="absolute top-1/3 right-8 text-3xl float-delay select-none pointer-events-none">🤖</div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[var(--neon-green)]/30 bg-[var(--neon-green)]/5 text-xs text-[var(--neon-green)] tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] pulse-glow" />
          ONLINE — READY TO BUILD
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-6xl md:text-8xl font-black tracking-tight mb-4"
        >
          <span className="text-[var(--text-primary)]">Steven </span>
          <span className="gradient-green-orange">Huang</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6 h-10"
        >
          <span className="text-[var(--neon-blue)]">{displayed}</span>
          <span className="text-[var(--neon-green)] cursor-blink">_</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-[var(--text-muted)] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building AI-powered products at the intersection of sports, food, and software.
          Turning ideas into shipped products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-[var(--neon-green)] text-[var(--bg-primary)] font-bold text-sm tracking-wider hover:scale-105 transition-transform glow-green"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-[var(--neon-green)]/40 text-[var(--neon-green)] font-bold text-sm tracking-wider hover:bg-[var(--neon-green)]/10 transition-colors"
          >
            GET IN TOUCH
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)]"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="w-0.5 h-6 bg-[var(--neon-green)]/40 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
