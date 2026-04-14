"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FF15",
    emoji: "🍳",
    tagline: "Food & Fitness AI Coach",
    description:
      "Multi-agent AI platform with 9 specialized subagents and 27 tools for cooking, nutrition tracking, and fitness management. Features GPT-4 Vision for meal photo analysis, pantry management, and RAG-powered recipe guidance.",
    tags: ["Next.js 15", "AI SDK 5", "GPT-4o", "Supabase", "RAG", "Multi-Agent"],
    accentColor: "#ff6b35",
    glowClass: "glow-orange",
    gradientClass: "gradient-green-orange",
    github: "https://github.com/stevenhuang8/FF15",
  },
  {
    title: "DegenGPT",
    emoji: "⚽",
    tagline: "AI Sports Betting Advisor",
    description:
      "Three-agent AI platform for sports betting analysis: a web-search advisor, a RAG-powered knowledge assistant, and a Firecrawl MCP web-scraping agent. Real-time odds analysis with reasoning tokens.",
    tags: ["Next.js 15", "AI SDK 5", "GPT-5", "Vectorize", "MCP", "RAG"],
    accentColor: "#00d4ff",
    glowClass: "glow-blue",
    gradientClass: "gradient-blue-pink",
    github: "https://github.com/stevenhuang8/DegenGPT",
  },
  {
    title: "Flaskr",
    emoji: "🎮",
    tagline: "Full-Stack CRUD Blog App",
    description:
      "A full-featured blog application built with Flask following the official tutorial. Includes user authentication, post creation/editing/deletion, SQLite database, and a clean templating system.",
    tags: ["Python", "Flask", "SQLite", "Jinja2", "CRUD", "Auth"],
    accentColor: "#ffd60a",
    glowClass: "glow-yellow",
    gradientClass: "gradient-yellow-green",
    github: "https://github.com/stevenhuang8/CRUD_Flask",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="section-number">02</div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[var(--neon-green)] text-xs tracking-widest mb-2">// SELECTED WORK</p>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)]">
            Projects<span className="text-[var(--neon-orange)]">.</span>
          </h2>
          <p className="text-[var(--text-muted)] mt-3 max-w-xl">
            Hover the cards to flip and see details. Each project lives at the intersection of AI, sports, food, or gaming.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[var(--text-muted)] text-xs mt-10 tracking-wider"
        >
          MORE PROJECTS COMING SOON
          <span className="text-[var(--neon-green)] cursor-blink ml-1">_</span>
        </motion.p>
      </div>
    </section>
  );
}
