"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Shipped", value: "3+", color: "var(--neon-green)" },
  { label: "AI Agents Built", value: "12+", color: "var(--neon-orange)" },
{ label: "Goals Scored", value: "999+", color: "var(--neon-blue)" },
  { label: "Knives Unboxed (CS)", value: "1", color: "var(--neon-pink)" },
];

const skills = [
  {
    category: "Languages",
    color: "var(--neon-green)",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    color: "var(--neon-blue)",
    items: ["React", "Next.js", "Tailwind", "Supabase Auth", "Client/Server Components"],
  },
  {
    category: "Backend",
    color: "var(--neon-orange)",
    items: ["Node.js", "Supabase (Postgres)", "REST APIs", "Django", "SQL"],
  },
  {
    category: "AI & Data",
    color: "var(--neon-pink)",
    items: ["Vectorize", "LangChain", "RAG", "GPT-4 Vision", "GPT-5", "Multi-Agent Systems"],
  },
  {
    category: "Tools",
    color: "var(--neon-yellow)",
    items: ["Git", "Linux", "Firecrawl MCP", "Docker", "VS Code"],
  },
  {
    category: "Concepts",
    color: "var(--neon-green)",
    items: ["Full-Stack Development", "API Design", "Data Modeling", "Observability", "Testing", "Agile", "Scrum"],
  },
];

const interests = ["⚽ Soccer", "🎮 Video Games", "🍔 Food", "🤖 AI / LLMs", "🏀 Basketball", "⚾ Baseball"];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-number" style={{ color: "var(--neon-orange)" }}>03</div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[var(--neon-orange)] text-xs tracking-widest mb-2">// PLAYER INFO</p>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)]">
            About<span className="text-[var(--neon-green)]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Bio + Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-orange)] flex items-center justify-center text-[var(--bg-primary)] font-black text-lg">
                  SH
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Steven Huang</p>
                  <p className="text-xs text-[var(--neon-green)]">AI Engineer &amp; Builder</p>
                </div>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                I build AI-powered products that solve real problems — from coaching you through workouts
                to analyzing your next sports bet. When I&apos;m not coding, I&apos;m on the pitch, in a game,
                or hunting for the next best meal.
              </p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                I specialize in multi-agent architectures, RAG systems, and full-stack Next.js apps
                with the Vercel AI SDK. I love shipping fast and iterating faster.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] mb-6"
            >
              <p className="text-xs text-[var(--neon-orange)] tracking-widest mb-4">// INTERESTS</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-muted)] hover:border-[var(--neon-green)]/50 hover:text-[var(--neon-green)] transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl border bg-[var(--bg-card)] text-center"
                  style={{ borderColor: `${stat.color}30` }}
                >
                  <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Skills */}
          <div>
            {/* Skills — RPG stat sheet */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] h-full"
            >
              <p className="text-xs text-[var(--neon-green)] tracking-widest mb-6">// SKILL TREE</p>
              <div className="space-y-5">
                {skills.map((group) => (
                  <div key={group.category}>
                    <span className="text-[11px] tracking-widest font-semibold" style={{ color: group.color }}>
                      {group.category.toUpperCase()}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full border text-xs"
                          style={{ borderColor: `${group.color}40`, color: "var(--text-muted)" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
